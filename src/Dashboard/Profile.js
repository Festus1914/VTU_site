import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, MapPin, Copy, ChevronRight } from 'lucide-react';
import { auth, db } from '../components/Auth/firebase'; // Updated import
import { doc, getDoc, setDoc } from 'firebase/firestore';

const ProfileComponent = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [profileData, setProfileData] = useState(null);

  const tabs = ['Profile', 'Password', 'Pin'];

  useEffect(() => {
    const fetchProfileData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid); // Updated to db
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      }
    };
    fetchProfileData();
  }, []);

  const handlePasswordUpdate = async () => {
    if (newPassword === confirmPassword) {
      try {
        await auth.currentUser.updatePassword(newPassword);
        console.log('Password updated successfully');
      } catch (error) {
        console.error('Error updating password:', error);
      }
    } else {
      console.error('New passwords do not match');
    }
  };

  const handlePinUpdate = async () => {
    if (newPin === confirmPin) {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid); // Updated to db
        await setDoc(docRef, { pin: newPin }, { merge: true });
        console.log('PIN updated successfully');
      }
    } else {
      console.error('New PINs do not match');
    }
  };

  if (!profileData) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className="flex flex-col sm:flex-row border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-3 px-4 text-center font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          {activeTab === 'Profile' && (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Account Details</h2>
                  <p className="text-sm text-gray-600">Manage your information</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                  Edit Profile
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: User, label: 'Name', value: profileData.name },
                  { icon: Mail, label: 'Email', value: profileData.email },
                  { icon: Phone, label: 'Phone', value: profileData.phone },
                  { icon: MapPin, label: 'State', value: profileData.state },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg transition-all duration-200 hover:bg-gray-100">
                    <Icon className="text-blue-500" size={20} />
                    <div>
                      <p className="text-xs font-medium text-gray-500">{label}</p>
                      <p className="text-sm font-semibold text-gray-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-4 text-white">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold">Referral Program</h3>
                  <button className="bg-white text-blue-600 py-1 px-3 rounded-full text-xs font-medium hover:bg-opacity-90 transition-colors flex items-center">
                    View Commission <ChevronRight size={14} className="ml-1" />
                  </button>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-2 flex items-center">
                  <input 
                    type="text" 
                    value={profileData.referralLink} 
                    readOnly 
                    className="flex-grow bg-transparent outline-none text-white text-sm px-2"
                  />
                  <button className="bg-white text-purple-600 p-1 rounded-md hover:bg-opacity-90 transition-colors">
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Password' && (
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800">Change Password</h2>
              <input
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="mt-4 p-2 border border-gray-300 rounded-md w-full"
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded-md w-full"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded-md w-full"
              />
              <button
                onClick={handlePasswordUpdate}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                Update Password
              </button>
            </div>
          )}

          {activeTab === 'Pin' && (
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800">Change PIN</h2>
              <input
                type="text"
                placeholder="Old PIN"
                value={oldPin}
                onChange={(e) => setOldPin(e.target.value)}
                className="mt-4 p-2 border border-gray-300 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="New PIN"
                value={newPin}
                onChange={(e) => setNewPin(e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Confirm New PIN"
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded-md w-full"
              />
              <button
                onClick={handlePinUpdate}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                Update PIN
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;