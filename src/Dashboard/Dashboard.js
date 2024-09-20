import React, { useState, useEffect } from 'react';
import { Phone, Wifi, Tv, Zap, GraduationCap, BarChart2, Users, Plus, PhoneCall, AlertCircle, Eye, EyeOff, Home, User, History, MoreHorizontal, Menu, X } from 'lucide-react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import { auth } from '../components/Auth/firebase'; 
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Profile from './Profile'


// Initialize Firestore
const firestore = getFirestore();

// Custom Component Definitions
const Card = ({ children, className, ...props }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>{children}</div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>{children}</div>
);

const Button = ({ children, className, variant = 'default', ...props }) => {
  const baseStyle = "px-4 py-2 rounded-md transition-colors";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent hover:bg-gray-100",
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>{children}</button>
  );
};

const Avatar = ({ src, alt, fallback, className, ...props }) => (
  <div className={`w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ${className}`} {...props}>
    {src ? (
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    ) : (
      <span className="text-lg font-semibold">{fallback}</span>
    )}
  </div>
);

const Progress = ({ value, className, ...props }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`} {...props}>
    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${value}%` }}></div>
  </div>
);

const DashboardItem = ({ icon: Icon, label, color, onClick, amount }) => (
  <Card className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 cursor-pointer" onClick={onClick}>
    <CardContent className="flex flex-col items-center space-y-2">
      <div className={`p-3 rounded-full ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <span className="text-sm font-medium">{label}</span>
      {amount && <span className="text-xs font-semibold text-gray-500">₦{amount.toLocaleString()}</span>}
    </CardContent>
  </Card>
);

const NotificationBadge = ({ count }) => (
  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
    {count}
  </div>
);

const Sidebar = ({ onNavigate, isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 left-0 w-64 bg-white shadow-lg min-h-screen p-6 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:w-10 md:shadow-none`}>
      <h2 className="text-xl font-semibold mb-6">Navigation</h2>
      <ul className="space-y-4">
        <li>
          <button onClick={() => { onNavigate('home'); toggleSidebar(); }} className="flex items-center space-x-2 text-gray-800 hover:bg-gray-100 p-2 rounded-md">
            <Home size={20} />
            <span>Home</span>
          </button>
        </li>
        <Link to="/profile">
  <li>
    <button 
      onClick={() => { 
        onNavigate('Profile'); 
        toggleSidebar(); 
      }} 
      className="flex items-center space-x-2 text-gray-800 hover:bg-gray-100 p-2 rounded-md"
    >
      <User size={20} />
      <span>Profile</span>
    </button>
  </li>
</Link>
        <li>
          <button onClick={() => { onNavigate('history'); toggleSidebar(); }} className="flex items-center space-x-2 text-gray-800 hover:bg-gray-100 p-2 rounded-md">
            <History size={20} />
            <span>History</span>
          </button>
        </li>
        <li>
          <button onClick={() => { onNavigate('more'); toggleSidebar(); }} className="flex items-center space-x-2 text-gray-800 hover:bg-gray-100 p-2 rounded-md">
            <MoreHorizontal size={20} />
            <span>More</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [walletBalance, setWalletBalance] = useState(5000);
  const [bonusBalance, setBonusBalance] = useState(200);
  const [notifications, setNotifications] = useState(3);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [showBalance, setShowBalance] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Fetch user data from Firestore
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(firestore, "users", auth.currentUser.uid); // Assuming user ID is the document ID
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserName(userData.firstName); // Update the state with the fetched first name
          // Update other states as necessary
          setWalletBalance(userData.walletBalance || walletBalance);
          setBonusBalance(userData.bonusBalance || bonusBalance);
          setNotifications(userData.notifications || notifications);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();

    // Simulating fetching transaction history
    const mockHistory = [
      { date: '2024-08-01', amount: 5000 },
      { date: '2024-08-02', amount: 4800 },
      { date: '2024-08-03', amount: 5200 },
      { date: '2024-08-04', amount: 5100 },
      { date: '2024-08-05', amount: 4900 },
      { date: '2024-08-06', amount: 5300 },
    ];
    setTransactionHistory(mockHistory);
  }, []);

  const handleNavigate = (section) => {
    setActiveSection(section);
    console.log(`${section} section clicked`);
  };

  const handleServiceClick = (service) => {
    console.log(`${service} clicked`);
  };

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle('sidebar-open', !isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Mobile Sidebar Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className="md:hidden p-2 fixed top-4 left-4 z-50 bg-white shadow-lg rounded-full">
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <Sidebar onNavigate={handleNavigate} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Dashboard Content */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen pb-20 p-6 md:ml-64">
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-b-3xl shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <Avatar fallback={userName.charAt(0)} />
              <div>
                <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
                <p className="text-sm">Manage your account and explore the services.</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="relative">
                <Phone size={20} />
                {notifications > 0 && <NotificationBadge count={notifications} />}
              </button>
              <button className="relative">
                <AlertCircle size={20} />
                {notifications > 0 && <NotificationBadge count={notifications} />}
              </button>
            </div>
          </div>
        </header>

        <main className="mt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Your Balance</h2>
            <button onClick={toggleBalanceVisibility} className="text-sm font-medium text-gray-600 hover:text-gray-800 flex items-center space-x-1">
              {showBalance ? <EyeOff size={16} /> : <Eye size={16} />}
              <span>{showBalance ? 'Hide' : 'Show'} Balance</span>
            </button>
          </div>
          <Card className="p-6 mt-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Wallet Balance</h3>
                <p className="text-2xl font-bold text-gray-900">{showBalance ? `₦${walletBalance.toLocaleString()}` : '••••••'}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Bonus Balance</h3>
                <p className="text-2xl font-bold text-gray-900">{showBalance ? `₦${bonusBalance.toLocaleString()}` : '••••••'}</p>
              </div>
            </div>
          </Card>

          <div className="mt-8 grid grid-cols-2 md:grid-rows-2 lg:grid-cols-3 gap-6">
            <DashboardItem icon={Wifi} label="Data Subscription" color="bg-blue-500" onClick={() => handleServiceClick('Data Subscription')} />
            <DashboardItem icon={Phone} label="Airtime Top-up" color="bg-green-500" onClick={() => handleServiceClick('Airtime Top-up')} />
            <DashboardItem icon={Tv} label="TV Subscription" color="bg-orange-500" onClick={() => handleServiceClick('TV Subscription')} />
            <DashboardItem icon={Zap} label="Electricity Bill" color="bg-yellow-500" onClick={() => handleServiceClick('Electricity Bill')} />
            <DashboardItem icon={GraduationCap} label="Exam Results" color="bg-indigo-500" onClick={() => handleServiceClick('Exam Results')} />
            <DashboardItem icon={BarChart2} label="Wallet History" color="bg-pink-500" onClick={() => handleServiceClick('Wallet History')} />
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">Transaction History</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={transactionHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;