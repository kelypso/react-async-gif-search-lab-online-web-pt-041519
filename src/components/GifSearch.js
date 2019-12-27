import React, { Component } from 'react'

export default class GifSearch extends Component {

    constructor() {
        super()
        this.state = {
            query: ''
        }
    }

    render() {
        return (
            <div className='searchForm'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' 
                        value={this.state.query} 
                        onChange={e => this.setState({query: e.target.value})}> 
                    </input>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchSearch(this.state.query)
    }

}

