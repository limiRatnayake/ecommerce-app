import { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./Components/SideBar";
import MainBoard from "./Components/MainBoard";
import axios from "axios";

function App() {
   const [products, setProducts] = useState([]);
   const [filterProducts, setFilterProducts] = useState([]);
   const [type, setType] = useState([]);
   const getProducts = () => {
      //get products from api
      return axios.get(
         "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"
      ).then((response) => {
        // console.log(response)
        setProducts(response.data)
       
        })
      
   };

  const getSelectType = (type)=>{
    console.log(type)
  
    setFilterProducts(products.filter((types) => types.details.type === type))
  
   }

   useEffect(() => {
    getProducts();
   
  }, []);

   return (
      <Container className="App">
         <SideBar />
         <MainBoard products={products} filterProducts={filterProducts} getSelectType={getSelectType} />
       
      </Container>
   );
}

export default App;

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: grid;
   grid-template-columns: 20% minmax(0, 1fr);
   background: white;
 
`;
