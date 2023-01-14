import { useState, useEffect, useMemo } from "react";
import Content from "../partials/Content";
import UsersList from "./list";
import HttpService from "src/services/Http";
import IUser from "./IUser";

const Users = () => {
    const httpService = useMemo(() => new HttpService(), []);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchUsers = () => {
            httpService
                .get<IUser[]>("api/v1/users")
                .then((res) => {
                    setUsers(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetchUsers();
    }, []);
    return (
        <Content title="لیست کاربران">
            <UsersList items={users} />
        </Content>
    );
};

export default Users;
