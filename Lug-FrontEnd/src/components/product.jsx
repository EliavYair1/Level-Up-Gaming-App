import React, { useState } from "react";
import StoreModel from "./storeModal";
import { SRLWrapper } from "simple-react-lightbox";
const Product = ({
  item: { title, price, desc, id, img, details },
  addToCart,
}) => {
  const [model, setModel] = useState(false);
  const [temporaryData, setTemporaryData] = useState([]);
  //function that runs on click info product
  const showModal = (img, title, description) => {
    let currentItem = [img, title, description];
    //sets the currentData to tempData to pass to storeModal
    setTemporaryData((item) => [1, ...currentItem]);
    //when the 'setmodal' in the state changes true - the popup shows
    return setModel(true);
  };
  //function to close the product popup
  const hideModal = () => {
    setTemporaryData([]);
    //when the setmodal in the state changes back to false - the popup will hide
    return setModel(false);
  };
  return (
    <>
      <div
        className="card col-md-6 mt-5 col-lg-6 col-xl-4 col-12 m-3 text-center border border-dark shadow-lg p-3 bg-body rounded"
        style={{ width: "20rem" }}
      >
        <SRLWrapper>
          <img src={img} className="card-img-top" alt={title} />
        </SRLWrapper>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-text text-dark mb-1">
            <i className="bi bi-tags  me-2 text-dark"></i>
            Price: {price}
            <span>
              <i className="bi bi-currency-dollar text-dark"></i>
            </span>
          </div>

          <div className="card-text amount mb-3">{desc}</div>

          <div className="buttons d-flex ">
            <button
              className="btn btn-primary me-4"
              onClick={() => showModal(img, title, details)}
            >
              Info <i className="bi bi-info-lg text-light "></i>
            </button>
            <button
              className="btn btn-success ms-3"
              onClick={() => addToCart(id)}
            >
              Add To
              <i className=" bi bi-cart text-light ms-1"></i>
            </button>
          </div>
        </div>
      </div>
      {model === true ? (
        //the pop show if the modal will output "true"
        <StoreModel
          img={temporaryData[1]}
          title={temporaryData[2]}
          info={temporaryData[3]}
          hideModal={hideModal}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Product;
