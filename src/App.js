import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="App">
    <Routes>
      {routes.map(route => (<Route path={route.path} key={route.title} exact={route.exact} element={route.element} />))}
    </Routes>
    </div>
  );
}

export default App;
