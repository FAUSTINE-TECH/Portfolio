import { useState } from 'react'
import { useForm } from '@inertiajs/react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const { data, setData, post, processing, errors, reset } = useForm({
    name:    '',
    email:   '',
    subject: '',
    message: '',
  })

  const submit = (e) => {
    e.preventDefault()
    post('/contact', {
      preserveScroll: true,
      onSuccess: () => {
        setSent(true)
        reset()
      },
    })
  }

  return (
    <section id="contact" className="py-28 bg-bordeaux-950 relative overflow-hidden">

      {/* Fond décoratif */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full
                      bg-gradient-to-bl from-bordeaux-800/60 to-transparent blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full
                      bg-gradient-to-tr from-gold-900/30 to-transparent blur-3xl -z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <p className="text-xs font-medium tracking-widest uppercase text-gold-400 mb-2">
          Disponible
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream-100 leading-tight mb-4">
          Travaillons<br />
          <span className="italic text-gold-400">ensemble</span>
        </h2>
        {/*<p className="text-bordeaux-300 font-light mb-16 max-w-md">
          Je suis à la recherche d'un stage ou d'une première opportunité professionnelle.
          N'hésitez pas à me contacter.
        </p>*/}

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Infos contact */}
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: Mail,    label: 'Email',     value: 'f.sandrahaidara@gmail.com', href: 'mailto:f.sandrahaidara@gmail.com' },
              { icon: Phone,   label: 'Téléphone', value: '0657 740 403',              href: 'tel:0657740403' },
              { icon: MapPin,  label: 'Localité',  value: 'Casablanca · Maroc',        href: null },
            ].map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-bordeaux-800 border border-bordeaux-700
                                  flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-bordeaux-400 mb-0.5">{item.label}</p>
                    <p className="text-cream-200 text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              )

              return item.href ? (
                <a key={item.label} href={item.href}
                   className="block hover:opacity-80 transition-opacity">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4
                              bg-bordeaux-900/50 border border-bordeaux-800 rounded-2xl p-12 text-center">
                <CheckCircle size={40} className="text-gold-400" />
                <h3 className="font-serif text-2xl text-cream-100">Message envoyé !</h3>
                <p className="text-bordeaux-300 text-sm">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-sm text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-bordeaux-400 mb-2">Nom complet</label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => setData('name', e.target.value)}
                      placeholder="Votre nom"
                      className="input-field bg-bordeaux-900/50 border-bordeaux-700
                                 text-cream-100 placeholder-bordeaux-500
                                 focus:border-gold-500 focus:ring-gold-900"
                      required
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-bordeaux-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                      placeholder="votre@email.com"
                      className="input-field bg-bordeaux-900/50 border-bordeaux-700
                                 text-cream-100 placeholder-bordeaux-500
                                 focus:border-gold-500 focus:ring-gold-900"
                      required
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-bordeaux-400 mb-2">Sujet</label>
                  <input
                    type="text"
                    value={data.subject}
                    onChange={(e) => setData('subject', e.target.value)}
                    placeholder="Objet de votre message"
                    className="input-field bg-bordeaux-900/50 border-bordeaux-700
                               text-cream-100 placeholder-bordeaux-500
                               focus:border-gold-500 focus:ring-gold-900"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-bordeaux-400 mb-2">Message</label>
                  <textarea
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                    placeholder="Décrivez votre projet ou opportunité..."
                    rows={5}
                    className="input-field bg-bordeaux-900/50 border-bordeaux-700
                               text-cream-100 placeholder-bordeaux-500
                               focus:border-gold-500 focus:ring-gold-900 resize-none"
                    required
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full flex items-center justify-center gap-2 py-3.5
                             bg-gradient-to-r from-gold-600 to-gold-500 text-bordeaux-950
                             font-medium text-sm rounded-xl
                             hover:from-gold-500 hover:to-gold-400
                             disabled:opacity-50 disabled:cursor-not-allowed
                             transition-all duration-200 hover:-translate-y-0.5"
                >
                  {processing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-bordeaux-700 border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
