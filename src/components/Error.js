import React from 'react'

function Error() {
    const location = useLocation();
    const message = location.state?.message;
  
  
  
    return (
      <div className="m-0 p-0" style={{ backgroundColor: "#211C6A", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
  
        <div className="container p-4" >
  
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <div className="card p-5 " style={{ backgroundColor: "rgb(247, 247, 247)" }}>
                <span className="text-center fs-3 mt-2">{message}</span>
              </div>
  
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    );
}

export default Error