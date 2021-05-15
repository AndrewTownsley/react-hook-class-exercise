import React, { Component } from "react";
import "./App.css";
// Import Components
//-----------------------------------------------------------------------------

function Todo({ todo, index, completeTodo, removeTodo }) {// This creates the Todo ITEM, which displays the INDIVIDUAL TODO ITEM.
  // Pass in the {todo} that will be created and rendered in the App Component
  return(
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}} 
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
      <div>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
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
    {text: "Learn about React",
  isCompleted: false},
    {text: "Build React App",
  isCompleted: false},
    {text: "Finish Vanilla JS Apps",
  isCompleted: false},
    // The Todo function will create the text of the above todos... 
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text}]; // The spread(...) operator adds the current todos list onto the newly created todo.
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];// get the current list of todos...
    newTodos[index].isCompleted = true;// change the state of the selected Todo to "completed" 
    setTodos(newTodos);// render the todo list again with the updated state of "completed" on the selected todo.
}

  const removeTodo = (index) => {
    // get the current list of todos...
    const newTodos = [...todos];
    // remove the selected todo from the list with .splice()
    newTodos.splice(index, 1);
    // render the todo list again with the selected Todo removed from the list.
    setTodos(newTodos);
  }
//------------------------------------------------------------------------------------------------
  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
          // By using .map(), you will create a new array of items by mapping over the todo items from state and displaying them by index.
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;
