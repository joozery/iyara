import React from 'react';
import Sidebar from './sidebar';
import Body from './body';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Body />
    </div>
  );
};

export default Dashboard;
