let bd = {
    chat_id: null,
    message: "hi",
    rest_key: 'TheWebsitekey42023456'
};

async function sendRequest() {
    try {
        const response = await fetch('http://3.92.217.119:8000/api/chat/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bd)
        });

        if (response.ok) {
            try {
                const data = await response.json(); // Attempt to parse JSON
                console.log(data);
            } catch (parseError) {
                console.error('Failed to parse JSON:', parseError);
                const text = await response.text(); // Fallback to text if JSON parsing fails
                console.log(text);
            }
        } else {
            console.error('Server responded with a non-OK status:', response.status);
        }
    } catch (error) {
        console.error('Network request failed', error);
    }
}


sendRequest()