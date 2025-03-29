
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Users } from 'lucide-react';

interface StudentCardProps {
  name: string;
  department: string;
  year: string;
  imageSrc: string;
  interests: string[];
  mutualConnections: number;
  similarity: number;
}

const StudentCard: React.FC<StudentCardProps> = ({
  name,
  department,
  year,
  imageSrc,
  interests,
  mutualConnections,
  similarity
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="h-24 bg-gradient-to-r from-campus-blue to-campus-blue-light"></div>
          <div className="px-4 pt-10 pb-4 relative">
            <div className="absolute -top-10 left-4 border-4 border-white rounded-full overflow-hidden">
              <img 
                src={imageSrc} 
                alt={name}
                className="w-20 h-20 object-cover"
              />
            </div>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-lg text-campus-blue">{name}</h3>
                <p className="text-campus-gray text-sm">{department} • {year}</p>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {interests.map((interest, i) => (
                  <span key={i} className="tag-pill text-xs px-2 py-0.5">{interest}</span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1 text-xs text-campus-gray">
                  <Users size={14} />
                  <span>{mutualConnections} mutual connections</span>
                </div>
                
                <div className="text-xs font-medium text-campus-blue">
                  {similarity}% match
                </div>
              </div>
              
              <Button className="w-full gap-2">
                <UserPlus size={16} />
                Connect
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
