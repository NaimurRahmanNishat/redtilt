import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";


const App = () => {
  return (
    <>
      <Navbar/>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
        <Home/>
        <Services/>
        <Blog/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App;