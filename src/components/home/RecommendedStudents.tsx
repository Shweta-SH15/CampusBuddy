
import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Student {
  id: number;
  name: string;
  avatar: string;
  major: string;
  interests: string[];
}

const students: Student[] = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    major: "Computer Science",
    interests: ["AI", "Web Dev", "Gaming"]
  },
  {
    id: 2,
    name: "Samantha Lee",
    avatar: "https://i.pravatar.cc/150?img=5",
    major: "Biology",
    interests: ["Research", "Healthcare", "Hiking"]
  },
  {
    id: 3,
    name: "Marcus Williams",
    avatar: "https://i.pravatar.cc/150?img=3",
    major: "Business",
    interests: ["Marketing", "Entrepreneurship"]
  },
  {
    id: 4,
    name: "Priya Patel",
    avatar: "https://i.pravatar.cc/150?img=4",
    major: "Engineering",
    interests: ["Robotics", "Design", "Photography"]
  },
  {
    id: 5,
    name: "David Chen",
    avatar: "https://i.pravatar.cc/150?img=7",
    major: "Psychology",
    interests: ["Research", "Music"]
  },
  {
    id: 6,
    name: "Emma Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=9",
    major: "Environmental Science",
    interests: ["Sustainability", "Outdoor Activities"]
  }
];

const RecommendedStudents: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-campus-blue">Students You May Know</h2>
        <div className="flex gap-2">
          <Button 
            onClick={() => scroll('left')} 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            onClick={() => scroll('right')} 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-none pb-4 -mx-4 px-4 scroll-smooth"
      >
        {students.map((student) => (
          <Card key={student.id} className="min-w-[220px] max-w-[220px] card-hover">
            <CardContent className="p-4">
              <div className="flex flex-col items-center">
                <img 
                  src={student.avatar} 
                  alt={student.name} 
                  className="w-20 h-20 rounded-full object-cover border-2 border-campus-blue-lightest mb-3" 
                />
                <h3 className="font-medium text-campus-blue">{student.name}</h3>
                <p className="text-sm text-campus-gray mb-2">{student.major}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {student.interests.slice(0, 2).map((interest, idx) => (
                    <span key={idx} className="tag-pill">{interest}</span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-3 w-full">Connect</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendedStudents;
