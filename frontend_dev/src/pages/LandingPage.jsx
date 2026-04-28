import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, Eye, Mic, FileText, Briefcase, ArrowRight,
  CheckCircle, Star, Users, TrendingUp, MessageSquare, LogOut,
  Menu, X
} from 'lucide-react';
import { useState } from 'react';

// Animated Particles Background Component
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] text-slate-50 overflow-hidden font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-slate-800/50 bg-[#020617]/70 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold">evalifyAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-400 hover:text-slate-100 transition">Features</a>
            <a href="#how-it-works" className="text-slate-400 hover:text-slate-100 transition">How It Works</a>
            <a href="#testimonials" className="text-slate-400 hover:text-slate-100 transition">Testimonials</a>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link to="/dashboard" className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium text-sm">
              Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070B19] border-t border-slate-800">
            <div className="px-6 py-4 space-y-3">
              <a href="#features" className="block text-slate-400 hover:text-slate-100">Features</a>
              <a href="#how-it-works" className="block text-slate-400 hover:text-slate-100">How It Works</a>
              <a href="#testimonials" className="block text-slate-400 hover:text-slate-100">Testimonials</a>
              <Link to="/dashboard" className="block px-5 py-2.5 rounded-lg bg-indigo-600 text-center font-medium text-sm">
                Demo
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-6 min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs font-semibold mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-400"></span>
            Next-Gen AI Evaluation Platform
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            AI-Powered <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Interview Intelligence
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Leverage advanced NLP, Computer Vision, and Speech Processing to evaluate candidate performance with superhuman precision. Get instant, intelligent feedback.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Link 
              to="/dashboard" 
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all font-semibold shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/dashboard" 
              className="px-8 py-4 rounded-lg bg-slate-900/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              View Dashboard Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { label: 'Evaluations', value: '50K+' },
              { label: 'Accuracy', value: '94%' },
              { label: 'Teams', value: '500+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-slate-900/40 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Comprehensive AI Analysis
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-400 max-w-2xl mx-auto text-lg"
            >
              Evaluate every dimension of candidate performance using state-of-the-art multi-modal AI
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: BrainCircuit, 
                title: "NLP Answer Analysis", 
                desc: "Real-time semantic analysis of technical and behavioral responses with context understanding." 
              },
              { 
                icon: Eye, 
                title: "Facial Emotion Detection", 
                desc: "Computer vision detects micro-expressions to gauge genuine confidence and engagement." 
              },
              { 
                icon: Mic, 
                title: "Speech Tone Analysis", 
                desc: "Analyzes voice modulation, pacing, filler words, and confidence indicators." 
              },
              { 
                icon: FileText, 
                title: "AI Feedback Reports", 
                desc: "Instant beautifully detailed performance reports with actionable insights." 
              },
              { 
                icon: Briefcase, 
                title: "Role Recommendation", 
                desc: "Matches candidate skills directly to open positions in your organization." 
              },
              { 
                icon: TrendingUp, 
                title: "Performance Analytics", 
                desc: "Track hiring trends and candidate performance metrics over time." 
              },
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, borderColor: '#818cf8' }}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/30 border border-slate-800 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              How It Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-lg"
            >
              A seamless process from application to intelligent evaluation
            </motion.p>
          </div>

          <div className="relative mb-16">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Upload Resume', desc: 'Candidate submits their resume and basic information' },
                { num: '02', title: 'Start Interview', desc: 'AI-guided interview with real-time analysis' },
                { num: '03', title: 'Multi-Modal Analysis', desc: 'NLP, vision, and speech processing simultaneously' },
                { num: '04', title: 'Instant Report', desc: 'Comprehensive feedback and recommendations' },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center font-bold text-lg mb-6 ring-4 ring-[#020617] shadow-lg shadow-indigo-500/30">
                    {step.num}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-32 px-6 bg-slate-900/40 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Powerful Dashboard
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-400 max-w-2xl mx-auto text-lg"
            >
              Analytics, reports, and candidate management all in one beautiful interface
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-slate-700/50 rounded-2xl p-8 shadow-2xl shadow-indigo-500/10"
          >
            <div className="bg-slate-800/50 rounded-lg p-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="h-8 bg-slate-700/50 rounded w-32 mb-4" />
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-20 bg-slate-700/30 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-48 bg-slate-700/20 rounded-lg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <Link 
              to="/dashboard" 
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all font-semibold shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] inline-flex items-center gap-2 group"
            >
              Explore Dashboard
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Loved by Recruiters
            </motion.h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Chen",
                role: "Talent Manager, TechCorp",
                text: "evalifyAI reduced our hiring time by 60% and improved candidate quality significantly. The insights are invaluable.",
                avatar: "SC"
              },
              {
                name: "Marcus Johnson",
                role: "HR Director, StartupXYZ",
                text: "The emotion detection feature is mind-blowing. We finally have objective data to make better hiring decisions.",
                avatar: "MJ"
              },
              {
                name: "Elena Rodriguez",
                role: "Recruitment Lead, Enterprise Co",
                text: "This is the future of hiring. Our team can't imagine going back to traditional interviews.",
                avatar: "ER"
              },
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/30 border border-slate-800 hover:border-indigo-500/50 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Transform Your Hiring?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto"
          >
            Join hundreds of companies using evalifyAI to make better hiring decisions faster.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/dashboard" 
              className="px-10 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all font-semibold shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] inline-flex items-center gap-2 group text-lg"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-800/50 bg-slate-900/40 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold">evalifyAI</span>
              </div>
              <p className="text-slate-400 text-sm">AI-powered interview intelligence for modern recruiting.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-slate-100">Features</a></li>
                <li><a href="#" className="hover:text-slate-100">Pricing</a></li>
                <li><a href="#" className="hover:text-slate-100">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-slate-100">About</a></li>
                <li><a href="#" className="hover:text-slate-100">Blog</a></li>
                <li><a href="#" className="hover:text-slate-100">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-slate-100">Privacy</a></li>
                <li><a href="#" className="hover:text-slate-100">Terms</a></li>
                <li><a href="#" className="hover:text-slate-100">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
            <div>&copy; {new Date().getFullYear()} evalifyAI. All rights reserved.</div>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="hover:text-slate-100 transition">Twitter</a>
              <a href="#" className="hover:text-slate-100 transition">LinkedIn</a>
              <a href="#" className="hover:text-slate-100 transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
