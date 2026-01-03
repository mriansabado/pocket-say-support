import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check if API key is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return res.status(500).json({ 
        error: 'Server configuration error',
        details: 'RESEND_API_KEY environment variable is missing'
      });
    }

    // Initialize Resend inside the handler
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'PocketSay Support <onboarding@resend.dev>', // Test domain - only sends to account owner
      to: ['mriansabado@gmail.com'], // Using your account email for now (test domain limitation)
      replyTo: 'maunadigitalcontact@gmail.com', // Replies will go to your business email
      subject: `Contact Form: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2));
      return res.status(500).json({ 
        error: 'Failed to send email',
        details: error.message || JSON.stringify(error)
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : String(error);
    console.error('Error stack:', errorStack);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: errorMessage
    });
  }
}

