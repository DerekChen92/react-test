import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


export default class AboutMe extends Component {
  render() {
    return (
      <>
        <Button>YODF</Button>
        <h1>AboutMe</h1>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </>
    )
  }
}
