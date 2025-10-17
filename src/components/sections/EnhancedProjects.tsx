import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
const EnhancedProjects = () => {
  const projects = [{
    id: 1,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609568/1_asoy0m.jpg',
    title: '3D Apartment Layout – AutoCAD Project for Interior Space Planning'
  }, {
    id: 2,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609568/2_quhm7b.jpg',
    title: 'Jet Turbine Assembly – NX CAD Mechanical Design Practice'
  }, {
    id: 3,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609569/3_uhsklg.jpg',
    title: 'Modern Living Room Visualization – Revit Architecture Interior Design'
  }, {
    id: 4,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609568/4_q4vtjw.jpg',
    title: 'Heavy Vehicle Modeling – CREO Project for Automotive Engineering'
  }, {
    id: 5,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609570/5_inkvgl.jpg',
    title: 'Residential House Design – Revit Architecture with Structural Detailing'
  }, {
    id: 6,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609569/6_xgedy7.jpg',
    title: 'Jet Engine Cutaway – ANSYS Simulation for Aerodynamic Analysis'
  }, {
    id: 7,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609571/7_lsovxz.jpg',
    title: 'Multi-Story Building Concept – Revit Architecture Urban Planning'
  }, {
    id: 8,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609571/8_lfbkxe.jpg',
    title: 'Mechanical Gear System – CATIA Assembly with Motion Study'
  }, {
    id: 9,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609572/10_lw1wja.jpg',
    title: 'Gear Blueprint – AutoCAD Drafting for Mechanical Components'
  }, {
    id: 10,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609571/9_ygacjc.jpg',
    title: 'Interactive Engineering Dashboard – Python + Data Science Visualization'
  }, {
    id: 11,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609568/11_v5ofqz.jpg',
    title: 'Night View House Rendering – Revit Architecture with Lighting Effects'
  }, {
    id: 12,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609568/12_vm7ehn.jpg',
    title: 'Military Vehicle Design – NX CAD Defense Engineering Project'
  }, {
    id: 13,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609570/14_asxijz.jpg',
    title: 'Mechanical Clock Design – AutoCAD + CAM Integration Project'
  }, {
    id: 14,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609572/15_mncvai.jpg',
    title: 'Modern House Exterior – Revit Architecture Visualization'
  }, {
    id: 15,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609572/16_gjtdxm.jpg',
    title: 'Product Design: Wireless Mouse – CREO Industrial Design Practice'
  }, {
    id: 16,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609572/17_afqq9p.jpg',
    title: 'Bedroom Interior Modeling – Revit Architecture + Lighting Layout'
  }, {
    id: 17,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609573/18_gipofi.jpg',
    title: 'Off-Road Vehicle Concept – CATIA Surface Modeling Project'
  }, {
    id: 18,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609574/20_ftbuzh.jpg',
    title: 'Living Room Interior – Revit Architecture with Furniture Layout'
  }, {
    id: 19,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609573/21_asastb.jpg',
    title: 'Rotary Valve Assembly – NX CAD Mechanical Detailing'
  }, {
    id: 20,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609576/22_ytjkp8.jpg',
    title: 'Luxury Bedroom Design – Revit Architecture with Ambient Lighting'
  }, {
    id: 21,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609575/24_qybbbh.jpg',
    title: 'Dining Room Setup – Revit Architecture + Interior Styling'
  }, {
    id: 22,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609575/25_ozf9uv.jpg',
    title: 'Compact Bedroom Layout – AutoCAD + Revit Architecture Practice'
  }, {
    id: 23,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609576/27_giy7ua.jpg',
    title: 'Study Room Design – Revit Architecture + Lighting Simulation'
  },{
    id: 24,
    image: 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609576/28_m1bw5t.jpg',
    title: 'House Floor Plan – AutoCAD + Revit Architecture Integration'
  }, ];
  return <section id="portfolio" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300 bg-orange-400">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Student Projects Delivered
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Crafted with Skill, Delivered with Pride</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6 md:mb-8">
          {projects.map((project, index) => <motion.div key={project.id} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="aspect-square overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 p-2" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-gray-800 dark:text-white font-semibold text-sm leading-tight line-clamp-3">{project.title}</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="text-white font-bold text-sm leading-tight">{project.title}</h3>
                </div>
              </div>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center space-y-4 md:space-y-6">
          <Button onClick={() => window.open('https://www.justdial.com/Solapur/CADD-Solutions-Near-Dawat-Chowk-Above-Sudha-Uphargrha-Opposite-Vasundhara-College-Jule-Solapur/9999PX217-X217-180630164209-L6I6_BZDET/gallery', '_blank')} className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <ExternalLink className="w-5 h-5 mr-2" />
            View More Projects
          </Button>

          {/* Gallery Section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-red-200 dark:border-blue-400">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              📸 Our Gallery
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
              Take a look at some of our works and office moments! Visit our full gallery to explore more.
            </p>

            <div className="mb-6 flex justify-center">
              <img
                src="https://res.cloudinary.com/duhhsnbwh/image/upload/v1760609583/caddemployees_xshmbi.jpg"
                alt="CADD Solutions Team"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-xl shadow-lg border-2 border-red-200 dark:border-blue-400 object-cover h-auto"
                loading="lazy"
              />
            </div>

            <Button onClick={() => window.open('https://www.justdial.com/Solapur/CADD-Solutions-Near-Dawat-Chowk-Above-Sudha-Uphargrha-Opposite-Vasundhara-College-Jule-Solapur/9999PX217-X217-180630164209-L6I6_BZDET/gallery', '_blank')} variant="outline" className="border-red-500 text-red-600 hover:bg-red-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20">
              👉 Click here to view our complete Gallery 📷
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default EnhancedProjects;
