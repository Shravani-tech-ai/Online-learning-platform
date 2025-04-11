'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Search, PlayCircle, BookOpen, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function UserCoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const enrolledCourses = [
    {
      id: 1,
      title: 'Advanced Web Development',
      progress: 65,
      lastAccessed: '2 days ago',
      totalLessons: 24,
      completedLessons: 16,
      duration: '12 weeks',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      progress: 30,
      lastAccessed: '5 days ago',
      totalLessons: 18,
      completedLessons: 5,
      duration: '8 weeks',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
    },
  ];

  const availableCourses = [
    {
      id: 3,
      title: 'Mobile App Development',
      instructor: 'Mike Wilson',
      duration: '10 weeks',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      id: 4,
      title: 'UI/UX Design Principles',
      instructor: 'Emma Davis',
      duration: '6 weeks',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Courses</h1>

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

      <Tabs defaultValue="enrolled" className="space-y-6">
        <TabsList>
          <TabsTrigger value="enrolled">Enrolled Courses</TabsTrigger>
          <TabsTrigger value="available">Available Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="enrolled" className="space-y-6">
          {enrolledCourses.map((course) => (
            <Card key={course.id} className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-64 h-48 overflow-hidden rounded-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <Button>
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Continue Learning
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Last Accessed</div>
                        <div className="font-medium">{course.lastAccessed}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Lessons</div>
                        <div className="font-medium">
                          {course.completedLessons} / {course.totalLessons}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500">Duration</div>
                        <div className="font-medium">{course.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="available" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availableCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Instructor: {course.instructor}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    Duration: {course.duration}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${course.price}</span>
                  <Button>Enroll Now</Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}