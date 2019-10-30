import { createStore } from 'redux';

const initialState = {
  count:0,
  message:"Let's Start"
};

const increment = (input,multiple) => {
  return input+multiple;
}
const decrement = (input) => {
  return input-1;
}

function rootReducer(state = initialState, action) {
  switch(action.type){
    case "INCREMENT":
      return {...state,
        count:increment(state.count,action.multiple)
      };
    case "DECREMENT":
      return {...state,
        count:decrement(state.count)
      };
    case "MESSAGE":
      return {...state,
        message:action.message
    };
    default:
      return state;
  }
};
const Store = createStore(rootReducer);
export default Store;