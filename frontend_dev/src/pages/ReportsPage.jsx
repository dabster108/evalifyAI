import { motion } from "framer-motion";
import { BarChart3, Download, Shield, Calendar, TrendingUp, FileSpreadsheet } from "lucide-react";
import AppShell from "../components/AppShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const kpis = [
  { label: "Offer Conversion", value: "38%", delta: "+5.2%" },
  { label: "Avg Interview Score", value: "86", delta: "+3.1%" },
  { label: "Time To Decision", value: "4.2d", delta: "-0.8d" },
];

export default function ReportsPage() {
  return (
    <AppShell
      activeItem="reports"
      title="Reports"
      subtitle="Track candidate outcomes and panel performance"
      primaryActionLabel="Export Report"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {kpis.map((item) => (
          <motion.div key={item.label} whileHover={{ y: -4 }}>
            <Card>
              <CardContent>
                <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                <div className="mt-2 flex items-end gap-3">
                  <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
                  <Badge variant="subtle">{item.delta}</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-slate-300/80 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-slate-600" />
              <CardTitle>Performance Reports</CardTitle>
            </div>
            <CardDescription>Weekly and monthly hiring funnel insights.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              Hiring conversion improved by 12% over the last cycle.
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              Technical rounds show highest signal for backend roles.
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              Communication score trend improved consistently for PM candidates.
            </div>
          </CardContent>
        </Card>
        <Card className="border-slate-300/80 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-slate-600" />
              <CardTitle>Compliance Exports</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Download className="h-4 w-4" />
              Download Audit Pack
            </Button>
            <Button variant="outline" className="mt-3 w-full">
              <FileSpreadsheet className="h-4 w-4" />
              Export CSV
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-300/80 shadow-sm">
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle>Report Timeline</CardTitle>
            <CardDescription>Quick access to generated reports by date.</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4" />
            Filter Date
          </Button>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          {[
            "Weekly Interview Health Report",
            "Monthly Hiring Funnel Summary",
            "Fairness and Bias Compliance Snapshot",
          ].map((report) => (
            <div key={report} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <TrendingUp className="h-4 w-4" />
                Generated today
              </div>
              <p className="mt-1 text-sm font-medium text-slate-900">{report}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  );
}
