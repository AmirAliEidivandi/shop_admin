import AdviceToBuy from "./AdviceToBuy";
import CommentStatus from "./CommentStatus";

export default interface IComment {
    id: string;
    user: {
        firstName: string;
        lastName: string;
    };
    product: {
        id: string;
        title: string;
    };
    title: string;
    body: string;
    createdAt: string;
    isBuyer: boolean;
    adviceToBuy: AdviceToBuy;
    status: CommentStatus;
}
