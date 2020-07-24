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
const NavBar = styled.div`
display:flex;

`
const Header = styled.div`
display:flex;
flex-direction: column;
align-items: center;

`

export default App;
