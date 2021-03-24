import React from 'react';
import { Nav, Navbar, Form, FormControl, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import logo from './img/logo.svg';
const Styles = styled.div`
  .navbar { background-color: #7A003C; }
  .nav-link {
    position:relative;
    right:50;
    margin-right:50px;
  }
  a,.navbar-nav, .navbar-light .nav-link {
    font-size:22px;
    color: #FFD100;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 2em;
    color: rgb(69, 131, 212);;
    &:hover { color: black; }
  }
  .item,.itemU{
    font-size:14px;
  }
  a.item.nav-link{
    font-size:14px;
  }
  a.itemU.dropdown-item,a.itemImg.dropdown-item{
    display:inline;
  }
  a.itemImg.dropdown-item{
    margin-left:12px;
    padding-left:1px;
    padding-right:1px;
  }
  a.itemU.dropdown-item{
    padding-left:1px;
    padding-right:1px;
  }
`;

function clickSignOut(){
  alert("This function is not availible in this test yet.")
}

const NavigationBar = () => (
  <Styles>
    <Navbar expand="md" style={{textAlign:"right"}}>
      <Navbar.Brand href="/" style={{color:"green", fontSize:"40px", fontWeight:'bold'}}>
      <img
        id='logo'
        alt="QuickLib"
        className="Logo"
        src={require('./img/LogoNew.png')}
        className="d-inline-block align-top"
        width="300px"
        height="80px"
      />
      
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
        <Nav.Item><Nav.Link href="/" >Main</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/BrowsePage" >Browse</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/SettingPage" >Setting</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/SupportPage" >Support</Nav.Link></Nav.Item>
        <NavDropdown title="Test User" id="basic-nav-dropdown" >
            <NavDropdown.Item className='itemImg'><img width={'30px'} height={'30px'} src={"https://avatars2.githubusercontent.com/u/32040029?s=400&v=4"}></img></NavDropdown.Item>
            <NavDropdown.Item className='itemU' style={{color:"black"}}>user@test.com</NavDropdown.Item>
            <Nav.Item className='item' >
            <Nav.Link className='item' href="/HistoryPage" style={{color:"black"}}>Booking History</Nav.Link></Nav.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item className='item' onClick={clickSignOut} style={{color:"black"}}>Sign Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      </Navbar.Collapse>
      <Form className="form-center" >
        <FormControl type="text" placeholder="Type here" className="" onChange={clickSignOut} value=""/>
      </Form>
    </Navbar>
  </Styles>
)

export default NavigationBar;