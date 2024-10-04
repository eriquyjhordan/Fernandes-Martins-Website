import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <div className="flex flex-1 w-full">
      <div className="w-full">
        <Hero />
        <Services />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
