const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get('/', (request, response) => {
  response.send({
    message: 'hello ~'
  })
})

app.use('/api', router)

app.listen(8080, () => {
  console.log('localhost:8080')
})
