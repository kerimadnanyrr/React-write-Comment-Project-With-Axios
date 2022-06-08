import React from 'react'
import Comentform from './Comentform'
import Commentslist from './Commentslist'



const Writingcomment = ({ comments, handleCommentsubmit }) => {

  return (
    <React.Fragment>


    
      <Commentslist comments={comments}></Commentslist>
      <Comentform handleCommentsubmit={handleCommentsubmit} />

    </React.Fragment>

  )
}

export default Writingcomment