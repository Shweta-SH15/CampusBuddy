
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import RecommendedStudents from '@/components/home/RecommendedStudents';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import QuickLinks from '@/components/home/QuickLinks';
import ProgressStats from '@/components/home/ProgressStats';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

const Index = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Welcome back, Jamie!</h1>
            <p className="text-campus-gray mt-1">Tuesday, October 17 • Week 7 of Fall Semester</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-campus-green hover:bg-campus-green-light gap-2">
              <Bell size={16} />
              Daily Summary
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <RecommendedStudents />
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <UpcomingEvents />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <ProgressStats />
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <QuickLinks />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Index;
