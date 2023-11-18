import React from 'react'
import './RowPost.css'
import { useEffect , useState } from 'react'
import axios from '../../axios'
import { ImageUrl } from '../../constance/constant'

function RowPost(props) {
    const [orginal , setOrginal] = useState([])
    useEffect(() => {
      axios.get(props.url).then((response) => {
        console.log(response.data.results)
        setOrginal(response.data.results)
      }).catch(err=>{
        alert("network issue")
      })
    },[])


  return (
    <div className='row'>
      <h2>
        {props.title}
      </h2>
      <div className='posters'>
        {orginal.map((obj) =>
        <img className={props.isSmall ? "small-post" : 'img-post'} src={`${ImageUrl+obj.backdrop_path}`}  alt="Posts" />
         )}
       
      </div>
    </div>
  )
}

export default RowPost
