import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Accordion, Button, Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import axios from 'axios';

function MyPatients() {


  const [patients, setPatients] = useState([]);



  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  

  //func for show and hide the Accordion
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
    //make button for the Accordion
    return (
      <button
        type="button"
        style={{ background: 'none', border: "none" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  
  const fetchPatient = async () => {
    const { data } = await axios.get("api/patients")

    setPatients(data)
}
  
  
  
  useEffect(() => {
    
    fetchPatient();

  },[])
  
  
  
  
  
  return (
      <MainScreen title='List of all the patients'>
          <Link to='addPatient'>
              <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                  Add New Patient
              </Button>
              </Link>
              {
              patients.map((patient) => (
                <Accordion  key={patient._id} >
                    <Card style={{ margin: 10 }} >
                       <CustomToggle eventKey="0" >
                    <CardHeader style={{display:"flex"}} >
                        <span  style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                        }}>
                          <div>
                                <Accordion.Item   as={Card.Text} variant="link" eventKey='0'>
                                      {patient.firstName} {patient.LastName}
                                      </Accordion.Item>
                                      </div>           
                         </span>
                        <div>
                                  <Button href={`/note/${patient._id}`}>Edit</Button>
                                  <Button
                                      variant="danger"
                                      className="mx-2"
                                      onClick={()=>deleteHandler(patient._id)}
                                  >Delete</Button>
                                  </div>
                                  
                          </CardHeader>
                          </CustomToggle>
                          <Accordion.Collapse eventKey="0">
                          <Card.Body>
                    <blockquote className="blockquote mb-0">
                                  <p>{patient.results}</p>
                      <footer className="blockquote-footer">
                        Created on Date #Todo
                      </footer>
                    </blockquote>
                              </Card.Body>
                              </Accordion.Collapse>
                      </Card>   
                      </Accordion>  
                      
                  ))
              }
             
        
          
</MainScreen>
  )
}

export default MyPatients