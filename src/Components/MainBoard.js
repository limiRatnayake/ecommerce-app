import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Product from "./Product";
import AddToCart from "./AddToCart";
import Button from "@material-ui/core/Button";

function MainBoard({ products }) {

    const [type, setType] = useState("");

    
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
                     onChange={e => setType(e.currentTarget.value)}>
                        <option value="t-shirt<">t-shirt</option>
                        <option value="dress shirts">dress shirts </option>
                     </select>
                    
                  </form>
               </filter-product>
               <AddToCart />
            </Options>
         </Header>
         <Body>
         { products.map(( product)=>(<Product key={product.id} product={product} />))}
        
         </Body>
      </Container>
   );
}

export default MainBoard;
const Container = styled.div`
   background: white;
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
