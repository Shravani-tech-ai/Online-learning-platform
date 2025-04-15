// app/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/theme-toggle'; // Import the toggle

// Optional: Import icons if you have an icon library set up
// import { GraduationCap, Laptop, Target, CheckCircle2, Users, BookOpen, Award } from 'lucide-react';

export default function Home() {
  const platformName = "LearnSphere"; // Replace with your actual platform name

  return (
    // Apply dark mode classes to the main container background
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-slate-900 dark:via-black dark:to-indigo-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Position the Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto space-y-20">

        {/* Hero Section */}
        <div className="text-center pt-8 sm:pt-0"> {/* Added padding-top for mobile to avoid toggle overlap */}
          {/* Dark mode text color */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl">
            Unlock Your Potential with <span className="text-indigo-600 dark:text-indigo-400">{platformName}</span>
          </h1>
          {/* Dark mode text color */}
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl leading-8 text-gray-600 dark:text-gray-400">
            Master in-demand skills, achieve your career goals, and learn at your own pace with our comprehensive online courses designed by industry experts.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <Link href="/user/home">
              {/* Button styles should adapt via Shadcn's theme variables */}
              <Button size="lg" className="w-full sm:w-auto transition-transform duration-200 hover:scale-105">
                Start Learning Now
              </Button>
            </Link>
            <Link href="/admin/dashboard">
              <Button size="lg" variant="outline" className="w-full sm:w-auto transition-transform duration-200 hover:scale-105">
                Admin Portal Access
              </Button>
            </Link>
          </div>
        </div>

        {/* Separator - Use Shadcn's built-in dark mode support */}
        <Separator className="my-12 bg-gray-200 dark:bg-gray-800" />

        {/* Why Choose Us Section - Using Shadcn Cards */}
        <div className="text-center">
           {/* Dark mode text color */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Why Join <span className="text-indigo-600 dark:text-indigo-400">{platformName}</span>?
          </h2>
           {/* Dark mode text color */}
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide the tools, resources, and community support you need to succeed in today's fast-paced world.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Benefit Cards - Shadcn Cards handle dark mode via CSS variables */}
            {/* Card hover effects adjusted slightly for dark mode */}
            <Card className="text-center transition-all duration-300 hover:shadow-xl dark:hover:shadow-indigo-900/40 border dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700">
              <CardHeader>
                 {/* Optional Icon - adjust color if needed */}
                 {/* <GraduationCap className="h-12 w-12 text-indigo-500 dark:text-indigo-400 mx-auto mb-4" /> */}
                <CardTitle className="text-xl">Expert Instructors</CardTitle> {/* Handled by Card's theme */}
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400"> {/* Explicit dark text color */}
                  Learn from seasoned professionals and academics who bring real-world experience to every course.
                </p>
              </CardContent>
            </Card>
            {/* Repeat Card structure for other benefits, ensuring text colors have dark variants */}
             <Card className="text-center transition-all duration-300 hover:shadow-xl dark:hover:shadow-indigo-900/40 border dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700">
              <CardHeader>
                 {/* <Laptop className="h-12 w-12 text-indigo-500 dark:text-indigo-400 mx-auto mb-4" /> */}
                <CardTitle className="text-xl">Flexible Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Access courses anytime, anywhere, on any device. Learn at a schedule that fits your life.
                </p>
              </CardContent>
            </Card>
             <Card className="text-center transition-all duration-300 hover:shadow-xl dark:hover:shadow-indigo-900/40 border dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700">
              <CardHeader>
                 {/* <Target className="h-12 w-12 text-indigo-500 dark:text-indigo-400 mx-auto mb-4" /> */}
                <CardTitle className="text-xl">Career Advancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Gain practical, job-relevant skills and earn certificates to boost your resume and achieve goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12 bg-gray-200 dark:bg-gray-800" />

        {/* Our Specialities/Features Section */}
        <div>
           {/* Dark mode text color */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-center mb-12">
            What Makes Us Special
          </h2>
          <ul className="space-y-8 max-w-3xl mx-auto">
            {/* Feature List Items */}
            {/* Adjusted hover background for dark mode */}
            <li className="flex items-start gap-x-4 p-4 rounded-lg transition-colors hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30">
               {/* Icon color adjustment */}
              <div className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                 {/* Dark mode text color */}
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Interactive Course Content</h4>
                 {/* Dark mode text color */}
                <p className="text-gray-600 dark:text-gray-400 mt-1">Engage with quizzes, hands-on projects, and real-world case studies to solidify your learning.</p>
              </div>
            </li>
            {/* Repeat li structure for other features, ensuring dark mode text/icon colors */}
             <li className="flex items-start gap-x-4 p-4 rounded-lg transition-colors hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30">
              <div className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
               </div>
               <div>
                 <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Supportive Community</h4>
                 <p className="text-gray-600 dark:text-gray-400 mt-1">Connect with fellow learners and instructors in dedicated forums and discussion groups.</p>
               </div>
             </li>
             <li className="flex items-start gap-x-4 p-4 rounded-lg transition-colors hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30">
              <div className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
               </div>
               <div>
                 <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Wide Range of Topics</h4>
                 <p className="text-gray-600 dark:text-gray-400 mt-1">From tech and business to creative arts and personal development, find courses that match your interests.</p>
               </div>
             </li>
              <li className="flex items-start gap-x-4 p-4 rounded-lg transition-colors hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30">
               <div className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
               </div>
               <div>
                 <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Verifiable Certificates</h4>
                 <p className="text-gray-600 dark:text-gray-400 mt-1">Earn certificates upon course completion to showcase your new skills on LinkedIn and your resume.</p>
               </div>
             </li>
          </ul>
        </div>

         {/* Footer Note */}
          {/* Dark mode border and text */}
         <div className="text-center text-gray-500 dark:text-gray-500 text-sm pt-12 mt-12 border-t border-gray-200 dark:border-gray-800">
           Ready to transform your skills? Choose your path or explore our courses today.
           <p className="mt-2">© {new Date().getFullYear()} {platformName}. All rights reserved.</p>
         </div>

      </div>
    </div>
  );
}