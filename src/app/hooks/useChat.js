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
            let receivedData = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                receivedData += decoder.decode(value, {stream: true});


                const lines = receivedData.split('\n');
                for (let i = 0; i < lines.length - 1; i++) {
                    try {
                        const line = lines[i];
                        const json = JSON.parse(line);
                        if (json.chat_id) {
                            setChat_id(json.chat_id);
                        } else if (json.message) {
                            setResponse(prev => [...prev, json.message]);
            }
                    } catch (error) {
                        console.error('Error parsing JSON:', error);
                        setError('Failed to parse response data.');
                        break;
                    }
                }
                receivedData = lines[lines.length - 1];
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