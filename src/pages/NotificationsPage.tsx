
import React, { useState } from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BellRing, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const NotificationsPage = () => {
  const { toast } = useToast();
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
    },
    {
      id: 4,
      title: "Grade Published",
      description: "Your grade for CS302 midterm has been published",
      time: "2 days ago",
      read: true
    },
    {
      id: 5,
      title: "New Resource Available",
      description: "Database Systems tutorial videos added to resources",
      time: "3 days ago",
      read: true
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
    toast({
      title: "Notification marked as read",
      description: "Your notification has been marked as read."
    });
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
    toast({
      title: "All notifications marked as read",
      description: "All your notifications have been marked as read."
    });
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
    toast({
      title: "Notification deleted",
      description: "Your notification has been deleted."
    });
  };

  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Notifications</h1>
            <p className="text-campus-gray mt-1">Stay updated with all your university notifications</p>
          </div>
          
          {notifications.some(n => !n.read) && (
            <Button onClick={markAllAsRead} variant="outline" className="gap-2">
              <Check size={16} />
              <span>Mark all as read</span>
            </Button>
          )}
        </div>
        
        {notifications.length === 0 ? (
          <Card className="text-center py-12">
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
                <BellRing size={24} className="text-blue-500" />
              </div>
              <h3 className="text-lg font-medium mt-2">No notifications</h3>
              <p className="text-campus-gray max-w-sm">
                You don't have any notifications at the moment. We'll notify you when something important happens.
              </p>
            </div>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-campus-blue">All Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-0 p-0">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-4 border-b last:border-0 hover:bg-gray-50 ${notification.read ? '' : 'bg-blue-50'}`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium">{notification.title}</h4>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{notification.description}</p>
                  <div className="flex gap-2">
                    {!notification.read && (
                      <Button size="sm" variant="outline" onClick={() => markAsRead(notification.id)}>
                        Mark as read
                      </Button>
                    )}
                    <Button size="sm" variant="ghost" onClick={() => deleteNotification(notification.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </PageWrapper>
  );
};

export default NotificationsPage;
