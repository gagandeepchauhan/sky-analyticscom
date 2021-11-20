import React from 'react'

import ApiProvider from './contexts/ApiContext'

import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <ApiProvider>
      <HomeScreen />
    </ApiProvider>
  );
}

export default App;
