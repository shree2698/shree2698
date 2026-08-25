"use server";

export interface ContactState {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export type ContactFormState = ContactState;

export async function sendContactMessage(
  prevState: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const website = (formData.get("website") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();
  const honeypot = formData.get("company_hp") as string;

  // Spam detection (honeypot field)
  if (honeypot) {
    return {
      success: true,
      message: "Your message has been received.",
    };
  }

  // Server-side validation
  const errors: Record<string, string[]> = {};
  if (!name || name.length < 2) {
    errors.name = ["Name must be at least 2 characters long."];
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Please provide a valid email address."];
  }
  if (!message || message.length < 10) {
    errors.message = ["Message must be at least 10 characters long."];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted errors.",
      errors,
    };
  }

  // Attempt Resend API delivery if RESEND_API_KEY environment variable exists
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.CONTACT_EMAIL || "tanushreemahato.261298@gmail.com";

  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: `Portfolio Inquiry from ${name}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #1e293b;">
              <h2 style="color: #0284c7; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">New Portfolio Contact Message</h2>
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
              ${website ? `<p><strong>Website:</strong> <a href="${escapeHtml(website)}" target="_blank">${escapeHtml(website)}</a></p>` : ""}
              <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
              </div>
              <p style="font-size: 12px; color: #94a3b8; margin-top: 30px;">Sent from Tanushree Mahato Portfolio Website</p>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Resend delivery failed:", errorData);
      }
    } catch (err) {
      console.error("Failed to send contact email via Resend:", err);
    }
  }

  return {
    success: true,
    message: "Thank you for reaching out! Your message has been sent successfully. I will get back to you within 24 hours.",
  };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
