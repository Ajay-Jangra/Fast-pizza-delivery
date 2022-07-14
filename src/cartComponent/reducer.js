export const reducer = (state, action) => {

 switch (action.type) {

   case "REMOVE_ITEM":
     return {
       ...state,
       item: state.item.filter((currElem) => {
         return currElem.id !== action.payload;
       }),
     };

   case "REMOVE_ALL":
     return { ...state, item: [] };

   //  increaing in quantitty
   case "INCREASE_QUANTITY":
    { const updatedCart = state.item.map((currElem) => {
       if (currElem.id === action.payload) {
         return { ...currElem, quantity: currElem.quantity + 1 };
       }
       return currElem;
     });
     return { ...state, item: updatedCart };}

   //   decrement in quantity

   case "DECREASE_QUANTITY":
    { const updatedCart = state.item
      .map((currElem) => {
         if (currElem.id === action.payload) {
           return { ...currElem, quantity: currElem.quantity - 1 };
         }
         return currElem;
       })
       .filter((currElem) => {
         return currElem.quantity !== 0;
       });
     return { ...state, item: updatedCart };}

   //  total  no, of items and amount
   case "GET_TOTAL":
     let { totalItems, totalAmount } = state.item.reduce(
       (accum, curVal) => {
         let { quantity, regular } = curVal;

         let updatedTotalAmount = quantity * regular;
         accum.totalAmount += updatedTotalAmount;

         accum.totalItems += quantity;
         return accum;
       },
       {
         totalItems: 0,
         totalAmount: 0,
       }
     );
     return { ...state, totalItems, totalAmount };

   default:
     return state;
 }
};
