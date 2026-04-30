import { motion } from "framer-motion";
import {
  Play,
  Video,
  Users,
  ClipboardList,
  CheckCircle2,
  Sparkles,
  Code2,
  Timer,
  Mic,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import AppShell from "../components/AppShell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const interviewModes = [
  {
    title: "Resume-based Interview",
    detail: "Generate targeted questions from resume skills, projects, and gaps.",
    icon: ClipboardList,
    tag: "Personalized",
  },
  {
    title: "Live Panel Interview",
    detail: "Run collaborative interview rounds with panel scoring in real time.",
    icon: Users,
    tag: "Collaborative",
  },
  {
    title: "IDE Coding Interview",
    detail: "Assess coding with prompts, execution checks, and rubric scoring.",
    icon: Code2,
    tag: "Technical",
  },
  {
    title: "AI Voice + Video Round",
    detail: "Evaluate confidence, communication, and response quality live.",
    icon: Video,
    tag: "Behavioral",
  },
];

const checklist = [
  "Candidate resume uploaded",
  "Interview type selected",
  "Rubric and score weights configured",
  "Consent and recording enabled",
];

const sessionFlow = [
  { step: "Setup", detail: "Mode, duration, and rubric finalized." },
  { step: "Live Round", detail: "AI tracks confidence and answer quality." },
  { step: "Review", detail: "Panel notes and score normalization." },
  { step: "Decision", detail: "Share summary with hiring team." },
];

export default function StartInterviewPage() {
  return (
    <AppShell
      activeItem="interview"
      title="Start Interview"
      subtitle="Create, configure, and launch interview rounds"
      primaryActionLabel="Launch Interview"
    >
      <Badge
        variant="subtle"
        className="text-[10px] uppercase tracking-wide text-slate-600"
      >
        Interview Studio
      </Badge>

      <Card className="overflow-hidden border-slate-300/80 shadow-sm">
        <CardContent className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
              Interview Session
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              Configure and launch an interview session
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Choose interview mode, validate setup, and launch with confidence.
            </p>
          </div>
          <Button size="md">
            <Play className="h-4 w-4" />
            Launch Interview
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden border-slate-300/80 shadow-sm xl:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-slate-600" />
              <CardTitle>Select Interview Type</CardTitle>
            </div>
            <CardDescription>
              Pick the interview flow based on resume, panel style, or coding depth.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {interviewModes.map((mode) => (
              <motion.div
                key={mode.title}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-300/90 bg-white px-4 py-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-slate-700">
                    <mode.icon className="h-5 w-5" />
                  </div>
                  <Badge
                    variant="subtle"
                    className="text-[10px] uppercase tracking-wide text-slate-600"
                  >
                    {mode.tag}
                  </Badge>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  {mode.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">{mode.detail}</p>
                <Button size="sm" variant="outline" className="mt-4">
                  Choose Mode
                </Button>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-slate-300/80 shadow-sm">
          <CardHeader>
            <CardTitle>Pre-launch Checklist</CardTitle>
            <CardDescription>
              Ensure setup quality before starting the session.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
              >
                <CheckCircle2 className="h-4 w-4 text-slate-700" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
            <Button className="mt-2 w-full" size="md">
              <Play className="h-4 w-4" />
              Start Now
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-300/80 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-slate-600" />
            <CardTitle>Interview Timeline Builder</CardTitle>
          </div>
          <CardDescription>
            Configure how your interview is split across sections.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {sessionFlow.map((item) => (
            <div key={item.step} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.step}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{item.detail}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Live Tools</h3>
          <Button variant="ghost" size="sm">
            Customize
          </Button>
        </div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {[
            {
              icon: Mic,
              title: "Voice Quality",
              detail: "Pace, clarity, and filler-word alerts.",
            },
            {
              icon: Video,
              title: "Video Presence",
              detail: "Eye contact and expression tracking.",
            },
            {
              icon: MonitorSmartphone,
              title: "Panel Console",
              detail: "Live notes and score tagging.",
            },
          ].map((tool) => (
            <motion.div
              key={tool.title}
              whileHover={{ y: -4 }}
              className="min-w-[260px] snap-start"
            >
              <Card>
                <CardContent>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 w-fit">
                    <tool.icon className="h-4 w-4 text-slate-700" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-900">{tool.title}</p>
                  <p className="text-xs text-slate-500">{tool.detail}</p>
                  <Button size="sm" variant="outline" className="mt-3">
                    Open
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
