import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorkersSection } from "@/components/workers-section"
import { EmployersSection } from "@/components/employers-section"
import { ChatSection } from "@/components/chat-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WorkersSection />
        <EmployersSection />
        <ChatSection />
        <WhyChooseSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
