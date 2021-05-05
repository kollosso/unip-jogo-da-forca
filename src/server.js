const express = require('express')
const app = express()

app.use('/static', express.static('views'))
app.use('/static', express.static('js'))

app.listen(8080, () => {
  console.log('Server start on port, 8080')
})
