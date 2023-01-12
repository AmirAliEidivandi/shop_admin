import React, { useEffect, useState, useMemo } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "@material-ui/lab";
import QueryStringManager from "query-string";
import HttpService from "src/services/Http";
import IPagination from "../contracts/IPagination";
import IShipment from "./IShipment";
import Content from "../partials/Content";
import ShipmentsList from "./list";

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

const Shipments = () => {
    const classes = useStyles();
    const httpService = useMemo(() => new HttpService(), []);
    const [shipments, setShipments] = useState<IShipment[]>([]);
    const [pagination, setPagination] = useState<IPagination | null>(null);
    const queryStringData: QueryStringInterface = useMemo(() => ({}), []);
    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
        const fetchShipments = () => {
            const queryString = QueryStringManager.stringify(queryStringData);
            httpService
                .get<{ _metadata: IPagination; data: IShipment[] }>(`api/v1/shipments?${queryString}`)
                .then((res) => {
                    setShipments(res.data.data);
                    setPagination(res.data._metadata);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchShipments();
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
        <Content title="لیست مرسوله ها">
            <ShipmentsList items={shipments} />
            <Pagination color="primary" size="large" shape="rounded" className={classes.root} count={pagination?.totalPages} onChange={handlePagination} />
        </Content>
    );
};

export default Shipments;
