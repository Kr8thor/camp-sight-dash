// Mock data for Indiecampers KPI Dashboard
export interface BusinessKPI {
  metric: string;
  currentValue: number;
  previousYearValue: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trendPercentage: number;
}

export interface SEOMetric {
  metric: string;
  value: number | string;
  status: 'good' | 'warning' | 'danger';
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: number;
}

export const businessKPIs: BusinessKPI[] = [
  {
    metric: "Revenue from Organic Search",
    currentValue: 145600,
    previousYearValue: 128300,
    unit: "€",
    trend: "up",
    trendPercentage: 13.5
  },
  {
    metric: "Revenue from AI Search", 
    currentValue: 32400,
    previousYearValue: 18200,
    unit: "€",
    trend: "up",
    trendPercentage: 78.0
  },
  {
    metric: "Total Organic Searches",
    currentValue: 342800,
    previousYearValue: 298500,
    unit: "searches",
    trend: "up", 
    trendPercentage: 14.8
  },
  {
    metric: "Total AI Searches",
    currentValue: 89200,
    previousYearValue: 45600,
    unit: "searches",
    trend: "up",
    trendPercentage: 95.6
  }
];

export const seoMetrics = {
  authority: [
    {
      metric: "Domain Rating",
      value: 67,
      status: "good" as const,
      unit: "/100"
    },
    {
      metric: "Average Search Ranking",
      value: 8.2,
      status: "good" as const,
      trend: "up" as const,
      trendValue: 12
    },
    {
      metric: "AI Citations/AI Ranking",
      value: 156,
      status: "good" as const,
      trend: "up" as const,
      trendValue: 23
    }
  ],
  linkQuality: [
    {
      metric: "External Links with DR>35",
      value: 89,
      status: "good" as const,
      unit: "links"
    },
    {
      metric: "1st Hand Travel Reviews",
      value: 34,
      status: "warning" as const,
      unit: "reviews"
    },
    {
      metric: "Trend/Wide Mentions",
      value: 67,
      status: "good" as const,
      unit: "mentions"
    }
  ],
  technicalHealth: [
    {
      metric: "% Pages with Refreshed Data",
      value: 78,
      status: "warning" as const,
      unit: "%"
    },
    {
      metric: "Links with Errors",
      value: 12,
      status: "warning" as const,
      unit: "errors"
    },
    {
      metric: "Orphan Pages",
      value: 5,
      status: "good" as const,
      unit: "pages"
    },
    {
      metric: "Toxic Backlinks",
      value: 3,
      status: "danger" as const,
      unit: "links"
    },
    {
      metric: "Core Web Vitals Score",
      value: 85,
      status: "good" as const,
      unit: "/100"
    }
  ]
};

// Monthly trend data for charts
export const monthlyTrends = {
  organicRevenue: [
    { month: 'Jul', value: 138200 },
    { month: 'Aug', value: 142800 },
    { month: 'Sep', value: 139600 },
    { month: 'Oct', value: 145600 }
  ],
  aiRevenue: [
    { month: 'Jul', value: 28400 },
    { month: 'Aug', value: 29800 },
    { month: 'Sep', value: 31200 },
    { month: 'Oct', value: 32400 }
  ]
};