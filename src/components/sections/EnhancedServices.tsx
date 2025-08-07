import React from 'react';
import { motion } from 'framer-motion';
import { Pen, Layers, Cog, Wrench, Building, Home, Box, Zap, Calendar, Calculator, Code, FileCode, Coffee, Terminal, Bot, BarChart, Ruler, Compass, Grid3X3, Settings, Cpu, Database, Monitor, Activity } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
const EnhancedServices = () => {
  const {
    translations
  } = useLanguage();
  const cadServices = [{
    name: 'AutoCAD',
    icon: Pen,
    link: 'https://www.autodesk.com/products/autocad/overview'
  }, {
    name: 'CREO',
    icon: Cog,
    link: 'https://www.ptc.com/en/products/cad/creo'
  }, {
    name: 'CATIA',
    icon: Layers,
    link: 'https://www.3ds.com/products-services/catia/'
  }, {
    name: 'Solid Works',
    icon: Wrench,
    link: 'https://www.solidworks.com/'
  }, {
    name: 'NX CAD & NX CAM',
    icon: Settings,
    link: 'https://www.plm.automation.siemens.com/global/en/products/nx/'
  }, {
    name: 'ANSYS Workbench',
    icon: Activity,
    link: 'https://www.ansys.com/products/structures/ansys-mechanical'
  }, {
    name: 'Hypermesh',
    icon: Grid3X3,
    link: 'https://www.altair.com/hypermesh/'
  }, {
    name: 'AutoCAD Civil 3D',
    icon: Ruler,
    link: 'https://www.autodesk.com/products/autocad-civil-3d/overview'
  }, {
    name: 'Revit Architecture',
    icon: Building,
    link: 'https://www.autodesk.com/products/revit/overview'
  }, {
    name: '3Ds Max',
    icon: Box,
    link: 'https://www.autodesk.com/products/3ds-max/overview'
  }, {
    name: 'STAAD.PRO',
    icon: Home,
    link: 'https://www.bentley.com/en/products/brands/staad'
  }, {
    name: 'ETABS',
    icon: Building,
    link: 'https://www.csiamerica.com/products/etabs'
  }, {
    name: 'AutoCAD Electrical',
    icon: Zap,
    link: 'https://www.autodesk.com/products/autocad-electrical/overview'
  }, {
    name: 'MS Project',
    icon: Calendar,
    link: 'https://www.microsoft.com/en-us/microsoft-365/project/project-management-software'
  }, {
    name: 'Primavera',
    icon: Calendar,
    link: 'https://www.oracle.com/industries/construction-engineering/primavera-p6/'
  }, {
    name: 'Building Estimation',
    icon: Calculator,
    link: '#'
  }];
  const softwareServices = [{
    name: 'C Programming',
    icon: Code,
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
  }, {
    name: 'C++',
    icon: FileCode,
    link: 'https://isocpp.org/'
  }, {
    name: 'JAVA',
    icon: Coffee,
    link: 'https://www.oracle.com/java/'
  }, {
    name: 'PYTHON',
    icon: Terminal,
    link: 'https://www.python.org/'
  }, {
    name: 'Machine Learning',
    icon: Bot,
    link: 'https://www.tensorflow.org/'
  }, {
    name: 'Data Science',
    icon: BarChart,
    link: 'https://www.datasciencecentral.com/'
  }];
  const ServiceCard = ({
    service,
    index
  }: {
    service: any;
    index: number;
  }) => <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} viewport={{
    once: true
  }} className="group">
      <a href={service.link} target="_blank" rel="noopener noreferrer" className="professional-card block p-6 text-center hover:-translate-y-2 border-2 border-transparent hover:border-primary/50 group">
        <div className="professional-icon group-hover:scale-110 transition-transform duration-300">
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {service.name}
        </h4>
      </a>
    </motion.div>;
    return <div className="spacing-section bg-gradient-to-br from-background via-primary/5 to-accent/5 transition-colors duration-500">
      {/* CAD Services Section */}
      <section id="services" className="spacing-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <div className="professional-container relative z-10">
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
        }} className="text-center spacing-content">
            <h2 className="professional-heading">
              PROFESSIONAL CAD & ENGINEERING SERVICES
            </h2>
            <p className="professional-text">Industry-standard software training with hands-on experience</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {cadServices.map((service, index) => <ServiceCard key={service.name} service={service} index={index} />)}
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section id="software-courses" className="spacing-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10"></div>
        <div className="professional-container relative z-10">
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
        }} className="text-center spacing-content">
            <h2 className="professional-heading">
              SOFTWARE DEVELOPMENT COURSES
            </h2>
            <p className="professional-text">Master programming languages & data science with real-world projects</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {softwareServices.map((service, index) => <ServiceCard key={service.name} service={service} index={index} />)}
          </div>
        </div>
      </section>
    </div>;
};
export default EnhancedServices;