import sendEmailToCustomer from "@/app/hooks/mail";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, firstName, type, comment } = req.body;  
      try {
        await sendEmailToCustomer(email, firstName, type, comment);
        res.status(200).json({ message: 'Email sent successfully', type: 'success' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} not allowed`);
    }
  }