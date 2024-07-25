import React, {useState} from 'react'
import '../../index.css'
import AddCategories from '../addCategories/AddCategories'
import GifGrid from '../gifGrid/GifGrid'

const GifExpertApp = () => {

  const [categories, setCategories] = useState([])
  

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategories setCategories={setCategories}/>
      <ol>
      { categories.map( category => (
          <GifGrid category={category} key={category}/>
          ) 
      ) 
        }
      </ol>
    </>
  )
}

export default GifExpertApp