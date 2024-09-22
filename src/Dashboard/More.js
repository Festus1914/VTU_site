import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Wifi, Tv, Zap, GraduationCap, CreditCard, ArrowUp, List, Users, User, Building2, Mail, ClipboardList, Bell, LogOut } from 'lucide-react';
import { auth } from '../components/Auth/firebase';

const IconButton = ({ Icon, label, color, onClick }) => (
  <div className="flex flex-col items-center transition-transform transform hover:scale-105" onClick={onClick}>
    <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mb-2 shadow-lg`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <span className="text-sm text-gray-700">{label}</span>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const paymentServices = [
    { Icon: Phone, label: 'Airtime', color: 'bg-green-500' },
    { Icon: Wifi, label: 'Data', color: 'bg-green-500' },
    { Icon: Tv, label: 'Cable TV', color: 'bg-green-500' },
    { Icon: Zap, label: 'Electricity', color: 'bg-green-500' },
    { Icon: GraduationCap, label: 'Exam Pins', color: 'bg-pink-500' },
    { Icon: CreditCard, label: 'Data Pin', color: 'bg-pink-500' },
    { Icon: Phone, label: 'Airtime Swap', color: 'bg-pink-500' },
    { Icon: ArrowUp, label: 'Add Fund', color: 'bg-pink-500' },
  ];

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Logged out successfully');
      navigate('/login'); 
    } catch (error) {
      console.error('Logout Error', error);
    }
  };

  const others = [
    { Icon: List, label: 'Pricing', color: 'bg-blue-500' },
    { Icon: Users, label: 'Referrals', color: 'bg-blue-500' },
    { Icon: User, label: 'Profile', color: 'bg-blue-500' },
    { Icon: Building2, label: 'Agent', color: 'bg-blue-500' },
    { Icon: Mail, label: 'Contact', color: 'bg-orange-500' },
    { Icon: ClipboardList, label: 'History', color: 'bg-orange-500' },
    { Icon: Bell, label: 'Notification', color: 'bg-orange-500' },
    { Icon: LogOut, label: 'Logout', color: 'bg-orange-500', onClick: handleLogout },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Payment Services Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {paymentServices.map((service, index) => (
            <IconButton key={index} {...service} />
          ))}
        </div>
      </div>
      
      {/* Other Services Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Others</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {others.map((item, index) => (
            <IconButton key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;