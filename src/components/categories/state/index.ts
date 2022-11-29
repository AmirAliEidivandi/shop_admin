import AttributeGroup from "../AttributGroup";

interface CategoriesState {
    groups: AttributeGroup[];
}

interface Action {
    type: string;
    payload: any;
}

export const initState: CategoriesState = {
    groups: [
        {
            title: "مشخصات کلی",
            attributes: [],
        },
    ],
};

export const reducer = (state: CategoriesState, action: Action): CategoriesState => {
    let newState: CategoriesState;
    switch (action.type) {
        case "ADD_ATTRIBUTE":
            newState = state;
            break;
        default:
            throw new Error(`${action.type} is not defined in this state`);
    }
    return newState;
};
