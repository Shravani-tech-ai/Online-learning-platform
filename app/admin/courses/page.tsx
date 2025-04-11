'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Search, Plus, Pencil, Clock, Users } from 'lucide-react';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Advanced Web Development',
      description: 'Learn modern web development techniques and best practices.',
      instructor: 'John Smith',
      duration: '12 weeks',
      enrolled: 156,
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      description: 'Introduction to data analysis and machine learning.',
      instructor: 'Sarah Johnson',
      duration: '8 weeks',
      enrolled: 89,
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Courses</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Course
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Course</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label>Course Title</Label>
                <Input placeholder="Enter course title" className="mt-1" />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea placeholder="Enter course description" className="mt-1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Instructor</Label>
                  <Input placeholder="Instructor name" className="mt-1" />
                </div>
                <div>
                  <Label>Price</Label>
                  <Input type="number" placeholder="99.99" className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Duration</Label>
                  <Input placeholder="e.g., 8 weeks" className="mt-1" />
                </div>
                <div>
                  <Label>Course Image</Label>
                  <Input type="file" className="mt-1" />
                </div>
              </div>
              <Button className="w-full">Create Course</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <Button variant="outline" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {course.enrolled} students
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">${course.price}</span>
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}