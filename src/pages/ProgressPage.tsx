
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Trophy, TrendingUp, Clock, CheckCircle, Target, ArrowUpRight, Users, Video, BookOpen } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import AchievementCard from '@/components/progress/AchievementCard';

const studyHoursData = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 3.2 },
  { day: 'Wed', hours: 2.8 },
  { day: 'Thu', hours: 4.1 },
  { day: 'Fri', hours: 3.0 },
  { day: 'Sat', hours: 1.5 },
  { day: 'Sun', hours: 2.2 }
];

const courseProgressData = [
  { course: 'CS301', progress: 85 },
  { course: 'CS302', progress: 72 },
  { course: 'CS304', progress: 65 },
  { course: 'CS401', progress: 60 }
];

const ProgressPage = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Learning Progress</h1>
            <p className="text-campus-gray mt-1">Track your academic achievements and study patterns</p>
          </div>
          
          <div className="flex gap-2">
            <Button className="gap-2" variant="outline">
              <TrendingUp size={16} />
              <span>View Reports</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-campus-blue-lightest p-3 rounded-full mb-3">
                  <Trophy className="h-6 w-6 text-campus-blue" />
                </div>
                <h3 className="text-xl font-semibold text-campus-blue">87%</h3>
                <p className="text-sm text-campus-gray mt-1">Overall Completion</p>
                <Progress value={87} className="h-2 mt-3 w-full" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full mb-3">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-campus-blue">19.3 hrs</h3>
                <p className="text-sm text-campus-gray mt-1">Study Hours This Week</p>
                <div className="w-full flex items-center gap-1 mt-3">
                  <span className="text-xs text-green-600">+12%</span>
                  <Progress value={90} className="h-2 flex-1" />
                  <span className="text-xs text-campus-gray">20 hrs goal</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 p-3 rounded-full mb-3">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-campus-blue">24/30</h3>
                <p className="text-sm text-campus-gray mt-1">Tasks Completed</p>
                <Progress value={80} className="h-2 mt-3 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Course Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">Weekly Study Hours</CardTitle>
                <CardDescription>Your study time for the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={studyHoursData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="day" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                      <YAxis tick={{fontSize: 12}} axisLine={false} tickLine={false} domain={[0, 5]} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #E2E8F0',
                          borderRadius: '0.375rem',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                        }}
                        labelStyle={{fontWeight: 500, color: '#1a365d'}}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="#38a169" 
                        strokeWidth={2} 
                        dot={{r: 3, fill: '#38a169'}} 
                        activeDot={{r: 5}}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex justify-between items-center mt-4 border-t pt-4">
                  <div>
                    <p className="text-sm text-campus-gray">Study Streak</p>
                    <p className="text-campus-blue font-medium">7 days</p>
                  </div>
                  <div>
                    <p className="text-sm text-campus-gray">Weekly Average</p>
                    <p className="text-campus-blue font-medium">2.8 hrs/day</p>
                  </div>
                  <div>
                    <p className="text-sm text-campus-gray">Weekly Goal</p>
                    <p className="text-campus-blue font-medium">19.3 / 20 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-campus-blue">Course Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={courseProgressData}
                        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis dataKey="course" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                        <YAxis tick={{fontSize: 12}} axisLine={false} tickLine={false} domain={[0, 100]} />
                        <Tooltip
                          formatter={(value) => [`${value}%`, 'Progress']}
                          contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #E2E8F0',
                            borderRadius: '0.375rem',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                          }}
                          labelStyle={{fontWeight: 500, color: '#1a365d'}}
                        />
                        <Bar dataKey="progress" fill="#3182ce" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-campus-blue">Performance Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-campus-gray">Average Grade</span>
                      <span className="font-medium text-campus-blue">3.8/4.0 GPA</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-campus-gray">Assignment Completion</span>
                      <span className="font-medium text-campus-blue">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-campus-gray">Quiz Performance</span>
                      <span className="font-medium text-campus-blue">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-campus-gray">Class Attendance</span>
                      <span className="font-medium text-campus-blue">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-0">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-campus-blue">CS301: Algorithms</h3>
                    <p className="text-campus-gray text-sm mt-1">Prof. Johnson • MWF 10:00 AM</p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-campus-gray">Course Progress</span>
                        <span className="font-medium text-campus-blue">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Module 4: Graph Algorithms</h4>
                        <p className="text-xs text-campus-gray">Current module</p>
                      </div>
                      <ArrowUpRight className="text-campus-blue" size={18} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Assignment #3</span>
                        <span className="text-red-500">Due Today</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Quiz #4</span>
                        <span className="text-campus-gray">In 3 days</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Midterm Exam</span>
                        <span className="text-campus-gray">In 2 weeks</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-campus-blue">CS302: Database Systems</h3>
                    <p className="text-campus-gray text-sm mt-1">Dr. Williams • TR 1:00 PM</p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-campus-gray">Course Progress</span>
                        <span className="font-medium text-campus-blue">72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Module 3: SQL Queries</h4>
                        <p className="text-xs text-campus-gray">Current module</p>
                      </div>
                      <ArrowUpRight className="text-campus-blue" size={18} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Lab Work #5</span>
                        <span className="text-campus-gray">Due Tomorrow</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Project Milestone</span>
                        <span className="text-campus-gray">In 5 days</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Midterm Exam</span>
                        <span className="text-campus-gray">In 1 week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-campus-blue">CS304: Web Development</h3>
                    <p className="text-campus-gray text-sm mt-1">Prof. Chen • TR 10:00 AM</p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-campus-gray">Course Progress</span>
                        <span className="font-medium text-campus-blue">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Module 2: Frontend Frameworks</h4>
                        <p className="text-xs text-campus-gray">Current module</p>
                      </div>
                      <ArrowUpRight className="text-campus-blue" size={18} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Project Proposal</span>
                        <span className="text-green-500">Completed</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Coding Assignment #2</span>
                        <span className="text-campus-gray">In 4 days</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Quiz #3</span>
                        <span className="text-campus-gray">In 1 week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-campus-blue">CS401: Machine Learning</h3>
                    <p className="text-campus-gray text-sm mt-1">Dr. Patel • MWF 2:00 PM</p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-campus-gray">Course Progress</span>
                        <span className="font-medium text-campus-blue">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Module 2: Supervised Learning</h4>
                        <p className="text-xs text-campus-gray">Current module</p>
                      </div>
                      <ArrowUpRight className="text-campus-blue" size={18} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Lab Exercise</span>
                        <span className="text-campus-gray">In 2 days</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Research Paper Review</span>
                        <span className="text-campus-gray">In 1 week</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Project Milestone #1</span>
                        <span className="text-campus-gray">In 2 weeks</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="achievements">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <AchievementCard 
                title="Perfect Attendance"
                description="Attended all classes for 30 consecutive days"
                icon={<CheckCircle className="h-8 w-8 text-blue-500" />}
                progress={100}
                unlocked={true}
              />
              
              <AchievementCard 
                title="Study Streak"
                description="Studied for 7 days in a row"
                icon={<Target className="h-8 w-8 text-green-500" />}
                progress={100}
                unlocked={true}
              />
              
              <AchievementCard 
                title="Assignment Master"
                description="Completed 50 assignments on time"
                icon={<CheckCircle className="h-8 w-8 text-purple-500" />}
                progress={82}
                unlocked={false}
              />
              
              <AchievementCard 
                title="Quiz Champion"
                description="Score 90% or higher on 10 consecutive quizzes"
                icon={<Trophy className="h-8 w-8 text-yellow-500" />}
                progress={70}
                unlocked={false}
              />
              
              <AchievementCard 
                title="Group Leader"
                description="Lead 5 study groups successfully"
                icon={<Users className="h-8 w-8 text-red-500" />}
                progress={60}
                unlocked={false}
              />
              
              <AchievementCard 
                title="Early Bird"
                description="Complete 10 assignments ahead of schedule"
                icon={<Clock className="h-8 w-8 text-orange-500" />}
                progress={40}
                unlocked={false}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageWrapper>
  );
};

export default ProgressPage;
