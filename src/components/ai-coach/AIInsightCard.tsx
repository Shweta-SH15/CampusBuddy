
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface AIInsightCardProps {
  title: string;
  course: string;
  insight: string;
  icon: ReactNode;
  color: string;
}

const AIInsightCard: React.FC<AIInsightCardProps> = ({
  title,
  course,
  insight,
  icon,
  color
}) => {
  return (
    <Card className={`overflow-hidden border-l-4 border-l-campus-blue hover:shadow-md transition-shadow ${color}`}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="mt-1">
            {icon}
          </div>
          <div className="flex-1 space-y-2">
            <div>
              <h3 className="font-medium text-campus-blue">{title}</h3>
              <p className="text-xs text-campus-gray">{course}</p>
            </div>
            <p className="text-sm text-campus-gray">{insight}</p>
            <div className="flex justify-between items-center pt-2">
              <Button variant="link" size="sm" className="p-0 h-auto text-campus-blue">View Details</Button>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ThumbsUp size={14} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ThumbsDown size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsightCard;
