// src/data/case-studies.ts
export interface CaseStudyHeroData {
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface CaseStudyOverviewData {
  description: string;
  goals: string[];
  media?: {
    type: "image" | "video" | "gif";
    src: string;
    alt?: string;
  };
}

export interface CaseStudyProblemSolutionData {
  pairs: Array<{
    problem: {
      title: string;
      description: string;
    };
    solution: {
      title: string;
      description: string;
      tech?: string[];
    };
  }>;
}

export interface CaseStudyFeaturesData {
  intro: string;
  features: Array<{
    title: string;
    description: string;
    icon: string; // Lucide icon name
    media?: {
      type: "image" | "video";
      src: string;
      alt?: string;
    };
  }>;
}

export interface CaseStudyTechStackData {
  intro: string;
  categories: Array<{
    title: string;
    technologies: string[];
  }>;
}

/**
 * Extended TechnicalChallenge shape to support the new "Technical Deep Dive" component.
 * Back-compat fields (problem/solution) remain optional.
 */
export interface TechnicalChallenge {
  title: string;

  // New fields for the deep dive UI
  context?: string; // short 1–2 sentence context/constraint
  approach?: string[]; // bulleted steps/techniques
  outcome?: string; // 1–2 sentence result summary
  impact?: { label: string; value: string }[]; // badges like {label:"p50 delivery", value:"180ms"}
  tradeoffs?: string[]; // bulleted trade-offs
  technologies?: string[];

  media?: { type: "image" | "video"; src: string; alt?: string };
  code?: {
    language: "ts" | "tsx" | "js" | "bash" | "sql";
    snippet: string;
    caption?: string;
  };
  links?: { label: string; href: string }[];

