import React from 'react';
import PrivateDashboard from '../components/Dashboard/PrivateDashboard';

function PrivateDashboardRoute(props) {
  return (
    <section className="dashboard-section" data-cy='private'>
      <PrivateDashboard />
    </section>
  );
}

export default PrivateDashboardRoute;
