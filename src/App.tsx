/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronDown, 
  Video, 
  Clock, 
  Infinity, 
  Zap, 
  Award, 
  Users, 
  Star,
  Quote,
  BookOpen,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "My dog has already bitten someone - is it too late?",
      a: "Resource guarding that has escalated to biting is absolutely addressable. This course covers behaviour at all levels of intensity, and understanding why it happened is the first step to changing it."
    },
    {
      q: "Is resource guarding the same as aggression?",
      a: "Not exactly. Resource guarding is a specific behaviour rooted in insecurity around valued items. It can look like aggression - growling, snapping - but the cause and the solution are different. This course explains the distinction clearly."
    },
    {
      q: "I've tried trainers before and nothing worked. Why would this be different?",
      a: "Most approaches to guarding use dominance or correction-based methods. This course is built on behavioural science - understanding why the dog guards, not just suppressing the symptom."
    },
    {
      q: "My child is in the home. Is it safe for me to implement this?",
      a: "Yes. The course includes specific guidance for households with children, including safety protocols and management strategies designed for that environment."
    },
    {
      q: "Is this for mild cases only or does it work for severe guarding too?",
      a: "Both. Whether your dog is giving warning growls or has escalated further, the framework in this course applies. Severe cases may need additional one-on-one support alongside the course."
    }
  ];

  const sections = {
    hero: "hero",
    about: "about",
    instructor: "instructor",
    curriculum: "curriculum",
    faq: "faq",
    offer: "offer"
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-dark/5">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-dark">Canines Can Care</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href={`#${sections.about}`} className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href={`#${sections.instructor}`} className="text-sm font-medium hover:text-primary transition-colors">Your Instructor</a>
            <a href={`#${sections.curriculum}`} className="text-sm font-medium hover:text-primary transition-colors">Curriculum</a>
            <a href={`#${sections.offer}`} className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Start Learning
            </a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-brand-bg border-b border-dark/5 overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-4">
                <a href={`#${sections.about}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">About</a>
                <a href={`#${sections.instructor}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Your Instructor</a>
                <a href={`#${sections.curriculum}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Curriculum</a>
                <a href={`#${sections.offer}`} onClick={() => setIsMenuOpen(false)} className="bg-primary text-white px-6 py-3 rounded-xl text-center font-medium">
                  Enroll Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Section 01 - Hero */}
      <section id={sections.hero} className="pt-40 pb-20 px-4 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Stop Walking on Eggshells Around Your Dog's Guarding Behaviour.
            </h1>
            <p className="text-xl md:text-2xl text-dark/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Learn a clear, humane, step-by-step method to understand and reduce resource guarding - and rebuild trust with your dog.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-dark/50 uppercase">One of 9 in the world</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-dark/50 uppercase">30 years experience</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-dark/50 uppercase">1,000+ students trained</span>
            </div>

            <a 
              href={`#${sections.offer}`}
              className="inline-block bg-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20"
            >
              Start Learning Today
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 02 - Agitation */}
      <section id={sections.about} className="py-24 px-4 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Does this sound familiar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "My dog growls near his food bowl",
              "She snapped when I reached for her toy",
              "I'm scared to walk past him when he has a bone",
              "I've been told to show dominance - it made things worse",
              "I don't know if this is aggression or something else",
              "I feel like I'm walking on eggshells in my own home"
            ].map((text, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="bg-brand-bg border border-dark/5 p-6 rounded-2xl hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <p className="text-lg font-medium text-dark/80">{text}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-dark/50 italic text-lg">
            If you nodded at even one of these, keep reading.
          </p>
        </div>
      </section>

      {/* Section 03 - Reframe */}
      <section className="py-24 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 leading-tight">Why the advice you've been given is probably making it worse</h2>
        <div className="space-y-6 text-lg text-dark/80 leading-relaxed">
          <p>
            Showing dominance is a concept rooted in outdated science. When you try to "alpha" your dog, you're not teaching them respect - you're teaching them that you are a threat to the things they value.
          </p>
          <p>
            Taking things away forcefully only confirms your dog's greatest fear: that the resource they love isn't safe. This directly escalates the guarding behavior the next time, as their instinct to protect it kicks into high gear.
          </p>
          <p>
            Punishing the growl is perhaps the most dangerous advice. A growl is a warning. If you remove the warning signal through punishment, your dog will skip the growl and move straight to biting.
          </p>
          <p className="text-primary font-medium italic pt-4">
            "Guarding isn't defiance. It's communication. And once you understand what your dog is actually telling you, everything changes."
          </p>
        </div>
      </section>

      {/* Section 04 - Meet Shirin */}
      <section id={sections.instructor} className="py-24 px-4 bg-dark text-brand-bg">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="relative w-48 h-48 shrink-0 group">
              <div className="absolute inset-0 rounded-full bg-primary/20 flex items-center justify-center text-4xl font-bold text-primary transition-opacity group-hover:opacity-100">
                SD
              </div>
              <img 
                src="input_file_0.png" 
                alt="Shirin Dhabhar - Dog Behaviour Expert" 
                className="relative z-10 w-48 h-48 rounded-full object-cover border-4 border-primary shadow-2xl transition-transform hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet your instructor</h2>
              <p className="text-xl text-brand-bg/80 leading-relaxed max-w-2xl">
                I've spent 30 years working with dogs that families had given up on - and the owners who refused to give up on them. Resource guarding is one of the most misunderstood behaviours I see. And one of the most fixable, when approached correctly.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Only person in Asia", desc: "KCAI accredited in Companion + Behavioural Training" },
              { title: "One of 9 in the world", desc: "Behavioural Training accreditation" },
              { title: "Crufts 2015", desc: "International Commendation, Trainer of the Year" },
              { title: "President of India Award 2018", desc: "First Ladies Award, Rashtrapati Bhavan" }
            ].map((item, i) => (
              <div key={i} className="bg-brand-bg/5 border border-brand-bg/10 p-8 rounded-2xl flex flex-col gap-2">
                <h3 className="text-primary font-bold text-lg">{item.title}</h3>
                <p className="text-brand-bg/60">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-bg/40 font-medium">1,000+ students trained worldwide across 30 years</p>
        </div>
      </section>

      {/* Section 05 - Who this is for */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-dark/10" />
          
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">This course is for you if...</h2>
            <ul className="space-y-4">
              {[
                "Your dog guards food, toys, spaces or people",
                "You have children in the home and you're worried",
                "You've tried other methods and things have gotten worse",
                "You've been told your dog is dominant or aggressive and it didn't feel right",
                "You're scared of your own dog in certain situations"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start text-lg text-dark/80">
                  <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">After this course, your life looks like this...</h2>
            <ul className="space-y-4">
              {[
                "You know exactly what to do the moment guarding starts - instead of freezing",
                "Mealtimes won't feel tense anymore",
                "You'll stop managing around your dog and start actually living with them",
                "You understand what your dog is communicating - and respond, not react",
                "Your home feels calmer. Your relationship feels different."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start text-lg text-primary font-medium">
                  <CheckCircle2 size={24} className="shrink-0 mt-0.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 06 - Solution Intro */}
      <section className="py-32 px-4 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Introducing: Resource Guarding in Dogs</h2>
          <p className="text-xl opacity-90 mb-16">A short, practical video course built for dog parents - not trainers.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Know your dog", desc: "Understand exactly what triggers the guarding behaviour" },
              { label: "Safe home, now", desc: "A management plan you can implement from day one" },
              { label: "Long-term trust", desc: "Exercises that reduce guarding and rebuild your relationship" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl text-dark text-left relative overflow-hidden group shadow-2xl shadow-black/10">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary font-bold transition-transform group-hover:scale-110">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.label}</h3>
                <p className="text-dark/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 07 - Curriculum */}
      <section id={sections.curriculum} className="py-24 px-4 bg-brand-bg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">What you'll learn</h2>
          <div className="space-y-12">
            {[
              { title: "Understand what resource guarding actually is and why your dog does it", desc: "The biological drive and psychological triggers behind the behavior." },
              { title: "The mistakes to stop immediately - before they escalate the behaviour", desc: "Breaking the cycle of intimidation and insecurity today." },
              { title: "A management plan that creates a safer home right now", desc: "Practical physical setups and communication cues to lower everyone's stress." },
              { title: "Trust-building exercises that reduce guarding over time", desc: "Step-by-step training to change your dog's emotional response to sharing." }
            ].map((step, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-primary bg-white flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="w-0.5 h-full bg-primary/20 mt-4" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold mb-2 pt-2">{step.title}</h3>
                  <p className="text-dark/60 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 08 - Format */}
      <section className="py-24 px-4 bg-white border-y border-dark/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Simple. Practical. Yours for life.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            {[
              { icon: <Video className="text-primary" />, label: "~1 hour of video" },
              { icon: <Infinity className="text-primary" />, label: "Lifetime access" },
              { icon: <Clock className="text-primary" />, label: "Watch at your own pace" },
              { icon: <Zap className="text-primary" />, label: "Force-free methods only" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center scale-110">
                  {item.icon}
                </div>
                <span className="font-semibold text-dark/80">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-xl text-dark/70 max-w-2xl mx-auto italic">
            "No prior training experience needed. This was built for dog parents, not professionals."
          </p>
        </div>
      </section>


      {/* Section 10 - Testimonials */}
      <section className="py-24 px-4 bg-brand-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What dog parents say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Anita R.",
                city: "Mumbai",
                story: "My Indie dog started growling whenever I sat on the sofa. I was terrified of being bitten. This course taught me that he wasn't being 'bad', just scared. Today, we share the space without any tension."
              },
              {
                name: "Vikram S.",
                city: "Delhi",
                story: "We spent thousands on 'dominance' trainers for our Labrador's food guarding. It only made him more aggressive. Shirin's humane approach changed everything. He now waits calmly for his meals."
              },
              {
                name: "Priya M.",
                city: "Bangalore",
                story: "With a 3-year-old at home, I was ready to rehome our dog because of his toy guarding. This course saved our family. The safety protocols gave us peace of mind and the exercises actually worked."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-dark/5 flex flex-col items-start gap-6 shadow-sm">
                <Quote size={40} className="text-secondary/30" />
                <p className="text-lg italic text-dark/80 leading-relaxed flex-grow">{testimonial.story}</p>
                <div className="pt-4 border-t border-dark/5 w-full">
                  <p className="font-bold text-dark/50">- {testimonial.name}, {testimonial.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11 - Bonus */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Enroll and receive this free</h2>
          <div className="bg-white border-l-8 border-amber-500 p-12 rounded-3xl shadow-2xl flex flex-col items-center text-center gap-6 relative overflow-hidden">
            <div className="absolute top-6 right-6 bg-amber-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              Free with enrollment
            </div>
            <BookOpen size={48} className="text-amber-500 mb-2" />
            <h3 className="text-3xl font-extrabold text-dark">The Resource Guarding Recovery Guide</h3>
            <p className="text-xl text-dark/60 leading-relaxed max-w-2xl">
              A practical guide covering: warning signs people miss, what never to do, safety protocols for homes with children, and your first steps to reduce conflict today.
            </p>
          </div>
        </div>
      </section>

      {/* Section 12 - Offer */}
      <section id={sections.offer} className="py-32 px-4 bg-brand-bg">
        <div className="max-w-2xl mx-auto bg-white p-12 md:p-16 rounded-[40px] shadow-2xl border border-dark/5 text-center flex flex-col gap-10">
          <header>
            <h2 className="text-4xl font-extrabold mb-4">Everything included</h2>
            <div className="w-20 h-1.5 bg-primary/20 mx-auto rounded-full mb-8" />
          </header>

          <div className="space-y-4 text-left max-w-sm mx-auto">
            <div className="flex items-center gap-3 text-lg font-medium text-dark/80">
              <CheckCircle2 size={24} className="text-primary shrink-0" />
              <span>Course videos (lifetime access)</span>
            </div>
            <div className="flex items-center gap-3 text-lg font-medium text-dark/80">
              <CheckCircle2 size={24} className="text-primary shrink-0" />
              <span>Resource guarding ebook (free)</span>
            </div>
            <div className="flex items-center gap-3 text-lg font-medium text-dark/80">
              <CheckCircle2 size={24} className="text-primary shrink-0" />
              <span>Behaviour checklist</span>
            </div>
            <div className="flex items-center gap-3 text-lg font-medium text-dark/80">
              <CheckCircle2 size={24} className="text-primary shrink-0" />
              <span>Force-free method guide</span>
            </div>
          </div>

          <div>
            <div className="text-5xl font-black text-primary mb-2">₹9,999</div>
            <p className="text-dark/40 font-medium">One-time payment. Instant access.</p>
          </div>

          <div className="space-y-6">
            <button className="w-full bg-secondary text-white py-6 rounded-full text-2xl font-bold hover:scale-[1.02] transition-transform shadow-xl shadow-secondary/20">
              Enroll Now
            </button>
            <p className="italic text-dark/50 text-base max-w-md mx-auto leading-relaxed">
              Every day without a plan, the guarding becomes more practiced. The earlier you start, the easier it is to change.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-8 border-t border-dark/5">
            <div className="flex flex-col items-center gap-1.5">
              <ShieldCheck size={20} className="text-dark/20" />
              <span className="text-[10px] uppercase font-bold text-dark/40 tracking-wider">Secure payment</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Clock size={20} className="text-dark/20" />
              <span className="text-[10px] uppercase font-bold text-dark/40 tracking-wider">Instant access</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Star size={20} className="text-dark/20" />
              <span className="text-[10px] uppercase font-bold text-dark/40 tracking-wider">Lifetime access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13 - FAQ */}
      <section id={sections.faq} className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Questions dog parents ask</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border rounded-2xl transition-all duration-300 ${activeFaq === i ? 'border-primary/50 shadow-lg' : 'border-dark/10'}`}
              >
                <button 
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="text-xl font-bold text-dark/80">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-primary' : 'text-dark/20'}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 text-lg text-dark/60 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 14 - Closing */}
      <section className="py-32 px-4 bg-dark text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
          <Quote size={64} className="text-primary/30" />
          <p className="text-3xl md:text-5xl font-bold leading-tight">
            "Your dog isn't guarding because they're dangerous. They're guarding because they haven't yet learned they don't need to. That's behaviour. And behaviour can change."
          </p>
          <div className="flex flex-col items-center gap-8">
            <span className="text-xl font-medium text-primary">- Shirin Dhabhar, Canines Can Care</span>
            <a 
              href={`#${sections.offer}`}
              className="bg-primary text-white px-12 py-6 rounded-full text-2xl font-bold hover:scale-105 transition-transform"
            >
              Start the Course Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-[#111] text-white/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">Canines Can Care</h3>
            <p className="font-medium">Canine Behaviour and Training</p>
          </div>
          <div className="text-sm text-center md:text-right space-y-2">
            <p>© {new Date().getFullYear()} Shirin Dhabhar. All rights reserved.</p>
            <p>Guiding you towards a better relationship with your dog.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

