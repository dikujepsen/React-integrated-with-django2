



export default function SimpleReducer(reducerSpecific)
{
  return function (state = reducerSpecific.initialState, action) {
    switch (action.type) {
      case reducerSpecific.actionTypes.getAll:
        return reducerSpecific.dataList(action);
      case reducerSpecific.actionTypes.add:
        return [
          ...state,
          Object.assign({}, reducerSpecific.dataItem(action))
        ];

      case reducerSpecific.actionTypes.update:
        return [
          ...state.filter(dataItem => dataItem.id !== reducerSpecific.dataItem(action).id),
          Object.assign({}, reducerSpecific.dataItem(action))
        ];
      case reducerSpecific.actionTypes.delete:
        return [
          ...state.filter(dataItem => dataItem.id !== reducerSpecific.dataItem(action).id)
        ];

      default:
        return state;
    }
  }
}
