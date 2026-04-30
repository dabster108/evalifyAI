import { motion } from "framer-motion";
import { Users, UserPlus, CalendarClock, MessageSquare } from "lucide-react";
import AppShell from "../components/AppShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const candidates = [
  { name: "Alex Kumar", stage: "Live Interview" },
  { name: "Maria Santos", stage: "Decision" },
  { name: "James Chen", stage: "Screening" },
];

export default function CandidatesPage() {
  return (
    <AppShell
      activeItem="candidates"
      title="Candidates"
      subtitle="Manage candidate pipeline and stage movement"
      primaryActionLabel="Add Candidate"
    >
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-slate-600" />
            <CardTitle>Pipeline List</CardTitle>
          </div>
          <CardDescription>Current candidates and their active stage.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {candidates.map((candidate) => (
            <div
              key={candidate.name}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3"
            >
              <p className="text-sm font-medium text-slate-900">{candidate.name}</p>
              <Badge variant="subtle">{candidate.stage}</Badge>
            </div>
          ))}
          <Button variant="outline">
            <UserPlus className="h-4 w-4" />
            Invite Candidate
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4 text-slate-600" />
              <CardTitle>Upcoming Candidate Events</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Alex Kumar - Technical round tomorrow 10:00 AM",
              "Maria Santos - Hiring manager sync today 4:30 PM",
              "James Chen - Resume review pending",
            ].map((event) => (
              <div key={event} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                {event}
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">Notes Feed</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {["Strong system design", "Needs better pace", "Great culture fit"].map((note) => (
              <motion.div key={note} whileHover={{ y: -3 }} className="min-w-[220px]">
                <Card>
                  <CardContent>
                    <MessageSquare className="h-4 w-4 text-slate-700" />
                    <p className="mt-2 text-sm text-slate-800">{note}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
