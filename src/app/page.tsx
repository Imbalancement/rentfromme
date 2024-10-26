/*import AboutUs from "@/components/AboutUs";*/
import FAQ from "@/components/FAQ";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm"

const Home = () => {
 return(
 <nav>

<Navbar />
<Hero />
<HowItWorks />
<FeaturedProperties />
<Services />
<ContactForm />
<FAQ />
<Footer />

 </nav>
 );
  
};

export default Home;


