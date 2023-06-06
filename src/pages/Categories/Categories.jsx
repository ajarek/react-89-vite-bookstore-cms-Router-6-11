import { useState, useEffect } from 'react'
import Record from '../../components/Record/Record'
import './Categories.css'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [categoriesArray, setCategoriesArray] = useState([])
  const [categoriesWord, setCategoriesWord] = useState('')

  useEffect(() => {
    const newRecord = JSON.parse(localStorage.getItem('record'))
    if (newRecord) {
      setCategories(newRecord)
    }
  }, [])

  useEffect(() => {
    const removeDuplicate = categories.map((rc, i) => rc.categories)
    setCategoriesArray (Array.from(new Set(removeDuplicate)))
  }, [categories])
  const handleFilter = (e)=>{
    setCategoriesWord(e.target.textContent)
  }
 
  return (
    <div className='home'>
      <h1>Categories</h1>
      <div className='select'>{categoriesArray.map((el,index)=><button key={index} onClick={handleFilter}>{el}</button>)}</div>
      {categories
      .filter((el)=>categoriesWord?el.categories===categoriesWord:true)
      .map((rec) => {
        return (
          <Record
            key={rec.id}
            categories={rec.categories}
            title={rec.title}
            author={rec.author}
            boolean={false}
          />
        )
      })}
    </div>
  )
}

export default Categories
