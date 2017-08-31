const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { loadCollection, db } = require('./src/db')
const { upload } = require('./src/upload')

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

app.post('/', (request, response) => {
  console.log(request.body)
})

router.route('/uploads')
  .post(upload.array('uploads', 9), async (request, response, next) => {
    const collection = await loadCollection('uploads', db)
    const result = collection.insert(request.files)
    db.saveDatabase()
    response.send(
      result
    )
  })

app.use('/api', router)

app.listen(8080, () => {
  console.log('localhost:8080')
})
