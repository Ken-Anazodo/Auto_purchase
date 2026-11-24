'use client'

import React from 'react'
import BackButton from '@/components/BackButton'
import ProfileDetailsForm from '@/components/ProfileDetailsForm'
import NotificationsSettings from '@/app/(dashboard)/admin/settings/components/NotificationsSettings'
import SecuritySettings from '@/app/(dashboard)/admin/settings/components/SecuritySettings'
import AccountActions from '@/app/(dashboard)/admin/settings/components/AccountActions'

const ProfilePage = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <BackButton/>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-xl font-medium text-autobuy-neutral-1">Profile & Settings</h1>
          <p className="text-sm text-autobuy-neutral-2">Manage your personal information, security, and preferences.</p>
        </div>

        {/* Profile Details Section */}
        <ProfileDetailsForm />
      </div>

      {/* Notifications Section */}
      <main className="container mx-auto pb-10 mt-10">
        <NotificationsSettings />
      </main>

      {/* Security & Account Actions Sections */}
      <main className="container mx-auto pb-10 space-y-10">
        <SecuritySettings />
        <AccountActions />
      </main>
    </div>
  )
}

export default ProfilePage