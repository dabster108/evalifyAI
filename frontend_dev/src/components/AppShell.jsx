import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Play,
  Code2,
  UploadCloud,
  FileText,
  UserCircle2,
  Users,
  Settings,
  BrainCircuit,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";

const navigationItems = [
  { id: "dashboard", icon: BarChart3, label: "Dashboard", path: "/dashboard" },
  {
    id: "interview",
    icon: Play,
    label: "Start Interview",
    path: "/start-interview",
  },
  { id: "ide", icon: Code2, label: "IDE Interview", path: "/ide-interview" },
  {
    id: "resume",
    icon: UploadCloud,
    label: "Resume Analysis",
    path: "/resume-analysis",
  },
  { id: "reports", icon: FileText, label: "Reports", path: "/reports" },
  { id: "profile", icon: UserCircle2, label: "Profile", path: "/profile" },
  { id: "candidates", icon: Users, label: "Candidates", path: "/candidates" },
  { id: "settings", icon: Settings, label: "Settings", path: "/settings" },
];

export default function AppShell({
  activeItem,
  title,
  subtitle,
  primaryActionLabel = "New Interview",
  onPrimaryAction,
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="relative flex min-h-screen">
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
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 text-sm font-medium ${
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
                </button>
              );
            })}
          </nav>

          {sidebarOpen && (
            <div className="px-4 pb-4">
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>AI Status</span>
                  <span className="inline-flex items-center gap-2 text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-slate-900" />
                    Live
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Interview, resume, and scoring systems are active.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge
                    variant="subtle"
                    className="text-[10px] uppercase tracking-wide text-slate-500"
                  >
                    99.2% uptime
                  </Badge>
                  <Badge
                    variant="subtle"
                    className="text-[10px] uppercase tracking-wide text-slate-500"
                  >
                    2 alerts
                  </Badge>
                </div>
              </div>
            </div>
          )}

          {sidebarOpen && (
            <div className="p-4 border-t border-slate-200/70">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors text-sm font-medium">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </aside>

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
                    Workspace
                  </p>
                  <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
                  {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button size="md" onClick={onPrimaryAction}>
                  {primaryActionLabel}
                </Button>
                <Avatar>
                  <AvatarFallback>EA</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          <div className="w-full space-y-6 px-6 pb-12 pt-8 lg:px-8 2xl:px-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
