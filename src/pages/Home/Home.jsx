import { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import { Form } from '../../components/Form/Form'
import Record from '../../components/Record/Record'

import './Home.css'

const Home = () => {
  const [record, setRecord] = useState([])

  const onSubmit = (data) => {
    if (data) {
      const recordId = {
        author: data.author,
        categories: data.categories,
        title: data.title,
        id: uuid(),
      }
      setRecord([...record, recordId])
    }
  }

  useEffect(() => {
    if (record.length > 0) {
      localStorage.setItem('record', JSON.stringify(record))
    }
  }, [record])

  useEffect(() => {
    const newRecord = JSON.parse(localStorage.getItem('record'))
    if (newRecord) {
      setRecord(newRecord)
    }
  }, [])

  const handleDelete = (id) => {
    const newFilterRecord = record.filter((rc) => rc.id !== id)
    localStorage.removeItem('record')
    setRecord(newFilterRecord)
  }

  return (
    <div className='home'>
      {record.map((rec) => {
        return (
          <Record
            key={rec.id}
            categories={rec.categories}
            title={rec.title}
            author={rec.author}
            onClick={() => handleDelete(rec.id)}
            boolean={true}
          />
        )
      })}

      <Form onSubmit={onSubmit} />
    </div>
  )
}

export default Home
