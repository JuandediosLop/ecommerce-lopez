import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <a href="index.html">
      <ShoppingCartIcon sx={{ fontSize: 20 }} />
    </a>
  );
};

export default CartWidget;
