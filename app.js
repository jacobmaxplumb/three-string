const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/test', (req, res) => {
    let returnString = '';
    for (let i = 0; i < req.body.string_to_cut.length; i++) {
        if ((i + 1) % 3 == 0) {
            returnString += req.body.string_to_cut[i];
        }
    }
    res.send({ return_string: returnString })
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))