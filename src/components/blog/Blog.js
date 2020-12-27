import React, { Component } from 'react'
import './Blog.scss'
// import apiUrl from '../../apiConfig'
// import axios from 'axios'

// import placeholder from './placeholder.jpg'
// import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {
  Row, Col
} from 'reactstrap'
import { indexSpots } from './index.js'

class Blog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blogs: []
    }
  }

  componentDidMount () {
    indexSpots(this.props.user)
      .then(res => this.setState({ blogs: res.data.blogs.reverse() }))
      .catch(console.error)
  }

  render (props) {
    const blogs = this.state.blogs.map(blog => (
      <Col sm='12' key={blog.id} className='blog-col'>
        <div className='card-div'>
          <img width="100%" src={blog.image} alt="Blog image" className='blog-img-left'/>
          <h2>{blog.title}</h2>
          <p>Published on {blog.date}</p>
          <p>{blog.text}</p>
        </div>
      </Col>
    ))

    return (
      <div key={this.state.blogs.id}>
        <h1 className='blog-header'>Soar Blog</h1>
        <Row>
          {blogs}
        </Row>
      </div>
    )
  }
}

export default withRouter(Blog)
