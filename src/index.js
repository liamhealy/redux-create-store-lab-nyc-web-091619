// write your createStore function here
function createStore(reducer) {
  let state;

  return {
    dispatch: function(action) {
      state = reducer(state, action);
      render();
    },
    getState: function() {
      return state;
    }
  }
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

let store = createStore(candyReducer)
store.dispatch({type: "@@INIT"})

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch