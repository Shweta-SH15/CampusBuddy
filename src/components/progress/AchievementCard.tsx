
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Lock } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  progress: number;
  unlocked: boolean;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  icon,
  progress,
  unlocked
}) => {
  return (
    <Card className={`overflow-hidden hover:shadow-md transition-shadow ${unlocked ? 'bg-white' : 'bg-gray-50'}`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-full ${unlocked ? 'bg-blue-50' : 'bg-gray-100'} relative`}>
            {icon}
            {!unlocked && (
              <div className="absolute -top-1 -right-1 bg-gray-300 rounded-full p-1">
                <Lock size={12} className="text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className={`font-medium ${unlocked ? 'text-campus-blue' : 'text-campus-gray'}`}>{title}</h3>
            <p className="text-xs text-campus-gray mt-1">{description}</p>
            
            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-xs">
                <span className={`${unlocked ? 'text-campus-blue' : 'text-campus-gray'}`}>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-1.5" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
