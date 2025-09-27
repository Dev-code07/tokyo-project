'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { pills, bottomTabs } from './data/pills';

// All dynamic imports (client-side only)
const Hero = dynamic(() => import("./components/Hero"));
const SwiperGallery = dynamic(() => import("./components/SwiperGallery"));
const AtTokyo = dynamic(() => import("./components/AtTokyo"));
const Webelieve = dynamic(() => import("./components/Webelieve"));
const HowItWorks = dynamic(() => import("./components/HowItWork/HowItWork"));
const ModulesSection = dynamic(() => import("./components/ModulesSection"));
const UnderDevelopmentSlider = dynamic(() => import("./components/UnderDevelopmentSection"));
const AICharacterSection = dynamic(() => import("./components/AICharacterSection"));
const FaqSection = dynamic(() => import("./components/FaqSection"));
const NewAiAnimate = dynamic(() => import("./components/NewAiAnimate"));
const MobilePillTabs = dynamic(() => import("./components/MobilePillTabs"));
const Section = dynamic(() => import("./components/ui/Section"));
const HeroNew = dynamic(() => import("./components/HerNew"));
const Language = dynamic(() => import("./components/language"));

export default function ClientHome() {
  useEffect(() => {
    // Only runs on client
  }, []);

  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your description here" />
      </Head>

      <main>
        <Section>
          <Hero />
        </Section>

        <Section>
          <section className="bg-black sm:py-20 py-16" id="modules">
            <ModulesSection />
            <UnderDevelopmentSlider />
          </section>
        </Section>

        <Section>
          <SwiperGallery />
        </Section>

        <Section>
          <AtTokyo />
        </Section>

        <NewAiAnimate />

        <MobilePillTabs pills={pills} bottomTabs={bottomTabs} />

        <Section>
          <HeroNew />
        </Section>

        <Section>
          <HowItWorks />
        </Section>

        <Section>
          <Webelieve />
        </Section>

        <Section>
          <AICharacterSection />
        </Section>

        <Section>
          <Language />
        </Section>

        <Section>
          <FaqSection />
        </Section>
      </main>
    </>
  );
}
