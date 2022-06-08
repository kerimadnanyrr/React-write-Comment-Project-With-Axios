
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../api'
import DeleteModal from './DeleteModal'


import Writingcomment from './Writingcomment'


const Writingdetails = (props) => {

  const { id } = useParams()
  const [detail, setDetail] = useState({});
  const [comments, setComments] = useState([]);
  

  const handleCommentsubmit = (event,commentBody) => { //adrese post request attık.
    event.preventDefault();
    api().post(`/posts/${id}/comments`, 
      commentBody

    ).then(res =>
         setComments([...comments,res.data]) )
        //  .catch(err=> {
        //    console.log(err);
        //  })
  
  };


  useEffect(() => {
    api().get(`/posts/${id}`) //yazılar geldi(get)
      .then(res => {
        setDetail(res.data);
      })
      api().get(`/posts/${id}/comments`) //yorumlar geldi(get)
      .then(res => {
        setComments(res.data);
        console.log(res.data);
      })
  }, [])
  return (
    <React.Fragment>
      <h2 className='ui header'>{detail.title}</h2>
      <p>{detail.created_at}</p>
     <div className="ui-buttons" >
  <Link className="ui blue button" to={`/posts/${detail.id}/edit`}>Düzenle</Link>
<DeleteModal detail={detail}></DeleteModal>
</div>

      <p>{detail.content}</p>
<Writingcomment comments={comments} handleCommentsubmit={handleCommentsubmit}/>


</React.Fragment>
  )
}

export default Writingdetails