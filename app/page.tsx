import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to Our Portal
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Choose your portal to get started. Access the admin dashboard or user
          interface based on your role.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/admin/dashboard">
            <Button size="lg">Admin Portal</Button>
          </Link>
          <Link href="/user/home">
            <Button size="lg" variant="outline">
              User Portal
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}