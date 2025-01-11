// app/components/ActivityHeatmap.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveHeatMap } from '@nivo/heatmap';

const ActivityHeatmap = ({ data }: { data: any[] }) => {
  return (
    <Card className="w-full h-96">
      <CardHeader>
        <CardTitle>Activity Heatmap</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveHeatMap
          data={data}
          margin={{ top: 20, right: 40, bottom: 60, left: 40 }}
          axisBottom={{
            tickRotation: -45,
            legend: 'Hours',
            legendPosition: 'middle',
            legendOffset: 46
          }}
          axisLeft={{
            legend: 'Days',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          colors={{
            type: 'sequential',
            scheme: 'blues'
          }}
        />
      </CardContent>
    </Card>
  );
};

export default ActivityHeatmap;