'use client';
import { useState } from 'react';

const useChating = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const submitChat = async (ChatData) => {
        setIsLoading(true);
        setResponse(null);
        setError(null);

        try {
            console.log('2')
            const fetchResponse = await fetch('/api/chating', {
                method: 'POST',
                body: JSON.stringify(ChatData),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: "application/json",
                },
            });

            if (!fetchResponse.ok) {
                console.error('Failed to get response');
                setError('Failed to get response');
                return;
            }

            const data = await fetchResponse.json();
            setResponse(data);
        } catch (fetchError) {
            console.error('Error:', fetchError);
            setError(fetchError.toString());
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, response, error, submit: submitChat };
};

export default useChating