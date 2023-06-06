import { useState } from 'react'
import './Record.css'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const Record = ({ categories, title, author, onClick, boolean }) => {
  const [percentage, setPercentage] = useState(0)
  const handleInputs = (e) => {
    e.preventDefault()
    setPercentage(((e.target[0].value / e.target[1].value) * 100).toFixed(0))
  }
  return (
    <div className='record'>
      <div className='record-info'>
        <p>{categories}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        {boolean?<button onClick={onClick}>Remove Book</button>:null}
      </div>
      <div className="text-circle">
      <div className='circle'>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          className={'progress'}
        />
      </div>
       <span>reading progress</span>
      </div>
      <form
        className='current-page'
        onSubmit={handleInputs}
      >
        <input
          type='number'
          placeholder='pages read'
        />
        <input
          type='number'
          placeholder='all pages'
        />
        <input
          type='submit'
          name=''
          value={'UPDATE PROGRESS'}
        />
      </form>
    </div>
  )
}

export default Record
