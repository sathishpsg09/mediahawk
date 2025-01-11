// app/components/CommunitySelector.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CommunitySelector = ({ selectedCommunities, setSelectedCommunities }: { selectedCommunities: string[], setSelectedCommunities: (communities: string[]) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    // Fetch communities based on search query
  };

  return (
    <div className="space-y-4">
      <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search communities" />
      <Button onClick={handleSearch}>Search</Button>
      <div className="flex gap-2">
        {selectedCommunities.map((community) => (
          <Button key={community} variant="outline">
            {community}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CommunitySelector;