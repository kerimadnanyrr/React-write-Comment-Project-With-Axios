import React from 'react'
import { useState } from 'react';

const yorumbas={
 display_name: "",
    body: "",
};

const Comentform = ({ handleCommentsubmit }) => {
  const [commentbody, setCommentbody] = useState(yorumbas)

  const handleOnchange = event => { //formda yazılan yazıyı gerekli state parcasına kaydedecek

    setCommentbody({ ...commentbody, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <h3>Write a Comment</h3>
      <form className="ui form" onSubmit={(event) => {
   
        handleCommentsubmit(event, commentbody)
        setCommentbody(yorumbas)

      }}>
        <div className="ui small icon input">
          <input type="text" placeholder="Your Name.." name="display_name" onChange={handleOnchange} value={commentbody.display_name} />
          <i className="search icon"></i>
        </div>
        <textarea placeholder="Your Comment.." name="body" rows="3" onChange={handleOnchange} value={commentbody.body} ></textarea>

        <button className="ui green button" type='submit'>Add Comment</button>

      </form>
    </div>
  )
}

export default Comentform