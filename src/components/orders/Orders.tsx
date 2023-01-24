import React, { useState, useEffect, useMemo } from "react";
import { Pagination } from "@material-ui/lab";
import { makeStyles, Theme } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import QueryStringManager from "query-string";
import IOrder from "./IOrder";
import OrdersList from "./list";
import Search from "../partials/Search";
import Content from "../partials/Content";
import HttpService from "@/services/Http";
import IPagination from "../contracts/IPagination";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(3),
            justifyContent: "center",
        },
    },
}));

interface QueryStringInterface {
    [key: string]: string | number;
}

const Orders = () => {
    const classes = useStyles();
    const httpService = useMemo(() => new HttpService(), []);
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [pagination, setPagination] = useState<IPagination | null>(null);
    const queryStringData: QueryStringInterface = useMemo(() => ({}), []);
    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
        const fetchOrders = () => {
            const queryString = QueryStringManager.stringify(queryStringData);
            httpService
                .get<{ _metadata: IPagination; data: IOrder[] }>(`api/v1/orders?${queryString}`)
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
        queryStringData.page = value;
        updateLocation();
    };
    const handleSearch = (keyword: string) => {
        queryStringData.keyword = keyword;
        delete queryStringData.page;
        updateLocation();
    };
    const updateLocation = () => {
        history({
            search: `?${QueryStringManager.stringify(queryStringData)}`,
        });
    };

    return (
        <Content title="لیست سفارش ها">
            <Search label="نام | ایمیل | شماره سفارش" onChange={handleSearch} />
            <OrdersList items={orders} />
            <Pagination color="primary" size="large" shape="rounded" className={classes.root} count={pagination?.totalPages} onChange={handlePagination} />
        </Content>
    );
};

export default Orders;
