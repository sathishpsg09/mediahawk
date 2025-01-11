// app/components/EngagementGraph.tsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EngagementGraph = ({ data }: { data: any[] }) => {
  return (
    <Card className="w-full h-96">
      <CardHeader>
        <CardTitle>Real-time Engagement</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="engagement" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EngagementGraph;