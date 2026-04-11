import Nav from '@/components/Nav'
import WorkExperience from '@/components/sections/WorkExperience'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/Footer'

export default function WorkPage() {
  return (
    <main>
      <Nav />
      <div style={{ paddingTop: '60px' }}>
        <WorkExperience />
      </div>
      <CTA />
      <Footer />
    </main>
  )
}
