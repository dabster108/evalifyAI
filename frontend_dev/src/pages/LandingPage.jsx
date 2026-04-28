import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Eye,
  Mic,
  FileText,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const features = [
  {
    icon: BrainCircuit,
    title: "NLP Answer Analysis",
    desc: "Semantic scoring across technical and behavioral responses with deep context understanding.",
  },
  {
    icon: Eye,
    title: "Facial Emotion Detection",
    desc: "Computer vision detects micro-expressions to measure confidence and engagement.",
  },
  {
    icon: Mic,
    title: "Speech Tone Analysis",
    desc: "Voice modulation, pacing, and filler-word analysis for confidence profiling.",
  },
  {
    icon: FileText,
    title: "AI Feedback Reports",
    desc: "Instant, actionable reports that highlight strengths, gaps, and next steps.",
  },
  {
    icon: Briefcase,
    title: "Role Recommendations",
    desc: "Maps skills to job fit and suggests internal roles with high alignment.",
  },
  {
    icon: TrendingUp,
    title: "Hiring Intelligence",
    desc: "Track team performance trends and optimize your interview process.",
  },
];

const steps = [
  {
    icon: FileText,
    title: "Upload Resume",
    desc: "Candidates submit resumes and profiles in minutes.",
  },
  {
    icon: MessageSquare,
    title: "AI Interview",
    desc: "Structured sessions with real-time prompts and hints.",
  },
  {
    icon: BrainCircuit,
    title: "Multi-Modal Analysis",
    desc: "NLP, vision, and speech models analyze simultaneously.",
  },
  {
    icon: CheckCircle,
    title: "Instant Report",
    desc: "Receive insights, scores, and recommendations instantly.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Talent Manager, TechCorp",
    text: "evalifyAI reduced our hiring time by 60% and improved candidate quality significantly.",
  },
  {
    name: "Marcus Johnson",
    role: "HR Director, StartupXYZ",
    text: "The emotion detection gives us objective data we never had before.",
  },
  {
    name: "Elena Rodriguez",
    role: "Recruitment Lead, Enterprise Co",
    text: "This feels like the future of interviewing. The insights are incredible.",
  },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 pt-6">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center justify-between rounded-full bg-slate-100/90 backdrop-blur px-4 py-2 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white">
                <BrainCircuit className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold">evalifyAI</span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a
                href="#features"
                className="transition-colors hover:text-slate-900"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="transition-colors hover:text-slate-900"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="transition-colors hover:text-slate-900"
              >
                Testimonials
              </a>
            </div>

            <div className="hidden md:block">
              <Link
                to="/dashboard"
                className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Demo
              </Link>
            </div>

            <button
              className="md:hidden text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mt-3 rounded-2xl bg-white px-6 py-4 shadow-sm ring-1 ring-slate-200">
              <div className="space-y-3 text-sm font-medium text-slate-600">
                <a href="#features" className="block hover:text-slate-900">
                  Features
                </a>
                <a href="#how-it-works" className="block hover:text-slate-900">
                  How It Works
                </a>
                <a href="#testimonials" className="block hover:text-slate-900">
                  Testimonials
                </a>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
                >
                  Demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <div className="mx-auto mb-8 h-14 w-14 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 flex items-center justify-center">
                <BrainCircuit className="h-6 w-6 text-slate-900" />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                AI-Powered <br />
                Interview Intelligence
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-slate-500"
            >
              NLP, Computer Vision, and Speech Processing evaluate candidates
              with precision, delivering intelligent feedback and role
              recommendations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/dashboard"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/dashboard"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900"
              >
                View Dashboard Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 pb-24">
        <motion.div
          className="mx-auto max-w-5xl"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Comprehensive AI Analysis
            </h2>
            <p className="mt-3 text-slate-500">
              Evaluate every dimension of candidate performance using
              multi-modal AI.
            </p>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">
                  <feature.icon className="h-5 w-5 text-slate-900" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 pb-24">
        <motion.div
          className="mx-auto max-w-5xl"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">How It Works</h2>
            <p className="mt-3 text-slate-500">
              A seamless process from interview to report.
            </p>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    Step 0{index + 1}
                  </span>
                </div>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-6 pb-24">
        <motion.div
          className="mx-auto max-w-5xl"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Powerful Dashboard
            </h2>
            <p className="mt-3 text-slate-500">
              Analytics, reports, and candidate management in one clean
              interface.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    AI Interview Dashboard
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Interview Intelligence Overview
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  Live Analysis
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Confidence Score", value: "88%" },
                  { label: "Communication", value: "92%" },
                  { label: "Technical", value: "85%" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">
                      {item.value}
                    </p>
                    <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-slate-900"
                        style={{ width: item.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Performance Trend</p>
                  <div className="mt-3 h-36 rounded-xl bg-white ring-1 ring-slate-200" />
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">AI Feedback</p>
                  <p className="mt-3 text-sm text-slate-600">
                    Strong clarity and structure. Recommend deeper technical
                    probing on system design questions.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Strengths identified
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Recent Interviews</p>
                <div className="mt-3 space-y-2 text-sm">
                  {[
                    { name: "Alex Kumar", role: "Frontend", score: "91%" },
                    { name: "Maria Santos", role: "Product", score: "87%" },
                    { name: "James Chen", role: "Backend", score: "94%" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between rounded-xl bg-white px-3 py-2 ring-1 ring-slate-200"
                    >
                      <span className="font-medium text-slate-700">
                        {row.name}
                      </span>
                      <span className="text-slate-500">{row.role}</span>
                      <span className="font-semibold text-slate-900">
                        {row.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Explore Dashboard
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 pb-24">
        <motion.div
          className="mx-auto max-w-5xl"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              What Teams Are Saying
            </h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUp}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <div className="flex items-center gap-1 text-slate-900">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-slate-900" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  "{testimonial.text}"
                </p>
                <div className="mt-6 text-sm">
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <motion.div
          className="mx-auto max-w-4xl rounded-3xl bg-white px-8 py-12 text-center shadow-sm ring-1 ring-slate-200"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to Transform Your Hiring?
          </h2>
          <p className="mt-3 text-slate-500">
            Join teams using evalifyAI to make faster, smarter hiring decisions.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <span className="font-semibold">evalifyAI</span>
              </div>
              <p className="text-slate-500">
                AI-powered interview intelligence for modern recruiting teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Product</h4>
              <ul className="space-y-2 text-slate-500">
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Company</h4>
              <ul className="space-y-2 text-slate-500">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Legal</h4>
              <ul className="space-y-2 text-slate-500">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
            <span>
              &copy; {new Date().getFullYear()} evalifyAI. All rights reserved.
            </span>
            <div className="mt-4 md:mt-0 flex gap-6">
              <span>Twitter</span>
              <span>LinkedIn</span>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
