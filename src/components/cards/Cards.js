import React from "react";
import Styles from "./cards.module.css" 

import Owner from "../images/admin.svg";
import Supplier from "../images/Supplier.jpg";
import Manufacturer from "../images/manufactuer1.jpg";
import Transporter from "../images/transporter1.jpg";
import Wholesaler from "../images/Wholesaler.jpg";

import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Cards() { 

  return (
    <Router>

      <div className={Styles.container}>
        <div>
          <a href="./owner">
            <div className={`${Styles.nav_item} ${Styles.admin}` }>
              <img src={Owner} alt="Admin" />
              <div>Admin</div>
            </div>
          </a>
        </div>
        <div className={Styles.entities}>
        <a href="/supplier"> <div className={Styles.nav_item}>
          <img src={Supplier} alt="Supplier" />
          <div>Supplier</div>
        </div></a>
        <a href="/transporter"><div className={Styles.nav_item}>
          <img src={Transporter} alt="Transporter" />
          <div>Transporter</div>
        </div></a>
        <a href="/manufacturer"><div className={Styles.nav_item}>
          <img src={Manufacturer} alt="Manufacturer" />
          <div>Manufacturer</div>
        </div></a>
        <a href="/wholesaler"><div className={Styles.nav_item}>
          <img src={Wholesaler} alt="Wholesaler" />
          <div>Wholesaler</div>
        </div></a>
        </div>
        

      </div>
       
    </Router>
  );
}
export default Cards;
