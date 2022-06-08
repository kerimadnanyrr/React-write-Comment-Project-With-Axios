import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import api from '../api';


const Writingadd = (props) => {

    let navigate = useNavigate();
    const [write, setWrite] = useState({
        title: '',
        content: ''
    });

    const onInputChange = (event) => {
        setWrite({ ...write, [event.target.name]: event.target.value })
    }

    const OnSubmit = () => {

if (props.write?.title) {
    //edit
    api()
    .put(`/posts/${props.write.id}`,write)
    .then(res=>{
        navigate(`/posts/${props.write.id}`)
    })
}

else{
    //add
    api().post(`/posts`, write)
    .then(res => {
        return navigate("/");
    })
}
    }

    useEffect(() => {
        if (props.write?.title && props.write?.content) 
            setWrite(props.write)       
    }, [props.write])

    //propstan gelen yazı var oldugunda getir.
    return (
        <React.Fragment>
            <h3>Title</h3>
            <div className="ui form">
                <div className="field">
                    <input type="text" name='title' value={write.title} onChange={onInputChange} />
                </div>
            </div>
            <div className="ui form">
                <div className="field">
                    <h3>Text</h3>
                    <textarea name='content' value={write.content} onChange={onInputChange}></textarea>
                </div>

            </div>
            <button className="ui primary button" onClick={OnSubmit}>
                Add
            </button>
            <button className="ui button">
                Delete
            </button>
        </React.Fragment>
    )
}

export default (Writingadd);