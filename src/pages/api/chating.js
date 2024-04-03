import rest from "@/app/hooks/key_store";

export default async function handlerChat(req, res) {
    let body = { 
        ...req.body,
        rest 
    }
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
            if (fetchResponse.ok) {
              }
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'Transfer-Encoding': 'chunked',
            });
            if (fetchResponse.body.pipeTo) {
                const reader = fetchResponse.body.getReader();
                const stream = new ReadableStream({
                    async start(controller) {
                        while (true) {
                            const { done, value } = await reader.read();
                            if (done) break;
                            try {
                                controller.enqueue(value);
                            } catch (e) {
                                console.error("Error processing chunk", e);
                                controller.error(e);
                                break;
                            }
                        }
                        controller.close();
                        reader.releaseLock();
                    }
                });

                await stream.pipeTo(new WritableStream({
                    write(chunk) {
                        /*if add console.log(chunk) they appear in real time, but after this place only as a whole*/
                        res.write(chunk);
                    },
                    close() {
                        res.end();
                    }
                }));
            }
        } catch (error) {
            console.error('Fetch error:', error);
            res.status(500).end(JSON.stringify({ error: `Internal server error${error}` }));
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}

/*export default function Handler({ old_text, rewrite_prompt, JWT, uuid }) {
  const [read, setRead] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://wudpecker-llm-image-qoiwsv5iyq-ey.a.run.app/resummarize', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        });

        if (response.ok) {
            console.log(response)
          }
          
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        function processText({ done, value }) {
          if (done) {
            console.log("Stream complete");
            return;
          }

          const chunk = decoder.decode(value, { stream: true });
          setRead((prev) => prev + chunk);

          return reader.read().then(processText);
        }

        reader.read().then(processText);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    setRead('');
    fetchData();
  }, [old_text, rewrite_prompt, JWT, uuid]);

  return read;
}*/