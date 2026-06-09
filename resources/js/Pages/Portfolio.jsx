import Navbar      from '@/Components/Navbar'
import Hero        from '@/Components/Hero'
import Competences from '@/Components/Competences'
import Projets     from '@/Components/Projets'
import Parcours    from '@/Components/Parcours'
import Contact     from '@/Components/Contact'

export default function Portfolio() {
  return (
    <>
      <title>Portfolio — Haïdara Faustine</title>

      <Navbar />
      <main>
        <Hero />
        <Competences />
        <Projets />
        <Parcours />
        <Contact />
      </main>

      <footer className="bg-bordeaux-950 border-t border-bordeaux-800 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-2">
          <p className="text-bordeaux-500 text-xs">
            © {new Date().getFullYear()} Haïdara Faustine · Tous droits réservés
          </p>
          <p className="text-bordeaux-600 text-xs">
            Casablanca · Maroc
          </p>
        </div>
      </footer>
    </>
  )
}