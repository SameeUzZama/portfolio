import React from "react";
import { Link } from "react-router-dom";
import "./Styles/ENavBar.css";
// import { useSelector } from "react-redux";

export const ENavBar = ({ setSearch }) => {
  //   const cartItem = useSelector((state) => state.groupreducer.cart);
  return (
    <div className="E-Navbar">
      <div className="E-link1">
        <Link className="link1" to="/portfolio/ecommerce">
          E-Commerce App
        </Link>
      </div>
      <div className="N-Search">
        <input
          placeholder="Search"
          //   onChange={() => setSearch((e) => e.target.value)}
          type="text"
        />
      </div>
      <div className="N-link2">
        <Link className="link2" to="/portfolio/ecommerce/cart">
          Cart :{/* {cartItem.length} */}
        </Link>
      </div>
    </div>
  );
};

export default ENavBar;
