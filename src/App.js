import { ChakraProvider } from "@chakra-ui/react"; 
import Header from "./components/Header"; 
import LandingSection from "./components/LandingSection"; 
// import About from "./components/About";
// import Experience from "./components/Experience";
import ProjectsSection from "./components/ProjectsSection"; 
import ContactMeSection from "./components/ContactMeSection"; 
import Footer from "./components/Footer"; 
import { AlertProvider } from "./context/alertContext"; 
import Alert from "./components/Alert"; 

function App() { 
 return ( 
   <ChakraProvider> 
     <AlertProvider> 
       <main> 
         <Header /> 
         <LandingSection /> 
         {/* <About />
         <Experience /> */}
         <ProjectsSection /> 
         <ContactMeSection /> 
         <Footer /> 
         <Alert /> 
       </main> 
     </AlertProvider> 
   </ChakraProvider> 
 ); 
} 

export default App;