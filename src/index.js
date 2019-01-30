import React from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Firebase, {FirebaseContext} from './components/Firebase'


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
      <Map />
    </FirebaseContext.Provider>,
  document.getElementById('app')
)
