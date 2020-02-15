import React, { useState, useEffect } from 'react'
import PokemonList from './components/PokemonList'
import Pagination from './components/Pagination'
import axios from 'axios'

function App() {

  const [pokemons, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() =>{

    let cancel
    setLoading(true)
    axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken( c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(pokemon => pokemon.name))

    })

    return () => cancel()

  }, [currentPageUrl])

  
  function goToNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }
  
  function goToPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading"

  return (
    <>

      <PokemonList pokemons = {pokemons} />
      <Pagination 
        nextPage = {nextPageUrl ? goToNextPage : null} 
        prevPage = {prevPageUrl ? goToPrevPage : null}
      />

    </>
  )

}

export default App;
