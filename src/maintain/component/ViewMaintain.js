import React, { useEffect, useState } from "react";
import MaintainService from "../service/MaintainService";
import Header from "../../Admin/Header";
import Footer from "../../Admin/Footer";
function ViewMaintain() {
  let service = new MaintainService();
  const [state, setState] = useState({ maintain_records: [] });
  useEffect(() => {
    service
      .viewMaintainRecords()
      .then((result) => setState({ maintain_records: result.data }))
      .catch((error) => alert(JSON.stringify(error)));
  }, []);

  return (
    <div>
      {sessionStorage.getItem("role") === "Administrator" ? (
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
              {state.maintain_records.length > 0 ? (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Maintain Id</th>
                      <th>User Name</th>
                      <th>Asset type</th>
                      <th>Asset manufacturer</th>
                      <th>Asset model</th>
                      <th>Asset source location</th>
                      <th>Asset destination location</th>
                      <th>Asset status</th>
                      <th>Asset Movement Date</th>
                      <th>Shipment Company Name</th>
                      <th>Shipment subLocation </th>
                      <th>Shipment company state</th>
                      <th>Shipmentcompany country</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      state.maintain_records.map(
                        (
                          man // start
                        ) => (
                          <tr>
                            <td>{man.maintenanceId}</td>
                            <td>{man.userName}</td>
                            <td>{man.assetType}</td>
                            <td>{man.assetManufacturer}</td>
                            <td>{man.assetModel}</td>
                            <td>{man.assetSourceLocation}</td>
                            <td>{man.assetDestinationLocation}</td>
                            <td>{man.assetStatus}</td>
                            <td>{man.assetMovementDate}</td>
                            <td>{man.shipmentCompanyName}</td>
                            <td>{man.shipmentSubLocation}</td>
                            <td>{man.shipmentCompanyState}</td>
                            <td>{man.shipmentCompanyCountry}</td>
                          </tr>
                        ) // end
                      ) // map closing
                    }
                  </tbody>
                </table>
              ) : (
                <span className="alert alert-danger">
                  No Records for Maintain
                </span>
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
                You should be a Administrator to access this page
              </p>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
export default ViewMaintain;
