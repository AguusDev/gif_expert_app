import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategories = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e)=>{
    setInputValue( e.target.value )
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(inputValue.trim().length > 2){
      setCategories( cats => [  inputValue ])
      setInputValue('')
    }

  }
  return (
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Buscar</button>

      </form>
  )
}

AddCategories.proptypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategories