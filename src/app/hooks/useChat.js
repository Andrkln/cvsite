'use client';
import { useState } from 'react';

const useChating = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponses] = useState({});
    const [error, setError] = useState(null);
    const [chatId, setChatId] = useState(null);

    const submitChat = async (ChatData) => {
        setIsLoading(true);
        setError(null);

        try {
            const fetchResponse = await fetch('/api/chating', {
                method: 'POST',
                body: JSON.stringify(ChatData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            if (!fetchResponse.ok) {
                throw new Error('Failed to get response from the server');
            }

            const reader = fetchResponse.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                const preChunkStr = decoder.decode(value);
                const preChunks = preChunkStr.split('\n');
                console.log(preChunks)
                let sentence = ''
                
                for (let preChunk of preChunks) {
                    if (!preChunk.trim()) continue;

                    try {
                        const chunk = JSON.parse(preChunk);

                        if (chunk.split('{').length > 2) {
                            console.log('hbrthrwt');
                            
                            let new_chunk = chunk.split('{').slice(1);
                        
                            for (let i = 0; i < new_chunk.length; i++) {
                                let first_chunk = JSON.parse('{' + new_chunk[i]);
                                
                                if (first_chunk.chat_id) {
                                    setChatId(first_chunk.chat_id);
                                }
                        
                                if (first_chunk.id && first_chunk.message) {
                                    sentence += first_chunk.message; 
                        
                                    setResponses(
                                        {
                                            [first_chunk.id]: sentence
                                        }
                                    );
                                }
                            }
                        } else {
                            if (chunk.chat_id) {
                                setChatId(chunk.chat_id);
                            }
                        
                            if (chunk.id && chunk.message) {
                                sentence += chunk.message;
                        
                                setResponses(
                                    {
                                        [chunk.id]: sentence
                                    }
                                );
                            }
                        }
                        
                        
                    } catch (error) {
                        console.error("Error parsing chunk to JSON", error, "Chunk was:", preChunk);
                    }
                }
            }

        } catch (fetchError) {
            console.error('Error during fetch:', fetchError);
            setError(fetchError.toString());
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, response, error, chatId, submit: submitChat };
};

export default useChating;