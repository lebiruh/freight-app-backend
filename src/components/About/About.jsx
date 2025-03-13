import { motion } from 'framer-motion';
import AboutPageHeaderImage01 from "../../assets/aboutPageImage/aboutPageHeaderImage01.jpg"
import "./About.css"

const About = () => {
  return (
    <div className="w-full mx-auto py-5 px-5 bg-white mt-16">

      <div className="w-full mx-auto">

        <div className="flex flex-col md:flex-row md:h-[500px] items-center gap-5">

          <div className="w-full lg:w-1/2 about-bg-custom-primary">
            <div className="relative overflow-hidden h-[400px] ">              
              <img className="absolute z-10 ps-10 pt-0 pb-10 pe-0 inset-0 object-cover w-full h-full" src={AboutPageHeaderImage01} alt="" /> 
              <div className="absolute right-0 z-5 bg-white h-full w-1/2 pe-0 me-0 skew-x-[30deg]"></div>             
            </div>         
          </div>
          <motion.div 
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {duration: 2}
              }
            }}
            initial="hidden"
            whileInView="show"
            className="w-full lg:w-1/2 p-0 h-[400px]">
            <h1 className="mb-4 mt-0 pt-0 text-4xl font-bold about-text-custom-primary">#1 Place To Find The Perfect Freight Transportation</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <p className="about-text-custom-primary">Tempor erat elitr rebum at clita</p>
            <p className="about-text-custom-primary">Aliqu diam amet diam et eos</p>
            <p className="about-text-custom-primary mb-6">Clita duo justo magna dolore erat amet</p>
            <a className="about-bg-custom-primary hover:bg-blue-900 text-white font-bold py-3 px-5 mt-6 rounded" href="">Read More</a>
          </motion.div>

        </div>

      </div>
      
    </div>
  )
}

export default About