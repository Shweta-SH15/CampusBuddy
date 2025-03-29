
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Tag } from 'lucide-react';

interface FeaturedEventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageSrc: string;
  attendees: number;
  tags: string[];
}

const FeaturedEvent: React.FC<FeaturedEventProps> = ({
  title,
  date,
  time,
  location,
  description,
  imageSrc,
  attendees,
  tags
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 h-48 md:h-auto">
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="md:w-2/3 p-6 space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-campus-blue">{title}</h2>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-campus-gray">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{attendees} attending</span>
                </div>
              </div>
            </div>
            
            <p className="text-campus-gray">{description}</p>
            
            <div className="flex flex-wrap gap-1">
              {tags.map((tag, i) => (
                <span key={i} className="event-pill text-xs px-2 py-0.5">{tag}</span>
              ))}
            </div>
            
            <div className="flex gap-3 pt-2">
              <Button>Register Now</Button>
              <Button variant="outline">Add to Calendar</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedEvent;
