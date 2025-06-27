import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const samplePosts = [
  {
    id: 1,
    group: 'NewJeans',
    user: 'BunnyFan',
    content: 'New teaser is out and it looks amazing!',
    date: '2025-06-27',
    tags: ['comeback', 'newjeans']
  },
  {
    id: 2,
    group: 'BTS',
    user: 'ArmyLeader',
    content: 'Jin is finally back from service! 🎉',
    date: '2025-06-26',
    tags: ['jin', 'bts', 'military']
  }
];

export default function SocialFeed() {
  const [posts, setPosts] = useState(samplePosts);
  const [groupFilter, setGroupFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [newPost, setNewPost] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  const handlePost = () => {
    const newEntry = {
      id: posts.length + 1,
      group: 'UserSelectedGroup',
      user: 'CurrentUser',
      content: newPost,
      date: new Date().toISOString().slice(0, 10),
      tags: newPost.match(/#\w+/g)?.map(tag => tag.slice(1)) || []
    };
    setPosts([newEntry, ...posts]);
    setNewPost('');
  };

  const filteredPosts = posts.filter(post => {
    const matchGroup = groupFilter ? post.group === groupFilter : true;
    const matchDate = dateFilter ? post.date === dateFilter : true;
    const matchTag = tagFilter ? post.tags.includes(tagFilter) : true;
    return matchGroup && matchDate && matchTag;
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">K-popVerse Social Feed</h2>
      <div className="flex gap-2 mb-4">
        <Input placeholder="Filter by group" onChange={e => setGroupFilter(e.target.value)} />
        <Input type="date" onChange={e => setDateFilter(e.target.value)} />
        <Input placeholder="Search by tag" onChange={e => setTagFilter(e.target.value)} />
      </div>
      <Textarea
        className="mb-2"
        placeholder="What's happening in K-pop? Use #tags"
        value={newPost}
        onChange={e => setNewPost(e.target.value)}
      />
      <Button onClick={handlePost}>Post</Button>
      <div className="mt-6 grid gap-4">
        {filteredPosts.map(post => (
          <Card key={post.id}>
            <CardContent className="p-4">
              <div className="text-sm text-gray-500">{post.date} - {post.group}</div>
              <div className="font-bold">@{post.user}</div>
              <p>{post.content}</p>
              <div className="text-xs text-purple-500">{post.tags.map(tag => `#${tag} `)}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}