import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  BarChart3,
  Users,
  Play,
  Settings,
  FileText,
  BrainCircuit,
  Code2,
  Mic,
  Eye,
  LogOut,
  Menu,
  X,
  ClipboardList,
  Video,
  MessageSquare,
  Shield,
  Cpu,
  FileSearch,
  Calendar,
  Activity,
  Layers,
  ListChecks,
  CheckCircle2,
  Award,
  Clock,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  BadgeCheck,
  UploadCloud,
  UserCircle2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

const performanceData = [
  { name: "Mon", score: 76 },
  { name: "Tue", score: 82 },
  { name: "Wed", score: 88 },
  { name: "Thu", score: 86 },
  { name: "Fri", score: 92 },
  { name: "Sat", score: 90 },
  { name: "Sun", score: 95 },
];

const statCards = [
  {
    label: "Confidence Score",
    value: "88%",
    trend: "+4.6%",
    icon: Eye,
  },
  {
    label: "Communication Score",
    value: "92%",
    trend: "+6.1%",
    icon: Mic,
  },
  {
    label: "Technical Accuracy",
    value: "85%",
    trend: "+3.2%",
    icon: BrainCircuit,
  },
];

const summaryCards = [
  {
    label: "Interviews Completed",
    value: "24",
    detail: "6 more than last week",
    icon: Award,
  },
  {
    label: "Avg Time Per Interview",
    value: "32m",
    detail: "Down 3 minutes",
    icon: Clock,
  },
  {
    label: "Success Rate",
    value: "92%",
    detail: "Offer-ready candidates",
    icon: BadgeCheck,
  },
];

const platformSections = [
  {
    title: "Interview Studio",
    description: "Live sessions with AI cues, timers, and scoring.",
    icon: Video,
  },
  {
    title: "Question Bank",
    description: "Role-based prompts, rubrics, and follow-ups.",
    icon: ClipboardList,
  },
  {
    title: "Candidate Pipeline",
    description: "Stages, notes, and team collaboration.",
    icon: Users,
  },
  {
    title: "Transcript Search",
    description: "Find key moments across interviews instantly.",
    icon: FileSearch,
  },
  {
    title: "Feedback Hub",
    description: "AI summaries with next-step recommendations.",
    icon: MessageSquare,
  },
  {
    title: "Bias Monitor",
    description: "Fairness checks and compliance flags.",
    icon: Shield,
  },
  {
    title: "Model Health",
    description: "System status and model drift signals.",
    icon: Cpu,
  },
];

const upcomingInterviews = [
  {
    id: 1,
    name: "Riya Patel",
    role: "ML Engineer",
    time: "Today 2:30 PM",
    mode: "Live",
    status: "Ready",
  },
  {
    id: 2,
    name: "Noah Kim",
    role: "Product Designer",
    time: "Today 4:00 PM",
    mode: "Panel",
    status: "Briefing",
  },
  {
    id: 3,
    name: "Elena Rossi",
    role: "Backend Engineer",
    time: "Tomorrow 10:15 AM",
    mode: "Async",
    status: "Scheduled",
  },
];

const aiInsights = [
  {
    title: "Confidence rises with prompt hints",
    detail: "Candidates improved clarity by 11% after follow-up nudges.",
  },
  {
    title: "Speech pacing matches top performers",
    detail: "Average pace is within the optimal 130-150 wpm range.",
  },
  {
    title: "High technical accuracy on system design",
    detail: "Architecture responses exceeded target by 8 points.",
  },
];

const pipelineStages = [
  { label: "Screening", count: 18, delta: "+4" },
  { label: "Live Interview", count: 8, delta: "+2" },
  { label: "Decision", count: 5, delta: "+1" },
  { label: "Offer", count: 3, delta: "+1" },
];

const actionItems = [
  {
    title: "Review Maria Santos feedback",
    detail: "Due today - 2 highlights pending",
  },
  {
    title: "Share Alex Kumar report with team",
    detail: "Awaiting hiring manager notes",
  },
  {
    title: "Update question bank for Backend",
    detail: "Add system design prompts",
  },
];

