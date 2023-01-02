import IOrderLines from "./IOrderLines";
import OrderStatus from "./OrderStatus";

export default interface IOrder {
    id: string;
    user: {
        firstName: string;
        lastName: string;
        email: string;
    };
    totalPrice: number;
    finalPrice: number;
    orderLines: IOrderLines[];
    deliveryAddress: object;
    coupon: string;
    createdAt: Date;
    updatedAt: Date;
    status: OrderStatus;
}
