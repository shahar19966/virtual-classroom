import React,{useEffect} from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
} from "react-bootstrap";
import { Link ,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";


export const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {}, [userInfo]);

  return( <Navbar bg="primary" expand="lg" variant="dark">
  <Container >
      <Navbar.Brand >
        <Link to='/'>ADHD screening</Link>
      </Navbar.Brand>
      {userInfo && (
        <>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form> */}
            </Nav>
            <Nav
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/patients">patients  </Nav.Link>
              <NavDropdown title={`${userInfo.firstName}`} id="navbarScrollingDropdown">
                <NavDropdown.Item href="/profile">My profile</NavDropdown.Item>
                <NavDropdown.Item
                  onClick={logoutHandler}
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            
            </Nav>
    
          </Navbar.Collapse>
        </>
      )}
  </Container>
</Navbar>);
};
