import React from 'react'

export default function Rate() {
    let arr = Array(5).fill(<i className="fas fa-star"></i>)

    return (
        <div>
{arr.map(el=>el)}
        </div>
    )
}
