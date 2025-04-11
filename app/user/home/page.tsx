'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, FileText } from 'lucide-react';

export default function UserHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Welcome Back, User!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center">
            <Bell className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h3 className="font-semibold">New Notifications</h3>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <h3 className="font-semibold">Upcoming Events</h3>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <h3 className="font-semibold">Recent Documents</h3>
              <p className="text-2xl font-bold">5</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { title: 'Profile updated', time: '2 hours ago' },
              { title: 'Document shared', time: '5 hours ago' },
              { title: 'Comment added', time: '1 day ago' },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              New Document
            </Button>
            <Button className="w-full" variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Event
            </Button>
            <Button className="w-full" variant="outline">
              <Bell className="mr-2 h-4 w-4" />
              View Notifications
            </Button>
            <Button className="w-full" variant="outline">
              Profile Settings
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}