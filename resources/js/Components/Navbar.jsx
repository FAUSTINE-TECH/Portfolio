import { useState, useEffect } from 'react'
import { Link } from '@inertiajs/react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets',     href: '#projets' },
  { label: 'Expérience',  href: '#experience' },
  
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md border-b border-cream-300 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => scrollTo(e, 'body')}
          className="font-serif text-xl text-bordeaux-900 hover:text-bordeaux-700 transition-colors"
        >
          HF
          <span className="text-gold-500">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="text-sm text-bordeaux-600 hover:text-bordeaux-900 transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, '#contact')}
          className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
        >
          Me contacter
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-bordeaux-800"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream-50 border-b border-cream-300 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href)}
                  className="text-sm font-medium text-bordeaux-800 hover:text-gold-600 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="btn-primary mt-6 w-full justify-center"
          >
            Me contacter
          </a>
        </div>
      )}
    </nav>
  )
}
