import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="payvice__footer">
              <ul id="horizontal__list">
                <li>Contact :</li>
                <li>
                  <a href="/">
                    <i className="fa fa-phone icons">
                      {" "}
                      07080671131, 070022554839
                    </i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-envelope icons">
                      {" "}
                      agencybanking@iisysgroup.com
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
