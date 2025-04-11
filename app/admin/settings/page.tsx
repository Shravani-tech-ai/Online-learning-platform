'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Settings</h1>

      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">General Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Site Maintenance Mode</Label>
                <p className="text-sm text-gray-500">
                  Enable maintenance mode to prevent user access
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>User Registration</Label>
                <p className="text-sm text-gray-500">
                  Allow new users to register
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Email Settings</h2>
          <div className="space-y-4">
            <div>
              <Label>SMTP Host</Label>
              <Input placeholder="smtp.example.com" className="mt-1" />
            </div>
            <div>
              <Label>SMTP Port</Label>
              <Input placeholder="587" type="number" className="mt-1" />
            </div>
            <div>
              <Label>Email From Address</Label>
              <Input placeholder="noreply@example.com" type="email" className="mt-1" />
            </div>
            <Button>Save Email Settings</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-gray-500">
                  Require 2FA for admin accounts
                </p>
              </div>
              <Switch />
            </div>
            <div>
              <Label>Session Timeout (minutes)</Label>
              <Input placeholder="30" type="number" className="mt-1" />
            </div>
            <Button>Update Security Settings</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}