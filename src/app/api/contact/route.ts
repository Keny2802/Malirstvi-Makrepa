import {
  Resend
} from "resend";
import {
  NextResponse
} from "next/server";
import {
  ContactFormSchema
} from "@/app/lib/validation";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend(`re_bywrbmi3_GVnR9yvfEn4tG8tCjwkFUjw1`);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ errors: "Něco se nepovedlo." }, { status: 400 });
    };

    const { name, email, phone, emailSubject, emailMessage } = parsed.data;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      // to: `${process.env.MY_EMAIL}`,
      to: "info@malirstvi-ostrava.cz",
      // to: "info.modernizujme@gmail.com",
      subject: emailSubject || "Nová zpráva z webu malirstvi-ostrava.cz",
      html: `
        <div class="bg-black/30">
            <p>Jméno: ${name}</p>
            <p>Email: ${email}</p>
            <p>Telefonní číslo: ${phone?.trim() || "-"}</p>
            <p>Zpráva: ${emailMessage}</p>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Chyba při odesílání:", err);
    return NextResponse.json({ errors: "Nepodařilo se odeslat email." }, { status: 500 });
  }
}