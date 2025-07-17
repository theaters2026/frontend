import { useState } from 'react'

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search query:', searchQuery)
    // Здесь будет логика поиска
  }

  return {
    searchQuery,
    setSearchQuery,
    handleSearchSubmit,
  }
}
