import { ArrowDown, ShieldCheck } from 'lucide-react'

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-gold-100/60 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-bordeaux-100/40 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#5c1a30 1px, transparent 1px), linear-gradient(90deg, #5c1a30 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 text-gold-700 text-xs font-medium px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            Ouverte pour toutes collaborations
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-up">
            Haïdara<br />
            <span className="text-bordeaux-700 italic">Faustine</span>
          </h1>

          <div className="divider mb-6" />

          <p className="text-bordeaux-600 text-lg font-light leading-relaxed mb-3">
            Étudiante en ingénierie des systèmes informatiques
          </p>
          <p className="text-bordeaux-500 text-base font-light leading-relaxed mb-10">
            Passionnée par le développement web et la cybersécurité,
            je crée des solutions concrètes.
          </p>

          <div className="flex flex-wrap gap-3">
            
            <button onClick={() => scrollTo('#projets')} className="btn-outline">Voir mes projets</button>
          </div>

          
        </div>

        {/* Carte profil */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-gradient-to-br from-bordeaux-200 to-gold-200 rounded-3xl -z-10" />
            <div className="w-72 bg-white border border-cream-300 rounded-3xl p-8 shadow-xl shadow-bordeaux-100">

              {/* Photo */}
              <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-gold-200 ring-offset-2">
                <img
                  src="/images/faustine.jpg"
                  alt="Haïdara Faustine"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h2 className="text-center font-serif text-xl text-bordeaux-950 mb-1">Haïdara Faustine</h2>
              <p className="text-center text-xs text-bordeaux-400 mb-6">Casablanca · Maroc</p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { n: '3',  label: 'Stages' },
                  { n: '4+', label: 'Projets' },
                  { n: 'M1', label: 'Niveau' },
                ].map((s) => (
                  <div key={s.label} className="text-center bg-cream-100 rounded-xl py-3">
                    <p className="font-serif text-lg text-bordeaux-800">{s.n}</p>
                    <p className="text-xs text-bordeaux-400">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 bg-gold-50 border border-gold-200 rounded-xl p-3">
                <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={14} className="text-gold-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gold-800">Certifiée ANSSI</p>
                  <p className="text-xs text-gold-600">SecNum · 4 modules</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#competences')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-bordeaux-400 hover:text-bordeaux-700 transition-colors"
      >
        <span>Défiler</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  )
}