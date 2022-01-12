import Loki from 'lokijs'

export const db = new Loki('jianxun', {
  autoload:true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: "localStorage"
})

function databaseInitialize(){
  const commment = db.getCollection('comments')
  if(commment == null){
    db.addCollection('comments')
  }
}

export function loadCollection(collection){
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const _collection = db.getCollection(collection)
      resolve(_collection)
    })
  })
}