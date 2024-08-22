const { createStore, combineReducers } = require("redux");

const filters = {
  all: "All",
  completed: "COMPLETED",
  incompleted: "INCOMPLETED",
};

const SET_FILTER = "SET_FILTER";
const ADD_TODO = "ADD_TODO";
const COMPLETED_TODO = "COMPLETED_TODO";

const setFilter = (payload) => ({ type: SET_FILTER, payload });
const addTodo = (payload) => ({ type: ADD_TODO, payload });
const completeTodo = (payload) => ({ type: COMPLETED_TODO, payload });

/* const initialState = {
  todo: [],
  filter: filters.all,
};
 */
const filterReducer = (state = filters.all, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload].concat(state); //truco para concadenar al inicio.
    case COMPLETED_TODO:
      return state.map((x, i) =>
        i === action.payload ? { ...x, completed: true } : x
      );
    default:
      return state;
  }
};

const reducer = combineReducers({
  fitler: filterReducer,
  todos: todosReducer,
});
/* const reducer = (state = {}, action) => {
  return {
    filter: filterReducer(state.filter, action),
    todos: todosReducer(state.todos, action),
  }; */

/*  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload].concat(state.todos), //truco para concadenar al inicio.
      };
    case COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map((x, i) =>
          i === action.payload ? { ...x, completed: true } : x
        ),
      };
    default:
      return state;
  } */

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo({ text: "primer todo" }));
store.dispatch(setFilter(filters.completed));
