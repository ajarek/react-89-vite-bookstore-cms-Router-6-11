import { useState } from 'react';
import { Form} from '../../components/Form/Form';
import  Record from '../../components/Record/Record';

import './Home.css'

const Home = () => {
  const [record,setRecord]=useState([])
  const onSubmit = (data) => {
    setRecord([...record,data])
  }
  console.log(record);
  return (
    <div className='home'>
      {record?.map((rec,index)=>{
         return(
          <Record key={index} categories={rec.categories} title={rec.title} author={rec.author} percentage={66} />
         )
      })}
      
     <Form onSubmit={onSubmit}/>
    </div>
  )
}

export default Home
