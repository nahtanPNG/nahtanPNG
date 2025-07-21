'use client';

import { useState } from 'react';
import Card from '@/app/components/Card';
import {
  PaperPlaneTiltIcon,
  CheckIcon,
  XCircleIcon,
} from '@phosphor-icons/react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Resetar o estado após 5 segundos
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(data.error || 'Erro ao enviar mensagem');
      }
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="card-glass p-8 text-center">
        <div className="mb-4">
          <CheckIcon size={48} className="text-green-500 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold mb-2 pixel-font">
          Mensagem enviada com sucesso!
        </h3>
        <p className="text-muted-foreground">
          Recebi sua mensagem e responderei o mais breve possível. Obrigado pelo
          contato!
        </p>
        <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-sm text-green-600 dark:text-green-400">
            Você também pode me encontrar no{' '}
            <a
              href="https://www.linkedin.com/in/nathanferreiradev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              LinkedIn
            </a>{' '}
            ou{' '}
            <a
              href="https://discord.com/users/457725135940616202"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Discord
            </a>
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="card-glass p-8">
      <h2 className="text-2xl font-bold mb-6 pixel-font">Envie uma mensagem</h2>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
          <XCircleIcon size={20} className="text-red-500 flex-shrink-0" />
          <div>
            <p className="text-red-600 dark:text-red-400 text-sm font-medium">
              Ops! Algo deu errado
            </p>
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nome*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Sobre o que você gostaria de conversar?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Mensagem*
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            rows={6}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Conte-me mais sobre seu projeto ou o que está pensando..."
          />
        </div>

        <div className="flex items-end justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <PaperPlaneTiltIcon size={20} />
                Enviar mensagem
              </>
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Ao enviar esta mensagem, você concorda que eu possa responder usando o
          email fornecido.
          <br />
          Seus dados não serão compartilhados com terceiros.
        </p>
      </div>
    </Card>
  );
}
