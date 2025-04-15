'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Search, Plus, Pencil, Clock, Users, Trash2 } from 'lucide-react';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddCourseDialogOpen, setIsAddCourseDialogOpen] = useState(false);
  const [courses, setCourses] = useState<any[]>([]);

  // Form state for new course
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: '',
    price: 0,
    image: '',
  });

  // Fetch courses on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  // Filter courses based on search query
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddCourse = async () => {
    // Validate the input fields before proceeding
    if (!newCourse.title || !newCourse.description || !newCourse.instructor || !newCourse.duration || !newCourse.price) {
      alert('Please fill in all fields');
      return;
    }

    const response = await fetch('/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourse),
    });

    const addedCourse = await response.json();
    if (response.ok) {
      setCourses((prevCourses) => [...prevCourses, addedCourse]);
      setIsAddCourseDialogOpen(false); // Close the dialog after course is added
      setNewCourse({
        title: '',
        description: '',
        instructor: '',
        duration: '',
        price: 0,
        image: '',
      }); // Reset form
    } else {
      alert('Failed to add course');
    }
  };

  const handleDeleteCourse = async (courseId: number) => {
    // For now, we will only remove it from the UI. You can extend this to delete from the database later.
    setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setNewCourse({
      ...newCourse,
      [field]: e.target.value,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Courses</h1>
        <Dialog open={isAddCourseDialogOpen} onOpenChange={setIsAddCourseDialogOpen}>
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
                <Input
                  value={newCourse.title}
                  onChange={(e) => handleInputChange(e, 'title')}
                  placeholder="Enter course title"
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  value={newCourse.description}
                  onChange={(e) => handleInputChange(e, 'description')}
                  placeholder="Enter course description"
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Instructor</Label>
                  <Input
                    value={newCourse.instructor}
                    onChange={(e) => handleInputChange(e, 'instructor')}
                    placeholder="Instructor name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Price</Label>
                  <Input
                    type="number"
                    value={newCourse.price}
                    onChange={(e) => handleInputChange(e, 'price')}
                    placeholder="99.99"
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Duration</Label>
                  <Input
                    value={newCourse.duration}
                    onChange={(e) => handleInputChange(e, 'duration')}
                    placeholder="e.g., 8 weeks"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Course Image</Label>
                  <Input
                    type="file"
                    onChange={(e) => handleInputChange(e, 'image')}
                    className="mt-1"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsAddCourseDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="button" onClick={handleAddCourse}>Create Course</Button>
              </DialogFooter>
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
        {filteredCourses.map((course) => (
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
                <Button variant="outline" onClick={() => handleDeleteCourse(course.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
