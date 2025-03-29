
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  CheckSquare, Calendar, Clock, Plus, Filter, CheckCircle2, 
  Circle, AlertCircle, Calendar as CalendarIcon, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import TaskItem from '@/components/tasks/TaskItem';

const TasksPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Tasks & Assignments</h1>
            <p className="text-campus-gray mt-1">Manage your assignments and study tasks</p>
          </div>
          
          <div className="w-full md:w-auto flex gap-2">
            <Button className="gap-2">
              <Plus size={16} />
              <span>New Task</span>
            </Button>
            <Button variant="outline" size="icon">
              <Filter size={18} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold text-campus-blue">My Tasks</CardTitle>
                  <div className="flex gap-2">
                    <Input placeholder="Search tasks..." className="w-64" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="today" className="flex items-center justify-center gap-2">
                      <Clock size={14} />
                      <span>Today</span>
                    </TabsTrigger>
                    <TabsTrigger value="upcoming" className="flex items-center justify-center gap-2">
                      <Calendar size={14} />
                      <span>Upcoming</span>
                    </TabsTrigger>
                    <TabsTrigger value="completed" className="flex items-center justify-center gap-2">
                      <CheckCircle2 size={14} />
                      <span>Completed</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="space-y-2">
                    <TaskItem
                      id="1"
                      title="CS301 Assignment #3"
                      course="CS301: Algorithms"
                      dueDate="Today, 11:59 PM"
                      priority="high"
                      status="incomplete"
                    />
                    <TaskItem
                      id="2"
                      title="Study for Database Midterm"
                      course="CS302: Database Systems"
                      dueDate="Tomorrow, 2:00 PM"
                      priority="medium"
                      status="incomplete"
                    />
                    <TaskItem
                      id="3"
                      title="Complete ML Lab Exercise"
                      course="CS401: Machine Learning"
                      dueDate="Oct 23, 11:59 PM"
                      priority="medium"
                      status="incomplete"
                    />
                    <TaskItem
                      id="4"
                      title="Read Chapter 5"
                      course="CS301: Algorithms"
                      dueDate="Oct 25, 10:00 AM"
                      priority="low"
                      status="incomplete"
                    />
                    <TaskItem
                      id="5"
                      title="Web Development Project Proposal"
                      course="CS304: Web Development"
                      dueDate="Oct 18, 5:00 PM"
                      priority="high"
                      status="complete"
                    />
                  </TabsContent>
                  
                  <TabsContent value="today" className="space-y-2">
                    <TaskItem
                      id="1"
                      title="CS301 Assignment #3"
                      course="CS301: Algorithms"
                      dueDate="Today, 11:59 PM"
                      priority="high"
                      status="incomplete"
                    />
                  </TabsContent>
                  
                  <TabsContent value="upcoming" className="space-y-2">
                    <TaskItem
                      id="2"
                      title="Study for Database Midterm"
                      course="CS302: Database Systems"
                      dueDate="Tomorrow, 2:00 PM"
                      priority="medium"
                      status="incomplete"
                    />
                    <TaskItem
                      id="3"
                      title="Complete ML Lab Exercise"
                      course="CS401: Machine Learning"
                      dueDate="Oct 23, 11:59 PM"
                      priority="medium"
                      status="incomplete"
                    />
                    <TaskItem
                      id="4"
                      title="Read Chapter 5"
                      course="CS301: Algorithms"
                      dueDate="Oct 25, 10:00 AM"
                      priority="low"
                      status="incomplete"
                    />
                  </TabsContent>
                  
                  <TabsContent value="completed" className="space-y-2">
                    <TaskItem
                      id="5"
                      title="Web Development Project Proposal"
                      course="CS304: Web Development"
                      dueDate="Oct 18, 5:00 PM"
                      priority="high"
                      status="complete"
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium">October 2023</span>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">Task Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-red-100 p-2 rounded-full">
                      <AlertCircle size={16} className="text-red-600" />
                    </div>
                    <span className="text-sm">High Priority</span>
                  </div>
                  <span className="font-medium text-campus-blue">2</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Circle size={16} className="text-yellow-600" />
                    </div>
                    <span className="text-sm">Medium Priority</span>
                  </div>
                  <span className="font-medium text-campus-blue">5</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Circle size={16} className="text-blue-600" />
                    </div>
                    <span className="text-sm">Low Priority</span>
                  </div>
                  <span className="font-medium text-campus-blue">3</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <span className="text-sm">Completed</span>
                  </div>
                  <span className="font-medium text-campus-blue">7</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">AI Task Splitting</CardTitle>
                <CardDescription>Break down large assignments into manageable tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter assignment name..." />
                <div className="flex gap-2">
                  <Input type="date" className="flex-1" />
                  <Button>Split Task</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TasksPage;
