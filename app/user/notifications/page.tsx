'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Bell,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

export default function NotificationsPage() {
  const [notifications] = useState([
    {
      id: 1,
      type: 'alert',
      title: 'System Update',
      message: 'The system will undergo maintenance in 2 hours.',
      time: '10 minutes ago',
      icon: AlertCircle,
      color: 'text-yellow-500',
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      message: 'You have received a new message from Admin.',
      time: '1 hour ago',
      icon: MessageSquare,
      color: 'text-blue-500',
    },
    {
      id: 3,
      type: 'success',
      title: 'Profile Updated',
      message: 'Your profile changes have been saved successfully.',
      time: '2 hours ago',
      icon: CheckCircle2,
      color: 'text-green-500',
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Meeting Reminder',
      message: 'Team meeting starts in 30 minutes.',
      time: '3 hours ago',
      icon: Clock,
      color: 'text-purple-500',
    },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button variant="outline">
          <Bell className="mr-2 h-4 w-4" />
          Mark all as read
        </Button>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <notification.icon
                className={`h-6 w-6 ${notification.color} mt-1`}
              />
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{notification.title}</h3>
                  <span className="text-sm text-gray-500">
                    {notification.time}
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{notification.message}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-6 flex justify-center">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  );
}