
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Calendar, BookOpen, Lightbulb, Mic, CheckSquare, Trophy, FolderOpen, Map } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  count?: number;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, active, count }) => {
  return (
    <Link 
      to={href} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
        active 
          ? "bg-campus-blue text-white" 
          : "text-campus-blue hover:bg-campus-blue-lightest"
      )}
    >
      <Icon className={cn("h-5 w-5", active ? "text-white" : "text-campus-blue")} />
      <span>{label}</span>
      {count !== undefined && (
        <span className={cn(
          "ml-auto rounded-full py-0.5 px-2 text-xs font-medium",
          active ? "bg-white/20 text-white" : "bg-campus-blue/10 text-campus-blue"
        )}>
          {count}
        </span>
      )}
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/connect", icon: Users, label: "Connect", count: 5 },
    { href: "/events", icon: Calendar, label: "Events" },
    { href: "/resources", icon: BookOpen, label: "Resources" },
    { href: "/ai-coach", icon: Lightbulb, label: "AI Coach" },
    { href: "/voice-assist", icon: Mic, label: "Voice Assistant" },
    { href: "/tasks", icon: CheckSquare, label: "Tasks", count: 3 },
    { href: "/progress", icon: Trophy, label: "Progress" },
    { href: "/library", icon: FolderOpen, label: "Library" },
    { href: "/campus-map", icon: Map, label: "Campus Map" },
    { href: "/study-groups", icon: Users, label: "Study Groups" },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-border bg-white h-screen sticky top-0 p-4">
      <div className="space-y-1">
        {navItems.map((item) => (
          <NavItem 
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            count={item.count}
            active={currentPath === item.href}
          />
        ))}
      </div>

      <div className="mt-auto pt-4 border-t">
        <div className="bg-campus-blue-lightest rounded-lg p-4">
          <h4 className="font-medium text-campus-blue mb-2">Study Reminder</h4>
          <p className="text-xs text-campus-blue/80">CS301 Assignment due in 2 days</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
