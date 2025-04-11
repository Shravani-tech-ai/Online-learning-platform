'use client';

import { Card } from '@/components/ui/card';
import { ArrowUpRight, Users, Bell, Settings } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      name: 'Total Users',
      value: '1,234',
      change: '+12%',
      icon: Users,
    },
    {
      name: 'Active Sessions',
      value: '456',
      change: '+5%',
      icon: Bell,
    },
    {
      name: 'System Health',
      value: '98%',
      change: '+1%',
      icon: Settings,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <stat.icon className="h-8 w-8 text-gray-600" />
              <span className="text-green-500 flex items-center text-sm">
                {stat.change}
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </span>
            </div>
            <h2 className="text-2xl font-bold mt-4">{stat.value}</h2>
            <p className="text-gray-600 mt-1">{stat.name}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">User Registration</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
                <span className="text-blue-500 text-sm">View</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">System Status</h3>
          <div className="space-y-4">
            {['Database', 'API', 'Storage'].map((service) => (
              <div key={service} className="flex items-center justify-between py-2 border-b">
                <span>{service}</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Operational
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}