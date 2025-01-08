import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AadharForm from './components/AadharForm';
import SearchReportForm from './components/SearchReportForm';
import CaseStatus from './components/CaseStatus';
import Notifications from './components/Notifications';
import InteractiveMapPlaceholder from './components/InteractiveMapPlaceholder';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Notifications />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/aadhar" component={AadharForm} />
          <Route path="/search-report" component={SearchReportForm} />
          <Route path="/case-status" component={CaseStatus} />
          <Route path="/map" component={InteractiveMapPlaceholder} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;