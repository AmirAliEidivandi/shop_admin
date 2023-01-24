import { v4 as uuid } from "uuid";
import Action from "@/contracts/Action";
import AttributeGroupInterface from "../attribute/AttributeGroupInterface";

export interface CategoriesState {
    title: string;
    slug: string;
    groups: AttributeGroupInterface[];
}

export const initState: CategoriesState = {
    title: "",
    slug: "",
    groups: [
        {
            hash: uuid(),
            title: "مشخصات کلی",
            attributes: [],
        },
    ],
};

export const reducer = (state: CategoriesState, action: Action): CategoriesState => {
    let newState: CategoriesState;
    switch (action.type) {
        case "ADD_ATTRIBUTE_CATEGORI":
            newState = {
                ...state,
                groups: [
                    ...state.groups,
                    {
                        hash: action.payload.hash,
                        title: action.payload.title,
                        attributes: [],
                    },
                ],
            };
            break;
        case "ADD_ATTRIBUTE":
            newState = {
                ...state,
                groups: state.groups?.map((group) => {
                    if (group.hash === action.payload.groupID) {
                        return { ...group, attributes: [...group.attributes, action.payload.attribute] };
                    }
                    return group;
                }),
            };
            break;
        case "UPDATE_ATTRIBUTE":
            newState = {
                ...state,
                groups: state.groups.map((group) => {
                    const newAttributes = group.attributes?.map((attr) => {
                        if (attr.hash === action.payload.attributeID) {
                            return { ...attr, ...action.payload.data };
                        }
                        return attr;
                    });
                    group.attributes = newAttributes;
                    return group;
                }),
            };
            break;
        case "UPDATE_TITLE":
            newState = { ...state, title: action.payload.title };
            break;
        case "UPDATE_SLUG":
            newState = { ...state, slug: action.payload.slug };
            break;
        case "DELETE_ATTRIBUTE_GROUP":
            newState = {
                ...state,
                groups: state.groups?.filter((group) => group.hash !== action.payload.hash),
            };
            break;
        default:
            throw new Error(`${action.type} is not defined in this state`);
    }
    return newState;
};
