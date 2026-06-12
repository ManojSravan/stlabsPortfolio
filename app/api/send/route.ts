import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, company, email, budget, message } = await request.json();

        // 1. Notify you
        const internalEmail = await resend.emails.send({
            from: `'hello@sravantechlabs.com'}`,
            to: ['hello@sravantechlabs.com'],
            subject: `New inquiry from ${name}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
         <p><strong>Company:</strong> ${company}</p>
         <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        // 2. Auto-reply to them
        const userEmail = await resend.emails.send({
            from: 'Manoj Sravan, <hello@sravantechlabs.com>',
            to: [email],
            subject: 'Got your message.',
            html: `
        <p>Hey ${name},</p>
        <p>Thanks for reaching out. We've received your message and will get back to you within 24 hours.</p>
        <p>Talk soon,<br/>Manoj Sravan, </br> Founder, Sravan Tech Labs</p>
      `,
        });

        return Response.json({ success: true, userEmail, internalEmail });

    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}