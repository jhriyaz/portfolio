
import Projects from '@/components/Projects/Projects';
import AboutSection from '@/components/about/AboutSection';
import Banner from '@/components/banner/Banner';
import Skills from '@/components/skills/Skills';


const HomePage = () => {
  return (
    <div>
<Banner></Banner>
<AboutSection></AboutSection>
<Projects></Projects>
<Skills></Skills>
    </div>
  );
};

export default HomePage;