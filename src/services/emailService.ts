import emailjs from '@emailjs/browser'

type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(payload: ContactPayload) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'Configure as variáveis VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID e VITE_EMAILJS_PUBLIC_KEY no arquivo .env.',
    )
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: payload.name,
      from_email: payload.email,
      message: payload.message,
      to_name: 'Kauan Altino Gianesini',
    },
    { publicKey },
  )
}