const resumeUploads = [
  { name: "Riya_Patel_ML.pdf", status: "Parsed", skillFit: "91%" },
  { name: "NoahKim_Design.pdf", status: "Queued", skillFit: "Pending" },
  { name: "ElenaRossi_BE.pdf", status: "Parsed", skillFit: "87%" },
];

const interviewTracks = [
  {
    title: "Resume-based Interview",
    detail: "Generate personalized questions from candidate resume signals.",
  },
  {
    title: "IDE Pair Interview",
    detail:
      "Live coding interview with problem prompts and code quality checks.",
  },
  {
    title: "Role Competency Round",
    detail: "Structured rubric-focused interview for level and role matching.",
  },
];

const pipelineTotal = pipelineStages.reduce(
  (total, stage) => total + stage.count,
  0,
);

const interviewData = [
  {
    id: 1,
    name: "Alex Kumar",
    position: "Senior Frontend Developer",
    date: "Apr 25, 2024",
    scores: [
      { label: "Conf", value: 88 },
      { label: "Comm", value: 82 },
      { label: "Tech", value: 91 },
    ],
    status: "Completed",
  },
  {
    id: 2,
    name: "Maria Santos",
    position: "Product Manager",
    date: "Apr 24, 2024",
    scores: [
      { label: "Conf", value: 85 },
      { label: "Comm", value: 92 },
      { label: "Tech", value: 78 },
    ],
    status: "Completed",
  },
  {
    id: 3,
    name: "James Chen",
    position: "Backend Engineer",
    date: "Apr 23, 2024",
    scores: [
      { label: "Conf", value: 92 },
      { label: "Comm", value: 88 },
      { label: "Tech", value: 95 },
    ],
    status: "Completed",
  },
  {
    id: 4,
    name: "Aisha Rahman",
    position: "Data Scientist",
    date: "Apr 22, 2024",
    scores: [
      { label: "Conf", value: 79 },
      { label: "Comm", value: 76 },
      { label: "Tech", value: 83 },
    ],
    status: "Pending",
  },
];

