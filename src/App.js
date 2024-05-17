import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { addTask, toggleTask } from './store/actions';

const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (description) => {
    dispatch(addTask(description));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTask onAdd={handleAddTask} />
      <ListTask tasks={tasks} onToggle={handleToggleTask} />
    </div>
  );
};

export default App;
