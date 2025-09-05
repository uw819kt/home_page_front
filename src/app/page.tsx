import { Introduction } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main className="relative z-10">
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}