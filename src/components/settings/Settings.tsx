import { useEffect, useState, useMemo } from "react";
import { Button, makeStyles, Theme } from "@material-ui/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "@material-ui/lab";
import QueryStringManager from "query-string";
import SettingList from "./list";
import ISetting from "./ISetting";
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

const Settings = () => {
    const classes = useStyles();
    const httpService = useMemo(() => new HttpService(), []);
    const [settings, setSettings] = useState<ISetting[]>([]);
    const [pagination, setPagination] = useState<IPagination | null>(null);
    const queryStringData: QueryStringInterface = useMemo(() => ({}), []);
    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
        const fetchSettings = () => {
            const queryString = QueryStringManager.stringify(queryStringData);
            httpService
                .get<{ _metadata: IPagination; data: ISetting[] }>(`api/v1/settings?${queryString}`)
                .then((res) => {
                    setSettings(res.data.data);
                    setPagination(res.data._metadata);
                })
                .catch((err) => console.log(err));
        };
        fetchSettings();
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
        <Content title="لیست تنظیمات">
            <Link to={"/settings/new"}>
                <Button variant="contained" color="primary">
                    ایجاد تنظیمات
                </Button>
            </Link>
            <SettingList list={settings} />
            <Pagination color="primary" size="large" shape="rounded" className={classes.root} count={pagination?.totalPages} onChange={handlePagination} />
        </Content>
    );
};

export default Settings;
