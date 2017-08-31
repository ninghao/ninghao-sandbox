const multer = require('multer')

const fileFilter = (request, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|mp3|mp4)/)) {
    return callback(new Error('wrong type :)'), false)
  }
  callback(null, true)
}

const upload = multer({ dest: 'uploads/' }, fileFilter)

module.exports = {
  upload
}
