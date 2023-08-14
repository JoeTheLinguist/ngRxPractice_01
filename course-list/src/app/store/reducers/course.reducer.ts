import { Action } from "@ngrx/store";
import { CourseAction, CourseActionType } from "../actions/course.action";
import { CourseItem } from "../models/courseItem.model";

const initialState: Array<CourseItem> = [
  {
    id: '1',
    department: 'Computer Engineering',
    name: 'C++ Programming',
  },
];
export function courseReducer(
  state: Array<CourseItem> = initialState,
  action: CourseAction
) {
  switch (action.type) {
    case CourseActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state as ActionReducer<CourseItemp[], Action>;
  }
}
