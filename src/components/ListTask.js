import React, { useState } from 'react';
import Task from './Task';

const ListTask = ({ tasks, onToggle }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task =>
    filter === 'done' ? task.isDone : filter === 'notDone' ? !task.isDone : true
  );

  return (
    <div>
      <h2>Tasks</h2>
      <div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="notDone">Not Done</option>
        </select>
      </div>
      <div>
        {filteredTasks.map(task => (
          <Task key={task.id} {...task} onToggle={onToggle} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
