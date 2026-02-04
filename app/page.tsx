import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack'; // Import the new component
import Industries from './components/Industries'; // Import the new component
import Clients from './components/Clients'; // Import Clients
import OurClients from './components/OurClients';
import Portfolio from './components/Portfolio';
import Statistics from './components/Statistics';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <TechStack /> 
      <Industries/> {/* Add the section here */}
      <Clients /> 
      <OurClients/>
      <Portfolio/>
      <Statistics/>
      <Insights/>
      <Contact/>
      <Footer />

    </main>
  );
}