const statusStyles = {
  Completed: { variant: "subtle", dot: "bg-slate-600" },
  Pending: { variant: "subtle", dot: "bg-slate-400" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const scrollItemVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 28 : -28,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const navigationItems = [
    { id: "dashboard", icon: BarChart3, label: "Dashboard" },
    { id: "interview", icon: Play, label: "Start Interview" },
    { id: "ide", icon: Code2, label: "IDE Interview" },
    { id: "resume", icon: UploadCloud, label: "Resume Uploads" },
    { id: "reports", icon: FileText, label: "Reports" },
    { id: "profile", icon: UserCircle2, label: "Profile" },
    { id: "candidates", icon: Users, label: "Candidates" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];
  const activeNavItem =
    navigationItems.find((item) => item.id === activeTab) ?? navigationItems[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="relative flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${sidebarOpen ? "w-72" : "w-20"} border-r border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-sm transition-all duration-300 ${
            sidebarOpen ? "block" : "hidden md:flex"
          } md:flex flex-col`}
        >
          <div className="h-16 flex items-center px-6 border-b border-slate-200/70">
            {sidebarOpen && (
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold tracking-tight text-slate-900">
                  evalifyAI
                </span>
              </div>
            )}
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 6 }}
                  onClick={() => {
                    const routeMap = {
                      interview: "/start-interview",
                      ide: "/ide-interview",
                      resume: "/resume-analysis",
                      reports: "/reports",
                      profile: "/profile",
                      candidates: "/candidates",
                      settings: "/settings",
                    };
                    if (routeMap[item.id]) {
                      navigate(routeMap[item.id]);
                      return;
                    }
                    setActiveTab(item.id);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 group text-sm font-medium ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      isActive ? "text-white" : "text-slate-500"
                    }`}
                  />
                  {sidebarOpen && <span>{item.label}</span>}
                </motion.button>
              );
            })}
          </nav>

          {sidebarOpen && (
            <div className="p-4 border-t border-slate-200/70">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors text-sm font-medium">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto scroll-smooth">
          <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
            <div className="flex h-16 w-full items-center justify-between px-6 lg:px-8 2xl:px-12">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="md:hidden p-2 hover:bg-slate-100 rounded-xl transition"
                >
                  {sidebarOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                    AI Intelligence
                  </p>
                  <h1 className="text-xl font-semibold text-slate-900 capitalize">
                    {activeNavItem.label}
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:inline-flex"
                >
                  <Sparkles className="h-4 w-4" />
                  Invite Panel
                </Button>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button size="md">
                    <Play className="h-4 w-4" />
                    New Interview
                  </Button>
                </motion.div>
                <Avatar>
                  <AvatarFallback>EA</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          <div className="w-full space-y-8 px-6 pb-12 pt-8 lg:px-8 2xl:px-12">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
            >
              <Card className="overflow-hidden border-slate-300/80 shadow-sm">
                <CardContent className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
                      Welcome back
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                      Interview Command Center
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                      AI scoring is active. 3 interviews are scheduled today.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["NLP Active", "Vision Tracking", "Speech Analysis"].map(
                        (chip) => (
                          <Badge
                            key={chip}
                            variant="subtle"
                            className="text-[11px] uppercase tracking-wider text-slate-500"
                          >
                            {chip}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button size="md">Resume Interview</Button>
                    <Button variant="outline" size="md">
                      Open Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {activeTab === "resume" && (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-6 xl:grid-cols-3"
              >
                <Card className="xl:col-span-2 border-slate-300/80 shadow-sm">
                  <CardHeader>
                    <CardTitle>Resume Upload Pipeline</CardTitle>
                    <CardDescription>
                      Upload resumes and auto-map skills before interview setup.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div
                      variants={scrollItemVariants}
                      custom={1}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      whileHover={{ y: -2 }}
                      className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center"
                    >
                      <UploadCloud className="mx-auto h-7 w-7 text-slate-700" />
                      <p className="mt-3 text-sm font-semibold text-slate-800">
                        Drop resume files here or browse from device
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Supports PDF and DOCX - parsing starts automatically.
                      </p>
                      <Button size="sm" className="mt-4">
                        Upload Resume
                      </Button>
                    </motion.div>
                    <div className="space-y-3">
                      {resumeUploads.map((resume, index) => (
                        <motion.div
                          key={resume.name}
                          variants={scrollItemVariants}
                          custom={index % 2 === 0 ? 1 : -1}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-40px" }}
                          whileHover={{ x: 4 }}
                          className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              {resume.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              Parsing status: {resume.status}
                            </p>
                          </div>
                          <Badge
                            variant="subtle"
                            className="w-fit text-[10px] uppercase tracking-wide text-slate-600"
                          >
                            Skill fit: {resume.skillFit}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-slate-300/80 shadow-sm">
                  <CardHeader>
                    <CardTitle>Interview Modes</CardTitle>
                    <CardDescription>
                      Build interviews from resume or coding workflow.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {interviewTracks.map((track, index) => (
                      <motion.div
                        key={track.title}
                        variants={scrollItemVariants}
                        custom={index % 2 === 0 ? 1 : -1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {track.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {track.detail}
                        </p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {(activeTab === "reports" ||
              activeTab === "profile" ||
              activeTab === "settings") && (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <Card className="border-slate-300/80 shadow-sm">
                  <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle>Report Visibility Center</CardTitle>
                      <CardDescription>
                        Reports are now prioritized inside Profile and Settings
                        for quick candidate review and configuration.
                      </CardDescription>
                    </div>
                    <Badge
                      variant="subtle"
                      className="w-fit text-[10px] uppercase tracking-wide text-slate-600"
                    >
                      Synced
                    </Badge>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Profile reports
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        Candidate strengths, gaps, and trend history.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Settings reports
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        Rubric templates, fairness checks, and policy audit
                        logs.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Export
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        PDF/CSV exports for panel and hiring managers.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Platform Sections
                  </h3>
                  <p className="text-sm text-slate-500">
                    Scroll to explore key pages of your AI interview platform.
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  Manage
                </Button>
              </div>
              <div className="mt-4 flex gap-4 overflow-x-auto pb-4 pr-4 snap-x snap-mandatory">
                {platformSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    variants={scrollItemVariants}
                    custom={index % 2 === 0 ? 1 : -1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: index * 0.05 }}
                    className="min-w-[220px] max-w-[240px] flex-1 snap-start"
                  >
                    <Card className="h-full border-slate-300/80 shadow-sm">
                      <CardContent className="flex h-full flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <div className="rounded-2xl border border-slate-300 bg-slate-100/80 p-3 text-slate-700">
                            <section.icon className="h-5 w-5" />
                          </div>
                          <Badge
                            variant="subtle"
                            className="text-[11px] uppercase tracking-wider text-slate-500"
                          >
                            Open
                          </Badge>
                        </div>
                        <div>
                          <p className="text-base font-semibold text-slate-900">
                            {section.title}
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            {section.description}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="w-fit">
                          View page
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-6 lg:grid-cols-3"
            >
              {statCards.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                >
                  <Card className="border-slate-300/80 shadow-sm">
                    <CardContent>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-slate-500">{stat.label}</p>
                          <div className="mt-3 flex items-end gap-3">
                            <h3 className="text-4xl font-semibold text-slate-900">
                              {stat.value}
                            </h3>
                            <Badge
                              variant="subtle"
                              className="gap-1 text-slate-600"
                            >
                              <ArrowUpRight className="h-3 w-3" />
                              {stat.trend}
                            </Badge>
                          </div>
                          <p className="mt-3 text-xs text-slate-500">
                            This week vs last week
                          </p>
                        </div>
                        <div className="p-3 rounded-2xl bg-slate-100/80 text-slate-700 shadow-sm">
                          <stat.icon className="w-6 h-6" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <motion.div
                variants={scrollItemVariants}
                custom={1}
                className="lg:col-span-2"
              >
                <Card className="relative overflow-hidden border-slate-300/80 shadow-sm">
                  <CardHeader className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <CardTitle>Performance Trend</CardTitle>
                      <CardDescription>
                        Confidence score across recent interviews.
                      </CardDescription>
                    </div>
                    <div className="relative">
                      <select className="appearance-none rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500 focus:border-slate-400 focus:outline-none">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="h-72 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={performanceData}>
                          <defs>
                            <linearGradient
                              id="scoreGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#0f172a"
                                stopOpacity={0.22}
                              />
                              <stop
                                offset="95%"
                                stopColor="#0f172a"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="4 6"
                            vertical={false}
                            stroke="#e2e8f0"
                          />
                          <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#64748b", fontSize: 12 }}
                          />
                          <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#64748b", fontSize: 12 }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#ffffff",
                              borderColor: "#e2e8f0",
                              borderRadius: "12px",
                              boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
                            }}
                            itemStyle={{ color: "#0f172a" }}
                            cursor={{ stroke: "#0f172a", strokeWidth: 2 }}
                          />
                          <Area
                            type="monotone"
                            dataKey="score"
                            stroke="#0f172a"
                            strokeWidth={3}
                            fill="url(#scoreGradient)"
                            name="Confidence Score"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={scrollItemVariants}
                custom={-1}
                className="space-y-4"
              >
                {summaryCards.map((stat) => (
                  <Card
                    key={stat.label}
                    className="rounded-2xl border-slate-300/80 shadow-sm"
                  >
                    <CardContent className="flex items-center gap-4">
                      <div className="rounded-2xl bg-slate-100/80 p-3 text-slate-700">
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-semibold text-slate-900">
                          {stat.value}
                        </p>
                        <p className="text-xs text-slate-500">{stat.detail}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <motion.div
                variants={scrollItemVariants}
                custom={1}
                className="lg:col-span-2"
              >
                <Card>
                  <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle>Upcoming Interviews</CardTitle>
                      <CardDescription>
                        Sessions lined up for the next 24 hours.
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      Open calendar
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingInterviews.map((session) => (
                      <div
                        key={session.id}
                        className="flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {session.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {session.role}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                          <Calendar className="h-4 w-4" />
                          <span>{session.time}</span>
                          <Badge
                            variant="subtle"
                            className="text-[10px] uppercase tracking-wide text-slate-500"
                          >
                            {session.mode}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="subtle"
                            className="text-[10px] uppercase tracking-wide text-slate-500"
                          >
                            {session.status}
                          </Badge>
                          <Button size="sm">Start</Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scrollItemVariants} custom={-1}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-slate-600" />
                      <CardTitle>AI Insight Pulse</CardTitle>
                    </div>
                    <CardDescription>
                      Smart highlights from recent sessions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {aiInsights.map((insight) => (
                      <div
                        key={insight.title}
                        className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {insight.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {insight.detail}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <motion.div
                variants={scrollItemVariants}
                custom={1}
                className="lg:col-span-2"
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-slate-600" />
                      <CardTitle>Candidate Pipeline</CardTitle>
                    </div>
                    <CardDescription>
                      See how candidates move through the funnel.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pipelineStages.map((stage) => (
                      <div key={stage.label}>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-slate-900">
                              {stage.label}
                            </span>
                            <Badge
                              variant="subtle"
                              className="text-[10px] uppercase tracking-wide text-slate-500"
                            >
                              {stage.delta}
                            </Badge>
                          </div>
                          <span className="text-xs text-slate-500">
                            {stage.count} candidates
                          </span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-slate-200">
                          <div
                            className="h-2 rounded-full bg-slate-900"
                            style={{
                              width: `${Math.max(
                                8,
                                (stage.count / pipelineTotal) * 100,
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scrollItemVariants} custom={-1}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <ListChecks className="h-4 w-4 text-slate-600" />
                      <CardTitle>Action Items</CardTitle>
                    </div>
                    <CardDescription>
                      Tasks that keep interviews on track.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {actionItems.map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/80 text-slate-700">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-500">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle>Recent Interviews</CardTitle>
                    <CardDescription>
                      Latest candidate sessions with AI scoring.
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View all
                  </Button>
                </CardHeader>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200/70 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                        <th className="px-6 py-4">Candidate</th>
                        <th className="px-6 py-4">Position</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Scores</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {interviewData.map((interview, idx) => {
                        const statusStyle = statusStyles[interview.status];
                        return (
                          <motion.tr
                            key={interview.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="border-b border-slate-200/70 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                          >
                            <td className="px-6 py-4 font-medium text-slate-900">
                              {interview.name}
                            </td>
                            <td className="px-6 py-4 text-slate-500">
                              {interview.position}
                            </td>
                            <td className="px-6 py-4 text-slate-500">
                              {interview.date}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-wrap gap-2">
                                {interview.scores.map((score) => (
                                  <Badge
                                    key={score.label}
                                    variant="subtle"
                                    className="gap-1 text-slate-600"
                                  >
                                    <span className="text-[10px] uppercase tracking-wide">
                                      {score.label}
                                    </span>
                                    {score.value}%
                                  </Badge>
                                ))}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <Badge
                                variant={statusStyle.variant}
                                className="gap-2 text-slate-600"
                              >
                                <span
                                  className={`h-1.5 w-1.5 rounded-full ${statusStyle.dot}`}
                                />
                                {interview.status}
                              </Badge>
                            </td>
                            <td className="px-6 py-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-9 w-9 rounded-full"
                                aria-label={`View ${interview.name}`}
                              >
                                <Play className="h-4 w-4" />
                              </Button>
                            </td>
                          </motion.tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          </div>
        </main>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Button
            variant="default"
            size="lg"
            className="h-14 w-14 rounded-full p-0"
            aria-label="Start new interview"
          >
            <Play className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
