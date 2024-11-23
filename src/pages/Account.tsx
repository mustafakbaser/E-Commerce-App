import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Lock, LogOut, Settings, CreditCard } from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, New York, NY 10001",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <User size={20} className="text-gray-400" />
                  <input
                    type="text"
                    defaultValue={user.name}
                    disabled={!isEditing}
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <Mail size={20} className="text-gray-400" />
                  <input
                    type="email"
                    defaultValue={user.email}
                    disabled={!isEditing}
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <Phone size={20} className="text-gray-400" />
                  <input
                    type="tel"
                    defaultValue={user.phone}
                    disabled={!isEditing}
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <MapPin size={20} className="text-gray-400" />
                  <input
                    type="text"
                    defaultValue={user.address}
                    disabled={!isEditing}
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                {isEditing ? (
                  <>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Save Changes
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Security Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <Lock size={20} className="text-gray-400" />
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <Lock size={20} className="text-gray-400" />
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <Lock size={20} className="text-gray-400" />
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Update Password
              </button>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Payment Methods</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <CreditCard size={24} className="text-gray-400" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-600">Expires 12/24</p>
                  </div>
                </div>
                <button className="text-red-600 hover:text-red-700">Remove</button>
              </div>

              <button className="w-full px-4 py-2 border rounded-lg hover:bg-gray-50">
                Add New Payment Method
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <User size={20} />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'security' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <Lock size={20} />
              <span>Security</span>
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'payment' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <CreditCard size={20} />
              <span>Payment Methods</span>
            </button>
            <button className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;