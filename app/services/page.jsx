// "use client";

// import { BsArrowDownRight } from "react-icons/bs";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const services = [
//   {
//     num : "01",
//     title: "Full Stack Developer",
//     description: "Experienced in both front-end and back-end development, creating seamless and efficient applications from the ground up. Proficient in integrating various technologies to deliver robust and scalable solutions.",
//     href: "/full-stack"
//   },
//   {
//     num : "02",
//     title: "Frontend Developer",
//     description: "Specializes in crafting visually appealing and user-friendly interfaces using modern frameworks and tools. Expert in ensuring responsive design and enhancing user experience across all devices.",
//     href: "/frontend"
//   },
//   {
//     num : "03",
//     title: "Backend Developer",
//     description: "Focused on building secure, efficient, and scalable server-side applications. Skilled in database management, API development, and server optimization to support high-performance applications.",
//     href: "/backend"
//   },
//   // {
//   //   num : "04",
//   //   title: "SEO",
//   //   description: "Expert in optimizing websites to rank higher in search engine results, driving organic traffic. Proficient in on-page and off-page SEO strategies, keyword research, and performance analysis to enhance visibility.",
//   //   href: "/seo"
//   // },
// ];



// const Services = () => {
//   return (
//   <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//     <div className="container mx-auto">
//       <motion.div 
//       initial={{opacity: 0}} 
//       animate={{opacity: 1, 
//            opacity: 1,
//            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
//           }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
//           >
//             {services.map((service, index)=> {
//               return (
//               <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
               
//                 {/* top */}
//                 <div className="w-full flex justify-between items-center">
//                   <div className="text-5xl font-extrabold text-outline text-transparent
//                   group-hover:text-outline-hover transition-all duration-500">
//                     {service.num}
//                     </div>
//                   {service.href && (
//                   <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white 
//                    group-hover:bg-accent transition-all duration-500
//                    flex justify-center items-center hover:rotate-45">

//                    <BsArrowDownRight className="text-primary text-3xl"/>
//                   </Link>
//                   )}
//                 </div>
//                 {/* title */}
//                 <h2 className="text-[42px] font-bold leading-none text-white 
//                   group-hover:text-accent transition-all duration-500">{service.title}
//                   </h2>
//                 {/* description */}
//                 <p className="text-white/60">{service.description}</p>
//                 {/* border */}
//                 <div className="border-b border-white/20 w-full"></div>
//               </div>
//             );
//             })}
//       </motion.div>
//     </div>
//   </section>
//   );
// };

// export default Services;