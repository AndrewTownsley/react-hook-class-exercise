import React, { Component } from "react";
import "./App.css";
// Import Components
//-----------------------------------------------------------------------------

function Todo({ todo }) {
  // Pass in the {todo} that will be created and rendered in the App Component
  return(
    <div className="todo">
      {todo.text}
    </div>
  );
};
 
 
//-----------------------------------------------------------------------------

function TodoForm({ addTodo }) {
    // Start with an empty state for an input field.
    // Be able to update the form by setting the state.
    // Handle the submit
    //
    // set your state like this...
    const [value, setValue] = React.useState('');
    // The first is the 'value', the second is how you will be setting the state.
    // The state starts off empty(""), and ands as you add things to your state, it will update the list of to-do items.

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!value) return;// If no input value is entered, do not create a todo item.
      addTodo(value);// When the input is submitted, create a todo with input.value;
      setValue('');// After the new todo has been created with the input.value, reset the input value to empty.
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)} />
      </form>
      // Add this Component to the return of the App function.
    );
}

//-----------------------------------------------------------------------------

function App() {
  // The first parameter(todos), is what we you will name your state.
  // The second parameter(setTodos) is what you are going to use to set the state.
  //------------------------------------------------------------------
  // The hook "useState"  is what React uses to hook into the state or lifecycle methods of the component.  You will then create an array of objects and you will have the beginnings of your state.
  const [todos, setTodos] = React.useState([
    {text: "Learn about React"},
    {text: "Build React App"},
    {text: "Finish Vanilla JS Apps"},
    // The Todo function will create the text of the above todos... 
  ])
  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
          // By using .map(), you will create a new array of items by mapping over the todo items from state and displaying them by index.
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;
