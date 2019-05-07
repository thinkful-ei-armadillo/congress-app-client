import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

function DashboardRoute(props) {
  return (
    <section className="dashboard-section" data-cy='public'>
      <Dashboard />
    </section>
  );
}

export default DashboardRoute;
