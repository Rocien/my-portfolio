import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import Photo5 from '../images/Photo5.jpg';
 
const greeting = "Hi, my name is Rocien Nkunga!"; 
const bio1 = "A frontend developer"; 
const bio2 = "I'm a softeware developer, I love the technology and build things for the web "; 
 

const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#1d2433" 
  //  #2A4365
 > 
   <VStack spacing={10}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src={Photo5}
         size="2xl" 
         name="Rocien" 
         backgroundColor={"white"}
       />
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="5xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;