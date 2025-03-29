
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Search, Filter, UserPlus, MessagesSquare, Users } from 'lucide-react';
import StudentCard from '@/components/connect/StudentCard';

const ConnectPage = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Connect with Students</h1>
            <p className="text-campus-gray mt-1">Find and connect with peers from your university</p>
          </div>
          
          <div className="w-full md:w-auto flex gap-2">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search students..." 
                className="pl-10 w-full"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter size={18} />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="suggested" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="suggested" className="flex items-center gap-2">
              <UserPlus size={16} />
              <span>Suggested</span>
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center gap-2">
              <MessagesSquare size={16} />
              <span>Requests</span>
            </TabsTrigger>
            <TabsTrigger value="connections" className="flex items-center gap-2">
              <Users size={16} />
              <span>My Connections</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="suggested" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <StudentCard 
                  key={i}
                  name={`Student ${i}`} 
                  department={`Department ${i % 3 === 0 ? 'of Computer Science' : i % 3 === 1 ? 'of Engineering' : 'of Business'}`}
                  year={`${i % 4 + 1}${i % 4 === 0 ? 'st' : i % 4 === 1 ? 'nd' : i % 4 === 2 ? 'rd' : 'th'} Year`}
                  imageSrc={`https://i.pravatar.cc/150?img=${i + 10}`}
                  interests={['Programming', 'Design', 'AI', 'Machine Learning', 'Web Development'].slice(0, i % 3 + 2)}
                  mutualConnections={i * 2}
                  similarity={Math.floor(Math.random() * 30) + 70}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="requests">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <Users className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">No pending requests</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    When students request to connect with you, they'll appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="connections">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <Users className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">No connections yet</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Start connecting with other students to build your network
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageWrapper>
  );
};

export default ConnectPage;
