'use client';
import { useState } from "react";

const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const submitForm = async (formData) => {
    setIsLoading(true);
    setResponse(null);
    setError(null); 

    try {
      const fetchResponse = await fetch(`/api/mailing`, 
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json"
        },
      }
      );

      if (fetchResponse.ok) {
        const data = await fetchResponse.json();
        setResponse(data);
      } else {
        console.error('Failed to send email');
        setError('Failed to send email due to server response.');
      }
    } catch (fetchError) {
      console.error('Error:', fetchError);
      setError(fetchError.message);
    } finally {
      setIsLoading(false);
    }
  };

return { isLoading, response, error, submit: submitForm };
;
};


export default useSubmit;