const { createStore } = require("redux");

//acciones / actions
const INCREMENTAR = "incrementar";
const DECREMENTAR = "decremenatar";

//actionCreators
const incrementar = () => ({ type: INCREMENTAR });
const decrementar = () => ({ type: DECREMENTAR });

//estado inicial.
const initialState = 0;
//reducer
const contador = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case DECREMENTAR:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(contador);

store.subscribe(() => console.log(store.getState()));

store.dispatch(decrementar());
store.dispatch(decrementar());
store.dispatch(decrementar());
store.dispatch(decrementar());
store.dispatch(decrementar());
store.dispatch(decrementar());
