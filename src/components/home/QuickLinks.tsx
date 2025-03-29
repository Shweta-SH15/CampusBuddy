
import React from 'react';
import { Map, Calendar, Users, BookOpen, Lightbulb, CheckSquare, Trophy, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickLink {
  title: string;
  icon: React.ElementType;
  href: string;
  color: string;
}

const links: QuickLink[] = [
  {
    title: "Campus Map",
    icon: Map,
    href: "/campus-map",
    color: "bg-blue-100 text-blue-700"
  },
  {
    title: "Events",
    icon: Calendar,
    href: "/events",
    color: "bg-purple-100 text-purple-700"
  },
  {
    title: "Study Groups",
    icon: Users,
    href: "/study-groups",
    color: "bg-green-100 text-green-700"
  },
  {
    title: "Resources",
    icon: BookOpen,
    href: "/resources",
    color: "bg-red-100 text-red-700"
  },
  {
    title: "AI Coach",
    icon: Lightbulb,
    href: "/ai-coach",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    href: "/tasks",
    color: "bg-pink-100 text-pink-700"
  },
  {
    title: "Progress",
    icon: Trophy,
    href: "/progress",
    color: "bg-indigo-100 text-indigo-700"
  },
  {
    title: "Library",
    icon: FolderOpen,
    href: "/library",
    color: "bg-orange-100 text-orange-700"
  }
];

const QuickLinks: React.FC = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-campus-blue mb-4">Quick Links</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="flex flex-col items-center justify-center p-4 rounded-lg card-hover"
          >
            <div className={`p-3 rounded-full ${link.color} mb-2`}>
              <link.icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-campus-blue">{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
