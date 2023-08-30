import { Tabs } from "../../shared/constant/constant";
import { FILTER_STATUS_CHANGE } from "../type";

interface FilterStateProps{
    status : Tabs
}

const initialState : FilterStateProps = {
    status : Tabs.ALL
}

export const filterReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case FILTER_STATUS_CHANGE:
            return {
                ...state,
                status : action.payload
            }
        default:
            return state;
    }
}
