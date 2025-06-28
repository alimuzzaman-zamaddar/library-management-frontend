import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const StudentProfileSettings: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('Profile');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.result) {
          setProfileImage(fileReader.result as string);
        }
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleImageRemove = () => {
    setProfileImage(null);
  };

  const onSubmit = (data: any) => {
    console.log('Form Submitted:', data);
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-10">
      <div>
        <h2>SETTINGS</h2>
        <p>Manage your account settings and preferences</p>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-6 border-b border-gray-200">
            {['Profile', 'Preferences', 'Billing', 'Privacy'].map((tab) => (
              <button
                key={tab}
                className={`${
                  activeTab === tab ? 'border-b-2 border-primary-blue text-primary-blue' : 'text-gray-600'
                } py-2 px-4 text-lg font-semibold`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          {activeTab === 'Profile' && (
            <>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Profile Settings</h2>
              <h3 className="text-xl text-gray-600 mb-3">Profile Information</h3>
              <p className="text-gray-500 mb-4">Update your personal information and public profile.</p>

              {/* Profile Picture */}
              <div className="mb-8 flex items-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex justify-center items-center">
                      <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Profile Picture</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="file-input"
                  />
                  <label
                    htmlFor="file-input"
                    className="text-sm text-primary-blue cursor-pointer hover:text-primary-green"
                  >
                    Change
                  </label>
                  {profileImage && (
                    <button
                      type="button"
                      onClick={handleImageRemove}
                      className="ml-4 text-sm text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex gap-4 mb-4">
                <div className="w-full">
                  <label htmlFor="firstName" className="block text-gray-600 mb-2">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors?.firstName?.message}</p>}
                </div>

                <div className="w-full">
                  <label htmlFor="lastName" className="block text-gray-600 mb-2">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="displayName" className="block text-gray-600 mb-2">Display Name</label>
                <input
                  id="displayName"
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  {...register('displayName', { required: 'Display name is required' })}
                />
                {errors.displayName && <p className="text-red-500 text-sm mt-1">{errors.displayName.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-blue text-white font-semibold rounded-md hover:bg-primary-green transition"
                >
                  Save Changes
                </button>
              </div>

              {/* Password Section */}
              <section className="mt-8">
                <h3 className="text-xl text-gray-600 mb-3">Change Password</h3>
                <p className="text-gray-500 mb-4">Update your password to keep your account secure.</p>

                <div className="mb-4">
                  <label htmlFor="currentPassword" className="block text-gray-600 mb-2">Current Password</label>
                  <input
                    id="currentPassword"
                    type="password"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    {...register('currentPassword', { required: 'Current password is required' })}
                  />
                  {errors.currentPassword && <p className="text-red-500 text-sm mt-1">{errors.currentPassword.message}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="newPassword" className="block text-gray-600 mb-2">New Password</label>
                  <input
                    id="newPassword"
                    type="password"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    {...register('newPassword', { required: 'New password is required' })}
                  />
                  {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmNewPassword" className="block text-gray-600 mb-2">Confirm New Password</label>
                  <input
                    id="confirmNewPassword"
                    type="password"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    {...register('confirmNewPassword', { required: 'Confirm your new password' })}
                  />
                  {errors.confirmNewPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmNewPassword.message}</p>}
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary-blue text-white font-semibold rounded-md hover:bg-primary-green transition"
                  >
                    Update Password
                  </button>
                </div>
              </section>
            </>
          )}

          {activeTab === 'Preferences' && (
            <div>
              <h3 className="text-xl text-gray-600 mb-3">Preferences Settings</h3>
              {/* Add Preferences content here */}
            </div>
          )}

          {activeTab === 'Billing' && (
            <div>
              <h3 className="text-xl text-gray-600 mb-3">Billing Settings</h3>
              {/* Add Billing content here */}
            </div>
          )}

          {activeTab === 'Privacy' && (
            <div>
              <h3 className="text-xl text-gray-600 mb-3">Privacy Settings</h3>
              {/* Add Privacy content here */}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default StudentProfileSettings;





















