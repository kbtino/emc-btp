import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBand from '@/components/StatsBand';
import MaterialsGrid from '@/components/MaterialsGrid';
import ServicesGrid from '@/components/ServicesGrid';
import DeliverySection from '@/components/DeliverySection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsappFloatButton from '@/components/WhatsappFloatButton';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBand />
        <MaterialsGrid />
        <ServicesGrid />
        <DeliverySection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsappFloatButton />
    </>
  );
}
