import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Projects() {
    state = {
        projects: [],
        isLoaded: false,
    }

    componentDidMount() {
        axios.get('/wp-json/wp/v2/projects')
            .then(res => this.setState({
                projects: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
        
    }
  return (
    <div>
      
    </div>
  )
}
