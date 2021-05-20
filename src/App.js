import { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./Components/SideBar";
import MainBoard from "./Components/MainBoard";
import axios from "axios";

function App() {
   const [products, setProducts] = useState([]);
   const getProducts = () => {
      //get products from api
      return axios.get(
         "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"
      ).then((response) => {
        // console.log(response)
        setProducts(response.data)
       
        })
      
   };

   useEffect(() => {
    getProducts();
  }, []);

   return (
      <Container className="App">
         <SideBar />
         <MainBoard products={products}  />
       
      </Container>
   );
}

export default App;

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: grid;
   grid-template-columns: 10% minmax(0, 1fr);
   background: white;
`;
