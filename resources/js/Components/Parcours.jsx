import { Briefcase, GraduationCap, Award } from 'lucide-react'

const experiences = [
  {
    period: 'Juil. – Sep. 2025',
    role: 'Stage',
    company: 'FOULISA',
    location: 'Ouagadougou, Burkina Faso',
    current: true,
  },
  {
    period: 'Avr. – Juin 2025',
    role: 'Stage pratique',
    company: '3D Smart Factory',
    location: 'Mohammedia, Maroc',
  },
  {
    period: 'Juil. – Août 2024',
    role: 'Stage en développement web',
    company: 'SEOCOM',
    location: 'Marrakech, Maroc',
  },
]

const formations = [
  {
    period: '2025 – 2026',
    degree: 'Licence 3 — Ingénierie Intelligente des Systèmes Informatiques',
    school: 'SUPMTI · Meknès',
    icon: GraduationCap,
    current: true,
  },
  {
    period: '2024 – 2025',
    degree: 'Licence 2 — Ingénierie Intelligente des Systèmes Informatiques',
    school: 'SUPMTI · Meknès',
    icon: GraduationCap,
  },
  {
    period: '2023 – 2024',
    degree: 'Licence 1 — Ingénierie Intelligente des Systèmes Informatiques',
    school: 'SUPMTI · Meknès',
    icon: GraduationCap,
  },
  {
    period: 'Certification',
    degree: 'Cybersécurité — 4 modules MOOC',
    school: 'SecNum Académie · ANSSI',
    icon: Award,
    highlight: true,
  },
  {
    period: '2021 – 2022',
    degree: 'Baccalauréat Scientifique',
    school: 'GSSC',
    icon: GraduationCap,
  },
]

export default function Parcours() {
  return (
    <>
      {/* EXPÉRIENCE */}
      <section id="experience" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <p className="section-label">Parcours</p>
          <h2 className="section-title">
            Expériences<br />
            <span className="italic text-bordeaux-600">professionnelles</span>
          </h2>

          <div className="relative pl-8">
            {/* Ligne verticale */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-bordeaux-200 via-gold-300 to-bordeaux-200" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">
                  {/* Point */}
                  <div className={`absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full border-2
                    ${exp.current
                      ? 'bg-gold-400 border-gold-400 shadow-[0_0_0_4px_rgba(212,148,24,0.15)]'
                      : 'bg-white border-bordeaux-300'
                    }`}
                  />

                  <div className="flex items-start gap-6 group">
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gold-600 mb-1">{exp.period}</p>
                      <h3 className="text-lg font-medium text-bordeaux-950">{exp.role}</h3>
                      <p className="text-sm text-bordeaux-500 mt-0.5">
                        {exp.company} · {exp.location}
                      </p>
                    </div>

                    {exp.current && (
                      <span className="flex-shrink-0 text-xs bg-gold-50 text-gold-700
                                       border border-gold-200 rounded-full px-3 py-1 font-medium">
                        Récent
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FORMATION */}
      {/*<section id="formation" className="py-28 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">

          <p className="section-label">Études</p>
          <h2 className="section-title">
            Formation<br />
            <span className="italic text-bordeaux-600">académique</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formations.map((f, i) => {
              const Icon = f.icon
              return (
                <div
                  key={i}
                  className={`card relative overflow-hidden
                    ${f.highlight ? 'border-gold-300 bg-gradient-to-br from-gold-50 to-white' : ''}
                    ${f.current  ? 'border-bordeaux-200' : ''}
                  `}
                >
                  

                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4
                    ${f.highlight
                      ? 'bg-gold-100 text-gold-600'
                      : 'bg-bordeaux-50 text-bordeaux-500'
                    }`}
                  >
                    <Icon size={16} />
                  </div>

                  <p className={`text-xs font-medium mb-2 ${f.highlight ? 'text-gold-600' : 'text-bordeaux-400'}`}>
                    {f.period}
                  </p>
                  <p className="font-medium text-bordeaux-900 text-sm leading-snug mb-1">
                    {f.degree}
                  </p>
                  <p className="text-xs text-bordeaux-400">{f.school}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>*/}
    </>
  )
}
