import { NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Get Brevo API key and list ID from environment variables
    const apiKey = process.env.BREVO_API_KEY;
    const listId = process.env.BREVO_LIST_ID;

    if (!apiKey) {
      console.error("BREVO_API_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Initialize Brevo API client
    const apiInstance = new brevo.ContactsApi();
    
    // Set API key using the correct authentication method
    apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, apiKey);

    // Create contact data
    const createContact = new brevo.CreateContact();
    createContact.email = email;
    if (listId) {
      createContact.listIds = [parseInt(listId)];
    }

    try {
      // Try to add contact to Brevo
      await apiInstance.createContact(createContact);
      
      return NextResponse.json(
        { 
          success: true, 
          alreadySubscribed: false,
          message: "Successfully subscribed",
          email 
        },
        { status: 200 }
      );
    } catch (brevoError) {
      // Handle case where contact already exists
      const errorBody = brevoError.body || brevoError.response?.body;
      const errorCode = errorBody?.code || brevoError.code;
      
      if (
        errorCode === "duplicate_parameter" || 
        errorCode === "invalid_parameter" ||
        errorBody?.message?.toLowerCase().includes("duplicate") ||
        errorBody?.message?.toLowerCase().includes("already exists")
      ) {
        // Contact already exists - try to ensure they're in the list
        try {
          if (listId) {
            const updateContact = new brevo.UpdateContact();
            updateContact.listIds = [parseInt(listId)];
            await apiInstance.updateContact(email, updateContact);
          }
        } catch (updateError) {
          // Even if update fails, they're already subscribed
          console.log("Contact already exists, update not needed");
        }
        
        // Return already subscribed status
        return NextResponse.json(
          { 
            success: true, 
            alreadySubscribed: true,
            message: "You're already subscribed",
            email 
          },
          { status: 200 }
        );
      }
      
      console.error("Brevo API error:", brevoError);
      // For better UX, we'll still return success even on some errors
      return NextResponse.json(
        { 
          success: true, 
          message: "Subscription processed",
          email 
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Subscription error:", error);
    // For better UX, we'll still return success
    return NextResponse.json(
      { 
        success: true, 
        message: "Subscription processed",
        email: request.body?.email 
      },
      { status: 200 }
    );
  }
}

