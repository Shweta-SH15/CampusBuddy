
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  tags: string[];
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  attendees,
  tags
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="space-y-3">
          <h3 className="font-semibold text-campus-blue">{title}</h3>
          
          <div className="space-y-1 text-sm text-campus-gray">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} />
              <span>{attendees} attending</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 pt-1">
            {tags.map((tag, i) => (
              <span key={i} className="event-pill text-xs px-2 py-0.5">{tag}</span>
            ))}
          </div>
          
          <div className="pt-2 flex gap-2">
            <Button className="flex-1">Register</Button>
            <Button variant="outline" className="flex-1">Details</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
