import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Box, Button, Textarea, VStack, Slide } from "@chakra-ui/react";
import useismobile from "@/hooks/isMobile";
import useChating from '@/hooks/useChat';
import useIsMobile from "@/hooks/isMobile";

const ChatPlace = () => {
    const { isLoading, responses: responsesFromHook, error, chat_id, submit } = useChating();
    const [message, setMessage] = useState("");
    const [responses, setResponses] = useState({});
    const [showChatWindow, setShowChatWindow] = useState(false);
    const ismobile = useismobile();
    const pd = ismobile ? `3%` : `0.5%`;
    const mobile = useIsMobile();

    const chatBoxRef = useRef();
    const textareaRef = useRef();

    const toggleChatWindow = () => setShowChatWindow(!showChatWindow);

    useEffect(() => {
        if (responsesFromHook && Object.keys(responsesFromHook).length > 0) {
            setResponses(prevResponses => ({
                ...prevResponses,
                ...responsesFromHook
            }));
        }
    }, [responsesFromHook]);

    // Focus the textarea after responses update
    useLayoutEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [responses])    

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

        // Refocus the Textarea after submission
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
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
            <Slide
                direction="bottom"
                in={showChatWindow}
                style={{
                    width: mobile ? '35ch' : '45ch',
                    maxWidth: "sm",
                    left: '10',
                    height: mobile ? '80vh' : '77vh',
                    padding: pd,
                    position: 'fixed'
                }}
            >
                {showChatWindow && (
                    <VStack
                        backgroundColor="rgb(134, 250, 159)"
                        borderRadius="15px"
                        p={4}
                        spacing={4}
                        w="full"
                        borderWidth={3}
                        borderColor={'blue'}
                    >
                        <form onSubmit={handleSendMessage} style={{ width: "small" }}>
                            <VStack spacing={5}>
                                <Box
                                    minHeight={'40vh'}
                                    overflowY="auto"
                                    className="no-scrollbar"
                                    ref={chatBoxRef}
                                    h={'40vh'}
                                    maxHeight={'65vh'}
                                >
                                    {
                                        Object.entries(responses).map(([id, response]) => (
                                            <Box
                                                backgroundColor={id.startsWith('user-') ? "#E0F7FA" : "white"}
                                                borderRadius="5px"
                                                borderStyle="solid"
                                                borderWidth="1px"
                                                borderColor="black"
                                                key={id}
                                                w={mobile ? '30ch' : '40ch'}
                                                mt={5}
                                                minHeight={'20px'}
                                                p={1}
                                            >
                                                {response}
                                            </Box>
                                        ))
                                    }
                                </Box>
                                <Textarea
                                    ref={textareaRef}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage(e);
                                        }
                                    }}
                                    maxWidth={'150%'}
                                    placeholder="Вы можете задать мне любой вопрос о нашей компаний"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    disabled={isLoading}
                                    color={'blue'}
                                    _hover={'red'}
                                    borderColor="black"
                                    w={mobile ? '30ch' : '40ch'}
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
                                    Отправить
                                </Button>
                            </VStack>
                        </form>
                    </VStack>
                )}
            </Slide>
            <Button onClick={toggleChatWindow}>
                {showChatWindow ? "скрыть чат" : "чат с AI"}
            </Button>
        </VStack>
    );
};

export default ChatPlace;
