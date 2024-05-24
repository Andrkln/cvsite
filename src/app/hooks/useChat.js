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
                let sentence = '';
                
                for (let preChunk of preChunks) {
                    if (!preChunk.trim()) continue;

                    const splitChunks = preChunk.split('}{').map((chunk, index, arr) => {
                        if (index !== 0) chunk = '{' + chunk;
                        if (index !== arr.length - 1) chunk = chunk + '}';
                        return chunk;
                    });

                    for (let chunkStr of splitChunks) {
                        try {
                            const chunk = JSON.parse(chunkStr);
                            switch (true) {
                                case Boolean(chunk.chat_id):
                                    setChatId(chunk.chat_id);
                                    break;
                        
                                case Boolean(chunk.id && chunk.message):
                                    sentence += chunk.message; 
                        
                                    setResponses(prevResponses => ({
                                        ...prevResponses,
                                        [chunk.id]: sentence
                                    }));
                                    break;
                        
                                default:
                                    break;
                            }
                        } catch (error) {
                            console.error("Error parsing chunk to JSON", error, "Chunk was:", chunkStr);
                        }
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
