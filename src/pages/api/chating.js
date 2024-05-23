import rest from "@/app/hooks/key_store";


export default async function handlerChat(req, res) {
    let body = { 
        ...req.body,
        rest 
    };
    if (req.method === 'POST') {
        try {
            const fetchResponse = await fetch('https://restgpt.herokuapp.com:8000/api/chat/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!fetchResponse.ok) {
                console.error('Failed to fetch from Django backend');
                return res.status(fetchResponse.status).json({ error: 'Failed to fetch from Django backend' });
            }

            const reader = fetchResponse.body.getReader();
            async function push() {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) {
                        res.end();
                        return;
                    }
                    res.write(new TextDecoder("utf-8").decode(value));
                }
            }

            await push();
        } catch (error) {
            console.error('Fetch error:', error);
            res.status(500).json({ error: `Internal server error: ${error.message}` });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}
