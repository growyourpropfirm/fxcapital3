# Brevo Integration Setup Guide

This project uses Brevo (formerly Sendinblue) for email subscription management.

## Setup Instructions

### 1. Get Your Brevo API Key

1. Sign up or log in to [Brevo](https://www.brevo.com/)
2. Go to [Settings > API Keys](https://app.brevo.com/settings/keys/api)
3. Create a new API key or copy an existing one
4. The API key should look like: `xkeysib-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxx`

### 2. Get Your Brevo List ID

1. Go to [Contacts > Lists](https://app.brevo.com/lists) in your Brevo dashboard
2. Create a new list or select an existing one
3. The List ID is the number in the URL when you view a list
   - Example: If the URL is `https://app.brevo.com/lists/123`, then the List ID is `123`

### 3. Configure Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following variables:

```env
BREVO_API_KEY=your_brevo_api_key_here
BREVO_LIST_ID=your_brevo_list_id_here
```

3. Replace `your_brevo_api_key_here` with your actual API key
4. Replace `your_brevo_list_id_here` with your actual list ID (just the number, no quotes)

### 4. Example `.env.local` file

```env
BREVO_API_KEY=xkeysib-abc123def456ghi789jkl012mno345pqr678stu901vwx234yz5678901234567890-abc123def456
BREVO_LIST_ID=5
```

## How It Works

- When users submit the email form on the Hero section or Final CTA section, the email is sent to the Brevo API
- The contact is added to your specified Brevo list
- Users are then redirected to the `/subscribe` success page
- If a contact already exists, they are updated and added to the list

## Testing

1. Make sure your `.env.local` file is configured correctly
2. Start your development server: `npm run dev`
3. Submit a test email through one of the forms
4. Check your Brevo dashboard to verify the contact was added

## Troubleshooting

- **"Server configuration error"**: Make sure `BREVO_API_KEY` is set in `.env.local`
- **Contact not appearing in list**: Verify the `BREVO_LIST_ID` is correct
- **API errors**: Check the server console logs for detailed error messages

## Security Notes

- Never commit `.env.local` to version control (it's already in `.gitignore`)
- Keep your API key secure and don't share it publicly
- For production, set these environment variables in your hosting platform (Vercel, Netlify, etc.)

