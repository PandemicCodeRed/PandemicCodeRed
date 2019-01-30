import React from 'react';

const FirebaseContext = React.createContext(null);

// higher order component dont have to write out all when using instance now
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)

export default FirebaseContext;
