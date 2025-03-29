import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Navigation, Building, Coffee, Bookmark, Star, Plus, Minus } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import CampusMap from '@/components/campus-map/CampusMap';
import LocationCard from '@/components/campus-map/LocationCard';
import { BookOpen, Users, UtensilsCrossed } from 'lucide-react';

const CampusMapPage = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Campus Map</h1>
            <p className="text-campus-gray mt-1">Navigate and explore campus locations</p>
          </div>
          
          <div className="w-full md:w-auto flex gap-2">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search locations..." 
                className="pl-10 w-full"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Navigation size={16} />
              <span>My Location</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-[600px] relative">
                  <CampusMap />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button variant="outline" size="icon" className="bg-white shadow-md">
                      <Plus size={18} />
                    </Button>
                    <Button variant="outline" size="icon" className="bg-white shadow-md">
                      <Minus size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">Location Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="buildings" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="buildings">
                      <Building className="h-4 w-4 mr-2" />
                      Buildings
                    </TabsTrigger>
                    <TabsTrigger value="dining">
                      <Coffee className="h-4 w-4 mr-2" />
                      Dining
                    </TabsTrigger>
                    <TabsTrigger value="saved">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Saved
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="buildings" className="pt-4 space-y-3">
                    <LocationCard 
                      name="Science Building"
                      type="Academic"
                      details="Departments of Physics, Chemistry, and Biology"
                      distance="0.3 miles"
                      icon={<Building className="h-5 w-5 text-blue-500" />}
                    />
                    
                    <LocationCard 
                      name="Library"
                      type="Academic"
                      details="Open 24/7, Study Rooms, Research Center"
                      distance="0.5 miles"
                      icon={<BookOpen className="h-5 w-5 text-purple-500" />}
                    />
                    
                    <LocationCard 
                      name="Student Center"
                      type="Social"
                      details="Student Services, Clubs, Event Spaces"
                      distance="0.2 miles"
                      icon={<Users className="h-5 w-5 text-green-500" />}
                    />
                    
                    <LocationCard 
                      name="Engineering Hall"
                      type="Academic"
                      details="Departments of Engineering and Computer Science"
                      distance="0.6 miles"
                      icon={<Building className="h-5 w-5 text-blue-500" />}
                    />
                  </TabsContent>
                  
                  <TabsContent value="dining" className="pt-4 space-y-3">
                    <LocationCard 
                      name="Campus Cafe"
                      type="Dining"
                      details="Coffee, Pastries, Sandwiches"
                      distance="0.2 miles"
                      icon={<Coffee className="h-5 w-5 text-orange-500" />}
                    />
                    
                    <LocationCard 
                      name="Student Center Food Court"
                      type="Dining"
                      details="Multiple Restaurants, Seating Area"
                      distance="0.2 miles"
                      icon={<UtensilsCrossed className="h-5 w-5 text-red-500" />}
                    />
                    
                    <LocationCard 
                      name="Harmony Hall Dining"
                      type="Dining"
                      details="Buffet Style, Meal Plans Accepted"
                      distance="0.4 miles"
                      icon={<UtensilsCrossed className="h-5 w-5 text-red-500" />}
                    />
                  </TabsContent>
                  
                  <TabsContent value="saved" className="pt-4">
                    <div className="text-center py-4">
                      <Bookmark className="mx-auto h-8 w-8 text-muted-foreground/50" />
                      <h3 className="mt-2 text-base font-medium">No saved locations</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Bookmark locations for quick access
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">My Schedule Today</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-campus-blue pl-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-campus-blue text-white px-2 py-0.5 rounded">10:00 AM</span>
                    <span className="text-sm font-medium">CS301: Algorithms</span>
                  </div>
                  <p className="text-xs text-campus-gray mt-0.5">Science Building, Room 301</p>
                </div>
                
                <div className="border-l-2 border-campus-gray-light pl-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-campus-gray-light text-campus-gray px-2 py-0.5 rounded">1:00 PM</span>
                    <span className="text-sm font-medium">CS302: Database Systems</span>
                  </div>
                  <p className="text-xs text-campus-gray mt-0.5">Engineering Hall, Room 205</p>
                </div>
                
                <div className="border-l-2 border-campus-gray-light pl-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-campus-gray-light text-campus-gray px-2 py-0.5 rounded">3:30 PM</span>
                    <span className="text-sm font-medium">Study Group Meeting</span>
                  </div>
                  <p className="text-xs text-campus-gray mt-0.5">Library, Study Room 4</p>
                </div>
                
                <Button variant="outline" className="w-full mt-2">View Full Schedule</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CampusMapPage;
