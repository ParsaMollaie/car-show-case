"use client";
import React, { useState } from 'react'
import SearchManuFacturer from "./SearchManuFacturer";


const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState('')

  const handleSearch = () => {

  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManuFacturer manufacturer={manufacturer} setManuFacturer={setManufacturer} />
      </div>
    </form>
  )
}

export default SearchBar