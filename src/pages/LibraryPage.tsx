
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, BookOpen, Clock, BookMarked, History, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const LibraryPage = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Library</h1>
            <p className="text-campus-gray mt-1">Access and manage your library resources</p>
          </div>
          
          <div className="w-full md:w-auto flex gap-2">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search books..." 
                className="pl-10 w-full"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter size={18} />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="books" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="borrowed">Borrowed</TabsTrigger>
            <TabsTrigger value="reserved">Reserved</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="books" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <BookCard 
                  key={i}
                  title={
                    i % 4 === 0 ? "Introduction to Algorithms" :
                    i % 4 === 1 ? "Database System Concepts" :
                    i % 4 === 2 ? "Computer Networks" :
                    "Artificial Intelligence: A Modern Approach"
                  }
                  author={
                    i % 4 === 0 ? "Thomas H. Cormen" :
                    i % 4 === 1 ? "Abraham Silberschatz" :
                    i % 4 === 2 ? "Andrew S. Tanenbaum" :
                    "Stuart Russell"
                  }
                  available={i % 3 !== 0}
                  location={`Floor ${(i % 2) + 1}, Shelf ${String.fromCharCode(65 + (i % 4))}`}
                  coverColor={
                    i % 4 === 0 ? "bg-blue-100" :
                    i % 4 === 1 ? "bg-green-100" :
                    i % 4 === 2 ? "bg-purple-100" :
                    "bg-orange-100"
                  }
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="borrowed">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Currently Borrowed</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-14 rounded ${i === 1 ? 'bg-blue-100' : 'bg-purple-100'} flex items-center justify-center`}>
                          <BookOpen className={`h-5 w-5 ${i === 1 ? 'text-blue-700' : 'text-purple-700'}`} />
                        </div>
                        <div>
                          <h4 className="font-medium">
                            {i === 1 ? 'Introduction to Algorithms' : 'Computer Networks'}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {i === 1 ? 'Thomas H. Cormen' : 'Andrew S. Tanenbaum'}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm">
                          <Clock size={14} className="inline mr-1" />
                          Due in {i === 1 ? '5' : '10'} days
                        </div>
                        <Button variant="outline" size="sm" className="mt-2">Renew</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="reserved">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <BookMarked className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">No reserved books</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    When you reserve books, they'll appear here
                  </p>
                  <Button className="mt-4" variant="outline">Browse Books</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Borrowing History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-14 rounded ${
                        i === 1 ? 'bg-green-100' : 
                        i === 2 ? 'bg-orange-100' : 'bg-blue-100'
                      } flex items-center justify-center`}>
                        <BookOpen className={`h-5 w-5 ${
                          i === 1 ? 'text-green-700' : 
                          i === 2 ? 'text-orange-700' : 'text-blue-700'
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          {i === 1 ? 'Database System Concepts' : 
                           i === 2 ? 'Artificial Intelligence' : 'Introduction to Algorithms'}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {i === 1 ? 'Abraham Silberschatz' : 
                           i === 2 ? 'Stuart Russell' : 'Thomas H. Cormen'}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">
                        <History size={14} className="inline mr-1" />
                        Returned {i * 3} days ago
                      </div>
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

interface BookCardProps {
  title: string;
  author: string;
  available: boolean;
  location: string;
  coverColor: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  available,
  location,
  coverColor
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex">
          <div className={`${coverColor} w-1/3 py-4 flex items-center justify-center`}>
            <BookOpen className="h-10 w-10 opacity-70" />
          </div>
          <div className="w-2/3 p-4 space-y-2">
            <div>
              <h3 className="font-medium leading-tight">{title}</h3>
              <p className="text-xs text-muted-foreground">{author}</p>
            </div>
            
            <div className="text-xs">
              <div className="flex items-center gap-1">
                <span>Location:</span>
                <span className="font-medium">{location}</span>
              </div>
              
              <Badge 
                className={`mt-1 ${available ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'} hover:${available ? 'bg-green-200' : 'bg-orange-200'}`}
              >
                {available ? 'Available' : 'Checked Out'}
              </Badge>
            </div>
            
            <Button 
              size="sm" 
              className="w-full"
              variant={available ? "default" : "outline"}
              disabled={!available}
            >
              {available ? 'Reserve' : 'Join Waitlist'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LibraryPage;
