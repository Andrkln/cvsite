'use client';

import rest from "@/app/hooks/key_store";

'https://restgpt-cfbbd06a935f.herokuapp.com/api/chat/'

export default async function handlerChat(req, res) {
    let body = { 
        ...req.body,
        rest 
    };
    if (req.method === 'POST') {
        try {
            const fetchResponse = await fetch('http://127.0.0.1:8000/api/chat/', {
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

            const stream = new ReadableStream({
                start(controller) {
                    function push() {
                        reader.read().then(({ done, value }) => {
                            if (done) {
                                controller.close();
                                return;
                            }
                            controller.enqueue(value);
                            push();
                        }).catch(err => {
                            console.error('Stream read error:', err);
                            controller.error(err);
                        });
                    }
                    push();
                }
            });

            res.writeHead(200, {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            });

            const readerStream = stream.getReader();

            async function streamToResponse() {
                const decoder = new TextDecoder("utf-8");
                while (true) {
                    const { done, value } = await readerStream.read();
                    if (done) {
                        res.end();
                        break;
                    }
                    res.write(decoder.decode(value));
                }
            }

            await streamToResponse();

        } catch (error) {
            console.error('Fetch error:', error);
            res.status(500).json({ error: `Internal server error: ${error.message}` });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}