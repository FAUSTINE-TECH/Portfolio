import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'Dilink.app',
    description: 'Plateforme web développée lors de mon stage chez FOULISA à Ouagadougou. Contribution au développement backend de cette application disponible en ligne.',
    stack: ['Laravel', 'MySQL'],
    type: 'Stage · FOULISA',
    year: '2025',
    url: 'https://dilink.app',
  },
  {
    num: '02',
    title: 'Plateforme de gestion de notes',
    description: 'Application web complète permettant la saisie, le calcul automatique des moyennes et la consultation des résultats académiques.',
    stack: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    type: 'Application web',
    year: '2025',
  },
  {
    num: '03',
    title: "Plateforme d'annonces publicitaires",
    description: "Système complet de publication et gestion d'annonces en ligne avec tableau de bord d'administration et interface responsive.",
    stack: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    type: 'Application web',
    year: '2025',
  },
  {
  num: '04',
  title: 'Plateforme de location de voiture',
  description: 'Application web permettant la gestion et la réservation de véhicules en ligne avec interface utilisateur intuitive et système de gestion des disponibilités.',
  stack: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
  type: 'Application web',
  year: '2024',
},
]

export default function Projets() {
  return (
    <section id="projets" className="py-28 bg-cream-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">Réalisations</p>
        <h2 className="section-title">
          Mes<br />
          <span className="italic text-bordeaux-600">Projets</span>
        </h2>
        <div className="space-y-4">
          {projects.map((p) => (
            <div
              key={p.num}
              className="group bg-white border border-cream-300 rounded-2xl p-8 transition-all duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-bordeaux-100/50"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-xs text-gold-500 font-medium">{p.num}</span>
                    <span className="tag">{p.type}</span>
                    <span className="text-xs text-bordeaux-300">{p.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-bordeaux-950 mb-3 leading-tight">{p.title}</h3>
                  <p className="text-bordeaux-500 text-sm leading-relaxed mb-5 max-w-2xl">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="tag-bordeaux">{s}</span>
                    ))}
                  </div>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-xs text-gold-600 hover:text-gold-700 font-medium transition-colors underline underline-offset-4">
                      Voir le site <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border border-cream-300 flex items-center justify-center text-bordeaux-300 transition-all duration-300 group-hover:bg-bordeaux-900 group-hover:border-bordeaux-900 group-hover:text-gold-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}