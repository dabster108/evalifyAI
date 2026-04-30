import { motion } from "framer-motion";
import { Settings, Shield, Bell } from "lucide-react";
import AppShell from "../components/AppShell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

const scrollReveal = {
  hidden: (direction) => ({ opacity: 0, x: direction > 0 ? 28 : -28 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function SettingsPage() {
  return (
    <AppShell
      activeItem="settings"
      title="Settings"
      subtitle="Control platform behavior and compliance defaults"
      primaryActionLabel="Save Settings"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          variants={scrollReveal}
          custom={-1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-slate-600" />
                <CardTitle>Interview Defaults</CardTitle>
              </div>
              <CardDescription>
                Default timers, rounds, and rubric templates.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Round duration set to 35 minutes with AI-assisted follow-ups
              enabled.
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          variants={scrollReveal}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-slate-600" />
                <CardTitle>Compliance</CardTitle>
              </div>
              <CardDescription>
                Consent, retention, and fairness controls.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Candidate recordings retained for 90 days with audit logging
              active.
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          variants={scrollReveal}
          custom={-1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-slate-600" />
                <CardTitle>Notifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Daily summary and interview reminder notifications are enabled.
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        variants={scrollReveal}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Quick Toggles</CardTitle>
            <CardDescription>
              Frequently used settings in one place.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button variant="outline">Enable Auto-Scoring</Button>
            <Button variant="outline">Enable Panel Notes Sync</Button>
            <Button variant="outline">Enforce Recording Consent</Button>
          </CardContent>
        </Card>
      </motion.div>
    </AppShell>
  );
}
