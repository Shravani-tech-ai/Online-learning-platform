'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, Bell, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/user/home', icon: Home },
    { name: 'My Courses', href: '/user/courses', icon: BookOpen },
    { name: 'Profile', href: '/user/profile', icon: User },
    { name: 'Notifications', href: '/user/notifications', icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card shadow-sm h-screen fixed">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">User Portal</h2>
            <ThemeToggle />
          </div>
          <nav className="mt-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center px-4 py-2 text-sm font-medium',
                    isActive
                      ? 'bg-muted text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-primary'
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 ml-64">
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}