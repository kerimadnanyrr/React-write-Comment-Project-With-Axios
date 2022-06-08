import React, { useEffect, useState } from 'react'
import api from '../api'
import Writingadd from './Writingadd'
import {  useParams } from 'react-router-dom'


function Writingedit() {
    const { id } = useParams()
    const[write,setWrite]=useState({});

    useEffect(()=>{
     api()
     .get(`/posts/${id}`)
     .then(res=>{
        setWrite(res.data);
     })
    },[])
  return (
    <div>
        <h3>Yazı Editleme</h3>
        <Writingadd write={write}/>
    </div>
  )
}

export default Writingedit