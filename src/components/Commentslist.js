import React from 'react'

const Commentslist = ({comments}) => {
  return (
    <div>
        <h3>Comments</h3>
      {
      
        comments.map(info => {
          return (
            <div className="ui relaxed list" key={info.id}>
              <div className="item">
                <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" alt=''/>
                <div className="content">
                  <span className="header">{info.display_name}</span>
                  <div className="description">{info.body}.</div>
                </div>
              </div>

            </div>
          )
        })
      } 
    </div>
  )
}

export default Commentslist