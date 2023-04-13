const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Peeps!')
})

app.listen(port, () => {
  console.log(`LaunchPad by Vog App listening at http://localhost:${port}`)
})
