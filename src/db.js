const loki = require('lokijs')

const loadCollection = (collectionName, db) => {
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const collection = db.getCollection(collectionName) || db.addCollection(collectionName)
      resolve(collection)
    })
  })
}

const db = new loki('uploads/uploads.json', { persistenceMethod: 'fs' })

module.exports = {
  loadCollection,
  db
}
