import { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, makeStyles, Theme } from "@material-ui/core";
import QueryStringManager from "query-string";
import ICoupon from "./ICoupon";
import HttpService from "src/services/Http";
import Content from "../partials/Content";
import CouponsList from "./list";
import QueryStringInterface from "../contracts/QueryStringInterface";
import IPagination from "../contracts/IPagination";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(3),
            justifyContent: "center",
        },
    },
}));

const Coupons = () => {
    const classes = useStyles();
    const httpService = useMemo(() => new HttpService(), []);
    const [coupons, setCoupons] = useState<ICoupon[]>([]);
    const [pagination, setPagination] = useState<IPagination | null>(null);
    const queryStringData: QueryStringInterface = useMemo(() => ({}), []);
    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
        const queryString = QueryStringManager.stringify(queryStringData);
        const fetchCoupons = () => {
            httpService
                .get<{ _metadata: IPagination; data: ICoupon[] }>(`api/v1/coupons?${queryString}`)
                .then((res) => {
                    setCoupons(res.data.data);
                    setPagination(res.data._metadata);
                })
                .catch((err) => console.log(err));
        };
        fetchCoupons();
    }, [location]);
    const handlePagination = (e: React.ChangeEvent<unknown>, value: number) => {
        queryStringData.page = value;
        updateLocation();
    };
    const updateLocation = () => {
        history({
            search: `?${QueryStringManager.stringify(queryStringData)}`,
        });
    };

    return (
        <Content title="کدهای تخفیف">
            <Link to={"/coupons/new"}>
                <Button variant="contained" color="primary">
                    ایجاد کد تخفیف
                </Button>
            </Link>
            <CouponsList items={coupons} />
            <Pagination color="primary" size="large" shape="rounded" className={classes.root} count={pagination?.totalPages} onChange={handlePagination} />
        </Content>
    );
};

export default Coupons;
