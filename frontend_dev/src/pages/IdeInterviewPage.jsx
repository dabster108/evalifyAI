import { motion } from "framer-motion";
import {
  Code2,
  TerminalSquare,
  ListChecks,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import AppShell from "../components/AppShell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const scrollReveal = {
  hidden: (direction) => ({ opacity: 0, x: direction > 0 ? 28 : -28 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function IdeInterviewPage() {
  return (
    <AppShell
      activeItem="ide"
      title="IDE Interview"
      subtitle="Run coding rounds with execution and rubric checks"
      primaryActionLabel="Start Coding Round"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
                <Code2 className="h-4 w-4 text-slate-600" />
                <CardTitle>Coding Workspace Setup</CardTitle>
              </div>
              <CardDescription>
                Select challenge level, language, and runtime constraints.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                Challenge pool: Data Structures and API Design
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                Timebox: 45 minutes with automated test checks
              </div>
              <Button>
                <TerminalSquare className="h-4 w-4" />
                Open Live Coding Session
              </Button>
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
                <ListChecks className="h-4 w-4 text-slate-600" />
                <CardTitle>Evaluation Rubric</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Correctness, clarity, complexity, and communication scored in real
              time.
            </CardContent>
          </Card>
        </motion.div>
      </div>

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
              <Clock3 className="h-4 w-4 text-slate-600" />
              <CardTitle>Round Breakdown</CardTitle>
            </div>
            <CardDescription>
              Interview sections and recommended time split.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-3">
            {[
              { title: "Problem Understanding", mins: "8 min" },
              { title: "Coding + Iteration", mins: "27 min" },
              { title: "Optimization + Review", mins: "10 min" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <Badge variant="subtle" className="mt-2">
                  {item.mins}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">
          Interactive Helpers
        </h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            "Auto test case runner",
            "Complexity estimator",
            "Hint generator for interviewer",
          ].map((item, index) => (
            <motion.div
              key={item}
              variants={scrollReveal}
              custom={index % 2 === 0 ? 1 : -1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              className="min-w-[260px]"
            >
              <Card>
                <CardContent>
                  <CheckCircle2 className="h-4 w-4 text-slate-700" />
                  <p className="mt-2 text-sm font-medium text-slate-900">
                    {item}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
