import React from "react";
import { Admin, Resource } from 'react-admin'
import crud from 'express-crud-router'

function App() {
  return (
    <Admin dataProvider={crud('/localhost:3500')}>
      <Resource name='Articles' />
    </Admin>
  );
}

export default App;
