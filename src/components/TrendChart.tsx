import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

interface TrendChartProps {
  title: string;
  data: Array<{ month: string; value: number }>;
  color: string;
}

export function TrendChart({ title, data, color }: TrendChartProps) {
  const formatValue = (value: number) => {
    return `€${(value / 1000).toFixed(1)}k`;
  };

  return (
    <Card className="p-6 bg-dashboard-card border-dashboard-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              tickFormatter={formatValue}
            />
            <Tooltip 
              formatter={(value: number) => [formatValue(value), 'Revenue']}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={color}
              strokeWidth={3}
              dot={{ fill: color, strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, stroke: color, strokeWidth: 2, fill: 'white' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}