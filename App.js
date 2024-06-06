import React from 'react';
import { Provider } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
