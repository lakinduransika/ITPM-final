import React from 'react';

function Footter(){
    return(
      <div className="footer">
        <div>
        <p class="follow" align="left"><b> Follow Us On:</b></p>
          <div className="social-icons">
          <img src="./images/fb1.jpeg" alt="" width="30px" height="30px"/>
          <img src="./images/goo.jpeg" alt="" width="30px" height="30px"/>
          <img src="./images/tw.jpeg" alt="" width="30px" height="30px"/>
          </div>
        <p class="payment" align="right"><b> Payment Methods: </b></p>
        <div class="pay-icons">
        <img src="./images/visa.jpeg" alt="" width="40px" height="40px"/>
          <img src="./images/card.jpeg" alt="" width="40px" height="40px"/>
        </div>
        </div>
      </div>
    );
}
export default Footter;