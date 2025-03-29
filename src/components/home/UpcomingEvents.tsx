
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "CS Department Mixer",
    date: "Oct 15, 2023",
    time: "5:00 PM - 7:00 PM",
    location: "Student Center, Room 302",
    category: "Social"
  },
  {
    id: 2,
    title: "Machine Learning Workshop",
    date: "Oct 18, 2023",
    time: "3:30 PM - 5:30 PM",
    location: "Tech Hall, Room 105",
    category: "Workshop"
  },
  {
    id: 3,
    title: "Fall Career Fair",
    date: "Oct 20, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "University Commons",
    category: "Career"
  }
];

const UpcomingEvents: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-campus-blue">Upcoming Events</h2>
        <Button variant="link" className="text-campus-blue hover:text-campus-green">
          View All
        </Button>
      </div>
      
      <div className="grid gap-4">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden card-hover">
            <CardContent className="p-0">
              <div className="flex">
                <div className="w-2 bg-campus-green"></div>
                <div className="p-4 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-campus-blue">{event.title}</h3>
                    <span className="event-pill">{event.category}</span>
                  </div>
                  
                  <div className="mt-2 space-y-1 text-sm text-campus-gray">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" className="bg-campus-blue hover:bg-campus-blue-light">RSVP</Button>
                    <Button size="sm" variant="outline">Add to Calendar</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
