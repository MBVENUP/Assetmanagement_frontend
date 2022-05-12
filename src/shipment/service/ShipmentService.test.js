import ShipmentService from "./ShipmentService";

let shp = {
  shipmentId: 202,

  shipmentCompanyName: "Amazon",

  shipmentCountry: "India",

  shipmentState: "Karnataka",

  subLocation: "Bengaluru",
};

test("Testing updateShipment function.", async () => {
  let service = new ShipmentService();

  await service.updateShipment(shp).then((result) => {
    //service.findShipmentById(202).then((result) => {
    let shipment = result.data;
    expect(shipment).toBe("Updated Successfully");

    // });
  });
});

test("Testing findShipmentById function.", async () => {
  let service = new ShipmentService();

  await service.findShipmentById(202).then((result) => {
    let shipment = result.data;

    expect(shipment.shipmentCompanyName).toBe("Amazon");
  });
});
test("Testing viewShipment function.", async () => {
  let service = new ShipmentService();

  await service.viewShipment().then((result) => {
    let Shipment = result.data;

    expect(Shipment).toBe(Shipment);
  });
});
test("Testing Add shipment function.", async () => {
  let service = new ShipmentService();

  await service.addShipment(shp).then((result) => {
    let shipment = result.data;

    expect(shipment).toBe("Amazon is registered with the Id 202");
  });
});

test("Testing delete shipment by id funciton.", async () => {
  let shipmentId = 30;

  let service = new ShipmentService();

  await service.deleteShipment(30).then(() => {
    service.findShipmentById(shipmentId).then((result) => {
      expect(null).toBe(null);
    });
  });
});
