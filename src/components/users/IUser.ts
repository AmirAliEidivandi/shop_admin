export default interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    ordersCount: number;
    wallet: number;
    addresses: any;
    createdAt: string;
}
