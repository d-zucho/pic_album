import { SearchBar } from './components/SearchBar'

import './App.css'
import { useState } from 'react'

function App() {
  const handleSubmit = (term) => {
    console.log('Do a search with ', term)
  }

  return (
    <div className='App'>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
