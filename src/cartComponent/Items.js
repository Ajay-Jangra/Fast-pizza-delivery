import React,{useContext} from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

 

import { DataContext } from "./Cart";
const Items =({id,image,name,regular,quantity})=>{
 

  const { removeItemHandler, increseItemQuantity, decreaseItemQuantity } =
    useContext(DataContext);
 

    return (
      <>
        <div className="cart-inner">
          <div className="cart-item">
            <img src={image} alt="img" width="300" />
            <div className="details">
              <h3 className="name">{name} </h3>
              <div className="meta">
                <p>₹{regular} </p>
                <div>
                  <h4 style={{ textAlign: "center", paddingBottom: "1rem" }}>
                    Qu.
                  </h4>
                  <div className="add-minus-quantity">
                    <button
                      type="submit"
                      style={{ marginLeft: "0rem" }}
                      onClick={() => {
                        decreaseItemQuantity(id);
                      }}
                    >
                      <RemoveIcon />
                    </button>
                    <input type="text" placeholder={quantity} />
                    <button
                      type="submit"
                      style={{ marginLeft: "0px" }}
                      onClick={() => {
                        increseItemQuantity(id);
                      }}
                    >
                      <AddIcon />
                    </button>
                  </div>
                </div>
                <p>
                  <select className="selectSize">
                    <option>medium</option>
                    <option>large</option>
                    <option>small</option>
                  </select>
                </p>
              </div>
            </div>
            <button onClick={() => removeItemHandler(id)}>
              <DeleteForeverIcon />
            </button>
          </div>
        </div>
      </>
    );
}
export default Items;