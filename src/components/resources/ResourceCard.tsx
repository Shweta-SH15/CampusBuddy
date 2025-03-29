
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bookmark, Download, Share2, Star, FileText, BookOpen, Video, Link as LinkIcon } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  type: 'notes' | 'book' | 'video' | 'link';
  course: string;
  uploadedBy: string;
  uploadDate: string;
  rating: number;
  downloads: number;
  imageSrc: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  type,
  course,
  uploadedBy,
  uploadDate,
  rating,
  downloads,
  imageSrc
}) => {
  const getIcon = () => {
    switch (type) {
      case 'notes':
        return <FileText size={20} className="text-blue-500" />;
      case 'book':
        return <BookOpen size={20} className="text-purple-500" />;
      case 'video':
        return <Video size={20} className="text-red-500" />;
      case 'link':
        return <LinkIcon size={20} className="text-green-500" />;
      default:
        return <FileText size={20} />;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              {getIcon()}
              <span className="text-xs uppercase font-medium text-muted-foreground">{type}</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bookmark size={16} />
            </Button>
          </div>
          
          <h3 className="font-semibold text-campus-blue">{title}</h3>
          
          <div className="flex items-center gap-2 text-xs text-campus-gray">
            <span className="font-medium text-campus-blue">{course}</span>
            <span>•</span>
            <span>By {uploadedBy}</span>
          </div>
          
          <div className="flex items-center justify-between text-xs text-campus-gray">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span>{rating}/5.0</span>
            </div>
            <div className="flex items-center gap-1">
              <Download size={14} />
              <span>{downloads} downloads</span>
            </div>
            <span>{uploadDate}</span>
          </div>
          
          <div className="pt-2 flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 gap-1">
              <Download size={14} />
              <span>Download</span>
            </Button>
            <Button variant="outline" size="sm" className="w-9 p-0">
              <Share2 size={14} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
