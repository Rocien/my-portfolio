import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
 {
   title: "Portfolio one",
   description:
     "An old portfolio site built with Html, CSS, Javascript",
   getImageSrc: () => require("../images/photo1.jpg"),
 },
 {
   title: "Current Portfolio", 
   description:
     "This is my current portfolio SPA built with React.JS, Chakra, YUL and Formik library ", 
   getImageSrc: () => require("../images/photo2.jpg"), 
 },
 { 
   title: "Calculator", 
   description: 
     "A working calculator web app, build with React.JS ", 
   getImageSrc: () => require("../images/photo3.jpg"), 
 }, 
 { 
   title: "Restaurant Booking App", 
   description: 
     "This is my Final capstone project for Meta Front-end developer program on Coursera, which contains a detailed and responsive website with table-booking functionality built using React", 
   getImageSrc: () => require("../images/photo4.jpg"), 
 }, 
 { 
  title: "Jewelery Website", 
  description: 
    "This is my simple jewelery website built using only HTML and CSS", 
  getImageSrc: () => require("../images/photo7.jpg"), 
}, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#14532d" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(3,minmax(0,1fr))" 
       gridGap={8} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url="https://github.com/Rocien" 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;