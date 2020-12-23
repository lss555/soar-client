import React, { Component } from 'react'
import './Blog.scss'
// import apiUrl from '../../apiConfig'
// import axios from 'axios'

import placeholder from './placeholder.jpg'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
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
      <Col sm='4' key={blog.id}>
        <div className='card-div'>
          <Card className="text-white spots-card" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardBody>
              <CardTitle>{blog.title}</CardTitle>
              <CardSubtitle>sub title</CardSubtitle>
            </CardBody>
            <img width="100%" src={placeholder} alt="Card image cap" />
            <CardBody>
              <CardText>{blog.text}</CardText>
              <Link to={`/spots/${blog.id}/`}>More on this spot</Link>
            </CardBody>
          </Card>
        </div>
      </Col>
    ))

    return (
      <div key={this.state.blogs.id}>
        <h1 className='blog-header'>Blog</h1>
        <h3 className='blog-header'>{this.props.location.state ? this.props.location.state.message : null}</h3>
        <Row>
          {blogs}
        </Row>
      </div>
    )
  }
}

export default withRouter(Blog)
