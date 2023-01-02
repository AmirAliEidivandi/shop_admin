import React, { useState, useEffect, useMemo } from "react";
import { Pagination } from "@material-ui/lab";
import { makeStyles, Theme } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import HttpService from "src/services/Http";
import OrdersList from "./list";
import IOrder from "./IOrder";
import Content from "../partials/Content";
import IPagination from "../contracts/IPagination";
import Search from "../partials/Search";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(3),
            justifyContent: 'center'
        },
    },
}));

const Orders = () => {
    const classes = useStyles();
    const httpService = useMemo(() => new HttpService(), []);
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [pagination, setPagination] = useState<IPagination | null>(null);
    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
        const queryString = new URLSearchParams(location.search);
        const fetchOrders = () => {
            httpService
                .get<{ _metadata: IPagination; data: IOrder[] }>(`api/v1/orders?page=${queryString.get("page")}`)
                .then((res) => {
                    setOrders(res.data.data as IOrder[]);
                    setPagination(res.data._metadata);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchOrders();
    }, [location]);

    const handlePagination = (e: React.ChangeEvent<unknown>, value: number) => {
        history({
            pathname: location.pathname,
            search: `?page=${value}`,
        });
    };

    const handleSearch = (keyword: string) => {
        console.log(keyword)
    }

    return (
        <Content title="لیست سفارش ها">
            <Search label="نام | ایمیل | شماره سفارش" onChange={handleSearch} />
            <OrdersList items={orders} />
            <Pagination color="primary" size="large" shape="rounded" className={classes.root} count={pagination?.totalPages} onChange={handlePagination} />
        </Content>
    );
};

export default Orders;
