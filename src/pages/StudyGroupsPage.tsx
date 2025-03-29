
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Users, Calendar, MapPin, BookOpen, Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const StudyGroupsPage = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Study Groups</h1>
            <p className="text-campus-gray mt-1">Find or create study groups for collaborative learning</p>
          </div>
          
          <div className="w-full md:w-auto flex gap-2">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search groups..." 
                className="pl-10 w-full"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter size={18} />
            </Button>
            <Button className="gap-2">
              <Plus size={18} />
              <span>Create Group</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="all">All Groups</TabsTrigger>
            <TabsTrigger value="my-groups">My Groups</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <StudyGroupCard 
                  key={i}
                  name={`${i % 3 === 0 ? 'Algorithms' : i % 3 === 1 ? 'Database Systems' : 'Web Development'} Study Group`}
                  course={`CS${300 + i}`}
                  description={`Regular study sessions focusing on ${i % 3 === 0 ? 'algorithm design and analysis' : i % 3 === 1 ? 'relational database concepts' : 'modern web frameworks'}.`}
                  members={i + 4}
                  nextSession={`${['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][i % 5]}, ${i + 10}:00 AM`}
                  location={i % 2 === 0 ? 'Library, Room 204' : 'Student Center, Study Area B'}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="my-groups">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <StudyGroupCard 
                name="Algorithms Study Group"
                course="CS301"
                description="Regular study sessions focusing on algorithm design and analysis."
                members={6}
                nextSession="Wed, 10:00 AM"
                location="Library, Room 204"
                isMember={true}
              />
              <StudyGroupCard 
                name="Web Development Study Group"
                course="CS304"
                description="Regular study sessions focusing on modern web frameworks."
                members={8}
                nextSession="Fri, 2:00 PM"
                location="Student Center, Study Area B"
                isMember={true}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="recommended">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <StudyGroupCard 
                name="Database Systems Study Group"
                course="CS302"
                description="Regular study sessions focusing on relational database concepts."
                members={5}
                nextSession="Tue, 11:00 AM"
                location="Library, Room 204"
              />
              <StudyGroupCard 
                name="Mobile App Development"
                course="CS305"
                description="Study sessions focusing on iOS and Android development."
                members={7}
                nextSession="Thu, 3:00 PM"
                location="Engineering Building, Room 120"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-campus-blue-lightest p-2 rounded-lg">
                        <Calendar className="h-5 w-5 text-campus-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">{i % 2 === 0 ? 'Algorithms' : 'Web Development'} Study Group</h4>
                        <p className="text-sm text-muted-foreground">{['Monday', 'Wednesday', 'Friday'][i % 3]}, {i + 1}:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-right">
                        <div className="font-medium">{i % 2 === 0 ? 'Library' : 'Student Center'}</div>
                        <div className="text-xs text-muted-foreground">Room {200 + i}</div>
                      </div>
                      <Button variant="outline" size="sm">Details</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageWrapper>
  );
};

interface StudyGroupCardProps {
  name: string;
  course: string;
  description: string;
  members: number;
  nextSession: string;
  location: string;
  isMember?: boolean;
}

const StudyGroupCard: React.FC<StudyGroupCardProps> = ({
  name,
  course,
  description,
  members,
  nextSession,
  location,
  isMember = false
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-5 border-b">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-campus-blue">{name}</h3>
            <span className="text-xs font-medium bg-campus-blue-lightest text-campus-blue px-2 py-0.5 rounded-full">
              {course}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Users size={16} className="text-muted-foreground" />
            <span>{members} members</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={16} className="text-muted-foreground" />
            <span>Next: {nextSession}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} className="text-muted-foreground" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-2 pt-2">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <Avatar key={i} className="border-2 border-background w-7 h-7">
                  <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 20}`} />
                  <AvatarFallback>U{i + 1}</AvatarFallback>
                </Avatar>
              ))}
              {members > 3 && (
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-muted border-2 border-background text-xs font-medium">
                  +{members - 3}
                </div>
              )}
            </div>
            
            <div className="ml-auto">
              <Button variant={isMember ? "outline" : "default"}>
                {isMember ? 'View Details' : 'Join Group'}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyGroupsPage;
