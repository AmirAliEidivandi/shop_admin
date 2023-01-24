import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import QueryStringManager from "query-string";
import CommentsList from "./list";
import IComment from "./IComment";
import HttpService from "@/services/Http";
import Content from "../partials/Content";
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

const Comments = () => {
    const classes = useStyles();
    const httpService = useMemo(() => new HttpService(), []);
    const [comments, setComments] = useState<IComment[]>([]);
    const [pagination, setPagination] = useState<IPagination | null>(null);
    const queryStringData: QueryStringInterface = useMemo(() => ({}), []);
    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
        const queryString = QueryStringManager.stringify(queryStringData);
        const fetchComments = () => {
            httpService
                .get<{ _metadata: IPagination; data: IComment[] }>(`api/v1/comments?${queryString}`)
                .then((res) => {
                    setComments(res.data.data);
                    setPagination(res.data._metadata);
                })
                .catch((err) => console.log(err));
        };
        fetchComments();
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
        <Content title="لیست دیدگاه ها">
            <CommentsList items={comments} />
            <Pagination color="primary" size="large" shape="rounded" className={classes.root} count={pagination?.totalPages} onChange={handlePagination} />
        </Content>
    );
};

export default Comments;
