
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Bell, Menu, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const Navbar = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Assignment Due Soon",
      description: "CS301 assignment due in 2 days",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      title: "New Study Group Request",
      description: "Alex Chen invited you to join AI Research group",
      time: "5 hours ago",
      read: false
    },
    {
      id: 3,
      title: "Campus Event",
      description: "Tech Career Fair tomorrow at 10 AM",
      time: "Yesterday",
      read: false
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    toast({
      title: "Notifications",
      description: "All notifications marked as read"
    });
  };

  const handleSave = () => {
    toast({
      title: "Saved",
      description: "Your changes have been saved successfully"
    });
  };

  const navigateToNotifications = () => {
    navigate('/notifications');
  };

  return (
    <nav className="bg-white shadow-sm border-b py-3 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={20} />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-campus-blue rounded-lg p-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V9C3 14.55 6.84 19.74 12 21C17.16 19.74 21 14.55 21 9V5L12 1Z" fill="white" />
              </svg>
            </span>
            <span className="font-bold text-xl hidden md:inline-block text-campus-blue">Campus Buddy</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center relative max-w-md w-full mx-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search for students, events, resources..." 
            className="pl-10 w-full rounded-full border-campus-gray-light focus-visible:ring-campus-blue"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleSave} 
            className="relative"
            title="Save changes"
          >
            <Save size={20} />
          </Button>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 bg-campus-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold">Notifications</h3>
                {unreadCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                    Mark all as read
                  </Button>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">
                    No notifications
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{notification.title}</h4>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                    </div>
                  ))
                )}
              </div>
              <div className="p-2 border-t text-center">
                <Button variant="ghost" size="sm" className="w-full" onClick={navigateToNotifications}>
                  View all notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
