import React from "react";
import styled from "styled-components";



function SideBar() {
   return <Container>
       <h1>Sizes</h1>
      <Sizes>
        <Circle>XS</Circle>
        <Circle> S</Circle>
        <Circle> M</Circle>
        <Circle> ML</Circle>
        <Circle> L</Circle>
        <Circle> XL</Circle>
        <Circle> XXL</Circle>
      </Sizes>
   </Container>;
}

export default SideBar;

const Container = styled.div`
   border-right: 2px solid black;
   padding: 20px;
`;
const Sizes = styled.div`
display:grid;
column-gap:  20px;
row-gap:  20px;
grid-template-columns: 40px 50px 40px 40px;
`;

const Circle = styled.div`

width: 25px;
height: 25px;
font-size: 10px;
background: gray;
border-radius: 100%;
display:flex;
justify-content: center;
align-items:center;
`;
