import RotatingText from './RotatingText';
import DecryptedText from './DecryptedText';
import { useState, useEffect } from 'react';
import '@/styles/pulse.css';
import World3DFrame from '../components/World3DFrame';

const Hero = () => {
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const fullText = "At Maval, we transform ideas into innovative digital solutions. From web development to custom applications, we help you take your business to the next level.";
  const mobileText = "Maval, transforms your ideas into innovative digital solutions. We help you take your business to the next level.";

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar tamaño inicial
    checkScreenSize();

    // Añadir listener para cambios de tamaño
    window.addEventListener('resize', checkScreenSize);

    // Limpiar listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('Servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 left-0 opacity-10 pointer-events-none">
        <img
          src="/images/logo.webp"
          alt="Background Logo"
          className="w-full h-full object-contain object-left-top transform scale-125"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="container relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-2 mb-4">
              <span className="mb-2 text-pretty text-7xl font-semibold lg:text-7xl font-mono">
                <span className="underline-decoration">We are experts in</span>
              </span>
              <RotatingText
                texts={['Software', 'Web Development', 'UI/UX Design']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#564FCC] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-3xl sm:text-4xl md:text-5xl font-sans"
              />
            </div>
            <div className="max-w-[600px] mb-4 text-left">
              <DecryptedText
                text={isMobile ? mobileText : fullText}
                isDecrypted={isDecrypted}
                setIsDecrypted={setIsDecrypted}
                className="text-muted-foreground text-base sm:text-lg md:text-xl lg:text-left"
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:+19295493683" className="bg-[#564FCC] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                Contact Us
              </a>
              <a 
                href="#Servicios" 
                onClick={handleServicesClick}
                className="border border-[#564FCC] text-[#564FCC] px-6 py-2 rounded-lg hover:bg-[#564FCC] hover:text-white transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center w-full px-4 lg:px-8">
            <World3DFrame />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
