import {
    z
} from "zod";

export const ContactFormSchema = z.object({
    name: z.string().trim().min(2, "Vaše jméno, nesmí být kratší než 2 znaky."),
    email: z.string().trim().email("Neplatný email."),
    phone: z.string().trim().optional(),
    emailSubject: z.string().trim().optional(),
    emailMessage: z.string().trim().min(10, "Vaše zpráva, je kratší než 10 znaků.")
});

export type contactFormProps = z.infer<typeof ContactFormSchema>;