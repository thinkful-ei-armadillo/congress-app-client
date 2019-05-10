import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

function DashboardRoute(props) {
  document.title = 'MyCongress';
  return (
    <section className="dashboard-section" data-cy='public'>
      <Dashboard />
    </section>
  );
}

export default DashboardRoute;