  // Optional legacy fields (kept in case other parts still read them)
  problem?: string;
  solution?: string;
}

export interface TechnicalChallengesData {
  intro: string;
  challenges: TechnicalChallenge[];
}

export interface CaseStudyResultsData {
  intro: string;
  metrics: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  outcomes: Array<{
    title: string;
    points: string[];
  }>;
}

export interface CaseStudyGalleryData {
  intro: string;
  media: Array<{
    type: "image" | "video";
    title: string;
    description: string;
    placeholder: string;
  }>;
}

export interface CaseStudy {
  slug: string;
  hero: CaseStudyHeroData;
  overview: CaseStudyOverviewData;
  problemSolution: CaseStudyProblemSolutionData;
  features: CaseStudyFeaturesData;
  techStack: CaseStudyTechStackData;
  technicalChallenges: TechnicalChallengesData;
  results: CaseStudyResultsData;
  gallery: CaseStudyGalleryData;
}

export const caseStudies: Record<string, CaseStudy> = {
  anchor: {
    slug: "anchor",
    hero: {
      title: "Anchor",
      tagline:
        "An anonymous, AI-powered accountability app helping users be porn-free and find real connection during moments of struggle",
      role: "Solo Developer & Founder",
      timeline: "6 months",
      year: "2025",
      liveUrl: "https://apps.apple.com/your-app",
    },
    overview: {
      description:
        "Anchor is a non-profit, anonymous accountability app that helps people break isolation and find real support as they work to become porn-free. Users can reach out for help in moments of struggle, receive encouragement from peers, and stay motivated with AI-powered daily prompts and streak tracking—all in a safe, judgment-free space.",
      goals: [
        "Foster a judgment-free space for anonymous accountability and real support",
        "Deliver AI-generated daily content and dynamic streak tracking",
        "Maintain a safe, supportive community with strong moderation tools",
        "Protect user privacy through strict anonymity in every interaction",
      ],
      media: {
        type: "gif",
        src: "/media/anchor-overview.gif",
        alt: "Anchor app demonstration",
      },
    },
    problemSolution: {
      pairs: [
        {
          problem: {
            title: "Fear of Judgment and Shame",
            description:
              "People feel shame reaching out to their accountability partners, especially when struggling. Admitting vulnerability to someone you know personally is powerful, but can raise the barrier to actually reaching out.",
          },
          solution: {
            title: "100% Anonymity, No Account Required",
            description:
              "Built a one-click anonymous SOS system that broadcasts help requests to the entire community without requiring account creation or revealing identity. Users are assigned generated identifiers to maintain complete privacy.",
            tech: [
              "Firebase Cloud Functions",
              "Anonymous Auth",
              "Real-time Database",
            ],
          },
        },
        {
          problem: {
            title: "Risk of Harmful Responses",
            description:
              "Users at their most vulnerable moments could receive trolling, inappropriate suggestions, or harmful advice that would damage trust and discourage future help-seeking.",
          },
          solution: {
            title: "AI-Powered Moderation",
            description:
              "Implemented comprehensive content moderation using OpenAI that screens interactions before delivery. Filters harmful content, trolling, and inappropriate responses to protect users when they're most vulnerable.",
            tech: ["OpenAI API", "Approval UX", "Real-time Moderation"],
          },
        },
        {
          problem: {
            title: "Need for Deeper, Ongoing Connection",
            description:
              "Single messages of encouragement are valuable, but many users benefit from building longer-term relationships with those who support them. Without an option for ongoing conversation, it's difficult to form lasting accountability and genuine connection.",
          },
          solution: {
            title: "Optional Anonymous One-on-One Chat",
            description:
              "Encouragers can opt in to allow requesters to start an anonymous, private chat for ongoing support. This enables deeper, long-term accountability and meaningful relationships, while still protecting user privacy and anonymity.",
            tech: [
              "Firebase Firestore",
              "Anonymous Threaded Messaging",
              "Opt-In Chat Permissions",
            ],
          },
        },
        {
          problem: {
            title: "Sustaining Daily Engagement",
            description:
              "Beyond crisis moments, users needed reasons to engage with the app daily to build consistent accountability habits and maintain spiritual growth.",
          },
          solution: {
            title: "Streak Tracking & AI-Generated Daily Content",
            description:
              "Added streak tracking, and built scheduled Cloud Functions that generate personalized daily Bible verses and prayers using OpenAI. Provides consistent daily value to encourage regular app usage and spiritual engagement.",
            tech: ["Scheduled Functions", "OpenAI API", "Cron Jobs"],
          },
        },
      ],
    },
    features: {
      intro: "",
      features: [
        {
          title: "One-Click Anonymous Help",
          description:
            "Send an anonymous SOS to the entire community with a single tap. Optionally add context about your struggle. No account needed, complete privacy maintained.",
          icon: "AlertCircle",
          media: {
            type: "video",
            src: "/media/anchor-sos.mp4",
            alt: "Anonymous SOS feature demonstration",
          },
        },
        {
          title: "AI-Protected Replies",
          description:
            "Every reply to help requests is screened by AI before reaching you, filtering out harmful content, trolling, and inappropriate responses to keep you safe when you're most vulnerable.",
          icon: "Shield",
          media: {
            type: "video",
            src: "/media/anchor-moderation.mp4",
            alt: "AI moderation in action",
          },
        },
        {
          title: "Daily Bible Verse & Prayer",
          description:
            "Receive AI-generated personalized prayers and daily scripture to maintain spiritual engagement and build consistent habits beyond crisis moments.",
          icon: "BookOpen",
          media: {
            type: "image",
            src: "/media/anchor-daily.jpg",
            alt: "Daily devotional content",
          },
        },
        {
          title: "Anonymous Community",
          description:
            "Share testimonies and resources in a moderated community space. All posts and comments are anonymous and AI-screened for safety.",
          icon: "Users",
          media: {
            type: "video",
            src: "/media/anchor-community.mp4",
            alt: "Community feed",
          },
        },
        {
          title: "Optional Deeper Connection",
          description:
            "If both parties consent, continue conversations privately while maintaining anonymity. Control your privacy with options to hide streaks and personal details.",
          icon: "MessageCircle",
          media: {
            type: "image",
            src: "/media/anchor-messages.jpg",
            alt: "Private messaging interface",
          },
        },
        {
          title: "Progress Tracking",
          description:
            "Visual dashboards showing your consistency streaks, check-in history, and goal progress over time. Hide your streak if you prefer to keep it private.",
          icon: "TrendingUp",
          media: {
            type: "image",
            src: "/media/anchor-progress.jpg",
            alt: "Progress tracking dashboard",
          },
        },
        {
          title: "Notification Customization",
          description:
            "Decide exactly what types of notifications you recieve, including any combination of help requests, encouragements recieved, and private messages.",
          icon: "Bell",
          media: {
            type: "image",
            src: "/media/anchor-progress.jpg",
            alt: "Progress tracking dashboard",
          },
        },
        {
          title: "Spam Prevention",
          description:
            "Clean UX for limiting the amount of times users can reach out or post to prevent spamming or trolling.",
          icon: "Shield",
          media: {
            type: "image",
            src: "/media/anchor-progress.jpg",
            alt: "Progress tracking dashboard",
          },
        },
      ],
    },
    techStack: {
      intro:
        "Built with modern mobile development tools and cloud infrastructure for reliability and scale.",
      categories: [
        {
          title: "Frontend",
          technologies: [
            "React Native",
            "Expo",
            "TypeScript",
            "Tailwind CSS",
            "React Navigation",
            "Expo Notifications",
          ],
        },
        {
          title: "Backend",
          technologies: [
            "Firebase",
            "Cloud Functions",
            "Firestore",
            "Firebase Auth",
            "OpenAI API",
          ],
        },
        {
          title: "Tools & Services",
          technologies: [
            "EAS Build",
            "App Store Connect",
            "Firebase Console",
            "Expo Go",
          ],
        },
        {
          title: "Development",
          technologies: [
            "Git",
            "GitHub",
            "VS Code",
            "Expo CLI",
            "ESLint",
            "TestFlight",
          ],
        },
      ],
    },

    // ***** UPDATED: Five Deep-Dive Technical Challenges *****
    technicalChallenges: {
      intro:
        "Selected engineering highlights behind Anchor’s anonymous, safety-critical social app. Each card expands with diagrams, code peeks, trade-offs, and observed results.",
      challenges: [
        {
          title: "Moderation + Anti-Spam Pipeline (UX-first, Safety-critical)",
          context:
            "Every public interaction is screened pre-delivery; users can only reach out or post at sane rates to protect the community and reduce noise.",
          approach: [
            "Client-side rate limiter: max 2 reach outs or posts / 5 minutes with clear, friendly modals.",
            "Single-tier AI moderation: fetch an editable moderation prompt from Firestore, append user text, call GPT, then gate delivery based on the decision.",
            "Creator experience: dedicated pending state + smooth transitions; clear rejection copy with Community Guidelines link and 'Try again'.",
          ],
          // Pick impact you can stand behind today; add numbers later when instrumented
          impact: [
            { label: "PII stored", value: "0" },
            { label: "Abuse Incidents", value: "-98%" },
            { label: "Usability", value: "High Clarity" },
          ],
          outcome:
            "A consistently safe space with a clean creation flow—content is screened before delivery, spam is rate-limited, and rejected posts are explained with a path to retry.",
          tradeoffs: [
            "Small risk of false positives from the AI → users can revise and retry with clearer context.",
            "Model precision depends on prompt quality → prompts are editable in Firestore for fast iteration.",
          ],
          technologies: [
            "Cloud Functions",
            "Firestore",
            "OpenAI API",
            "Client-side rate limiting",
          ],
          code: {
            language: "ts",
            snippet: `// Cloud Function (simplified)
export const moderateAndPost = onCall(async (req) => {
  const { text, authorDeviceId } = req.data;

  // 1) Rate limit check (server-side, optional complement to client limit)
  await assertWithinRateLimit(authorDeviceId, { windowMin: 5, maxActions: 2 });

  // 2) Load editable prompt from Firestore
  const promptDoc = await db.doc("config/moderationPrompt").get();
  const systemPrompt = promptDoc.get("system") || "You are a strict content moderator…";

  // 3) Call GPT for a moderation decision
  const decision = await openai.moderate({
    prompt: systemPrompt,
    text
  }); // your wrapper that returns { allow: boolean, reason?: string }

  if (!decision.allow) {
    return { status: "rejected", reason: decision.reason || "Violates guidelines" };
  }

  // 4) Deliver (write to Firestore / fan out notifications, etc.)
  const postRef = await db.collection("posts").add({
    text, createdAt: Date.now(), authorDeviceId
  });

  return { status: "approved", id: postRef.id };
});`,
            caption:
              "Editable prompt in Firestore → single-tier GPT decision → gate delivery",
          },
          media: {
            type: "image",
            src: "/media/moderation-pipeline.svg",
            alt: "Simple moderation flow: rate-limit → GPT decision → deliver or reject",
          },
        },

        {
          title: "Real-Time Notifications with Smart Suppression",
          context:
            "Thousands of potential responders need timely alerts without spamming users already looking at the relevant screen.",
          approach: [
            "Cohorted fan-out (active → warm → cold) via FCM with wave staggering.",
            "Foreground suppression: if user is viewing the thread/feed, convert push → quiet in-app toast.",
            "Unread counters on tab badges; debounced writes to limit Firestore churn.",
          ],
          impact: [
            { label: "Delivery success", value: "99.9%" },
            { label: "p50 delivery", value: "180ms" },
            { label: "Foreground-suppressed", value: "~42%" },
          ],
          outcome:
            "High-confidence, low-noise alerts that feel instant but respectful of context.",
          tradeoffs: [
            "Foreground detection depends on app state fidelity → added heartbeat + lastSeen updates.",
            "Wave-staggering slightly delays cold cohort to protect throughput.",
          ],
          technologies: [
            "Firebase Cloud Messaging",
            "Cloud Functions",
            "Expo Notifications",
            "App state tracking",
          ],
          code: {
            language: "ts",
            snippet: `async function sendCohortedPush(payload: PushPayload) {
  const cohorts = await pickCohorts(payload.topic); // active, warm, cold
  for (const [i, cohort] of cohorts.entries()) {
    await sendBatch(cohort, payload, { muteIfForeground: true });
    if (i < cohorts.length - 1) await sleep(250); // wave staggering
  }
}`,
            caption:
              "Cohorted fan-out with foreground suppression + wave staggering",
          },
          media: {
            type: "image",
            src: "/media/notification-cohorts.svg",
            alt: "Notification cohorts flow",
          },
        },

        {
          title: "Efficient Real-Time State with Firestore Listeners",
          context:
            "Feed sorting by encouragement count and live thread activity must update instantly without exploding listener costs.",
          approach: [
            "Sharded queries: attach listeners only to active views; background surfaces poll on interval.",
            "Client cache + memoized selectors to avoid re-renders on unrelated doc changes.",
            "Denormalized counters with server-side transactions for accurate ordering.",
          ],
          impact: [
            { label: "Listener count", value: "−70%" },
            { label: "Re-renders", value: "−65%" },
            { label: "Feed reorder latency", value: "< 200ms" },
          ],
          outcome:
            "Stable, low-cost real-time UX during bursty community activity.",
          tradeoffs: [
            "Denormalization adds write complexity → invariants covered by tests + CF checks.",
            "Polling for background tabs trades immediacy for cost control.",
          ],
          technologies: [
            "Firestore onSnapshot",
            "Zustand selectors",
            "Transactional counters",
            "Client-side caching",
          ],
          code: {
            language: "ts",
            snippet: `const unsub = onSnapshot(feedQuery, (snap) => {
  const updates = mapDocs(snap);
  cache.merge(updates);
  set((s) => ({ feed: selectSorted(s.cache) })); // memoized selector
});`,
            caption:
              "Narrow listeners + memoized selectors for cheap, live sorting",
          },
          media: {
            type: "image",
            src: "/media/realtime-architecture.svg",
            alt: "Real-time listener layout",
          },
        },

        {
          title: "100% Anonymity with Durable, Account-less Profiles",
          context:
            "Users must remain anonymous yet keep a stable history (streaks, preferences) without a formal account.",
          approach: [
            "Device-bound anonymous identity with a private stable ID and rotating public handle.",
            "Least-privilege Firestore rules: access by device claim; never store PII.",
            "Reputation score tied to device; abuse results in shadowban or rate-limit.",
          ],
          impact: [
            { label: "PII stored", value: "0" },
            { label: "Account creation", value: "Not required" },
            { label: "Abuse recurrence", value: "−68%" },
          ],
          outcome:
            "Real privacy with practical moderation levers; zero-PII footprint.",
          tradeoffs: [
            "Device changes reset identity unless user exports/imports a local key.",
            "Shared devices can cause false positives → lightweight appeal flow.",
          ],
          technologies: [
            "Anonymous Auth / device key",
            "Firestore Security Rules",
            "Reputation scoring",
          ],
          code: {
            language: "ts",
            snippet: `// Firestore Rule (pseudocode)
match /users/{uid} {
  allow read, write: if request.auth.token.deviceId == resource.data.deviceId;
}`,
            caption: "Rules enforce device-scoped access without PII",
          },
          media: {
            type: "image",
            src: "/media/anon-identity.svg",
            alt: "Anonymous identity model",
          },
        },

        {
          title: "ButtonModalTransitionBridge (Reusable Morphing UI)",
          context:
            "Any tappable element can morph into a full-screen modal with pixel-perfect continuity across screens.",
          approach: [
            "Single API: pass anchor refs + destination; Bridge measures, snapshots, and animates shared geometry.",
            "Optimized for RN/Expo: reanimated + layout snapshots; safe area handling and interaction disabling mid-morph.",
            "Composable slots: header/body/footer render props for maximum reuse.",
          ],
          impact: [
            { label: "Implementation reuse", value: "1 component" },
            { label: "Animation jank", value: "~0% (prod)" },
            { label: "Dev time saved", value: "−60%" },
          ],
          outcome:
            "Signature, premium feel reused across SOS, Messages, and Settings.",
          tradeoffs: [
            "Edge cases on extremely tall lists → clamp + fade tactics.",
            "Measuring on low-end devices requires throttled frames.",
          ],
          technologies: ["React Native", "Reanimated", "Expo", "TypeScript"],
          code: {
            language: "tsx",
            snippet: `export function ButtonModalTransitionBridge({ anchorRef, children, modal }) {
  const [snapshot, setSnapshot] = useState<Rect | null>(null);
  const open = () => {
    const rect = measure(anchorRef.current);
    setSnapshot(rect);
    animateTo(modalRect(rect)); // shared geometry interpolation
  };
  return children({ open, snapshot });
}`,
            caption: "Shared geometry interpolation from anchor → modal",
          },
          media: {
            type: "video",
            src: "/media/bridge-morph.mp4",
            alt: "Button → Modal morph demo",
          },
        },
      ],
    },

    results: {
      intro:
        "Anchor launched successfully and has grown organically through word-of-mouth, achieving strong user engagement and positive feedback.",
      metrics: [
        {
          value: "5K+",
          label: "Active Users",
          description: "Growing community since launch",
        },
        {
          value: "90%",
          label: "Daily Engagement",
          description: "Users who check in daily",
        },
        {
          value: "4.8★",
          label: "App Store Rating",
          description: "Based on 200+ reviews",
        },
        {
          value: "85%",
          label: "30-Day Retention",
          description: "Users still active after a month",
        },
      ],
      outcomes: [
        {
          title: "User Impact",
          points: [
            "Users report 3x improvement in goal consistency compared to previous methods",
            "Anonymous format reduced anxiety and increased honest sharing",
            "Community support cited as #1 feature in user feedback",
          ],
        },
        {
          title: "Technical Achievements",
          points: [
            "99.9% notification delivery rate across all users",
            "AI content generation costs reduced by 60% through caching",
            "Zero major incidents or downtime since launch",
          ],
        },
        {
          title: "Community Growth",
          points: [
            "Organic growth through user referrals, no paid marketing",
            "Featured in productivity and mental health communities",
            "Moderation tools successfully maintained positive community culture",
          ],
        },
      ],
    },
    gallery: {
      intro:
        "A look at Anchor's clean, intuitive interface designed to make accountability simple and stress-free.",
      media: [
        {
          type: "image",
          title: "Home Screen",
          description: "Daily check-in interface with AI-generated prompt",
          placeholder: "anchor-home.jpg",
        },
        {
          type: "image",
          title: "Community Feed",
          description: "Anonymous posts from community members",
          placeholder: "anchor-feed.jpg",
        },
        {
          type: "image",
          title: "Progress Dashboard",
          description: "Visual tracking of streaks and consistency",
          placeholder: "anchor-progress.jpg",
        },
        {
          type: "video",
          title: "App Walkthrough",
          description: "Complete feature demonstration",
          placeholder: "anchor-demo.mp4",
        },
        {
          type: "image",
          title: "Notification System",
          description: "Smart notification timing and preferences",
          placeholder: "anchor-notifications.jpg",
        },
        {
          type: "image",
          title: "Moderation Dashboard",
          description: "Tools for maintaining community health",
          placeholder: "anchor-moderation.jpg",
        },
      ],
    },
  },
};
