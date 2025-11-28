"use client";
import { Background } from "@/components/layout/Background";
import { HeadshotProgress } from "@/components/ui/HeadshotProgress";

export default function AnchorChildSafetyPage() {
  return (
    <div className="relative min-h-screen">
      <Background variant="anchor" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8 flex items-center justify-center">
            <HeadshotProgress
              image="anchor"
              size={160}
              gap={8}
              border={2}
              trigger={true}
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Child Safety Standards
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 text-white/80">
          {/* Intro */}
          <p className="text-lg leading-relaxed">
            Anchor is committed to providing a safe, respectful, and abuse-free
            environment for all users. We do not allow any form of sexual
            exploitation or abuse material (CSAM), and we follow all applicable
            child safety laws and reporting requirements.
          </p>

          {/* Prohibited Content */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Prohibited Content & Behavior
            </h2>
            <p className="leading-relaxed mb-4">
              The following are strictly prohibited on Anchor:
            </p>

            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>
                Creation, sharing, requesting, or storing child sexual abuse
                material (CSAM)
              </li>
              <li>Grooming or attempting to solicit minors</li>
              <li>Any content that sexualizes or harms children in any way</li>
              <li>
                Attempts to hide, distribute, or promote illegal or abusive
                behavior
              </li>
            </ul>

            <p className="leading-relaxed mt-4">
              Violations may result in immediate account removal and will be
              reported to relevant authorities, including the National Center
              for Missing & Exploited Children (NCMEC) or other regional
              agencies.
            </p>
          </section>

          {/* Reporting */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How to Report a Child Safety Concern
            </h2>
            <p className="leading-relaxed mb-4">
              Users can report any suspected child safety issues by contacting
              us directly:
            </p>

            <a
              href="mailto:jrmoynihan99@gmail.com"
              className="text-blue-300 hover:text-blue-200 transition-colors underline underline-offset-2"
            >
              jrmoynihan99@gmail.com
            </a>

            <p className="leading-relaxed mt-4">
              Reports are reviewed promptly, and if necessary, escalated to law
              enforcement and child protection organizations in accordance with
              applicable laws.
            </p>
          </section>

          {/* Commitment */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Commitment
            </h2>
            <p className="leading-relaxed">
              We comply with all regional and national child safety laws,
              including CSAM reporting requirements. We cooperate with relevant
              authorities and continuously work to maintain a safe environment
              for all users.
            </p>
          </section>

          {/* Contact */}
          <section className="pt-4 border-t border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have questions about this policy, please reach out:{" "}
              <a
                href="mailto:jrmoynihan99@gmail.com"
                className="text-blue-300 hover:text-blue-200 transition-colors underline underline-offset-2"
              >
                jrmoynihan99@gmail.com
              </a>
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <p className="text-center text-sm text-white/40 mt-8">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
