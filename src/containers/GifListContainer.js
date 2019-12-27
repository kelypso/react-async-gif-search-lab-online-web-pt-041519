import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    render() {
        return(
            <div className='gifContainer'>
                < GifSearch fetchSearch={this.fetchSearch} />
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchSearch = (query='') => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`) 
        .then(resp => resp.json())
        .then(({data}) => {
            let slicedData = data.slice(0, 3)
            this.setState({ gifs: slicedData.map(gif => gif.images.original.url) })
        })
    }

    componentDidMount() {
        this.fetchSearch()
    }

}