import { motion } from "framer-motion";
import {
  FileSearch,
  Sparkles,
  UploadCloud,
  AlertCircle,
  BrainCircuit,
  Filter,
} from "lucide-react";
import AppShell from "../components/AppShell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const scrollReveal = {
  hidden: (direction) => ({ opacity: 0, x: direction > 0 ? 28 : -28 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const resumes = [
  { name: "Riya_Patel_ML.pdf", score: "91%", risk: "Low" },
  { name: "NoahKim_Design.pdf", score: "74%", risk: "Medium" },
  { name: "ElenaRossi_BE.pdf", score: "87%", risk: "Low" },
];

export default function ResumeAnalysisPage() {
  return (
    <AppShell
      activeItem="resume"
      title="Resume Analysis"
      subtitle="Evaluate resume quality, fit, and interview readiness"
      primaryActionLabel="Upload Resume"
    >
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <motion.div
          variants={scrollReveal}
          custom={-1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="xl:col-span-2"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileSearch className="h-4 w-4 text-slate-600" />
                <CardTitle>Fit Scoring</CardTitle>
              </div>
              <CardDescription>
                Skill extraction and role matching from uploaded resumes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {resumes.map((resume) => (
                <div
                  key={resume.name}
                  className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {resume.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      Role-fit score: {resume.score}
                    </p>
                  </div>
                  <Badge variant="subtle" className="w-fit text-slate-600">
                    Risk: {resume.risk}
                  </Badge>
                </div>
              ))}
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
                <Sparkles className="h-4 w-4 text-slate-600" />
                <CardTitle>Analysis Actions</CardTitle>
              </div>
              <CardDescription>
                Move candidates into interview flows after validation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                <UploadCloud className="h-4 w-4" />
                Add New Resume
              </Button>
              <Button variant="outline" className="w-full">
                Generate Interview Plan
              </Button>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
                <AlertCircle className="mb-1 h-4 w-4" />2 resumes need manual
                skill verification.
              </div>
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
          <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Skill Coverage Map</CardTitle>
              <CardDescription>
                See which skills are covered by current applicants.
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4" />
              Filter Role
            </Button>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-4">
            {["React", "Node.js", "System Design", "Communication"].map(
              (skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm"
                >
                  <p className="font-semibold text-slate-900">{skill}</p>
                  <p className="text-xs text-slate-500">Coverage strong</p>
                </div>
              ),
            )}
          </CardContent>
        </Card>
      </motion.div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">AI Suggestions</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            "Create backend-focused interview for Elena Rossi",
            "Add portfolio round for Noah Kim",
            "Fast-track Riya Patel to live panel",
          ].map((item, index) => (
            <motion.div
              key={item}
              variants={scrollReveal}
              custom={index % 2 === 0 ? 1 : -1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              className="min-w-[280px]"
            >
              <Card>
                <CardContent>
                  <BrainCircuit className="h-4 w-4 text-slate-700" />
                  <p className="mt-2 text-sm text-slate-800">{item}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
