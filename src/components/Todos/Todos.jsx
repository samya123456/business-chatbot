import React, { useEffect } from 'react';
import './Todos.css';

const Todos = (props) => {
    //destruct state from props
    const { setState } = props
    // first time app mounts we want to run the useeffect function.  Blank array since no information is provided
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            // line 12 is an array
            const fiveFirstTodos = data.slice(0, 6)
            // take everything from old state ... and insert
            setState((state) => ({ ...state, todos: fiveFirstTodos}));
            // console.log(data));
});
     },
      []);

      // renderTodos is a variable - const - 
      const renderTodos = () => {
          return props.todos.map((todo) => {
           return  <li className="todo-widget-list-item" key={todo.id}>
                {todo.title}
            </li>;
          });
      };

    // console.log(props.state.todos)
    return (
        <div className="todos-widget">
        <ul className="todos-widget-list">
          {renderTodos()}
       </ul>

        </div>
      
    );
};

export default Todos
