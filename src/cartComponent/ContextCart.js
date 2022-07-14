import React, { useContext } from "react";
  
import { Link } from "react-router-dom";
import Items from "./Items";


import { DataContext } from "./Cart";
const ContextCart =()=>{

     
    //   humne  jo usecontext ki help se  data share kia h vo yha dikhega 
     
    //  const {item } = useContext(DataContext);
      


    //  const {removeAllItem} = useContext(DataContext);
     const { item, removeAllItem, totalItems, totalAmount } =
       useContext(DataContext);

    // 
    
    
    if(item.length===0){
       return(
         <>
             <section>
            <div>
            <div className="header">🛒 Your cart</div>
            <div className="content">
              <div className="empty-msg">
                <h2>Your cart is empty !</h2>
                <Link to="/menu" className="font-bold underline">
                  ← Buy Now
                </Link>
              </div>
            </div>
            </div>
           </section>
         </>
       )
    };
     
    return (
      <>
        <section>
          <div>
            <div className="header">🛒 Your cart</div>
            <div className="content">
              <div className="empty-msg">
                <h2>
                  You have <span>{totalItems}</span> 🍕 items in Cart
                </h2>
                <Link to="/menu" className="font-bold underline">
                  ← Buy More
                </Link>
              </div>
              <div className="cart-content">
                <div className="cart-outer">
                  {item.map((currElem) => {
                    return (
                      <>
                        <Items key={currElem.id} {...currElem} />
                      </>
                    );
                  })}
                </div>
                <div className="cart-summary">
                  <h4>
                    Total Amount 👉 <span>{totalAmount} ₹</span>
                  </h4>
                  <h4>Order summary</h4>
                  <div>
                    <button className="pay-btn">Checkout →</button>
                    <button className="pay-btn" onClick={removeAllItem}>
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};
export default ContextCart;