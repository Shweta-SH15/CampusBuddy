
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Bell, Calendar, CheckSquare, Clock, ArrowRight, BookOpen, Trophy, BarChart3, Users, Video } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const DailySummaryPage = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Daily Summary</h1>
            <p className="text-campus-gray mt-1">Tuesday, October 17 • Week 7 of Fall Semester</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar size={16} />
              <span>View Calendar</span>
            </Button>
            <Button variant="outline" className="gap-2">
              <Bell size={16} />
              <span>Notifications</span>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-campus-blue">Today at a Glance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-campus-blue" />
                      <span>Schedule</span>
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-16 text-center">
                          <span className="text-sm font-medium text-campus-blue">10:00 AM</span>
                        </div>
                        <div className="flex-1 bg-blue-50 rounded-md p-3 border-l-4 border-campus-blue">
                          <h4 className="font-medium">CS301: Algorithms</h4>
                          <p className="text-xs text-campus-gray mt-1">Science Building, Room 301</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-16 text-center">
                          <span className="text-sm font-medium text-campus-blue">1:00 PM</span>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-md p-3 border-l-4 border-campus-gray">
                          <h4 className="font-medium">CS302: Database Systems</h4>
                          <p className="text-xs text-campus-gray mt-1">Engineering Hall, Room 205</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-16 text-center">
                          <span className="text-sm font-medium text-campus-blue">3:30 PM</span>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-md p-3 border-l-4 border-campus-gray">
                          <h4 className="font-medium">Study Group Meeting</h4>
                          <p className="text-xs text-campus-gray mt-1">Library, Study Room 4</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-campus-blue" />
                      <span>Due Today</span>
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-md">
                        <div>
                          <h4 className="font-medium">CS301 Assignment #3</h4>
                          <p className="text-xs text-campus-gray mt-0.5">Due at 11:59 PM</p>
                        </div>
                        <Button size="sm" variant="outline" className="gap-1">
                          <ArrowRight size={12} />
                          <span>View</span>
                        </Button>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <div>
                          <h4 className="font-medium">CS302 Reading Quiz</h4>
                          <p className="text-xs text-campus-gray mt-0.5">Due at 12:00 PM</p>
                        </div>
                        <Button size="sm" variant="outline" className="gap-1">
                          <ArrowRight size={12} />
                          <span>View</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-campus-blue">Study Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-campus-gray">Daily Goal</span>
                        <span className="font-medium text-campus-blue">2.5 / 3 hours</span>
                      </div>
                      <Progress value={83} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm pt-2">
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-campus-gray" />
                        <span className="text-campus-gray">Study Streak</span>
                      </div>
                      <span className="font-medium text-campus-blue">7 days</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Trophy size={14} className="text-campus-gray" />
                        <span className="text-campus-gray">XP Today</span>
                      </div>
                      <span className="font-medium text-campus-blue">250 XP</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-campus-blue">Upcoming</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-blue-500" />
                        <div>
                          <h4 className="text-sm font-medium">CS301 Midterm</h4>
                          <p className="text-xs text-campus-gray">In 3 days</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckSquare size={16} className="text-green-500" />
                        <div>
                          <h4 className="text-sm font-medium">CS302 Lab Work</h4>
                          <p className="text-xs text-campus-gray">Tomorrow</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-purple-500" />
                        <div>
                          <h4 className="text-sm font-medium">Group Project Meeting</h4>
                          <p className="text-xs text-campus-gray">Tomorrow, 4:00 PM</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">AI Insights & Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                      <h3 className="font-medium">Study Recommendation</h3>
                    </div>
                    <p className="text-sm text-campus-gray">Focus on graph algorithms today for your upcoming CS301 midterm. This is a heavily tested topic.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-md border border-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-green-500" />
                      <h3 className="font-medium">Progress Insight</h3>
                    </div>
                    <p className="text-sm text-campus-gray">Your CS302 quiz scores have improved by 15% over the last two weeks. Keep up the good work!</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-md border border-purple-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-purple-500" />
                      <h3 className="font-medium">Time Management</h3>
                    </div>
                    <p className="text-sm text-campus-gray">Consider studying in the morning. Your data shows 30% higher retention rates before noon.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tasks">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">Today's Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-campus-blue border-gray-300 rounded" />
                    <label className="text-sm font-medium">Complete CS301 Assignment #3</label>
                    <span className="text-xs text-red-500 ml-auto">Due 11:59 PM</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-campus-blue border-gray-300 rounded" />
                    <label className="text-sm font-medium">Take CS302 Reading Quiz</label>
                    <span className="text-xs text-red-500 ml-auto">Due 12:00 PM</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-campus-blue border-gray-300 rounded" />
                    <label className="text-sm font-medium">Review lecture notes before class</label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-campus-blue border-gray-300 rounded" />
                    <label className="text-sm font-medium">Prepare questions for study group</label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-campus-blue border-gray-300 rounded" />
                    <label className="text-sm font-medium">Start research for CS302 project</label>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <Button className="w-full">View All Tasks</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="classes">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-campus-blue">Today's Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-16 text-center">
                        <span className="text-sm font-medium text-campus-blue">10:00 AM</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">CS301: Algorithms</h4>
                        <p className="text-xs text-campus-gray mt-1">Science Building, Room 301</p>
                        <div className="mt-2 space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-campus-gray">Topic:</span>
                            <span>Graph Algorithms - Shortest Path</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-campus-gray">Reading:</span>
                            <span>Chapter 5, Pages 120-135</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-campus-gray">Materials:</span>
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs">View Slides</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-16 text-center">
                        <span className="text-sm font-medium text-campus-blue">1:00 PM</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">CS302: Database Systems</h4>
                        <p className="text-xs text-campus-gray mt-1">Engineering Hall, Room 205</p>
                        <div className="mt-2 space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-campus-gray">Topic:</span>
                            <span>SQL Joins and Aggregation</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-campus-gray">Reading:</span>
                            <span>Chapter 4, Pages 85-100</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-campus-gray">Materials:</span>
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs">View Slides</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-campus-blue">Class Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                      <div>
                        <h4 className="text-sm font-medium">CS301 Lecture Notes</h4>
                        <p className="text-xs text-campus-gray">Week 7 - Graph Algorithms</p>
                      </div>
                    </div>
                    <Button size="sm">Download</Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                      <div>
                        <h4 className="text-sm font-medium">CS302 Lab Manual</h4>
                        <p className="text-xs text-campus-gray">SQL Queries and Joins</p>
                      </div>
                    </div>
                    <Button size="sm">Download</Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center gap-3">
                      <Video className="h-5 w-5 text-red-500" />
                      <div>
                        <h4 className="text-sm font-medium">CS301 Tutorial Video</h4>
                        <p className="text-xs text-campus-gray">Dijkstra's Algorithm Walkthrough</p>
                      </div>
                    </div>
                    <Button size="sm">Watch</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">Today's Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-campus-gray">CS301: Algorithms</span>
                      <span className="font-medium text-campus-blue">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-campus-gray">CS302: Database Systems</span>
                      <span className="font-medium text-campus-blue">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-campus-gray">CS304: Web Development</span>
                      <span className="font-medium text-campus-blue">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                  <h3 className="font-medium mb-2">Week 7 Progress</h3>
                  <div className="grid grid-cols-7 gap-1">
                    {[100, 80, 90, 75, 85, 60, 0].map((value, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="h-16 w-full bg-blue-100 rounded-sm relative overflow-hidden">
                          <div 
                            className="absolute bottom-0 w-full bg-blue-500" 
                            style={{ height: `${value}%` }}
                          ></div>
                        </div>
                        <span className="text-xs mt-1">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md flex flex-col items-center text-center">
                    <Trophy className="h-6 w-6 text-yellow-500 mb-2" />
                    <h4 className="font-medium">3,250</h4>
                    <p className="text-xs text-campus-gray">Total XP</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md flex flex-col items-center text-center">
                    <Clock className="h-6 w-6 text-green-500 mb-2" />
                    <h4 className="font-medium">19.3 hrs</h4>
                    <p className="text-xs text-campus-gray">Week Total</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md flex flex-col items-center text-center">
                    <Users className="h-6 w-6 text-blue-500 mb-2" />
                    <h4 className="font-medium">#23</h4>
                    <p className="text-xs text-campus-gray">Class Rank</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageWrapper>
  );
};

export default DailySummaryPage;
