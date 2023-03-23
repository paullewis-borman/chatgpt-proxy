const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
  const question = encodeURIComponent(req.query.question);
  console.log(`ChatGPT Question: ${question}`);
  
  // Create payload object
  const payload = {
    "model": "gpt-3.5-turbo",
    "messages": [{
      "role": "user",
      "content": `${question}`,
    }],
    "max_tokens": 200,
    "temperature": 0.8,
  };

  // Log payload to console
  console.log('Request payload:', payload);

  // Make request to OpenAI GPT API
  const response = await fetch(process.env.OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    // Handle errors from OpenAI API
    const error = await response.json();
    console.error(`Error from OpenAI API: ${JSON.stringify(error)}`);
    return res.status(response.status).json(error);
  }

  // Parse response from OpenAI API
  const data = await response.json();
  const answer = data.choices[0].message.content.trim();
  console.log(`ChatGPT Answer: ${answer}`);

  res.json({
    question: req.query.question,
    answer: answer
  });
});

module.exports = router;
