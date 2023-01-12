import ShipmentStatus from "./ShipmentStatus";
export default interface IShipment {
    id: string;
    employee: {
        firstName: string;
        lastName: string;
    };
    order: {
        id: string;
    };
    selectedDateTime: string;
    deliveredAt: string;
    note: string;
    status: ShipmentStatus;
}
