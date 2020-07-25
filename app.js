const express = require('express')
const app = express()
const port = 3000

app.post('/test', (req, res) => {
  console.log(req);
  res.send({return_string: 'stuff'})
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))