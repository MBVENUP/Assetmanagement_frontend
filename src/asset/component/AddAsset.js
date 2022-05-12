import Footer from "../../Admin/Footer";
import Header from "../../Admin/Header";
import ShipmentService from "../../shipment/service/ShipmentService";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

import Asset from "../model/Asset";
import AssetService from "../service/AssetService";

function AddAsset(){
    const [state, setState] = React.useState({asset:new Asset()})
    const [shipments, setShipments] = useState([]);
    const navigate=useNavigate();
    let service = new AssetService();
    let shipment_service=new ShipmentService();
    const [error, setError] = useState({
        
        user_nameError: "",
        asset_ManufacturerError: "",
        asset_modelError: "",
        asset_typeError: "",
        asset_statusError: "",
        asset_Movement_dateError: "",
        expected_delivery_dateError: "",
        asset_source_locationError: "",
        asset_destination_locationError: "",
        shipment_idError: "",
        
      })
    useEffect(() => {
        
          
            shipment_service.viewShipment()
                .then((result) => {
                    let shipments = result.data.map((shipment) => {
                        return { value: shipment.shipmentId, display: shipment.shipmentCompanyName };
                    });
                    setShipments(
                        [{ value: "-1", display: "Select Shipment company" }].concat(
                            shipments
                        ),
                    );
                }).catch((error) => {
                    alert(JSON.stringify("error: " + error));
                });
         
    }, [])
    return(
        <div>
            
            {sessionStorage.getItem('role')==='Administrator'  ?(
        <div>
            <Header />
        <div>
        <div style={{ backgroundImage: "url(/addAsset.jpg)", backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'650px',
        backgroundRepeat: 'no-repeat',
        backgroundColor:'transparent'}}>
    <h1  align='center'><span style={{color:'maroon'}} >Add Asset</span></h1> 
    <form >
        <table   align='center'>
            <tbody>
            <tr>
                <td>
                  <label style={{color:'black'}}  >User Name:</label>
                 </td>   
                 <td>   
                 <input  type="text" placeholder="Enter UserName"
                        value={state.asset.userName}
                         onChange={(e) => setState({ asset: { ...state.asset, userName: e.target.value } })}>
                     </input>
                     <span className="alert-danger">{error.user_nameError}</span>
                </td>
            </tr>
            <tr>
                <td>
                <label style={{color:'black'}} >Asset manufacturer:</label>
                </td>  
             <td>     
              <input  type="text" placeholder="Enter Assetmanufacturer"
                    value={state.asset.assetManufacturer}
                     onChange={(e) => setState({ asset: { ...state.asset, assetManufacturer: e.target.value } })} >
                </input>
                <span className="alert-danger">{error.asset_ManufacturerError}</span>
                </td>
            </tr> 
            <tr>
                <td> 
                   
                    <label style={{color:'black'}} >Asset model:</label>
                 </td>  
                 <td>        
                 <input  type="text" placeholder="Enter Assetmodel"
                          value={state.asset.assetModel}
                         onChange={(e) => setState({ asset: { ...state.asset, assetModel: e.target.value } })} >
                     </input>
                     <span className="alert-danger">{error.asset_modelError}</span>
                 </td>
            </tr>
            <tr>
                <td> 
        
                <label style={{color:'black'}} >Asset type:</label>
            </td>  
             <td> 

             <input  type="text" placeholder="Enter Asset type"
                value={state.asset.assetType}
                onChange={(e) => setState({ asset: { ...state.asset, assetType: e.target.value } })}>
                </input>
                <span className="alert-danger">{error.asset_typeError}</span>
             </td>
            </tr> 
          
            <tr>
            <td> 
            <label style={{color:'black'}} >Asset Status:</label>
        </td>  
        <td> 
        <input  type="text" placeholder="Enter Asset Status"
                value={state.asset.assetStatus}
                onChange={(e) => setState({ asset: { ...state.asset, assetStatus : e.target.value } })}>
               </input>
               <span className="alert-danger">{error.asset_statusError}</span>
         </td>
         </tr> 
          
        <tr>
         <td> 
        
              <label style={{color:'black'}} >Asset movement Date:</label>
        </td>  
         <td>
         <input  type="date" placeholder=" dd-mm-yyyy"
                value={state.asset.assetMovementDate}
                onChange={(e) =>{ setState({ asset: { ...state.asset,   assetMovementDate: e.target.value } })
                console.log(e.target.value)
                }}>
               </input>
               <span className="alert-danger">{error.asset_Movement_dateError}</span>
        </td>
        </tr> 
          
        <tr>
        <td> 
              <label style={{color:'black'}} >Expected delivery Date:</label>
        </td>  
         <td>
         <input  type="date" placeholder=" dd-mm-yyyy"
                value={state.asset.expectedDeliveryDate}
                onChange={(e) => setState({ asset: { ...state.asset,  expectedDeliveryDate: e.target.value } })}>
              </input>
              <span className="alert-danger">{error.expected_delivery_dateError}</span>
          </td>
          </tr> 
          
         <tr>
        <td> 
              <label style={{color:'black'}} >Asset Source Location:</label>
        </td>  
         <td>
         <input  type="text-light bg-success" placeholder="Enter Asset Source Location"
                value={state.asset.assetSourceLocation}
                onChange={(e) => setState({ asset: { ...state.asset, assetSourceLocation: e.target.value } })}>
                 </input>
                 <span className="alert-danger">{error.asset_source_locationError}</span>
        </td>
        </tr> 
          
        <tr>
        <td> 
       
             <label style={{color:'black'}} >Asset Destination Location:</label>
        </td>  
        <td>
        <input  type="text-success" placeholder="Enter Asset Destination Location"
                value={state.asset.  assetDestinationLocation}
                onChange={(e) => setState({ asset: { ...state.asset, assetDestinationLocation: e.target.value } })}>
            </input>
            <span className="alert-danger">{error.asset_destination_locationError}</span>
         </td>
         </tr>
         <tr>
         <td> 
               <label style={{color:'black'}}  >Shipment</label>
        </td>  
        <td>
        <select  type="text-danger" placeholder="Enter ShipmentId"
                value={state.asset.shipmentId}
                onChange={(e) => setState({ asset: { ...state.asset, shipmentId: e.target.value } })}>
                      {shipments.map((shipment) => (
                                    <option key={shipment.value} value={shipment.value}>
                                        {shipment.display}
                                    </option>
                                ))}
              
               
               </select>
               <span className="alert-danger">{error.shipment_idError}</span>
        </td>
        </tr>  
                    
        <tr>
        <td>
        <button type="button" className="btn btn-success"   onClick={
                (event) => {
                    event.preventDefault();
                    let isValid = true;
                    let err = {};
                   
                    if (!state.asset.userName) {
                        isValid = false;
                        err.user_nameError = "*User Name is Required";                        
                    }
                   

                    if (!state.asset.assetManufacturer) {
                        isValid = false;
                        err.asset_ManufacturerError = "*Manufacturer is required";
                    }

                    if (!state.asset.assetModel) {
                        isValid = false;
                        err.asset_modelError = "*Please enter asset model";
                    
                    }
                   

                    if (!state.asset.assetType) {
                        isValid = false;
                        err.asset_typeError = "*Enter asset type";
                    }
                   

                    if (!state.asset.assetStatus) {
                        isValid = false;
                        err.asset_statusError = "*Enter asset status";
                    }

                    if (!state.asset.assetMovementDate) {
                        isValid = false;
                        err.asset_Movement_dateError = "*Enter the asset movement date";
                    }


                    if (!state.asset.expectedDeliveryDate) {
                        isValid = false;
                        err.expected_delivery_dateError= "*Enter the expected delivery date";
                    }

                    if (!state.asset.assetSourceLocation) {
                        isValid = false;
                        err.asset_source_locationError = "*Enter the source location";
                    }
                   

                    
                    if (!state.asset.assetDestinationLocation) {
                        isValid = false;
                        err.asset_destination_locationError = "*Enter the destnation location";
                    }
                    if (!state.asset.shipmentId) {
                        isValid = false;
                        err.shipment_idError = "*Select the Shipment Company";
                    }


                    if (!isValid) {
                        setError(err);
                        return false;
                    }
                    // add method will return Promise
                    service.addAsset(state.asset).then((result) => {
                       alert(result.data);
                       setState({ asset: new Asset() });
                       
                   }).catch((error) => {
                     alert(JSON.stringify(error))
                       
                   })

                   }
            }>Add Asset</button>
        </td>
        </tr> 
        </tbody>
        </table>
    </form>
  
</div>
</div>
<Footer />
</div>
) :  (
    <div>
        <Header/>
<div className="card text-white bg-danger mb-3" >
<div className="card-header">Warning</div>
<div className="card-body">
  <h5 className="card-title">Unauthorized Access</h5>
  <p className="card-text">You should be a Administrator to access this page</p>
</div>
</div>
<Footer/>
</div>) }
        
</div>
    );
}
export default AddAsset;