"use client";
import { Mail, Trash2 } from "lucide-react";
import { Background } from "@/components/layout/Background";
import { HeadshotProgress } from "@/components/ui/HeadshotProgress";

export default function AnchorSupportPage() {
  return (
    <div className="relative min-h-screen">
      <Background variant="anchor" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-16 md:py-24 text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex items-center justify-center">
          <HeadshotProgress
            image="anchor"
            size={160}
            gap={8}
            border={2}
            trigger={true}
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Anchor Support
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-lg mx-auto">
          Need help or have questions? I&apos;m here to support you on your
          journey.
        </p>

        {/* Contact Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/[0.08] transition-all mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail className="w-6 h-6 text-white/70" />
            <h2 className="text-xl font-semibold text-white">Get in Touch</h2>
          </div>

          <a
            href="mailto:jrmoynihan99@gmail.com"
            className="inline-block text-2xl md:text-3xl font-medium text-blue-300 hover:text-blue-200 transition-colors underline underline-offset-4"
          >
            jrmoynihan99@gmail.com
          </a>

          <p className="mt-6 text-sm text-white/50">
            I typically respond within 24–48 hours.
          </p>
        </div>

        {/* Account Deletion Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/[0.08] transition-all">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Trash2 className="w-6 h-6 text-white/70" />
            <h2 className="text-xl font-semibold text-white">
              Delete Your Account
            </h2>
          </div>

          <p className="text-white/70 leading-relaxed mb-4 max-w-lg mx-auto">
            You can delete your Anchor account at any time directly within the
            app.
          </p>

          <ol className="text-left text-white/70 list-decimal pl-6 space-y-2 leading-relaxed mb-6 max-w-md mx-auto">
            <li>Open the Anchor app</li>
            <li>
              Go to the <strong>Settings</strong> menu
            </li>
            <li>Scroll to the bottom</li>
            <li>
              Tap <strong>“Delete Account”</strong>
            </li>
          </ol>

          <p className="text-white/70 leading-relaxed mb-6 max-w-lg mx-auto">
            Once you confirm, your account and all associated data will be
            permanently removed.
          </p>

          <h3 className="text-lg font-semibold text-white mb-3">
            What Will Be Deleted
          </h3>

          <ul className="text-left text-white/70 list-disc pl-6 space-y-2 leading-relaxed max-w-md mx-auto mb-6">
            <li>Your user profile</li>
            <li>All messages you have sent</li>
            <li>All pleas and encouragements</li>
            <li>Your notification tokens</li>
            <li>All app data associated with your user ID</li>
          </ul>
        </div>

        {/* Footer */}
        <p className="mt-12 text-sm text-white/40">
          Your privacy and well-being matter. All communications are
          confidential.
        </p>
      </div>
    </div>
  );
}
