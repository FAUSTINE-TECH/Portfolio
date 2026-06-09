import { Code2, Server, ShieldCheck, Wrench } from 'lucide-react'

const skillGroups = [
  {
    category: 'Développement web',
    icon: Code2,
    skills: ['PHP · Laravel', 'React · Inertia.js', 'HTML · CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'JavaFX'],
    color: 'bordeaux',
  },
  {
    category: 'Systèmes & réseaux',
    icon: Server,
    skills: ['Linux Server', 'Windows Server', 'CCNA · Cisco', 'Industrie 4.0'],
    color: 'gold',
  },
  {
    category: 'Cybersécurité',
    icon: ShieldCheck,
    skills: ['ANSSI · SecNum', 'Prévention & protection', 'Analyse de risques'],
    color: 'bordeaux',
  },
  {
    category: 'Outils & méthodes',
    icon: Wrench,
    skills: ['MySQL', 'Git · GitHub', 'Versionning', 'Méthodes agiles'],
    color: 'gold',
  },
]

export default function Competences() {
  return (
    <section id="competences" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <p className="section-label">Savoir-faire</p>
        <h2 className="section-title">
          Compétences<br />
          <span className="italic text-bordeaux-600">techniques</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.category} className="card group">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                    ${group.color === 'bordeaux'
                      ? 'bg-bordeaux-50 border border-bordeaux-100 text-bordeaux-600'
                      : 'bg-gold-50 border border-gold-100 text-gold-600'
                    }`}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-medium text-bordeaux-900 text-sm">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={group.color === 'bordeaux' ? 'tag-bordeaux' : 'tag'}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bannière langues */}
        <div className="mt-8 bg-gradient-to-r from-bordeaux-900 to-bordeaux-800
                        rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-gold-300 text-xs font-medium tracking-widest uppercase mb-1">Langues</p>
            <p className="text-cream-100 font-serif text-xl">Communication internationale</p>
          </div>
          <div className="flex gap-6">
            {[
              { lang: 'Français', pct: 100 },
              { lang: 'Anglais', pct: 40 },
            ].map((l) => (
              <div key={l.lang} className="text-center">
                <p className="text-cream-200 text-sm font-medium">{l.lang}</p>
                <p className="text-gold-400 text-xs mb-2">{l.level}</p>
                <div className="w-20 h-1 bg-bordeaux-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold-400 to-gold-300 rounded-full"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}