import React, { useState, useEffect } from 'react';
import { Phone, Wifi, Tv, Zap, GraduationCap, BarChart2, Users, Plus, PhoneCall, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';

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

const Dashboard = () => {
  const [userName, setUserName] = useState("Oladotun");
  const [walletBalance, setWalletBalance] = useState(5000);
  const [bonusBalance, setBonusBalance] = useState(200);
  const [notifications, setNotifications] = useState(3);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [showBalance, setShowBalance] = useState(false);

  useEffect(() => {
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

  const handleServiceClick = (service) => {
    console.log(`${service} clicked`);
  };

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen pb-20">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Avatar fallback={userName[0]} />
            <div>
              <h1 className="text-xl font-bold">Hi, {userName}</h1>
              <p className="text-sm opacity-80">Premium Subscriber</p>
            </div>
          </div>
          <div className="text-right relative">
            <button className="p-2 bg-white bg-opacity-20 rounded-full">
              <AlertCircle className="h-6 w-6" />
              <NotificationBadge count={notifications} />
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-end">
          <div>
            <p className="text-sm opacity-80">Wallet Balance</p>
            <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleBalanceVisibility}>
              <p className={`text-3xl font-bold ${showBalance ? '' :'p-2 rounded'}`}>
                {showBalance ? `₦${walletBalance.toLocaleString()}` : '*****'}
              </p>
              {showBalance ? <EyeOff className="text-white" /> : <Eye className="text-white" />}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs opacity-80">Bonus: ₦{bonusBalance.toLocaleString()}</p>
          <Progress value={bonusBalance / 1000 * 100} className="h-1 mt-1" />
        </div>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardContent>
            <h2 className="text-lg font-semibold mb-4">Balance Trend</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={transactionHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Quick Actions</h2>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => handleServiceClick('Add Money')}>
              <Plus className="mr-2 h-4 w-4" /> Add Money
            </Button>
            <Button variant="outline" onClick={() => handleServiceClick('Contact Us')}>
              <PhoneCall className="mr-2 h-4 w-4" /> Contact Us
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <DashboardItem icon={Phone} label="Buy Airtime" color="bg-pink-500" onClick={() => handleServiceClick('Buy Airtime')} amount={1000} />
          <DashboardItem icon={Wifi} label="Buy Data" color="bg-blue-500" onClick={() => handleServiceClick('Buy Data')} amount={2000} />
          <DashboardItem icon={Tv} label="Cable TV" color="bg-green-500" onClick={() => handleServiceClick('Cable TV')} amount={3000} />
          <DashboardItem icon={Zap} label="Electricity" color="bg-yellow-500" onClick={() => handleServiceClick('Electricity')} amount={1500} />
          <DashboardItem icon={GraduationCap} label="Exam Pin" color="bg-purple-500" onClick={() => handleServiceClick('Exam Pin')} />
          <DashboardItem icon={BarChart2} label="Stats" color="bg-red-500" onClick={() => handleServiceClick('Stats')} />
          <DashboardItem icon={Users} label="Refer a Friend" color="bg-teal-500" onClick={() => handleServiceClick('Refer a Friend')} />
        </div>

        <Card className="mt-6">
          <CardContent>
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            <div>
              {transactionHistory.map((transaction, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div className="text-sm text-gray-600">{transaction.date}</div>
                  <div className="font-semibold text-gray-800">₦{transaction.amount.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;