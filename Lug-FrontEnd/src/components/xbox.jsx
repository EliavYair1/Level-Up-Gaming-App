import "./css components/storeSideNav.css";
import { connect } from "react-redux";
import Product from "./product";
import { addToCart } from "../Redux/cart/cart.actions";
import { SRLWrapper } from "simple-react-lightbox";
import StoreSideNav from "./storeSidenav";

const Xbox = ({ items, addToCart }) => {
  let filtered = items.filter((item) => item.brand === "xbox");
  const handleClick = (id) => {
    addToCart(id);
    // const { addToCart } = this.props;
  };
  return (
    <>
      <div className="d-flex">
        <StoreSideNav />
        <div className="container ">
          <div className="row text-center">
            <div className="text-danger display-1 mt-5 text-decoration-underline ">
              Xbox
            </div>
          </div>
          <SRLWrapper>
            <div className="row  justify-content-around">
              {filtered.map((item) => {
                return (
                  <Product
                    key={item.id}
                    item={item}
                    addToCart={() => handleClick(item.id)}
                  />
                );
              })}
            </div>
          </SRLWrapper>
        </div>
      </div>
    </>
  );
};

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
  };
};
const converter = connect(mapStateToProps, mapDispatchToProps);

export default converter(Xbox);
