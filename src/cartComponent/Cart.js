
import React,{useEffect,createContext , useReducer} from "react";
import "./cart.css";
import ContextCart from "./ContextCart";
import CartData from './cartData.js';
import { reducer } from "./reducer"; 


export const DataContext = createContext();    // ye context api h 


//  initalized usereducer hook

 const initialState = {
   item: CartData,
   totalAmount: 0,
   totalItems: 0,
 };

const Cart = ({childToParent}) => {
 

  const [state, dispatch] = useReducer(reducer, initialState);

  //  to delete the indiv. elements from an item cart
  const removeItemHandler = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  //  to delete the all elements from an item cart
  //  clear the cart
  const removeAllItem = () => {
    return dispatch({
      type: "REMOVE_ALL",
    });
  };

  // increment in a item Quantity

  const increseItemQuantity = (id) => {
    return dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };

  const decreaseItemQuantity = (id) => {
    return dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  //  we  will use the useEffect to update the data  useeffect tb hi chle jb cart ke items me kuch change ho [state.item]
  //   get total items, amount
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
      
    // console.log("jangra");
  }, [state.item]);



  useEffect(()=>{
    return childToParent(state.totalItems);
  },[childToParent,state.totalItems]);




  return (
     
    <DataContext.Provider
      value={{
        ...state,
        removeItemHandler,
        removeAllItem,
        increseItemQuantity,
        decreaseItemQuantity,
       
      }}
    >
      <ContextCart />
    </DataContext.Provider>
  );
};

export default Cart;












// import React from "react";
// import "./cart.css";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const removeFromCartHandler = () => {
//     console.log("removed from  cart");
//   };

//   return (
//     <>
//       <section>
//         <div>
//           <div className="header">🛒 Your cart</div>
//           <div className="content">
//             <div className="empty-msg">
//               <h2>Your cart is empty!</h2>
//               <Link to="/" className="font-bold underline">
//                 ← Go Back
//               </Link>
//             </div>
//             <div className="cart-outer">
//               <div className="cart-inner">
//                 <div className="cart-item">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg"
//                     alt="img"
//                     width="300"
//                   />
//                   <div className="details">
//                     <h3 className="name">name</h3>
//                     <div className="meta">
//                       <p>₹ 234 </p>
//                       <p>Qty 1 </p>
//                       <p>Size: medium </p>
//                     </div>
//                   </div>
//                   <button onClick={() => removeFromCartHandler()}>
//                     <svg
//                       stroke="currentColor"
//                       fill="currentColor"
//                       stroke-width="0"
//                       viewBox="0 0 512 512"
//                       height="1em"
//                       width="1em"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="32"
//                         d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
//                       ></path>
//                       <path
//                         stroke-linecap="round"
//                         stroke-miterlimit="10"
//                         stroke-width="32"
//                         d="M80 112h352"
//                       ></path>
//                       <path
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="32"
//                         d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40m-64 64v224m-72-224l8 224m136-224l-8 224"
//                       ></path>
//                     </svg>
//                   </button>
//                 </div>
//                 <div className="cart-summary">
//                   <h4>Order summary</h4>
//                   <div>
//                     <button className="pay-btn">Checkout →</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Cart;










// import React, { createContext, useContext, useReducer } from "react";import "./cart.css";
// import { products } from "./product";
// import ContextCart from "./ContextCart";
// import reducer from "./reducer";

// // create a context
// export const CartContext = createContext();

// const initialState = {
//   item: products,
//   totalAmount: 25600,
//   totalItems: 0,
//   quantity: 1,
// };

// const Cart = () => {
//   // inPlace of useState we will use the useReducer Hook
//   // const [item, setItem] = useState(products);

//   const [state, dispatch] = useReducer(reducer, initialState);

//   const clearCart = () => {
//     return dispatch({ type: "CLEAR_CART" });
//   };

//   const removeItem = (id) => {
//     return dispatch({
//       type: "REMOVE_ITEM",
//       payload: id,
//     });
//   };

//   const increment = (id) => {
//     return dispatch({
//       type: "INCREMENT",
//       payload: id,
//     });
//   };

//   const decrement = (id) => {
//     return dispatch({
//       type: "DECREMENT",
//       payload: id,
//     });
//   };

//   return (
//     <>
//       <CartContext.Provider
//         value={{ ...state, clearCart, removeItem, increment, decrement }}
//       >
//         <ContextCart />
//       </CartContext.Provider>
//     </>
//   );
// };

// // custom Hook

// export const useGlobalContext = () => {
//   return useContext(CartContext);
// };

// export default Cart;
