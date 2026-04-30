import { UserCircle2, BadgeCheck, Mail, Phone, Building2, Users, ShieldCheck } from "lucide-react";
import AppShell from "../components/AppShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

export default function ProfilePage() {
  return (
    <AppShell
      activeItem="profile"
      title="Profile"
      subtitle="Manage recruiter profile and preferences"
      primaryActionLabel="Save Profile"
    >
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2 border-slate-300/80 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <UserCircle2 className="h-4 w-4 text-slate-600" />
              <CardTitle>Profile Overview</CardTitle>
            </div>
            <CardDescription>Organization details and recruiter identity.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs uppercase tracking-wide text-slate-500">Team Name</p>
              Evalify Hiring Team
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs uppercase tracking-wide text-slate-500">Role</p>
              Admin Recruiter
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <Mail className="mb-1 h-4 w-4" />
              team@evalify.ai
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <Phone className="mb-1 h-4 w-4" />
              +977 9800000000
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-300/80 shadow-sm">
          <CardHeader>
            <CardTitle>Verification</CardTitle>
            <CardDescription>Workspace trust and compliance status.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
              <BadgeCheck className="mb-1 h-4 w-4" />
              Verified organization profile.
            </div>
            <Badge variant="subtle">KYC Complete</Badge>
            <Badge variant="subtle">Hiring Policy Active</Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="border-slate-300/80 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-slate-600" />
              <CardTitle>Organization</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-slate-700">
            Head office, billing details, and legal documents configuration.
          </CardContent>
        </Card>
        <Card className="border-slate-300/80 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-slate-600" />
              <CardTitle>Team Access</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-slate-700">
            Manage panel interviewers, reviewers, and role-based permissions.
          </CardContent>
        </Card>
        <Card className="border-slate-300/80 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-slate-600" />
              <CardTitle>Security Preferences</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-slate-700">
            Two-factor auth, session policy, and trusted devices controls.
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-300/80 shadow-sm">
        <CardHeader>
          <CardTitle>Profile Actions</CardTitle>
          <CardDescription>Quick profile management actions.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>Update Team Info</Button>
          <Button variant="outline">Manage Members</Button>
          <Button variant="outline">Download Profile Snapshot</Button>
        </CardContent>
      </Card>
    </AppShell>
  );
}
