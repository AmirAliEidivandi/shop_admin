import PaymentStatus from "./PaymentStatus";

export default interface IPayment {
    id: string;
    user: {
        firstName: string;
        lastName: string;
        email: string;
    };
    order: {
        id: string;
    };
    amount: number;
    method: string;
    reserve: string;
    reference: string;
    createdAt: Date;
    updatedAt: Date;
    status: PaymentStatus;
}
