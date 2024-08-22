const { createStore } = require("redux");

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

const initialState = {
  todo: [],
  filter: filters.all,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((x, i) =>
          i === action.payload ? { ...x, completed: true } : x
        ),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(setFilter(filter.completed));
store.dispatch(addTodo({ text: "primer todo" }));
