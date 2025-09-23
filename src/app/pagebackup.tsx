"use client";
import GlassNav from "@/components/deprecated/GlassNav";
import GlassCard from "@/components/deprecated/GlassCard";
import { SectionHeader } from "@/components/deprecated/SectionHeader";
import { SkillBar } from "@/components/deprecated/SkillBar";
import { ProjectCard } from "@/components/deprecated/ProjectCard";
import { skills, experiences, projects } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative">
      <GlassNav />

      {/* HERO */}
      <section id="hero" className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm tracking-widest text-accent-600/80 uppercase">
                Software Engineer · UI/UX
              </p>
              <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
                Jason Moynihan
              </h1>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                I build clean, modern web & mobile experiences with React,
                Next.js, and thoughtful interactions. Passionate about
                AI-powered workflows and beautifully pragmatic UI.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="glass hover-lift inline-flex items-center gap-2 px-4 py-2"
                >
                  View Projects →
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-glass-border/30 px-4 py-2 hover:bg-accent-500/10"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="">
              <GlassCard className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-accent-500/15 to-transparent p-4">
                    <p className="text-sm text-slate-500">Years in Tech</p>
                    <p className="mt-1 text-3xl font-bold">5+</p>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-teal-500/15 to-transparent p-4">
                    <p className="text-sm text-slate-500">Focus</p>
                    <p className="mt-1 text-3xl font-bold">Frontend</p>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-sky-500/15 to-transparent p-4">
                    <p className="text-sm text-slate-500">Specialty</p>
                    <p className="mt-1 text-3xl font-bold">Next.js</p>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/15 to-transparent p-4">
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="mt-1 text-3xl font-bold">Remote</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            kicker="About"
            title="I design for clarity and build for longevity"
            subtitle="A CS grad who loves polished details and systems thinking."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <GlassCard className="p-6 md:col-span-2">
              <p className="leading-relaxed text-slate-700 dark:text-slate-200">
                I’ve shipped embedded software in regulated environments and led
                brand & e-commerce operations. Those experiences shaped how I
                build: accessible, robust, and calm interfaces that scale.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li>• React, Next.js, TypeScript</li>
                <li>• Tailwind, design systems, theming</li>
                <li>• Node, Python, basic DevOps</li>
                <li>• AI integration & data viz</li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader kicker="Skills" title="Core technologies" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <GlassCard key={s.name} className="p-5">
                <SkillBar name={s.name} level={s.level} />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader kicker="Experience" title="Recent roles" />
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((exp) => (
              <GlassCard key={exp.title} className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-slate-500">{exp.period}</span>
                </div>
                <p className="mt-1 text-slate-500">{exp.company}</p>
                <p className="mt-3 text-slate-700 dark:text-slate-200">
                  {exp.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full bg-slate-500/10 px-2.5 py-1 text-xs text-slate-600 dark:text-slate-300"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader kicker="Work" title="Selected projects" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeader
            kicker="Contact"
            title="Let’s build something exceptional"
            subtitle="I’m open to roles and collaborations."
          />
          <div className="mx-auto grid max-w-md gap-3 sm:grid-cols-2">
            <a href="mailto:jason@example.com" className="glass px-5 py-3">
              Email
            </a>
            <a
              href="https://github.com/jrmoynihan99"
              className="glass px-5 py-3"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/"
              className="glass px-5 py-3 sm:col-span-2"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-8 text-xs text-slate-500">
            © {new Date().getFullYear()} Jason Moynihan. Built with Next.js &
            Tailwind.
          </p>
        </div>
      </section>
    </main>
  );
}
