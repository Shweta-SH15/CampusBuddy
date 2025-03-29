
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const data = [
  { day: 'Mon', studyHours: 2, completion: 65 },
  { day: 'Tue', studyHours: 3.5, completion: 70 },
  { day: 'Wed', studyHours: 2.8, completion: 75 },
  { day: 'Thu', studyHours: 4.2, completion: 82 },
  { day: 'Fri', studyHours: 3, completion: 88 },
  { day: 'Sat', studyHours: 1.5, completion: 90 },
  { day: 'Sun', studyHours: 2.2, completion: 93 }
];

const ProgressStats: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-campus-blue">Weekly Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-campus-gray">Course Completion</span>
              <span className="font-medium text-campus-blue">93%</span>
            </div>
            <Progress value={93} className="h-2 bg-campus-gray-light" />
          </div>
          
          <div className="h-[180px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="day" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis tick={{fontSize: 12}} axisLine={false} tickLine={false} domain={[0, 5]} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E2E8F0',
                    borderRadius: '0.375rem',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                  }}
                  labelStyle={{fontWeight: 500, color: '#1a365d'}}
                />
                <Line 
                  type="monotone" 
                  dataKey="studyHours" 
                  stroke="#38a169" 
                  strokeWidth={2} 
                  dot={{r: 3, fill: '#38a169'}} 
                  activeDot={{r: 5}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <div>
              <p className="text-campus-gray">Study Streak</p>
              <p className="text-campus-blue font-medium">7 days</p>
            </div>
            <div>
              <p className="text-campus-gray">Weekly Goal</p>
              <p className="text-campus-blue font-medium">19.2 / 20 hours</p>
            </div>
            <div>
              <p className="text-campus-gray">Rank</p>
              <p className="text-campus-blue font-medium">#23 of 124</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressStats;
