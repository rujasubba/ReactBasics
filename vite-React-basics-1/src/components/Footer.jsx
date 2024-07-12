import React from "react";

function Footer() {
    return (
        <div className="footer-container">
             <div class="footer-upper">
                 <div class="footer-item">
                     <h5>Funiro.</h5>
                     <p class="address">
                        400 University Drive Suite 200 Coral <br />
                       Gables,<br />
                       FL 33134 USA
                     </p>
                 </div>
                 <div class="footer-item">
                     <span class="footer-muted-title">Links</span>
  
                     <nav class="footer-navigation">
                         <ul>
                             <li><a href="#">Home</a></li>
                             <li><a href="#">Shop</a></li>
                             <li><a href="#">About</a></li>
                             <li><a href="#">Contact</a></li>
                         </ul>
                     </nav>
                 </div>
                 <div class="footer-item">
                      <span class="footer-muted-title">Help</span>
  
                     <nav class="footer-navigation">
                         <ul>
                             <li><a href="#">Payment Options</a></li>
                             <li><a href="#">Returns</a></li>
                             <li><a href="#">Privacy Policies</a></li>
                         </ul>
                     </nav>
                 </div>
                 <div class="footer-item">
                      <span class="footer-muted-title">Newsletter</span>
                     <div class="newsItems">
                         <input type="text" placeholder="Enter Your Email address" />
                         <button>SUBSCRIBE</button>
                     </div>
                 </div>
                 </div>
             
            <hr />
            <div class="footer-lower">
                <p>2023 furino. All rights reserved</p>
             </div>

         </div>
    )
}
export default Footer;