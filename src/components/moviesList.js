import React, { useEffect } from 'react'
import MovieCard from './movieCard'
import AddMovie from './addMovie'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { displayHandler } from '../redux/action'


export default function MoviesList() {
const dispatch = useDispatch()
useEffect( ()=>{

axios.get('https://movie-app-gmc.herokuapp.com/api/movies') //axios //http methos // url: endpoint //consomation de l'api
.then((res)=>   dispatch(displayHandler(res.data)) )
.catch((err)=> console.log(err))
}, [] )

const moviesList = useSelector(state => state.moviesList)
    return (
        <div className='movieList' >
     
      {moviesList.map((el,key)=>
       <MovieCard el={el} key={el._id} /> )}
      <AddMovie/>
        </div>
    )
}

//useEffect 
//axios 
//http methods 
//consomation de l'api 
//Promise then/catch



// async/ await :try/catch