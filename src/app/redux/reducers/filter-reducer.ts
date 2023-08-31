import { Tabs } from '../../shared/constant/constant';
import * as ACTION_TYPES from '../type';

interface FilterStateProps {
  status: Tabs;
}

const initialState: FilterStateProps = {
  status: Tabs.ALL,
};

export const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.FILTER_STATUS_CHANGE:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
