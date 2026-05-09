import { Hero } from '@/components/blocks/Hero';
import { Benefits } from '@/components/blocks/Benefits';
import { ShowcaseCarousel } from '@/components/ShowcaseCarousel';
import { SocialProof } from '@/components/blocks/SocialProof';
import { Requirements } from '@/components/blocks/Requirements';
import { Bonuses } from '@/components/blocks/Bonuses';
import { Plans } from '@/components/blocks/Plans';
import { ExpertSection } from '@/components/ExpertSection';
import { Guarantee } from '@/components/blocks/Guarantee';
import { FAQ } from '@/components/blocks/FAQ';
import { Footer } from '@/components/blocks/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden bg-background">
      <Hero />
      <Benefits />
      <ShowcaseCarousel />
      <SocialProof />
      <Requirements />
      <Bonuses />
      <Plans />
      <ExpertSection />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}
