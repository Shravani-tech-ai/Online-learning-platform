'use client'; // Keep this as we use useState

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription, // Added for better accessibility/structure
  DialogFooter,     // Added for actions
} from '@/components/ui/dialog';
import { Label } from "@/components/ui/label"; // Good practice for forms
import { Search, Plus, Pencil, Trash2 } from 'lucide-react'; // Added Edit/Delete icons
import { Badge } from '@/components/ui/badge'; // Use Badge for status

// Define a User type for better type safety
type User = {
  id: number;
  name: string;
  email: string;
  role: 'User' | 'Admin'; // Use specific roles
  status: 'Active' | 'Inactive'; // Use specific statuses
};

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false); // Control dialog state

  // Sample data (replace with actual data fetching)
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active' },
  ]);

  // Filter users based on search query (case-insensitive)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddUser = () => {
    // Logic to add user (e.g., API call)
    console.log("Adding user...");
    // Example: Add a dummy user
    const newUser: User = {
      id: Date.now(), // Simple unique ID
      name: 'New User', // Get from dialog form
      email: 'new@example.com', // Get from dialog form
      role: 'User', // Get from dialog form
      status: 'Active'
    };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setIsAddUserDialogOpen(false); // Close dialog after adding
  };

  const handleDeleteUser = (userId: number) => {
     // Logic to delete user
     console.log("Deleting user:", userId);
     setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  }

  return (
    // Assuming parent layout provides the main page background (light/dark)
    <div className="p-4 md:p-6 lg:p-8"> {/* Added padding */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        {/* Use theme-aware text color */}
        <h1 className="text-3xl font-bold text-foreground">Users Management</h1>

        {/* Add User Dialog */}
        <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </DialogTrigger>
          {/* DialogContent uses theme variables for background/text */}
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Enter the details for the new user.
              </DialogDescription>
            </DialogHeader>
            {/* Form elements use theme variables */}
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" placeholder="John Doe" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="john@example.com" className="col-span-3" />
              </div>
              {/* Add Role/Status selection here if needed */}
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsAddUserDialogOpen(false)}>Cancel</Button>
              <Button type="submit" onClick={handleAddUser}>Create User</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search Input Section */}
      <div className="mb-6">
        <div className="relative">
           {/* Use theme-aware muted foreground color for icon */}
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          {/* Input uses theme variables */}
          <Input
            placeholder="Search by name, email, or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full sm:w-72" // Make search input wider on larger screens
          />
        </div>
      </div>

      {/* Table Section */}
       {/* Use Card styles for theme-aware background, border, text */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <Table>
          <TableHeader>
            {/* Use theme-aware muted foreground for header text */}
            <TableRow>
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Email</TableHead>
              <TableHead className="text-muted-foreground">Role</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground text-right">Actions</TableHead> {/* Align actions right */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  {/* TableCell text color inherited from text-card-foreground */}
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    {/* Use Shadcn Badge component for better styling & theme support */}
                    <Badge
                      variant={user.status === 'Active' ? 'default' : 'secondary'}
                      className={user.status === 'Active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border-green-300 dark:border-green-700/60'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800/60 dark:text-gray-300 border-gray-300 dark:border-gray-700/60'}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {/* Actions buttons - use icons */}
                    <Button variant="ghost" size="icon" className="mr-2">
                      <Pencil className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Edit User</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteUser(user.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" /> {/* Use destructive color */}
                       <span className="sr-only">Delete User</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  No users found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}