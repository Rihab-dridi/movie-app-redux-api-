import React from 'react'

export default function MovieCard({el}) {
    const array=[]
    const array2=[]
     array.length= el.rate
     array2.length= 5 -el.rate
    return (
        <div className='MovieCard' >
        
                   <img className="poster" src={el.imgUrl} alt="poster"/>
                   <h3 className='title'>{el.title}</h3>
                   <span>{ array.fill(<i className="fas fa-star"></i>).concat(array2.fill(<i className="far fa-star"></i>))}</span>
                   <p>{el.category}</p>
                 
                 
        </div>
    )
}