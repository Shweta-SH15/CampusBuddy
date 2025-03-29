
import React from 'react';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TaskItemProps {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'complete' | 'incomplete';
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  title,
  course,
  dueDate,
  priority,
  status
}) => {
  const getPriorityIcon = () => {
    switch (priority) {
      case 'high':
        return <AlertCircle size={18} className="text-red-500" />;
      case 'medium':
        return <Circle size={18} className="text-yellow-500" />;
      case 'low':
        return <Circle size={18} className="text-blue-500" />;
      default:
        return <Circle size={18} />;
    }
  };

  return (
    <div className={`p-3 rounded-lg border ${status === 'complete' ? 'bg-gray-50' : 'bg-white'} hover:shadow-sm transition-shadow`}>
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-6 w-6 rounded-full p-0 flex-shrink-0"
        >
          {status === 'complete' ? (
            <CheckCircle2 size={18} className="text-green-500" />
          ) : (
            <Circle size={18} className="text-gray-300" />
          )}
        </Button>
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-medium truncate ${status === 'complete' ? 'text-campus-gray line-through' : 'text-campus-blue'}`}>
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-x-2 text-xs text-campus-gray mt-1">
            <span>{course}</span>
            <span>•</span>
            <span>Due: {dueDate}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex-shrink-0">
            {getPriorityIcon()}
          </div>
          <Button variant="ghost" size="sm">Details</Button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
