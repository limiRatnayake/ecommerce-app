import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Product from "./Product";
import AddToCart from "./AddToCart";
import Button from "@material-ui/core/Button";

function MainBoard({ products ,filterProducts ,getSelectType}) {
    const [type, setType] = useState("");
    
        const getType = (e) =>{
            setType(e.currentTarget.value);
            getSelectType(e.currentTarget.value)
        }
    
   return (
      <Container>
         <Header>
            <total-products> {products.length} Product(s) in found</total-products>
            <Options>
               <filter-product>
                  <form>
                     <label>Order By:</label>
                     <select 
                     name="type" 
                     id="types"  
                     value={type}
                     onChange={e => getType(e)}>
                        <option value=""></option>
                        <option value="t-shirt">t-shirt</option>
                        <option value="dress shirts">dress shirts </option>
                     </select>
                    
                  </form>
               </filter-product>
               <AddToCart />
            </Options>
         </Header>
         <Body>
         {type == "" ? products.map(( product)=>(<Product key={product.id} product={product} />)) 
         :
         filterProducts.map(( product)=>(<Product key={product.id} product={product} />)) 
          }
        
         </Body>
      </Container>
   );
}

export default MainBoard;
const Container = styled.div`
   background: white;
   padding: 20px;
`;
const Header = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
const Options = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
const Body = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
   
`;
