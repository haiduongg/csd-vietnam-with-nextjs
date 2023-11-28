import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import PopularProjects from '@/components/home/PopularProjects';
import ButtonScroolToTop from '@/components/ButtonScroolToTop';
import WhyChooseCSD from '@/components/home/WhyChooseCSD';
import CustomerReview from '@/components/home/CustomerReview';
import HowDoWeWork from '@/components/home/HowDoWeWork';
import LastNews from '@/components/home/LastNews';
import SocialFloatButton from '@/components/SocialFloatButton';


export default function Home() {
  return (
    <div className='page container'>
      <section className='pt-[50px] lg:pt-[100px]'>
        <Hero />
      </section>
      <section>
        <PopularProjects />
      </section>
      <section>
        <WhyChooseCSD />
      </section>
      <section>
        <CustomerReview />
      </section>
      <section>
        <HowDoWeWork />
      </section>
      <section>
        <LastNews />
      </section>
    </div>
  );
}
