
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface FlashcardDeckProps {
  title: string;
  course: string;
  cardCount: number;
  progress: number;
  lastStudied: string;
}

const FlashcardDeck: React.FC<FlashcardDeckProps> = ({
  title,
  course,
  cardCount,
  progress,
  lastStudied
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium text-campus-blue">{title}</h3>
            <p className="text-xs text-campus-gray">{course} • {cardCount} cards</p>
          </div>
          <div className="bg-campus-blue-lightest rounded-md p-1 h-fit">
            <BookOpen size={16} className="text-campus-blue" />
          </div>
        </div>
        
        <div className="mt-4 space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-campus-gray">Mastery</span>
            <span className="font-medium text-campus-blue">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex items-center justify-between mt-4 text-xs text-campus-gray">
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>Last studied: {lastStudied}</span>
          </div>
          <Button size="sm">Study Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlashcardDeck;
