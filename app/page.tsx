import { AutomationShowcase } from "@/app/components/AutomationShowcase";
import { BookMeeting } from "@/app/components/BookMeeting";
import { ChatbotService } from "@/app/components/ChatbotService";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Testimonials } from "@/app/components/Testimonials";

export default function Home() {

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <AutomationShowcase />

        <ChatbotService />
        <Testimonials />
        <BookMeeting />
      </main>

      <Footer />
    </div>
  );
}
