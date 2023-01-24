import { useState, useEffect, useMemo } from "react";
import { Pagination } from "@material-ui/lab";
import { makeStyles, Theme } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import QueryStringManager from "query-string";
import IPayment from "./IPayment";
import PaymentsList from "./list";
import HttpService from "@/services/Http";
import Content from "../partials/Content";
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

const Payments = () => {
    const classes = useStyles();
    const httpService = useMemo(() => new HttpService(), []);
    const queryStringData: QueryStringInterface = useMemo(() => ({}), []);
    const [payments, setPayments] = useState<IPayment[]>([]);
    const [pagination, setPagination] = useState<IPagination | null>(null);
    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
        const fetchPayments = () => {
            const queryString = QueryStringManager.stringify(queryStringData);
            httpService
                .get<{ _metadata: IPagination; data: IPayment[] }>(`api/v1/payments?${queryString}`)
                .then((res) => {
                    setPayments(res.data.data);
                    setPagination(res.data._metadata);
                })
                .catch((err) => console.log(err));
        };
        fetchPayments();
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
        <Content title="لیست پرداخت ها">
            <PaymentsList items={payments} />
            <Pagination color="primary" size="large" shape="rounded" className={classes.root} count={pagination?.totalPages} onChange={handlePagination} />
        </Content>
    );
};

export default Payments;
