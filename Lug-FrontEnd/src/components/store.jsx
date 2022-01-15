import { connect } from "react-redux";
import Product from "./product";
import { removeItemFromCart, addToCart } from "../Redux/cart/cart.actions";
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import StoreSideNav from "./storeSidenav";

class Store extends React.Component {
  // reducer function that take items by Id and add it as a props by click event
  handleClick = (id) => {
    this.props.addToCart(id);
  };
  //filter item from the items object and his "brand"
  filtered = this.props.items.filter((item) => item.brand === "store");

  render() {
    return (
      <>
        <div className="d-flex">
          {/* {side nav (playstation/nintendo / pc/xbox)} */}
          <StoreSideNav />
          <div className="container ">
            <SRLWrapper>
              <div className="row  justify-content-around">
                <div className="display-2 mt-2 text-center">Store</div>
                {this.filtered.map((item) => {
                  return (
                    <Product
                      key={item.id}
                      addToCart={() => this.handleClick(item.id)}
                      item={item}
                    />
                  );
                })}
              </div>
            </SRLWrapper>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    removeItemFromCart: (id) => {
      dispatch(removeItemFromCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
