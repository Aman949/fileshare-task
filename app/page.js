import Image from "next/image";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Header5 from "./components/Header5";
import Header4 from "./components/Header4";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Banner from "./components/Banner";
export default function Home() {
  return (
    <>
    <Header/>
    <Header2/>
    <Header3/>
    <Banner/>
    <Header4/>
    <Header5/>
    <Faq/>  
    <Footer/>
    </>

  );
}
