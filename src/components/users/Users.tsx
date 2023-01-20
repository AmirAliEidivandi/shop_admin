import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import QueryStringManager from "query-string";
import IUser from "./IUser";
import UsersList from "./list";
import Content from "../partials/Content";
import HttpService from "src/services/Http";
import IPagination from "../contracts/IPagination";
import QueryStringInterface from "../contracts/QueryStringInterface";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(3),
            justifyContent: "center",
        },
    },
}));

const Users = () => {
    const classes = useStyles()
    const httpService = useMemo(() => new HttpService(), []);
    const [users, setUsers] = useState<IUser[]>([]);
    const [pagination, setPagination] = useState<IPagination | null>(null);
    const queryStringData: QueryStringInterface = useMemo(() => ({}), []);
    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
        const queryString = QueryStringManager.stringify(queryStringData);
        const fetchUsers = () => {
            httpService
                .get<{ _metadata: IPagination; data: IUser[] }>(`api/v1/users?${queryString}`)
                .then((res) => {
                    setUsers(res.data.data);
                    setPagination(res.data._metadata)
                })
                .catch((err) => console.log(err));
        };
        fetchUsers();
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
        <Content title="لیست کاربران">
            <UsersList items={users} />
            <Pagination color="primary" size="large" shape="rounded" className={classes.root} count={pagination?.totalPages} onChange={handlePagination} />
        </Content>
    );
};

export default Users;
