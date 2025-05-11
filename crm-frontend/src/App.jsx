import Sidebar from './components/Sidebar';
import { Routes, Route, Navigate } from 'react-router-dom';
 import Dashboard from './pages/Dashboard';
 import CampaignCreate from './pages/CampaignCreate';
 import CampaignList from './pages/CampaignList';
 import GoogleAuth from './components/GoogleAuth';
import Login from './pages/Login';
import Register from './pages/Register';
 
 export default function App() {
   const [token, setToken] = React.useState(localStorage.getItem('token'));

   if (!token) return <Navigate to="/login" replace />;
   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

   return (
     <div className="flex">
       <Sidebar />
       <main className="ml-64 p-8 bg-gray-50 min-h-screen w-full">
         <Routes>
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/" element={<Dashboard />} />
           <Route path="/campaigns/new" element={<CampaignCreate />} />
           <Route path="/campaigns" element={<CampaignList />} />
         </Routes>
       </main>
     </div>
   );
 }