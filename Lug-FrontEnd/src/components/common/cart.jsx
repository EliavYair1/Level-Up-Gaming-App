import React, { Component } from "react";
import { connect } from "react-redux";
import cartImg from "../../images/cart.jpg";
// import { Link } from "react-router-dom";
import {
  addToCart,
  subtractFromCart,
  removeItemFromCart,
} from "../../Redux/cart/cart.actions";
import { Link } from "react-router-dom";
import userService from "../../services/userService";
class Cart extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    //update the user data into the state when the component runs
    this.setState({ user: userService.isUserLogged() });
  }
  handleRemove = (id) => {
    //remove item by id
    this.props.removeItemFromCart(id);
  };
  handleSubtract = (id) => {
    //substract item qty by id
    this.props.subtractFromCart(id);
  };

  render() {
    //taking the user data after update by "componentDidMount" from the state
    const { user } = this.state;
    //take the items and them total prices from the props

    const { items, total } = this.props;
    //create the shipping cost
    const shipping = Math.floor((total * 10) / 250);
    //if the cart is empty
    if (items.length === 0) {
      return (
        <div className="container min-vh-100 d-flex justify-content-center  ">
          <img
            src={cartImg}
            alt="shopping cart"
            className="align-self-center "
            style={{ width: "10em", height: "10em" }}
          />
          <h1 className="align-self-center"> Your Cart Is Empty</h1>;
        </div>
      );
    }
    return (
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th className="text-center">Price</th>
            <th className="text-center">Total</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td className="col-sm-8 col-md-6">
                  <div className="media d-flex">
                    <Link className="thumbnail pull-left" to="#">
                      {" "}
                      <img
                        className="media-object"
                        src={item.img}
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                        alt="bla bla"
                      />{" "}
                    </Link>
                    <div className="media-body ms-5">
                      <h4 className="media-heading mb-4">
                        <span>{item.title}</span>
                      </h4>
                      <h5 className="media-heading">
                        {" "}
                        by <Link to={`/store/${item.brand}`}>{item.brand}</Link>
                      </h5>
                    </div>
                  </div>
                </td>
                <td
                  className="col-sm-1 col-md-1"
                  // style={{ textAlign: "center" }}
                >
                  <strong className="ms-4">{item.qty}</strong>
                </td>
                <td className="col-sm-1 col-md-1 text-center">
                  <strong>$ {item.price}</strong>
                </td>
                <td className="col-sm-1 col-md-1 text-center">
                  <strong>$ {item.qty * item.price}</strong>
                </td>
                <td className="col-sm-1 col-md-1">
                  <button
                    type="button"
                    className="btn btn-danger me-2"
                    onClick={() => this.handleRemove(item.id)}
                  >
                    <span className="glyphicon glyphicon-remove" /> Remove
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => this.handleSubtract(item.id)}
                  >
                    <span className="glyphicon glyphicon-remove" /> subtract
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td>
              <h5>Estimated shipping</h5>
            </td>
            <td className="text-right">
              <h5>
                {!user?.biz ? (
                  <strong> {shipping}$</strong>
                ) : (
                  <strong>Free</strong>
                )}
              </h5>
            </td>
          </tr>
          <tr>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td>
              <h3>Total</h3>
            </td>
            <td className="text-right">
              <h3>
                {!user?.biz ? (
                  <strong>{total + shipping}$</strong>
                ) : (
                  <strong>{total}</strong>
                )}
              </h3>
            </td>
          </tr>
          <tr>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td>
              <button type="button" className="btn btn-default">
                <span className="glyphicon glyphicon-shopping-cart" /> Continue
                Shopping
              </button>
            </td>
            <td>
              <Link to="/checkout" className="btn btn-success">
                Checkout <span className="glyphicon glyphicon-play" />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeItemFromCart: (id) => dispatch(removeItemFromCart(id)),
    subtractFromCart: (id) => dispatch(subtractFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
