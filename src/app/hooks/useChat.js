'use client';
import { useState } from 'react';

const useChating = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState('');
    const [error, setError] = useState(null);
    const [chat_id, setChat_id] = useState(null);

    const submitChat = async (ChatData) => {
        setIsLoading(true);
        setResponse('');
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

            // Read and log each chunk as it arrives
            while (true) {
                const { done, value } = await reader.read();
                if (done) break; 
                
                // Decode the current chunk
                const chunk = decoder.decode(value);
                console.log(chunk);
            }

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