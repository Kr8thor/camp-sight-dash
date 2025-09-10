import { Card } from "@/components/ui/card";
import { KPICard } from "./KPICard";
import { SEOMetricCard } from "./SEOMetricCard";
import { TrendChart } from "./TrendChart";
import { businessKPIs, seoMetrics, monthlyTrends } from "@/data/mockData";
import { Calendar, TrendingUp, Link, Shield, Search } from "lucide-react";

export function Dashboard() {
  const currentMonth = new Intl.DateTimeFormat('en-US', { 
    month: 'long', 
    year: 'numeric' 
  }).format(new Date());

  return (
    <div className="min-h-screen bg-dashboard-bg p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 bg-indie-orange rounded-lg flex items-center justify-center shadow-sm">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-indie-brown">
              Indiecampers KPI Dashboard
            </h1>
            <div className="flex items-center space-x-2 text-indie-brown-soft">
              <Calendar className="w-4 h-4" />
              <span>Monthly Report - {currentMonth}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Business Results KPIs */}
      <section className="mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-indie-brown mb-2">
            Business Results
          </h2>
          <p className="text-indie-brown-soft">
            Key revenue and search volume metrics with year-over-year comparisons
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {businessKPIs.map((kpi, index) => (
            <KPICard key={index} kpi={kpi} />
          ))}
        </div>

        {/* Trend Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TrendChart 
            title="Organic Search Revenue Trend"
            data={monthlyTrends.organicRevenue}
            color="hsl(21, 70%, 58%)"
          />
          <TrendChart 
            title="AI Search Revenue Trend"
            data={monthlyTrends.aiRevenue}
            color="hsl(21, 60%, 38%)"
          />
        </div>
      </section>

      {/* SEO Health KPIs */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-indie-brown mb-2">
            SEO Health Metrics
          </h2>
          <p className="text-indie-brown-soft">
            Authority, link quality, and technical health indicators
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Authority & Rankings */}
          <Card className="p-6 bg-dashboard-card border-dashboard-border hover:shadow-lg hover:border-indie-orange-muted transition-all duration-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-indie-orange-muted rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-indie-orange" />
              </div>
              <h3 className="text-lg font-semibold text-indie-brown">
                Authority & Rankings
              </h3>
            </div>
            <div className="space-y-4">
              {seoMetrics.authority.map((metric, index) => (
                <SEOMetricCard key={index} metric={metric} />
              ))}
            </div>
          </Card>

          {/* Link Quality */}
          <Card className="p-6 bg-dashboard-card border-dashboard-border hover:shadow-lg hover:border-indie-orange-muted transition-all duration-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-indie-brown-muted rounded-lg flex items-center justify-center">
                <Link className="w-5 h-5 text-indie-brown" />
              </div>
              <h3 className="text-lg font-semibold text-indie-brown">
                Link Quality
              </h3>
            </div>
            <div className="space-y-4">
              {seoMetrics.linkQuality.map((metric, index) => (
                <SEOMetricCard key={index} metric={metric} />
              ))}
            </div>
          </Card>

          {/* Technical Health */}
          <Card className="p-6 bg-dashboard-card border-dashboard-border hover:shadow-lg hover:border-indie-orange-muted transition-all duration-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-indie-orange-soft rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-indie-orange" />
              </div>
              <h3 className="text-lg font-semibold text-indie-brown">
                Technical Health
              </h3>
            </div>
            <div className="space-y-4">
              {seoMetrics.technicalHealth.map((metric, index) => (
                <SEOMetricCard key={index} metric={metric} />
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}