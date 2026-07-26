# Setup Guide

Before deploying the project, please configure your own credentials and services. All existing GaiaSpace-related API keys, credentials, and service access will be revoked as part of the handover.

## 1. Environment Variables

Create a `.env.local` file (or copy `.env.example`) and replace all placeholder values with your own credentials.

```env
RESEND_API_KEY=

CONTACT_FROM_EMAIL=noreply@yourdomain.com
CONTACT_TO_EMAIL=your@email.com

ZOHO_SMTP_HOST=smtp.zoho.in
ZOHO_SMTP_PORT=465
ZOHO_SMTP_USER=you@yourdomain.com
ZOHO_SMTP_PASS=your-app-specific-password

MAINTENANCE_MODE=true
```

### Required Configuration

* **RESEND_API_KEY** – Generate a new API key from your own Resend account.
* **CONTACT_FROM_EMAIL** – The email address used to send outgoing emails.
* **CONTACT_TO_EMAIL** – The inbox where contact form submissions will be delivered.
* **ZOHO_SMTP_USER** and **ZOHO_SMTP_PASS** – Configure these with your own Zoho Mail account and an app-specific password.
* **MAINTENANCE_MODE** – Set to `false` when you are ready to make the application publicly accessible.

## 2. Email Service

The email functionality must be configured using your own SMTP credentials and/or Resend account. Verify that:

* Contact form submissions are delivered successfully.
* Outgoing emails are sent from your configured domain.
* SMTP authentication is working correctly.

Please test the email flow after completing the configuration.

## 3. Deployment

Once all environment variables have been configured:

1. Create a new GitHub repository and push the project.
2. Import the repository into Vercel.
3. Add the same environment variables to your Vercel project.
4. Redeploy the application and verify that all functionality works as expected.

