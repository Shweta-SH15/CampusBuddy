
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Settings, Volume2, List, Calendar, BookOpen, MessageCircle, HelpCircle } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const VoiceAssistantPage = () => {
  const [isListening, setIsListening] = React.useState(false);
  const [voiceRecognition, setVoiceRecognition] = React.useState(true);
  const [voiceResponses, setVoiceResponses] = React.useState(true);
  const [volume, setVolume] = React.useState(70);
  const { toast } = useToast();
  
  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      toast({
        title: "Voice Assistant",
        description: "Listening for commands...",
      });
    } else {
      toast({
        title: "Voice Assistant",
        description: "Stopped listening",
      });
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
  };

  const saveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your voice assistant settings have been updated",
    });
  };

  const handleActivationPhraseChange = () => {
    toast({
      title: "Change Activation Phrase",
      description: "Feature will be available soon",
    });
  };

  const executeQuickCommand = (command: string) => {
    toast({
      title: "Executing Command",
      description: `"${command}"`,
    });
  };

  return (
    <PageWrapper>
      <div className="animate-fade-in space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-campus-blue">Voice Assistant</h1>
            <p className="text-campus-gray mt-1">Ask questions and get answers using voice commands</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2" onClick={saveSettings}>
              <Settings size={16} />
              <span>Save Settings</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="h-[500px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">Voice Assistant</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div 
                    className={`relative p-8 rounded-full ${isListening ? 'bg-campus-blue' : 'bg-campus-gray-light'} cursor-pointer transition-colors`} 
                    onClick={toggleListening}
                  >
                    <Mic size={48} className={`${isListening ? 'text-white animate-pulse' : 'text-campus-gray'}`} />
                    {isListening && (
                      <div className="absolute inset-0 rounded-full border-4 border-campus-blue animate-ping"></div>
                    )}
                  </div>
                  <p className="mt-6 text-center text-campus-blue font-medium">
                    {isListening ? 'Listening... Tap to stop' : 'Tap to speak'}
                  </p>
                  <p className="mt-2 text-center text-campus-gray max-w-md">
                    Try saying "What's on my schedule today?" or "What assignments are due this week?"
                  </p>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium text-campus-blue mb-2">Recent commands</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between items-center p-2 rounded-md hover:bg-gray-50">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-campus-blue" />
                        <span>What's my next class?</span>
                      </div>
                      <span className="text-xs text-campus-gray">2 mins ago</span>
                    </li>
                    <li className="flex justify-between items-center p-2 rounded-md hover:bg-gray-50">
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-campus-blue" />
                        <span>What assignments are due this week?</span>
                      </div>
                      <span className="text-xs text-campus-gray">Yesterday</span>
                    </li>
                    <li className="flex justify-between items-center p-2 rounded-md hover:bg-gray-50">
                      <div className="flex items-center gap-2">
                        <MessageCircle size={16} className="text-campus-blue" />
                        <span>Send a message to study group</span>
                      </div>
                      <span className="text-xs text-campus-gray">2 days ago</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">Quick Commands</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start gap-2 text-left" 
                  onClick={() => executeQuickCommand("What's on my schedule today?")}>
                  <Calendar size={16} />
                  <span>What's on my schedule today?</span>
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-2 text-left"
                  onClick={() => executeQuickCommand("Summarize my next lecture")}>
                  <BookOpen size={16} />
                  <span>Summarize my next lecture</span>
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-2 text-left"
                  onClick={() => executeQuickCommand("List my assignment deadlines")}>
                  <List size={16} />
                  <span>List my assignment deadlines</span>
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-2 text-left"
                  onClick={() => executeQuickCommand("Help me with my homework")}>
                  <HelpCircle size={16} />
                  <span>Help me with my homework</span>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-campus-blue">Voice Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium text-sm">Voice Recognition</div>
                    <div className="text-xs text-muted-foreground">Enable voice command recognition</div>
                  </div>
                  <Switch checked={voiceRecognition} onCheckedChange={setVoiceRecognition} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium text-sm">Voice Responses</div>
                    <div className="text-xs text-muted-foreground">Assistant responds with voice</div>
                  </div>
                  <Switch checked={voiceResponses} onCheckedChange={setVoiceResponses} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium text-sm">Activation Phrase</div>
                    <div className="text-xs text-muted-foreground">Currently set to "Campus"</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleActivationPhraseChange}>Change</Button>
                </div>
                
                <div className="space-y-2">
                  <div className="font-medium text-sm">Assistant Voice</div>
                  <div className="flex items-center gap-2">
                    <Volume2 size={16} className="text-campus-gray" />
                    <input 
                      type="range" 
                      className="w-full" 
                      min="0" 
                      max="100" 
                      value={volume} 
                      onChange={handleVolumeChange} 
                    />
                    <span className="text-xs text-campus-gray">{volume}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default VoiceAssistantPage;
