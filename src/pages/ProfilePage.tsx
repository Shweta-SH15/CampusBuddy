
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Mail, 
  Linkedin, 
  MessageSquare, 
  FileText, 
  Github, 
  Globe, 
  MapPin, 
  Building, 
  Bookmark, 
  Plus, 
  Calendar, 
  Users, 
  X 
} from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const ProfilePage = () => {
  const { toast } = useToast();
  const [skills, setSkills] = useState<string[]>([
    "JavaScript", "React", "Python", "Machine Learning", "Node.js", "SQL", "UX/UI"
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
      setIsAddingSkill(false);
      toast({
        title: "Skill Added",
        description: `${newSkill} has been added to your profile.`
      });
    } else if (skills.includes(newSkill.trim())) {
      toast({
        title: "Error",
        description: "This skill already exists in your profile.",
        variant: "destructive"
      });
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
    toast({
      title: "Skill Removed",
      description: `${skillToRemove} has been removed from your profile.`
    });
  };

  const saveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile Saved",
      description: "Your profile has been updated successfully."
    });
  };

  return (
    <PageWrapper>
      <div className="animate-fade-in">
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="h-40 bg-gradient-to-r from-campus-blue to-campus-blue-light"></div>
          <div className="p-6 sm:p-8 pb-4 relative">
            <div className="absolute -top-16 left-8 border-4 border-white rounded-full overflow-hidden">
              <img 
                src="https://i.pravatar.cc/150?img=8" 
                alt="Profile" 
                className="w-32 h-32 object-cover"
              />
            </div>
            
            <div className="mt-16 sm:mt-0 sm:ml-40">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-campus-blue">Jamie Reynolds</h1>
                  <p className="text-campus-gray">Computer Science • 3rd Year</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={isEditing ? "default" : "outline"} 
                    onClick={() => isEditing ? saveProfile() : setIsEditing(true)}
                  >
                    {isEditing ? "Save Profile" : "Edit Profile"}
                  </Button>
                  <Button>Connect</Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tag-pill">Software Development</span>
                <span className="tag-pill">AI/ML</span>
                <span className="tag-pill">Cybersecurity</span>
                <span className="tag-pill">Design</span>
                <span className="tag-pill">Gaming</span>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="about" className="px-6 sm:px-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="py-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold text-campus-blue">Bio</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-campus-gray">
                        Computer Science student passionate about creating user-friendly apps and 
                        exploring AI/ML applications. Currently interning at TechNova and serving as 
                        the Vice President of the campus Coding Club. Looking to connect with other 
                        developers and collaborate on projects.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold text-campus-blue">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <div>
                            <p className="text-sm font-medium text-campus-blue">Email</p>
                            <p className="text-sm text-campus-gray">jamie.reynolds@university.edu</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <div>
                            <p className="text-sm font-medium text-campus-blue">LinkedIn</p>
                            <p className="text-sm text-campus-gray">linkedin.com/in/jamiereynolds</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <div>
                            <p className="text-sm font-medium text-campus-blue">University Chat</p>
                            <p className="text-sm text-campus-gray">@jamie.reynolds</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold text-campus-blue">Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-campus-gray" />
                          <span className="text-sm text-campus-gray">University City, CA</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Building className="h-4 w-4 text-campus-gray" />
                          <span className="text-sm text-campus-gray">School of Computer Science</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-campus-gray" />
                          <span className="text-sm text-campus-gray">GPA: 3.8/4.0</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Github className="h-4 w-4 text-campus-gray" />
                          <Link to="#" className="text-sm text-campus-blue hover:underline">github.com/jamiereynolds</Link>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="h-4 w-4 text-campus-gray" />
                          <Link to="#" className="text-sm text-campus-blue hover:underline">jamiereynolds.dev</Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-semibold text-campus-blue">Skills</CardTitle>
                        <Dialog open={isAddingSkill} onOpenChange={setIsAddingSkill}>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Add New Skill</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleAddSkill} className="space-y-4 pt-4">
                              <Input
                                placeholder="Enter a skill (e.g., JavaScript, SQL, Design)"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                              />
                              <div className="flex justify-end space-x-2">
                                <Button variant="outline" type="button" onClick={() => setIsAddingSkill(false)}>
                                  Cancel
                                </Button>
                                <Button type="submit">Add Skill</Button>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <div 
                            key={index} 
                            className="pill flex items-center"
                          >
                            <span>{skill}</span>
                            {isEditing && (
                              <button onClick={() => removeSkill(skill)} className="ml-1 text-gray-500 hover:text-gray-700">
                                <X size={14} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-semibold text-campus-blue">Bookmarks</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bookmark className="h-4 w-4 text-campus-blue" />
                          <span className="text-sm">CS301 Lecture Notes</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                          <FileText className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bookmark className="h-4 w-4 text-campus-blue" />
                          <span className="text-sm">Programming Contest</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                          <Calendar className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bookmark className="h-4 w-4 text-campus-blue" />
                          <span className="text-sm">AI Study Group</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                          <Users className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="courses">
              <div className="py-6">
                <p className="text-campus-gray text-center">Course information will be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="projects">
              <div className="py-6">
                <p className="text-campus-gray text-center">Projects will be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="activity">
              <div className="py-6">
                <p className="text-campus-gray text-center">Activity feed will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProfilePage;
