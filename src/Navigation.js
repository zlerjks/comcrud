import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/buy">Buyer</Link>
        </li>
        <li>
          <Link to="/sell">Seller</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
