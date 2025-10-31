import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, details } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: "nguyentrung060503@gmail.com",
      subject: `New contact from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Portfolio Contact</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td align="center" style="padding: 40px 0;">
                        <table role="presentation" style="width: 600px; max-width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            <!-- Header -->
                            <tr>
                                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                                        New Contact Message
                                    </h1>
                                    <p style="margin: 8px 0 0 0; color: #e0e7ff; font-size: 14px;">
                                        Someone reached out through your portfolio
                                    </p>
                                </td>
                            </tr>
                            
                            <!-- Content -->
                            <tr>
                                <td style="padding: 40px 30px;">
                                    <p style="margin: 0 0 24px 0; color: #374151; font-size: 16px; line-height: 1.5;">
                                        You have received a new message from your portfolio website:
                                    </p>
                                    
                                    <!-- Contact Info Cards -->
                                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                        <tr>
                                            <td style="padding: 16px; background-color: #f9fafb; border-left: 4px solid #667eea; margin-bottom: 12px;">
                                                <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Name</p>
                                                <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 500;">${firstName} ${lastName}</p>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                        <tr>
                                            <td style="padding: 16px; background-color: #f9fafb; border-left: 4px solid #667eea; margin-bottom: 12px;">
                                                <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</p>
                                                <p style="margin: 0;">
                                                    <a href="mailto:${email}" style="color: #667eea; font-size: 16px; text-decoration: none; font-weight: 500;">${email}</a>
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                        <tr>
                                            <td style="padding: 16px; background-color: #f9fafb; border-left: 4px solid #667eea; margin-bottom: 12px;">
                                                <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Phone</p>
                                                <p style="margin: 0;">
                                                    <a href="tel:${phone}" style="color: #111827; font-size: 16px; text-decoration: none; font-weight: 500;">${phone}</a>
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <!-- Message Box -->
                                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 24px;">
                                        <tr>
                                            <td style="padding: 20px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
                                                <p style="margin: 0 0 8px 0; color: #92400e; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Message</p>
                                                <p style="margin: 0; color: #1f2937; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${details}</p>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <!-- CTA Button -->
                                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 32px;">
                                        <tr>
                                            <td align="center">
                                                <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 6px rgba(102, 126, 234, 0.25);">
                                                    Reply to ${firstName}
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td style="padding: 24px 30px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
                                    <p style="margin: 0; color: #6b7280; font-size: 13px; text-align: center; line-height: 1.5;">
                                        This email was sent from your portfolio contact form<br/>
                                        <span style="color: #9ca3af;">Received on ${new Date().toLocaleString('en-US', { 
                                            weekday: 'long', 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}</span>
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
