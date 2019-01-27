import React, { Component } from 'react';
import axios from 'axios'

class Favorites extends Component {
    constructor(props){
        super(props);


        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        axios.get('./api/favorites').then(res => {
            this.setState({favorites: res.data})
        })
        console.log(this.state.favorites)
    }


    render(){
        return (
            <div>
                <button></button>
            </div>
        )
    }

}

export default Favorites;