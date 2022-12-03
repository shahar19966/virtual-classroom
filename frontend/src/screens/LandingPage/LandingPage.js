import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'
    
function LandingPage() {
  return (
      <div className='main'>
          <Container>
              <Row>
                  <div className='intro-text'>
                      <div>
                          <h1 className='title'>Welcome to Virtual classroom </h1>
                          <p className='subtitle'> ADHD screening using VR</p>
                      </div>
                      <div className='buttonContainer'>
                          <a href='/login'>
                              <Button size='lg' className='landingbutton'>Login</Button>
                          </a>
                          <a href='/'>
                              <Button size='lg' className='landingbutton' variant='outline-primary'>Sing up</Button>
                          </a>
                          
                      </div>
                </div>
              </Row>
          </Container>
          </div>
  )
}

export default LandingPage