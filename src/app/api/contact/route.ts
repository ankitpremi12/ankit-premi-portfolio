import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // If you have nodemailer configured, use it here
    // For now, just log and return success
    console.log("Contact form submission:", data);

    // Optional: use nodemailer
    // const transporter = nodemailer.createTransport({ ... });
    // await transporter.sendMail({ ... });

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 400 });
  }
}
