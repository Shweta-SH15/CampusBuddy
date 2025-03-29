
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, BookOpen, FileText, Video, Link as LinkIcon, Bookmark, Download, Share2 } from 'lucide-react';
import ResourceCard from '@/components/resources/ResourceCard';

const ResourcesPage = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Learning Resources</h1>
            <p className="text-campus-gray mt-1">Find and share study materials for your courses</p>
          </div>
          
          <div className="w-full md:w-auto flex gap-2">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search resources..." 
                className="pl-10 w-full"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter size={18} />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <FileText size={14} />
              <span>Notes</span>
            </TabsTrigger>
            <TabsTrigger value="books" className="flex items-center gap-2">
              <BookOpen size={14} />
              <span>Books</span>
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video size={14} />
              <span>Videos</span>
            </TabsTrigger>
            <TabsTrigger value="links" className="flex items-center gap-2">
              <LinkIcon size={14} />
              <span>Links</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ResourceCard 
                title="Introduction to Algorithms"
                type="book"
                course="CS301"
                uploadedBy="Prof. Johnson"
                uploadDate="Oct 15, 2023"
                rating={4.8}
                downloads={325}
                imageSrc="https://i.pravatar.cc/150?img=1"
              />
              <ResourceCard 
                title="Data Structures Cheat Sheet"
                type="notes"
                course="CS301"
                uploadedBy="Jamie Reynolds"
                uploadDate="Oct 12, 2023"
                rating={4.5}
                downloads={198}
                imageSrc="https://i.pravatar.cc/150?img=2"
              />
              <ResourceCard 
                title="Machine Learning Fundamentals"
                type="video"
                course="CS401"
                uploadedBy="Dr. Williams"
                uploadDate="Oct 10, 2023"
                rating={4.9}
                downloads={412}
                imageSrc="https://i.pravatar.cc/150?img=3"
              />
              <ResourceCard 
                title="Python Programming Guide"
                type="notes"
                course="CS201"
                uploadedBy="Alex Chen"
                uploadDate="Oct 8, 2023"
                rating={4.6}
                downloads={278}
                imageSrc="https://i.pravatar.cc/150?img=4"
              />
              <ResourceCard 
                title="Database Systems Concepts"
                type="book"
                course="CS302"
                uploadedBy="Library Resources"
                uploadDate="Oct 5, 2023"
                rating={4.7}
                downloads={189}
                imageSrc="https://i.pravatar.cc/150?img=5"
              />
              <ResourceCard 
                title="Web Development Crash Course"
                type="video"
                course="CS304"
                uploadedBy="Tech Club"
                uploadDate="Oct 3, 2023"
                rating={4.4}
                downloads={235}
                imageSrc="https://i.pravatar.cc/150?img=6"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="notes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ResourceCard 
                title="Data Structures Cheat Sheet"
                type="notes"
                course="CS301"
                uploadedBy="Jamie Reynolds"
                uploadDate="Oct 12, 2023"
                rating={4.5}
                downloads={198}
                imageSrc="https://i.pravatar.cc/150?img=2"
              />
              <ResourceCard 
                title="Python Programming Guide"
                type="notes"
                course="CS201"
                uploadedBy="Alex Chen"
                uploadDate="Oct 8, 2023"
                rating={4.6}
                downloads={278}
                imageSrc="https://i.pravatar.cc/150?img=4"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="books">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ResourceCard 
                title="Introduction to Algorithms"
                type="book"
                course="CS301"
                uploadedBy="Prof. Johnson"
                uploadDate="Oct 15, 2023"
                rating={4.8}
                downloads={325}
                imageSrc="https://i.pravatar.cc/150?img=1"
              />
              <ResourceCard 
                title="Database Systems Concepts"
                type="book"
                course="CS302"
                uploadedBy="Library Resources"
                uploadDate="Oct 5, 2023"
                rating={4.7}
                downloads={189}
                imageSrc="https://i.pravatar.cc/150?img=5"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ResourceCard 
                title="Machine Learning Fundamentals"
                type="video"
                course="CS401"
                uploadedBy="Dr. Williams"
                uploadDate="Oct 10, 2023"
                rating={4.9}
                downloads={412}
                imageSrc="https://i.pravatar.cc/150?img=3"
              />
              <ResourceCard 
                title="Web Development Crash Course"
                type="video"
                course="CS304"
                uploadedBy="Tech Club"
                uploadDate="Oct 3, 2023"
                rating={4.4}
                downloads={235}
                imageSrc="https://i.pravatar.cc/150?img=6"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="links">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <LinkIcon className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">No links found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Share helpful website links with your peers
                  </p>
                  <Button className="mt-4">Share a Link</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageWrapper>
  );
};

export default ResourcesPage;
