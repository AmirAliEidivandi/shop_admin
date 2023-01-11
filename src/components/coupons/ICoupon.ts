import CouponStatus from "./CouponStatus";

export default interface ICoupon {
    id: string;
    code: string;
    percent: number;
    limit: number;
    used: number;
    expiresAt: string;
    constraints: any;
    status: CouponStatus.ACTIVE;
}
