const fetchResponse =  fetch('/api/chating', {
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
    console.log('value' +  value)
    if (done) break;
    receivedData += decoder.decode(value, {stream: true});
    console.log('receivedData'+ receivedData)
}