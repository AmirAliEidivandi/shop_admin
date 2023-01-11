import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ICoupon from "./ICoupon";
import HttpService from "src/services/Http";
import Content from "../partials/Content";
import CouponsList from "./list";

const Coupons = () => {
    const httpService = useMemo(() => new HttpService(), []);
    const [coupons, setCoupons] = useState<ICoupon[]>([]);

    useEffect(() => {
        const fetchCoupons = () => {
            httpService
                .get<ICoupon[]>('api/v1/coupons')
                .then((res) => {
                    setCoupons(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetchCoupons();
    }, []);

    return (
        <Content title="کدهای تخفیف">
            <Link to={"/coupons/new"}>
                <Button variant="contained" color="primary">
                    ایجاد کد تخفیف
                </Button>
            </Link>
            <CouponsList items={coupons} />
        </Content>
    );
};

export default Coupons;
