'use client';
import { useState } from 'react';

const useChating = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponses] = useState({});
    const [error, setError] = useState(null);
    const [chat_id, setChatId] = useState(null);

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
            let incompleteChunk = '';

            const customReadable = new ReadableStream({
                start(controller) {
                    function pump() {
                        return reader.read().then(({ done, value }) => {
                            if (done) {
                                if (incompleteChunk) {
                                    try {
                                        const jsonChunk = JSON.parse(incompleteChunk);
                                        if (jsonChunk.chat_id) {
                                            setChatId(jsonChunk.chat_id);
                                        }
                                        if (jsonChunk.id && jsonChunk.message) {

                                            setResponses({

                                                [jsonChunk.id]: jsonChunk.message
                                                
                                            });
                                        }
                                    } catch (error) {
                                        console.error("Error parsing remaining chunk to JSON", error, "Chunk was:", incompleteChunk);
                                    }
                                }
                                controller.close();
                                return;
                            }

                            const chunkStr = decoder.decode(value);
                            console.log(chunkStr)
                            const chunks = chunkStr.split('\n');
                            incompleteChunk = chunks.pop();

                            for (let chunk of chunks) {
                                if (!chunk.trim()) continue;

                                try {
                                    const jsonChunk = JSON.parse(chunk);
                                    if (jsonChunk.chat_id) {

                                        setChatId(jsonChunk.chat_id);
                                    }

                                    if (jsonChunk.id && jsonChunk.message) {

                                        setResponses({
                                            [jsonChunk.id]: jsonChunk.message
                                        });
                                    }

                                } catch (error) {
                                    console.error("Error parsing chunk to JSON", error, "Chunk was:", chunk);
                                }
                            }

                            controller.enqueue(value);
                            return pump();
                        });
                    }

                    return pump();
                }
            });

            await new Response(customReadable).text();

        } catch (fetchError) {
            console.error('Error during fetch:', fetchError);
            setError(fetchError.toString());
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, response, error, chat_id, submit: submitChat };
};

export default useChating;
