import { ArrowUp, ArrowDown, Minus, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SEOMetric } from "@/data/mockData";

interface SEOMetricCardProps {
  metric: SEOMetric;
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'good':
      return <CheckCircle className="w-4 h-4 text-success" />;
    case 'warning':
      return <AlertTriangle className="w-4 h-4 text-warning" />;
    case 'danger':
      return <XCircle className="w-4 h-4 text-danger" />;
    default:
      return <Minus className="w-4 h-4 text-muted-foreground" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'good':
      return 'border-l-success bg-success/5';
    case 'warning':
      return 'border-l-warning bg-warning/5';
    case 'danger':
      return 'border-l-danger bg-danger/5';
    default:
      return 'border-l-muted';
  }
};

const getTrendIcon = (trend?: string) => {
  if (!trend) return null;
  
  switch (trend) {
    case 'up':
      return <ArrowUp className="w-3 h-3 text-success" />;
    case 'down':
      return <ArrowDown className="w-3 h-3 text-danger" />;
    default:
      return <Minus className="w-3 h-3 text-muted-foreground" />;
  }
};

export function SEOMetricCard({ metric }: SEOMetricCardProps) {
  return (
    <Card className={`p-4 border-l-4 ${getStatusColor(metric.status)} hover:shadow-md transition-shadow`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            {getStatusIcon(metric.status)}
            <h4 className="text-sm font-medium text-foreground">
              {metric.metric}
            </h4>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-bold text-foreground">
              {metric.value}
            </span>
            {metric.unit && (
              <span className="text-sm text-muted-foreground">
                {metric.unit}
              </span>
            )}
          </div>
        </div>
        
        {metric.trend && metric.trendValue && (
          <div className="flex items-center space-x-1">
            {getTrendIcon(metric.trend)}
            <span className="text-xs text-muted-foreground">
              {metric.trendValue}%
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}