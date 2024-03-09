import { ChakraProvider } from "@chakra-ui/react";
import LandingSection from "@/app/components/LandingSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactMeSection from "@/app/components/ContactMeSection";
import { AlertProvider } from "@/app/context/alertContext.client";
import Alert from "@/app/components/Alert.client";
  
export default function Home() {
  return (
    <ChakraProvider >
      <AlertProvider>
        <main>
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
  }

  