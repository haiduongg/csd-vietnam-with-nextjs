import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Hero from '@/components/home/Hero';
import PopularProjects from '@/components/home/PopularProjects';
import ButtonScroolToTop from '@/components/ButtonScroolToTop';
import WhyChooseCSD from '@/components/home/WhyChooseCSD';
import CustomerReview from '@/components/home/CustomerReview';
import HowDoWeWork from '@/components/home/HowDoWeWork';
import LastNews from '@/components/home/LastNews';
import SocialFloatButton from '@/components/SocialFloatButton';

async function getProjectsData() {
  try {
    const res = await fetch(`https://api-csd-vietnam.onrender.com/projects`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
}

export default async function HomePage() {
  const dataProjects = await getProjectsData();

  return (
    <div className='page container'>
      <section className='pt-[50px] lg:pt-[100px]'>
        <Hero />
      </section>
      <section>
        <PopularProjects data={dataProjects} />
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
