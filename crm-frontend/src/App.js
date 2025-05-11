import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import routes from './routes';

// Destructure your page components for clearer JSX:
const {
  login: Login,
  dashboard: Dashboard,
  segmentBuilder: SegmentBuilder,
  segmentList: SegmentList,
  campaignList: CampaignList,
  campaignDetail: CampaignDetail,
  campaignForm: CampaignForm,
} = routes;

function PrivateRoute() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* public */}
          <Route path="/login" element={<Login />} />

          {/* protected */}
          <Route element={<PrivateRoute />}>
            <Route path="/segments/builder" element={<SegmentBuilder />} />
            <Route path="/segments" element={<SegmentList />} />
            <Route path="/campaigns/new" element={<CampaignForm />} />
            <Route path="/campaigns/:id" element={<CampaignDetail />} />
            <Route path="/campaigns" element={<CampaignList />} />
            <Route path="/" element={<Dashboard />} />
          </Route>

          {/* catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
