// app/components/PostScheduler.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useSession } from "next-auth/react";

const PostScheduler = ({ selectedCommunities }: { selectedCommunities: string[] }) => {
  const { data: session } = useSession();
  const [schedulingType, setSchedulingType] = useState<Post['schedulingType']>('custom');
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [postContent, setPostContent] = useState('');
  const [postTitle, setPostTitle] = useState('');

  const handleSubmit = async () => {
    if (!session) {
      alert("You must be logged in to schedule a post.");
      return;
    }

    // Submit post to Reddit API
    // Handle API rate limits and error responses
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Schedule New Post</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <Textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Platforms</label>
            <div className="flex gap-2">
              {(['Reddit', 'LinkedIn'] as Platform[]).map((platform) => (
                <Button
                  key={platform}
                  variant={platforms.includes(platform) ? 'default' : 'outline'}
                  onClick={() => {
                    setPlatforms(prev =>
                      prev.includes(platform)
                        ? prev.filter(p => p !== platform)
                        : [...prev, platform]
                    );
                  }}
                >
                  {platform}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Scheduling Type</label>
            <Select
              value={schedulingType}
              onValueChange={(value) => setSchedulingType(value as Post['schedulingType'])}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select scheduling type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom">Custom Time</SelectItem>
                <SelectItem value="optimal">Optimal Time</SelectItem>
                <SelectItem value="recurring">Recurring Post</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleSubmit}>Schedule Post</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostScheduler;