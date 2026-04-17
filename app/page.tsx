import { Hero2 } from '@/components/hero2-header';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { HomeSections } from '@/components/home-sections';

export default function Hero() {
  return (
    <>
      <SiteHeader />
      <section>
        <Hero2 />
      </section>
      <section>
        <HomeSections />
      </section>
      <SiteFooter />
    </>
  );
}