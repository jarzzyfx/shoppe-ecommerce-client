// expose bar
// exposed bar
import { useState } from 'react';
import './Search.css'
import { IoIosSearch } from "react-icons/io";
import { VscCollapseAll } from "react-icons/vsc";

const Search = ({exposed, className}) => {

    const [search, setSearch] = useState(false)
    const [searching, setSearching] = useState(false)
    const [searched, setSearched] = useState(false)
    const [result, setResult] = useState(false)

    const openSearch = () => {
        setSearch(true)
    }
    const closeSearch = () => {
        setSearch(false)
    }

    // handle search function
    const handleSearch = (e) => {
        if(e.target.value === ''  || searched){
            setSearching(false)
        }else{
            setSearching(true)
            setSearched(false)
            setResult(true)
        }

        if(e.target.value === '' ){
            document.querySelector('title').textContent = 'Shoppe - Shop'

        }else{
            document.querySelector('title').textContent = 'Shoppe - Shop ~ Searching...'
        }
    }

    
   

  return (
    <>
        {
            exposed ? (
                <div className={`search-exposed ${className}`}>
        <header>
        <input type="search" spellCheck={true}  onChange={handleSearch} name="" id="" placeholder='Search...'/>
        
        <button><IoIosSearch /></button>
        </header>
      {
        searching ? (  <div className="search-wrapper">
            
        {searching ? (<small className='searching'>{result ? `Searching ... ` : 'No Results Found'}</small>) : ''}
        <main></main>
    </div>) : ''
      }

    </div>
            ) : (
                <div className={`search-expose ${className}`} >
                    <button onClick={openSearch}><IoIosSearch /></button>
    {
        search && (
        <div className="search-wrapper">
            <header>
            <input type="search" name="" spellCheck={true}   onChange={handleSearch} id="" placeholder='Search...'/>
    <button onClick={closeSearch}><VscCollapseAll /></button>
            </header>
            {searching ? (<small className='searching'>{result ? `Searching ... ` : 'No Results Found'}</small>) : ''}
            <main></main>
        </div>)
    }

                </div>
            )
        }
    </>
  )
}

export default Search