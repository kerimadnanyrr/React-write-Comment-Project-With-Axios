import React from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';


function Writinglist() {
    const [writinglist, setWritinglist] = useState([]);

    useEffect(() => {
        api().get('/posts')
            .then(res => {
                setWritinglist(res.data);

            })
    }, [])
    return (


      
    writinglist.map((item) => {
            return (<div className="ui relaxed divided list" key={item.id}>

            <div className="item" >
                <i className="large github middle aligned icon"></i>
                <div className="content">
                    <Link to={`/posts/${item.id}`} className="header" >{item.title}</Link>
                    <hr  />
                    <div className="description">{item.created_at}</div>
                </div>
            </div>
            </div>
            
            
            )   
        })
        

        )
}

export default Writinglist