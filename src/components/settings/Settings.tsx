import { useEffect, useState, useMemo } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Content from "../partials/Content";
import SettingList from "./list";
import HttpService from "src/services/Http";
import ISetting from "./ISetting";

const Settings = () => {
    const httpService = useMemo(() => new HttpService(), []);
    const [settings, setSettings] = useState<ISetting[]>([]);

    useEffect(() => {
        const fetchSettings = () => {
            httpService
                .get<ISetting[]>("api/v1/settings")
                .then((res) => {
                    setSettings(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetchSettings();
    }, []);

    return (
        <Content title="لیست تنظیمات">
            <Link to={"/settings/new"}>
                <Button variant="contained" color="primary">
                    ایجاد تنظیمات
                </Button>
            </Link>
            <SettingList list={settings} />
        </Content>
    );
};

export default Settings;
