// app/types/index.ts
type Platform = 'Reddit' | 'LinkedIn';

interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
}

interface Community {
  id: string;
  name: string;
  platform: Platform;
}

interface Post {
  id: string;
  content: string;
  platforms: Platform[];
  scheduledTime: Date;
  schedulingType: 'custom' | 'optimal' | 'recurring';
  recurringConfig?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    days?: number[];
  };
  status: 'scheduled' | 'posted' | 'failed';
  analytics?: {
    views: number;
    engagement: number;
    clicks: number;
  };
}

interface ActivityData {
  timestamp: Date;
  platform: Platform;
  engagementLevel: number;
}