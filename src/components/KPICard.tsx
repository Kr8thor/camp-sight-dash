import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BusinessKPI } from "@/data/mockData";

interface KPICardProps {
  kpi: BusinessKPI;
}

const formatValue = (value: number, unit: string) => {
  if (unit === "€") {
    return `€${(value / 1000).toFixed(1)}k`;
  }
  if (unit === "searches") {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return `${value}${unit}`;
};

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up':
      return <ArrowUp className="w-4 h-4 text-success" />;
    case 'down':
      return <ArrowDown className="w-4 h-4 text-danger" />;
    default:
      return <Minus className="w-4 h-4 text-muted-foreground" />;
  }
};

const getTrendColor = (trend: string) => {
  switch (trend) {
    case 'up':
      return 'text-success';
    case 'down':
      return 'text-danger';
    default:
      return 'text-muted-foreground';
  }
};

export function KPICard({ kpi }: KPICardProps) {
  return (
    <Card className="p-6 bg-dashboard-card border-dashboard-border hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            {kpi.metric}
          </h3>
          <div className="text-3xl font-bold text-foreground">
            {formatValue(kpi.currentValue, kpi.unit)}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getTrendIcon(kpi.trend)}
            <span className={`text-sm font-medium ${getTrendColor(kpi.trend)}`}>
              {kpi.trendPercentage.toFixed(1)}%
            </span>
            <span className="text-sm text-muted-foreground">vs last year</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {formatValue(kpi.previousYearValue, kpi.unit)}
          </div>
        </div>
      </div>
    </Card>
  );
}