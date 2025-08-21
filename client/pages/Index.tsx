import Header from '../components/Header';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import CoreOfferings from '../components/CoreOfferings';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <Header />
      <main className="scroll-smooth">
        <Hero />
        <Introduction />
        <CoreOfferings />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
