import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle2, 
  ChevronDown, 
  PlayCircle, 
  ShieldCheck, 
  Clock, 
  Star, 
  Quote, 
  ChevronRight,
  Plus
} from 'lucide-react';

// --- Components ---

const Counter = ({ target, label, prefix = "", suffix = "" }: { target: number, label: string, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds for perfect sync
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Linear sync as requested
        const current = Math.round(progress * target);
        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-teal-900 mb-1">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-widest text-teal-900/40">
        {label}
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, text, color = "red" }: { icon: string, title: string, text: string, color?: "red" | "green" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="feature-card"
    >
      <div className={`fc-icon ${color}`}>
        {icon}
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </motion.div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-green transition-colors"
      >
        <span className="text-lg font-bold">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-mid leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-green/10 selection:text-green">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-900 rounded-full flex items-center justify-center text-white font-black text-xs">SD</div>
            <span className="font-black text-lg tracking-tight">Shirin Dhabhar</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider text-dark/60">
            <a href="#who" className="hover:text-green">Who it's for</a>
            <a href="#curriculum" className="hover:text-green">Curriculum</a>
            <a href="#enroll" className="hover:text-green">Enroll</a>
          </div>
          <a href="#enroll" className="bg-green text-white px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-green/20">
            Start Learning
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow">🐕 Behavioural Masterclass</div>
            <h1 className="hero-h1">
              When the dog you love growls at you,<br />
              <em>it’s terrifying.</em>
            </h1>
            <p className="body-text mb-10">
              Learn simple, gentle steps to stop your dog from guarding their food and toys, and rebuild the trust you once had.
            </p>
            <div className="flex flex-wrap gap-8 py-8 border-y border-border">
              <Counter target={30} label="Years Experience" suffix="+" />
              <Counter target={1000} label="Students Trained" suffix="+" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-teal-900 mb-1">#1</div>
                <div className="text-xs font-bold uppercase tracking-widest text-teal-900/40">In Asia</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-teal-900 rounded-[32px] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1000" 
                alt="Happy Dog"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center">
                    <PlayCircle size={20} />
                  </div>
                  <span className="font-bold">Watch Course Trailer</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who is it for */}
      <section id="who" className="section bg-white">
        <div className="inner">
          <div className="max-w-3xl">
            <div className="eyebrow">Target Audience</div>
            <h2 className="section-title">Built for <span className="text-green">dog parents</span>, and those who love them.</h2>
            <p className="body-text">Whether your dog growls at dinner or has already snapped, this course will show you exactly what to do.</p>
          </div>
          
          <div className="feature-grid">
            <FeatureCard icon="🦴" title="Guards Items" text="Protects food, toys, spaces, or people." />
            <FeatureCard icon="👶" title="Family Safety" text="You have kids in the home and feel worried." />
            <FeatureCard icon="📉" title="Worsening Behavior" text="You've tried other methods but it's getting worse." />
            <FeatureCard icon="👑" title="Bad Advice" text="Told your dog is 'dominant' but it feels wrong." />
            <FeatureCard icon="😨" title="Feeling Scared" text="You're afraid of your own dog in certain situations." />
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="section bg-[#f4f9f6]">
        <div className="inner">
          <div className="max-w-3xl">
            <div className="eyebrow">The Outcome</div>
            <h2 className="section-title">How your dog's life will change</h2>
          </div>
          
          <div className="feature-grid">
            <FeatureCard color="green" icon="🕊️" title="No More Guarding" text="Stops feeling the constant need to guard things." />
            <FeatureCard color="green" icon="🤲" title="Safe Hands" text="Learns that human hands give, rather than take away." />
            <FeatureCard color="green" icon="😌" title="Calm Mealtimes" text="Mealtime anxiety completely disappears." />
            <FeatureCard color="green" icon="🏡" title="True Relaxation" text="Relaxes completely in their own home." />
            <FeatureCard color="green" icon="❤️" title="Deep Bond" text="Rebuilds genuine trust and a deep bond with you." />
          </div>
        </div>
      </section>

      {/* Pricing / Enroll */}
      <section id="enroll" className="py-32 px-6 bg-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Everything included</h2>
          
          <div className="enroll-list mx-auto">
            {[
              "Course videos (lifetime access)",
              "Resource guarding ebook (free)",
              "Behaviour checklist",
              "Force-free method guide"
            ].map((item, i) => (
              <div key={i} className="enroll-row text-white/80">
                <div className="echeck">✓</div> {item}
              </div>
            ))}
          </div>

          <div className="mb-12">
            <div className="text-7xl font-black mb-2">₹9,999</div>
            <p className="text-white/50 italic">One-time payment · Lifetime access</p>
          </div>

          <a href="#enroll" className="inline-flex items-center gap-3 bg-green text-white px-12 py-6 rounded-full text-2xl font-black hover:scale-105 transition-transform shadow-2xl shadow-green/30">
            Enroll Now - Instant Access
            <ChevronRight />
          </a>

          <p className="mt-12 text-lg text-white/40 italic max-w-2xl mx-auto leading-relaxed">
            "Every day without a plan, the guarding becomes more practiced. The earlier you start, the easier it is to change."
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="inner">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">Questions dog parents ask</h2>
            <div className="space-y-2">
              <FAQItem 
                question="Is this course for aggressive dogs?" 
                answer="Yes. Resource guarding is a specific type of aggression that is often misunderstood. This course gives you the safety protocols and training steps to address it gently." 
              />
              <FAQItem 
                question="How long do I have access?" 
                answer="You get lifetime access to all course materials and future updates." 
              />
              <FAQItem 
                question="Will I need special equipment?" 
                answer="No. We focus on force-free methods using items you already have at home like treats, toys, and common household boundaries." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-dark text-white/40 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h3 className="text-white text-xl font-black mb-1">Shirin Dhabhar</h3>
            <p className="text-sm">Canines Can Care · Behavioural Training</p>
          </div>
          <div className="text-center md:text-right text-sm">
            <p>© {new Date().getFullYear()} Shirin Dhabhar. All rights reserved.</p>
            <p>Built for dog parents who want a better relationship with their pets.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
