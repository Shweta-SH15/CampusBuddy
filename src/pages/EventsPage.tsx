
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Tag, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import EventCard from '@/components/events/EventCard';
import FeaturedEvent from '@/components/events/FeaturedEvent';

const EventsPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Campus Events</h1>
            <p className="text-campus-gray mt-1">Discover and join events happening around campus</p>
          </div>
          
          <div className="flex gap-2">
            <Button>Create Event</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="registered">Registered</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="space-y-6">
                <FeaturedEvent 
                  title="Campus Hackathon 2023"
                  date="Sat, October 21"
                  time="9:00 AM - 9:00 PM"
                  location="Student Center, Main Hall"
                  description="Join us for a 12-hour coding competition with prizes worth $5000. Form teams of up to 4 students and build innovative solutions to real-world problems."
                  imageSrc="https://i.pravatar.cc/500?img=45"
                  attendees={128}
                  tags={["Competition", "Coding", "Technology"]}
                />
                
                <h2 className="text-lg font-semibold text-campus-blue mt-6 mb-4">All Events</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <EventCard 
                      key={i}
                      title={`${i % 2 === 0 ? 'Workshop' : 'Seminar'}: ${i % 2 === 0 ? 'Introduction to AI' : 'Career Development'}`}
                      date={`${i % 2 === 0 ? 'Mon' : 'Wed'}, October ${20 + i}`}
                      time={`${i + 1}:00 PM - ${i + 3}:00 PM`}
                      location={`${i % 2 === 0 ? 'Library' : 'Science Building'}, Room ${100 + i * 10}`}
                      attendees={i * 15}
                      tags={i % 2 === 0 ? ["Workshop", "Technology"] : ["Career", "Professional"]}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="registered">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <Calendar className="mx-auto h-12 w-12 text-muted-foreground/50" />
                      <h3 className="mt-4 text-lg font-medium">No registered events</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        When you register for events, they'll appear here
                      </p>
                      <Button className="mt-4" variant="outline">Browse Events</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="past">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <Calendar className="mx-auto h-12 w-12 text-muted-foreground/50" />
                      <h3 className="mt-4 text-lg font-medium">No past events</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Events you've attended will appear here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
                <CardTitle className="text-lg font-semibold text-campus-blue">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Event Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="rounded-full">Academic</Button>
                    <Button variant="outline" size="sm" className="rounded-full bg-primary/10">Workshop</Button>
                    <Button variant="outline" size="sm" className="rounded-full">Social</Button>
                    <Button variant="outline" size="sm" className="rounded-full">Career</Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Department</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="rounded-full bg-primary/10">Computer Science</Button>
                    <Button variant="outline" size="sm" className="rounded-full">Engineering</Button>
                    <Button variant="outline" size="sm" className="rounded-full">Business</Button>
                    <Button variant="outline" size="sm" className="rounded-full">Arts</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default EventsPage;
