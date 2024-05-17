const initialState = {
    tasks: []
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTask = {
          id: state.tasks.length + 1,
          description: action.payload.description,
          isDone: false
        };
        return {
          ...state,
          tasks: [...state.tasks, newTask]
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
          )
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  