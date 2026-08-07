import { useState } from 'react'
import type { FormEvent } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import SectionTitle from './SectionTitle'
import { sendContactEmail } from '../services/emailService'

type ContactState = {
  name: string
  email: string
  message: string
}

const initialState: ContactState = {
  name: '',
  email: '',
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setStatus('loading')
      await sendContactEmail(form)
      setStatus('success')
      setFeedback('Mensagem enviada com sucesso. Em breve entrarei em contato.')
      setForm(initialState)
    } catch (error) {
      setStatus('error')
      setFeedback(error instanceof Error ? error.message : 'Não foi possível enviar no momento.')
    }
  }

  return (
    <section id="contato" className="section-shell">
      <SectionTitle
        eyebrow="Contato"
        title="Vamos conversar sobre oportunidades em dados"
        description="Disponível para posições e projetos em Análise de Dados e Engenharia de Dados."
      />

      <div className="contact-grid">
        <form className="glass-card contact-form" onSubmit={onSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          />

          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            rows={5}
            required
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          />

          <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
            {status === 'loading' ? 'Enviando...' : 'Enviar'}
          </button>

          {feedback ? <p className={`form-feedback ${status}`}>{feedback}</p> : null}
        </form>

        <aside className="glass-card contact-links">
          <h3>Outros canais</h3>
          <a href="https://linkedin.com/in/kauanaltino" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/KauanAltino" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://wa.me/5511991145917" target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="mailto:kauanaltino@gmail.com">
            <FaEnvelope /> kauanaltino@gmail.com
          </a>
        </aside>
      </div>
    </section>
  )
}

