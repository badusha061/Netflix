import React , {useEffect , useState} from 'react'
import "./Banner.css"
import axios from '../../axios'
import {API_KEY , ImageUrl} from '../../constance/constant'

function Banner() {
    const [movie , setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[3])
        })
    },[])

  return (
    <div
    style={{backgroundImage: `url(${movie ? ImageUrl+movie.backdrop_path : ""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='titile'>
              {movie ? movie.title : ""}
            </h1>
            <div className='banner-buttons'>
                <button className='btn-1'>
                    Play
                </button>
                <button className='btn-2'>
                    My list
                </button>
            </div>
            <h1 className='decs'>
                {movie ? movie.overview : ""}
            </h1>
            <div className="fade">
                
            </div>
        </div>
    </div>
  )
}

export default Banner
