'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download, Github, Linkedin, Mail, Printer } from 'lucide-react';

const EMAIL = 'ganeshhetkar1985@gmail.com';
const GITHUB = 'https://github.com/Ganeshhetkar22';
const LINKEDIN = 'https://www.linkedin.com/in/ganeshhetkar23/';

const SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Responsive Design',
  'UI Design',
  'Graphic Design',
  'Video Editing',
  'Canva',
  'AI Tools',
  'Prompt Engineering',
  'Blogger Theme Customization',
];

const PROJECTS = [
  {
    title: 'Personal Portfolio Website',
    desc: 'Modern portfolio website with dark premium UI, responsive sections, animations, project cards, and contact flows.',
    tech: 'Next.js, React, Tailwind CSS, Framer Motion',
  },
  {
    title: 'StudyMitra Educational Platform',
    desc: 'Educational platform concept focused on student resources, simple navigation, and accessible learning support.',
    tech: 'React, Responsive UI, Education UX',
  },
  {
    title: 'Blogger Theme Customization Project',
    desc: 'Customized Blogger themes with cleaner layout, better spacing, responsive styling, and creator-friendly sections.',
    tech: 'HTML, CSS, Blogger',
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-8">
      <div className="fixed inset-0 pointer-events-none grid-bg opacity-50" />
      <div className="fixed top-0 right-0 w-96 h-96 opacity-20 blur-3xl rounded-full bg-violet-600/30" />
      <div className="fixed bottom-0 left-0 w-96 h-96 opacity-20 blur-3xl rounded-full bg-cyan-500/30" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="print:hidden flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-light border border-white/10 text-slate-200 hover:text-white hover:border-violet-500/40 transition-all"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold shimmer-btn hover:scale-105 transition-transform"
            >
              <Printer size={16} />
              Print Resume
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-light border border-white/10 text-slate-200 hover:text-white hover:border-cyan-500/40 transition-all"
            >
              <Download size={16} />
              Save as PDF
            </button>
          </div>
        </div>

        <section className="glass rounded-3xl border border-white/10 overflow-hidden shadow-card-dark print:shadow-none print:border-slate-300 print:bg-white print:text-slate-950">
          <div className="p-8 sm:p-10 border-b border-white/10 print:border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="relative w-32 h-32 rounded-full p-[3px] shimmer-btn overflow-hidden flex-shrink-0 print:border print:border-slate-300 print:p-0">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/ganesh-profile.jpeg"
                    alt="Ganesh Hetkar"
                    fill
                    priority
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm tracking-[0.3em] uppercase text-cyan-300 font-bold print:text-slate-600">
                  CV / Resume
                </p>
                <h1 className="text-4xl sm:text-5xl font-black mt-2">
                  Ganesh Hetkar
                </h1>
                <p className="text-lg text-slate-300 mt-3 print:text-slate-700">
                  Frontend Developer | Graphic Designer | Video Editor | AI Learning Enthusiast
                </p>

                <div className="flex flex-wrap gap-3 mt-5 text-sm">
                  <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-slate-300 hover:text-white print:text-slate-700">
                    <Mail size={15} />
                    {EMAIL}
                  </a>
                  <a href={LINKEDIN} className="inline-flex items-center gap-2 text-slate-300 hover:text-white print:text-slate-700">
                    <Linkedin size={15} />
                    LinkedIn
                  </a>
                  <a href={GITHUB} className="inline-flex items-center gap-2 text-slate-300 hover:text-white print:text-slate-700">
                    <Github size={15} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-9">
              <section>
                <h2 className="text-xl font-black gradient-text print:text-slate-950">Profile</h2>
                <p className="text-slate-300 leading-relaxed mt-3 print:text-slate-700">
                  BTech CSE student passionate about frontend development, responsive UI/UX design,
                  creative media, and AI-assisted workflows. I enjoy building clean, modern digital
                  experiences that combine practical code with strong visual design.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black gradient-text print:text-slate-950">Projects</h2>
                <div className="space-y-5 mt-4">
                  {PROJECTS.map((project) => (
                    <div key={project.title} className="rounded-2xl bg-slate-900/50 border border-white/8 p-5 print:bg-white print:border-slate-200">
                      <h3 className="font-bold text-white print:text-slate-950">{project.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed mt-2 print:text-slate-700">{project.desc}</p>
                      <p className="text-cyan-300 text-xs font-semibold mt-3 print:text-slate-600">{project.tech}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-black gradient-text print:text-slate-950">Education</h2>
                <div className="rounded-2xl bg-slate-900/50 border border-white/8 p-5 mt-4 print:bg-white print:border-slate-200">
                  <h3 className="font-bold text-white print:text-slate-950">BTech in Computer Science Engineering</h3>
                  <p className="text-slate-300 text-sm mt-2 print:text-slate-700">
                    Focused on programming fundamentals, frontend development, modern technologies,
                    and project-based learning.
                  </p>
                </div>
              </section>
            </div>

            <aside className="space-y-9">
              <section>
                <h2 className="text-xl font-black gradient-text print:text-slate-950">Skills</h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  {SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-violet-500/12 border border-violet-500/20 text-violet-200 text-xs font-semibold print:bg-slate-100 print:text-slate-700 print:border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-black gradient-text print:text-slate-950">Services</h2>
                <ul className="mt-4 space-y-3 text-slate-300 text-sm print:text-slate-700">
                  <li>Frontend Website Development</li>
                  <li>Responsive Website Design</li>
                  <li>Graphic Design</li>
                  <li>Video Editing</li>
                  <li>UI/UX Design</li>
                  <li>Content Creation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black gradient-text print:text-slate-950">Learning Focus</h2>
                <p className="text-slate-300 text-sm leading-relaxed mt-4 print:text-slate-700">
                  React, Next.js, Tailwind CSS, AI tools, prompt engineering, responsive design,
                  and creative frontend workflows.
                </p>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
