import React, { useEffect, useState } from "react";
import AssetService from "../service/AssetService";
import { Link } from "react-router-dom";
import Header from "../../Warehouse Manager/Header";
import Footer from "../../Warehouse Manager/Footer";

function WareHouseViewAsset() {
  let service = new AssetService();
  const [state, setState] = useState({ assets: [] });
  useEffect(() => {
    service
      .viewAsset()
      .then((result) => setState({ assets: result.data }))
      .catch((error) => alert(JSON.stringify(error)));
  }, []);
  return (
    <div>
      {sessionStorage.getItem("role") === "Warehouse manager" ? (
        <div>
          <Header></Header>
          <div
            style={{
              backgroundImage: "url(/mist.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "650px",
              backgroundRepeat: "no-repeat",
              backgroundColor: "transparent",
            }}
          >
            <div className="mt-3">
              {state.assets.length > 0 ? (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Asset Id</th>
                      <th>User Name</th>
                      <th>Asset model</th>
                      <th>Asset manufacturer</th>
                      <th>Asset status</th>
                      <th>Asset type</th>
                      <th>Asset Movement Date</th>
                      <th>Expected delivery date</th>
                      <th>Asset source location</th>
                      <th>Asset destination location</th>
                      <th>Shipment Id</th>
                      <th colSpan={2} align="center">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      state.assets.map(
                        (
                          as // start
                        ) => (
                          <tr>
                            <td>{as.assetId}</td>
                            <td>{as.userName}</td>
                            <td>{as.assetManufacturer}</td>
                            <td>{as.assetModel}</td>
                            <td>{as.assetType}</td>
                            <td>{as.assetStatus}</td>
                            <td>{as.assetMovementDate}</td>
                            <td>{as.expectedDeliveryDate}</td>
                            <td>{as.assetSourceLocation}</td>
                            <td>{as.assetDestinationLocation}</td>
                            <td>{as.shipmentId}</td>

                            <td>
                              <Link
                                className="btn btn-warning"
                                to={{
                                  pathname: `/WarehouseManager/UpdateAsset/${as.assetId}`,
                                }}
                              >
                                Update
                              </Link>
                            </td>
                          </tr>
                        ) // end
                      ) // map closing
                    }
                  </tbody>
                </table>
              ) : (
                <span className="alert alert-danger">No asset Present</span>
              )}
            </div>
          </div>
          <Footer></Footer>
        </div>
      ) : (
        <div>
          <Header />
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Warning</div>
            <div className="card-body">
              <h5 className="card-title">Unauthorized Access</h5>
              <p className="card-text">
                You should be a Warehouse manager to access this page
              </p>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
export default WareHouseViewAsset;
