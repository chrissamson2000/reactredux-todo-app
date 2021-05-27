import { createSlice } from "@reduxjs/toolkit";

const initialState = [];



const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {

    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      const newState= JSON.stringify(state);
      localStorage.setItem('state', newState);
      return state;
    },
    //Remove todos
    removeTodos: (state, action) => {
      const newState= JSON.stringify(state);
      localStorage.removeItem('state', newState);
      return state.filter((item) => item.id !== action.payload);
    },
    //Update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        const newState= JSON.stringify(state);
        localStorage.setItem('state', newState);
        return todo;
      });
    },
    //Completed
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        const newState= JSON.stringify(state);
        localStorage.setItem("state",newState)
        
        
        return todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;