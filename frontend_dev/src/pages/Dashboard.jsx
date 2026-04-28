import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BarChart3,
  Users,
  Play,
  Settings,
  FileText,
  BrainCircuit,
  Mic,
  Eye,
  LogOut,
  Menu,
  X,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";

const performanceData = [
  { name: "Mon", score: 75, communication: 72 },
  { name: "Tue", score: 82, communication: 78 },
  { name: "Wed", score: 88, communication: 85 },
  { name: "Thu", score: 85, communication: 82 },
  { name: "Fri", score: 92, communication: 88 },
  { name: "Sat", score: 90, communication: 87 },
  { name: "Sun", score: 95, communication: 92 },
];

const interviewData = [
  {
    id: 1,
    name: "Alex Kumar",
    position: "Senior Frontend Developer",
    date: "2024-04-25",
    confidence: 88,
    communication: 82,
    technical: 91,
    status: "Completed",
  },
  {
    id: 2,
    name: "Maria Santos",
    position: "Product Manager",
    date: "2024-04-24",
    confidence: 85,
    communication: 92,
    technical: 78,
    status: "Completed",
  },
  {
    id: 3,
    name: "James Chen",
    position: "Backend Engineer",
    date: "2024-04-23",
    confidence: 92,
    communication: 88,
    technical: 95,
    status: "Completed",
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigationItems = [
    { id: "overview", icon: BarChart3, label: "Overview" },
    { id: "interview", icon: Play, label: "Start Interview" },
    { id: "reports", icon: FileText, label: "Reports" },
    { id: "candidates", icon: Users, label: "Candidates" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f7f7f7] text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-20"} border-r border-slate-200 bg-white/90 backdrop-blur flex flex-col transition-all duration-300 ${
          sidebarOpen ? "block" : "hidden md:flex"
        }`}
      >
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          {sidebarOpen && (
            <div className="flex items-center gap-2 w-full">
              <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-slate-900">
                evalifyAI
              </span>
            </div>
          )}
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ x: 5 }}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 group ${
                activeTab === item.id
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </motion.button>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-slate-200">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Header */}
        <header className="sticky top-0 z-40 h-16 flex items-center justify-between px-8 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <h1 className="text-xl font-semibold text-slate-900 capitalize">
              {activeTab}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-slate-900 text-white transition-all font-semibold shadow-sm flex items-center gap-2 text-sm"
            >
              <Play className="w-4 h-4" />
              New Interview
            </motion.button>
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              DJ
            </div>
          </div>
        </header>

        <div className="p-8 relative z-10 space-y-8">
          {/* KPI Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                label: "Confidence Score",
                value: "88%",
                icon: Eye,
                trend: "+5%",
              },
              {
                label: "Communication",
                value: "92%",
                icon: Mic,
                trend: "+8%",
              },
              {
                label: "Technical Accuracy",
                value: "85%",
                icon: BrainCircuit,
                trend: "+3%",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 mb-2">{stat.label}</p>
                    <h3 className="text-4xl font-semibold mb-2">
                      {stat.value}
                    </h3>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm text-emerald-600 font-medium">
                        {stat.trend} this week
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-slate-100 text-slate-900">
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Chart */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Performance Trend</h3>
                <select className="bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-600 hover:border-slate-400 focus:border-slate-900 focus:outline-none transition">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient
                        id="colorScore"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#818cf8"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#818cf8"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="name"
                      stroke="#64748b"
                      style={{ fontSize: "12px" }}
                    />
                    <YAxis stroke="#64748b" style={{ fontSize: "12px" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        borderColor: "#e2e8f0",
                        borderRadius: "8px",
                      }}
                      itemStyle={{ color: "#0f172a" }}
                      cursor={{ stroke: "#0f172a", strokeWidth: 2 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#0f172a"
                      fillOpacity={1}
                      fill="url(#colorScore)"
                      name="Confidence Score"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                { label: "Interviews Completed", value: "24", icon: Award },
                { label: "Avg. Time Per Interview", value: "32m", icon: Clock },
                { label: "Success Rate", value: "92%", icon: TrendingUp },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
                      <stat.icon className="w-4 h-4" />
                    </div>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                  <p className="text-2xl font-semibold ml-11">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interview History Table */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="px-6 py-4 border-b border-slate-200">
              <h3 className="text-lg font-semibold">Recent Interviews</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500">
                      Candidate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500">
                      Scores
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {interviewData.map((interview, idx) => (
                    <motion.tr
                      key={interview.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <p className="font-medium">{interview.name}</p>
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        {interview.position}
                      </td>
                      <td className="px-6 py-4 text-slate-500 text-sm">
                        {interview.date}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                            {interview.confidence}%
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                            {interview.communication}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold flex items-center gap-2 w-fit">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          {interview.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-slate-900 shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 z-40"
      >
        <Play className="w-6 h-6 ml-0.5" />
      </motion.button>
    </div>
  );
}
