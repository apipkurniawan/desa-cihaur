import { AnnouncementsSection } from "./AnnouncementsSection";
import { BudgetTransparency } from "./BudgetTransparency";
import { ContactSection } from "./ContactSection";
import { EventTimeline } from "./EventTimeline";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { NewsSection } from "./NewsSection";
import { PotentialsSection } from "./PotentialsSection";
import { ProfileSection } from "./ProfileSection";
import { ServicesSection } from "./ServicesSection";
import { StaffSection } from "./StaffSection";
import { StatisticsSection } from "./StatisticsSection";

export function HomePage() {
  return (
    <main className="min-h-screen bg-app-background">
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <AnnouncementsSection />
      <EventTimeline />
      <ProfileSection />
      <PotentialsSection />
      <StaffSection />
      <BudgetTransparency />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
