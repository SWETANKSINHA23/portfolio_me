import { Suspense, lazy } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";

// Lazy load heavy sections
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const AchievementsSection = lazy(() => import("@/components/AchievementsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const LoadingFallback = () => (
  <div className="w-full h-[50vh] flex items-center justify-center text-muted-foreground">
    Loading...
  </div>
);

const Index = () => {
  return (
    <Layout>
      {/* HeroSection is critical for LCP, so keep it eager loaded */}
      <HeroSection />

      <Suspense fallback={<LoadingFallback />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <ExperienceSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <SkillsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <AchievementsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <ContactSection />
      </Suspense>
    </Layout>
  );
};

export default Index;
