import React from "react";
import './StartScreening.css'
import { Spinner, Container, Button } from "react-bootstrap";

export const StartScreening = () => {
    return (
        <Container className="startScreen">
            <Spinner animation="grow" variant="warning" />
            <h1>Start screening</h1>
            <h4 className="h4-screen">Start 2 sessions in our virtual class room. First, without disturbances, Second With disturbances.
               </h4>
            <h4>In every session you will have the same mission to complete.</h4>
            <br/>
            <div>
                <h5>Instructions:</h5> 
                <h5>1. Put the headset</h5>  
                <h5>2. First session without disturbances starsts.</h5> 
                <h5>3. Press the button whenever you ready to start the session.</h5> 
                <h5>4. Press the button when the letter 'X' appears after the letter 'A'</h5> 
                <h5>5. Ten minutes break</h5> 
                <h5>6. Second session with disturbances starsts.</h5> 
            </div>
            <br/>
            <Button variant="danger"
              onClick={() => {
                window.confirm("Are you sure?")
            }}>Stop screening</Button>{' '}
          
            </Container>
  );
};