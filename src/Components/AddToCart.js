import React from "react";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function AddToCart() {
   return (
      <IconButton>
         <ShoppingCartIcon />
      </IconButton>
   );
}

export default AddToCart;
