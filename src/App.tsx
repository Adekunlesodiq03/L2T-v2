/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Listings from './components/Listings';
import Dashboard from './components/Dashboard';
import PropertyDetails from './components/PropertyDetails';
import TenantLogin from './components/TenantLogin';
import LandlordLogin from './components/LandlordLogin';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Listings />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/login/tenant" element={<TenantLogin />} />
            <Route path="/login/landlord" element={<LandlordLogin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
