import { ChakraProvider } from "@chakra-ui/react";
import LandingSection from "@/app/components/LandingSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactMeSection from "@/app/components/ContactMeSection";
import { AlertProvider } from "@/app/context/alertContext.client";
import Alert from "@/app/components/Alert.client";
import ChatPlace from "@/app/components/chatWindow";
  
export default function Home() {
  return (
    <ChakraProvider >
      <AlertProvider>
        <main>
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <ChatPlace />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
  }

  