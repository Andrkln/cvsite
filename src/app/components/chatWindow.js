'use client';
import React, { useState, useEffect } from "react";
import useChating from "../hooks/useChat";
import { Box, Button, Textarea, VStack, Slide } from "@chakra-ui/react";
import useismobile from "../hooks/isMobile";

const ChatPlace = () => {
    const { isLoading, response, error, chat_id ,submit } = useChating();
    const [message, setMessage] = useState("");
    const [responses, setResponses] = useState({});
    const [showChatWindow, setShowChatWindow] = useState(false);
    const ismobile = useismobile();
    const [ids, setIds] = useState([]);
    const pd = ismobile ? `3%` : `0.5%`;
    
    const toggleChatWindow = () => setShowChatWindow(!showChatWindow);
    
    useEffect(() => {
      if (response && Object.keys(response).length > 0) {
          const [id, message] = Object.entries(response)[0];
          if (id != null && message != null) {
              setResponses(prevResponses => {
                  if (prevResponses[id]) {
                      return {
                          ...prevResponses,
                          [id]: prevResponses[id] + message
                      };
                  } else {
                      return {
                          ...prevResponses,
                          [id]: message
                      };
                  }
              });
          }
      }
    }, [response]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const userMessageId = `user-${Date.now()}`;
        setResponses(prevResponses => ({
            ...prevResponses,
            [userMessageId]: message
        }));

        await submit({ message, chat_id });
        setMessage("");
    };

    return (
        <VStack
          spacing={5}
          position="fixed"
          bottom="5"
          right={0}
          p={5}
          zIndex={100}
        >
          <Slide direction="bottom" in={showChatWindow} 
          style={{ 
            width: "30ch", 
            maxWidth: "sm", 
            left:'10',
            height:'48ch',
            padding: pd,
            position:'fixed'
                }}
        >
            {showChatWindow && (
              <VStack
                backgroundColor="rgb(255, 214, 33)"
                borderRadius="15px"
                p={4}
                spacing={4}
                w="full" 
                borderWidth={3}
                borderColor={'blue'}
              >
                <form onSubmit={handleSendMessage} style={{ width: "small" }}>
                  <VStack spacing={5}>
                    <Box h="120px" overflowY="auto" className="no-scrollbar">
                      {
                        Object.entries(responses).map(([id, response]) => (
                          <Box
                            backgroundColor={id.startsWith('user-') ? "rgb(48, 198, 248)" : "white"}
                            borderRadius="5px"
                            borderStyle="solid"
                            borderWidth="1px"
                            borderColor="black"
                            key={id}
                            w={'20ch'}
                            mb={5}
                            minHeight={'20px'}
                            p={1}
                          > 
                            {response}
                          </Box>
                        ))
                      }
                    </Box>
                    <Textarea
                      maxWidth={60}
                      placeholder="Ask anything about Andrey or this website..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isLoading}
                      color={'blue'}
                      borderColor="black"
                      sx={{
                        '::placeholder': {
                          color: 'blue',
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      isLoading={isLoading}
                      borderStyle={'solid'}
                      borderWidth={2}
                      color={'blue'}
                      borderColor={'black'}
                      bg={'rgb(252, 226, 114)'}
                      _hover={{
                        bg: "white",
                      }}
                    >
                      Send
                    </Button>
                  </VStack>
                </form>
              </VStack>
            )}
          </Slide>
          <Button onClick={toggleChatWindow}>
            {showChatWindow ? "Hide Chat" : "Chat with AI"}
          </Button>
        </VStack>
    );
};

export default ChatPlace;
