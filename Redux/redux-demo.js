const redux = require("redux");

//reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    //return a new state
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

//store
const Store = redux.createStore(counterReducer);

//subscriber or component
const counterSubscriber = () => {
  const latestState = Store.getState();
  console.log(latestState);
};

//making the store aware of the subscriber function
Store.subscribe(counterSubscriber);

//Dispatch an action
Store.dispatch({ type: "increment" });
Store.dispatch({ type: "decrement" });
