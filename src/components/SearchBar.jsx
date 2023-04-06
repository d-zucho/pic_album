import React from 'react'

const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type='text' />
      </form>
    </div>
  )
}

export default SearchBar
