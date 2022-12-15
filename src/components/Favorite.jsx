import axios from 'axios'
import React, { useEffect } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'


const Favorite = ({ songId, userId }) => {
    console.log(songId, userId);
    const removeFav = () => {
        axios.post('http://127.0.0.1:8000/api/delete_favorite', { song_id: songId, user_id: userId })
            .then((response) => console.log(response.data)).catch(res => console.log(res))
    }
    return (

        <BsFillHeartFill size={20} color="red" onClick={removeFav} />

    )
}

export default Favorite
