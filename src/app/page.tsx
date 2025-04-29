// import Image from "next/image";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurServicesd from "./components/OurServicesd";
import GoogleForm from "./components/GoogleForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar/>
      <Hero/>
      <div>
      <Image src={'/wave.svg'} width={5000} height={120} alt="wave"/>
      </div>
      <main >
        <OurServicesd />
        <GoogleForm />
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
}
