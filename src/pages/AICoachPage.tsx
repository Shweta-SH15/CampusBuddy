
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Brain, BookOpen, Lightbulb, Zap, FileQuestion, Clock, Book, BarChart3, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import AIInsightCard from '@/components/ai-coach/AIInsightCard';
import FlashcardDeck from '@/components/ai-coach/FlashcardDeck';

const AICoachPage = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">AI Learning Coach</h1>
            <p className="text-campus-gray mt-1">Personalized learning assistance for your courses</p>
          </div>
          
          <div className="flex gap-2">
            <Button className="gap-2 bg-campus-green">
              <Lightbulb size={16} />
              <span>Get Smart Insights</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-gradient-to-br from-campus-blue-lightest to-white">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="p-4 rounded-full bg-campus-blue/10">
                    <Brain className="h-10 w-10 text-campus-blue" />
                  </div>
                  <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-xl font-semibold text-campus-blue">How can I help you today?</h2>
                    <p className="text-campus-gray">Upload notes, ask questions, or generate study materials</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="relative">
                    <Input 
                      placeholder="Ask me anything about your course material..." 
                      className="pl-4 pr-24 py-6 text-base"
                    />
                    <Button className="absolute right-1 top-1/2 -translate-y-1/2">
                      Ask AI
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Button variant="outline" size="sm" className="rounded-full gap-1">
                      <FileQuestion size={14} />
                      <span>Generate practice questions</span>
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full gap-1">
                      <Zap size={14} />
                      <span>Explain complex concepts</span>
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full gap-1">
                      <BookOpen size={14} />
                      <span>Summarize my notes</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="insights" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="insights">Smart Insights</TabsTrigger>
                <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
                <TabsTrigger value="quizzes">Practice Quizzes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="insights" className="space-y-4">
                <AIInsightCard 
                  title="Connection between concepts"
                  course="CS301: Algorithms"
                  insight="You seem to understand dynamic programming well, but might need to review greedy algorithms. These are connected concepts - try comparing their approach to optimization problems."
                  icon={<Lightbulb size={20} className="text-yellow-500" />}
                  color="bg-yellow-50"
                />
                
                <AIInsightCard 
                  title="Study pattern analysis"
                  course="CS401: Machine Learning"
                  insight="Your study sessions are most effective in the morning. Consider scheduling complex ML topics before noon when your retention is highest according to your study data."
                  icon={<Clock size={20} className="text-blue-500" />}
                  color="bg-blue-50"
                />
                
                <AIInsightCard 
                  title="Knowledge gap detected"
                  course="CS301: Algorithms"
                  insight="Based on your practice quiz results, you might be struggling with graph traversal algorithms. I've generated additional practice problems focusing on BFS and DFS."
                  icon={<Book size={20} className="text-red-500" />}
                  color="bg-red-50"
                />
              </TabsContent>
              
              <TabsContent value="flashcards" className="space-y-6">
                <FlashcardDeck 
                  title="Algorithms Fundamentals"
                  course="CS301"
                  cardCount={24}
                  progress={65}
                  lastStudied="Yesterday"
                />
                
                <FlashcardDeck 
                  title="Machine Learning Concepts"
                  course="CS401"
                  cardCount={32}
                  progress={40}
                  lastStudied="3 days ago"
                />
                
                <FlashcardDeck 
                  title="Database Systems"
                  course="CS302"
                  cardCount={18}
                  progress={90}
                  lastStudied="Today"
                />
              </TabsContent>
              
              <TabsContent value="quizzes">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <FileQuestion className="mx-auto h-12 w-12 text-muted-foreground/50" />
                      <h3 className="mt-4 text-lg font-medium">No quizzes available yet</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Generate practice questions from your notes or course materials
                      </p>
                      <Button className="mt-4">Create Quiz</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">Learning Progress</CardTitle>
                <CardDescription>This week's activity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-campus-gray">CS301: Algorithms</span>
                    <span className="font-medium text-campus-blue">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-campus-gray">CS401: Machine Learning</span>
                    <span className="font-medium text-campus-blue">62%</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-campus-gray">CS302: Database Systems</span>
                    <span className="font-medium text-campus-blue">73%</span>
                  </div>
                  <Progress value={73} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">Study Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Clock size={16} className="text-green-600" />
                    </div>
                    <span className="text-sm text-campus-gray">Study Time</span>
                  </div>
                  <span className="font-medium text-campus-blue">12.5 hrs this week</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <CheckCircle size={16} className="text-blue-600" />
                    </div>
                    <span className="text-sm text-campus-gray">Completed Tasks</span>
                  </div>
                  <span className="font-medium text-campus-blue">24/30</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <BarChart3 size={16} className="text-purple-600" />
                    </div>
                    <span className="text-sm text-campus-gray">Quiz Score Avg</span>
                  </div>
                  <span className="font-medium text-campus-blue">87%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AICoachPage;
