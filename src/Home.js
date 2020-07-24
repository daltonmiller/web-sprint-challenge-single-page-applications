import React from "react";
import styled from 'styled-components'


const Home = () => {
  return (
    <>
      
    <Images>
        <img src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        <img src="https://images.unsplash.com/photo-1591484506290-803ed645eb54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        <img src="https://images.unsplash.com/photo-1566222499048-9538f86d4675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        <img src="https://images.unsplash.com/photo-1585828922344-85c9daa264b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        <img src="https://images.unsplash.com/photo-1527133256227-fc3549f55332?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        <img src="https://images.unsplash.com/photo-1591452810654-7e035c52c8af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    </Images>
    </>
  );
};
const Images = styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;

img {
    width: 200px;
    height: 200px;
    margin: 50px;
    border-radius: 10px;
}
`

export default Home;