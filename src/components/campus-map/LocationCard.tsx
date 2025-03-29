
import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Navigation, Star, Bookmark, Users, BookOpen, UtensilsCrossed } from 'lucide-react';

interface LocationCardProps {
  name: string;
  type: string;
  details: string;
  distance: string;
  icon: ReactNode;
}

const LocationCard: React.FC<LocationCardProps> = ({
  name,
  type,
  details,
  distance,
  icon
}) => {
  return (
    <div className="border rounded-md p-3 hover:bg-gray-50 transition-colors">
      <div className="flex gap-3">
        <div className="bg-gray-100 p-2 rounded-md h-fit">
          {icon}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium text-campus-blue">{name}</h3>
              <p className="text-xs text-campus-gray mt-0.5">{type}</p>
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Bookmark size={14} />
            </Button>
          </div>
          
          <p className="text-xs text-campus-gray mt-2">{details}</p>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1 text-xs text-campus-gray">
              <Navigation size={12} />
              <span>{distance} away</span>
            </div>
            
            <Button variant="outline" size="sm" className="h-7 text-xs">Directions</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
