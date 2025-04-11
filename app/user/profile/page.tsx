'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera } from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 col-span-2">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <Button
              variant={isEditing ? 'default' : 'outline'}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>First Name</Label>
                <Input
                  defaultValue="John"
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input
                  defaultValue="Doe"
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label>Email</Label>
              <Input
                type="email"
                defaultValue="john.doe@example.com"
                disabled={!isEditing}
                className="mt-1"
              />
            </div>

            <div>
              <Label>Phone</Label>
              <Input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                disabled={!isEditing}
                className="mt-1"
              />
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Account Status</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Member Since</span>
                <span className="font-medium">Jan 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Last Login</span>
                <span className="font-medium">2 hours ago</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Active
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Security Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Notification Preferences
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Connected Accounts
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}