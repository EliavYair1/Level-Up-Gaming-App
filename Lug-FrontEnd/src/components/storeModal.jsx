// open when the user click on the info button on the item in the store (popup)

const StoreModel = ({ img, title, info, hideModal }) => {
  let modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  return (
    <>
      <div className="modal show fade " style={modalStyle}>
        <div className="modal-dialog">
          <div className="modal-content col-8 ">
            <div className="modal-header ">
              <h5 className="modal-title ms-5">{title}</h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={hideModal}
              />
            </div>
            <div className="row d-flex justify-content-center">
              <img src={img} className="modal-img img-fluid" alt="" />
            </div>
            <div className="modal-body">{info}</div>
            <div className="container-fluid flex-wrap ">
              <div className="col-8 modal-footer  ">
                <button
                  type="button"
                  className="btn btn-lg btn-secondary"
                  onClick={hideModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreModel;
