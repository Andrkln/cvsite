import rest from "@/app/hooks/key_store";

export default async function handlerChat(req, res) {
    let bodys = { 
        ...req.body,
        rest 
    }

  if (req.method === 'POST') {
      try {
          const fetchResponse = await fetch('http://3.92.217.119:8000/api/chat/', 
          {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(bodys),
          });

          if (!fetchResponse.ok) {
              console.error('Failed to fetch from Django backend');
              return res.status(fetchResponse.status).json({ error: 'Failed to fetch from Django backend' });
          }

          const data = await fetchResponse.json();
          return res.status(200).json(data);
      } catch (error) {
          console.error('Fetch error:', error);
          return res.status(500).json({ error: 'Internal server error' });
      }
  } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
