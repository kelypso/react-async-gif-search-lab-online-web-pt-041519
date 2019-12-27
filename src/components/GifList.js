import React, { Component } from 'react'

const GifList = props => {
    const gifList = props.gifs.map(gif => {
        return <li><img src={gif} /></li>
    })
    return <ul>{gifList}</ul>
}

export default GifList

// function GifList (props) {
//     const gifs = props.gifs.map ( (gif, key) => {
//         return <span key={key}><br/>< img key={gif} src={gif} alt="gif"/><br/> <br/> </span> })
    
//     return <ul> {gifs} </ul>
// }

// export default GifList
