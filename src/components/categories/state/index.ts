import AttributeGroupInterface from "../attribute/AttributeGroupInterface";

export interface CategoriesState {
    groups: AttributeGroupInterface[];
}

export interface Action {
    type: string;
    payload: any;
}

export const initState: CategoriesState = {
    groups: [
        {
            hash: "dalkfj038ajrfkjadffljaoer0ahff",
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
        default:
            throw new Error(`${action.type} is not defined in this state`);
    }
    return newState;
};
