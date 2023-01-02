import IProduct from "../products/IProduct";

export default interface IOrderLines {
    count: number;
    createdAt: string;
    discountedPrice: number;
    price: number;
    product: IProduct;
}
