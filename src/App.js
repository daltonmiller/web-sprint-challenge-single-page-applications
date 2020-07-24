import React from "react";
import styled from 'styled-components'
import Form from './Form'
import Home from './Home'
import { Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Header>
      <h1>Lambda Eats</h1>
      <NavBar>
        <Link to='Home'>Home</Link>
        <Link to='Form'>Form</Link>
      </NavBar>
      <Route exact path='/Home'><Home /></Route>
      <Route exact path='/Form'><Form /></Route>
    </Header>
  );
};
const NavBar = styled.nav`




a {
  margin: 30px;
  padding: 20px;
  min-width: 100px;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  
  background-color:black

  &:hover{
    box-shadow-color: white;
    box-shadow: 0 0 19px 
    rgba(43,43,43,.5); 
  }

}
`
const Header = styled.div`
display:flex;
flex-direction: column;
align-items: center;
border: 50px solid black;
border-radius: 15px;



h1 {
  
}
`

export default App;
