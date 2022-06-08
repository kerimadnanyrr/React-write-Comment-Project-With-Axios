import React from 'react'
import axios from 'axios'

function api() {
    return axios.create(
        {
            baseURL: 'https://react-yazi-yorum.herokuapp.com',
        })
}

export default api