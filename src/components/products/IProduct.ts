import ProductStatus from "./ProductStatus";

export default interface IProduct {
    _id: string;
    title: string;
    price: number;
    discountedPrice: number;
    thumbnail?: string;
    gallery?: string[];
    category: string;
    attributes: object[];
    variations: object[];
    priceVariations: object[];
    createdAt: Date;
    updatedAt: Date;
    stock: number;
    status: ProductStatus;
}
