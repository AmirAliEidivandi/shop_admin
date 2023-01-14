import { useState, useEffect, useMemo } from "react";
import Content from "../partials/Content";
import CommentsList from "./list";
import HttpService from "src/services/Http";
import IComment from "./IComment";

const Comments = () => {
    const httpService = useMemo(() => new HttpService(), []);
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        const fetchComments = () => {
            httpService
                .get<IComment[]>("api/v1/comments")
                .then((res) => {
                    setComments(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetchComments();
    }, []);

    return (
        <Content title="لیست دیدگاه ها">
            <CommentsList items={comments} />
        </Content>
    );
};

export default Comments;
