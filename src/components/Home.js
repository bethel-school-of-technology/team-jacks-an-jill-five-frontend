import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"
import BlackLogo from '../BlackLogo.png'

function Home() {
  return (
    <div>
  <Navbar Navbar-expand-lg bg="warning">
        <Container>
  <img  src={BlackLogo} height={40} alt="logo" />
  <Nav className="me-auto">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/signup" className="nav-link">Sign Up</Link>
  <Link to="/signin" className="nav-link">Sign In</Link>
  <Link to="/fairlist" className="nav-link">Fair List</Link>
  <Link to="/about" className="nav-link">About Us</Link>
  <Link to="/addfair" className="nav-link">Add Fair</Link>

  </Nav>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto">
        <Outlet />
      </Stack>
    </div>
  )
}

export default Home