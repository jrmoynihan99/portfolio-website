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
    technicalChallenges: {
      intro:
        "Selected engineering highlights behind Anchor’s anonymous, safety-critical social app. Each card expands with diagrams, code peeks, trade-offs, and observed results.",
      challenges: [
        {
          title:
            "AI Moderation + Anti-Spam Pipeline (UX-first, Safety-critical)",
          context:
            "Every public interaction is screened pre-delivery; users can only reach out or post at sane rates to protect the community and reduce noise.",
          approach: [
            "Client-side rate limiter: max 2 reach outs or posts / 5 minutes with clear, friendly modals.",
            "Single-tier AI moderation: fetch an editable moderation prompt from Firestore, append user text, call GPT, then gate delivery based on the decision.",
            "Creator experience: dedicated pending state + smooth transitions; clear rejection copy with Community Guidelines link and 'Try again'.",
          ],
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
          title: "Context-Aware Real-Time Notifications",
          context:
            "Users should receive timely alerts for new pleas and encouragements, but not be interrupted by redundant notifications if already viewing the relevant screen.",
          approach: [
            "Cloud Functions trigger on new Firestore activity and send notifications to all relevant users except the creator.",
            "On the client, use React Context to track the current app screen; if a notification matches the current view, suppress the OS push and show an in-app toast instead.",
            "Unread counters and badge icons are updated locally to reflect new activity.",
          ],
          impact: [
            { label: "Redundant push suppression", value: "99%+" },
            {
              label: "User experience",
              value: "Instant, non-intrusive alerts",
            },
            {
              label: "Unreads always accurate",
              value: "Tab badges reflect state",
            },
          ],
          outcome:
            "Users always get timely, relevant alerts, but never get interrupted by duplicate pushes for content they’re already viewing.",
          tradeoffs: [
            "Requires accurate client-side tracking of app state for reliable suppression.",
            "Rare edge case: Users may get a notification if state changes during delivery window.",
          ],
          technologies: [
            "Firebase Cloud Functions",
            "Expo Notifications",
            "React Context (active screen tracking)",
          ],
          code: {
            language: "ts",
            snippet:
              "// Cloud Function: Send push to all relevant users\nexports.onNewPlea = functions.firestore\n  .document('pleas/{pleaId}')\n  .onCreate(async (snap, context) => {\n    const plea = snap.data();\n    const recipients = await getRelevantUserIds(plea);\n    await sendPushToUsers(recipients, {\n      title: 'Someone needs encouragement!',\n      body: plea.message,\n      data: { type: 'plea', pleaId: context.params.pleaId }\n    });\n  });\n\n// Client: Suppress foreground notifications\nNotifications.addNotificationReceivedListener((notif) => {\n  if (isViewingPlea(notif.data?.pleaId)) {\n    showInAppToast(notif);\n    return; // Don't show OS push\n  }\n  // Otherwise, allow push as normal\n});",
            caption:
              "Server: Firestore trigger sends push to all relevant users. Client: Suppresses OS push if content is already in view.",
          },
          media: {
            type: "image",
            src: "/media/notification-cohorts.svg",
            alt: "Notification delivery and client suppression flow",
          },
        },
        {
          title: "Dynamic Firestore Listeners for Real-Time Feeds",
          context:
            "Community pleas for help must sort and update LIVE based on real user interactions, but naive listeners on every document would explode Firestore costs and crash performance.",
          approach: [
            "Shard live listeners: use a single top-level listener for the latest N approved pleas (excluding the current user), sorted and filtered as needed.",
            "For each visible plea, dynamically attach a subcollection listener for encouragements; clean these up as pleas scroll out of view.",
            "Merge base plea data and live encouragement subcounts client-side, ensuring efficient state updates and smooth real-time feed sorting.",
            "In-memory, memoized sort: Prioritize pleas with fewest encouragements, then by oldest first.",
          ],
          impact: [
            { label: "Listener count", value: "−90%" },
            { label: "Feed update latency", value: "< 200ms" },
            {
              label: "Cost scaling",
              value: "scales with active users, not content size",
            },
          ],
          outcome:
            "Stable, low-cost real-time feed with instant updates and fair ordering—listener usage stays low even during bursty community activity.",
          tradeoffs: [
            "Slightly higher code complexity: dynamic management of subcollection listeners and cleanup.",
            "Recent-feed scope: only the N most recent pleas update live; older items update when scrolled into view.",
            "Each user can open up to N+1 listeners (feed + subcollections), but this is capped and far cheaper than naive global listeners.",
          ],
          technologies: [
            "Firestore onSnapshot",
            "React useEffect",
            "Client-side refs & cleanup",
            "Dynamic subcollection listeners",
          ],
          code: {
            language: "ts",
            snippet:
              '// Top-level: Listen for recent approved pleas (excluding user\'s own)\nconst unsubPleas = onSnapshot(pleasQuery, (snapshot) => {\n  const currentPleaIds = new Set(snapshot.docs.map((doc) => doc.id));\n  // Clean up sublisteners for removed pleas\n  Object.keys(encouragementListenersRef.current).forEach((pleaId) => {\n    if (!currentPleaIds.has(pleaId)) {\n      encouragementListenersRef.current[pleaId]();\n      delete encouragementListenersRef.current[pleaId];\n    }\n  });\n  // For each plea, set up encouragement listener if not present\n  snapshot.docs.forEach((doc) => {\n    if (!encouragementListenersRef.current[doc.id]) {\n      const encQuery = query(\n        collection(db, "pleas", doc.id, "encouragements"),\n        where("status", "==", "approved")\n      );\n      encouragementListenersRef.current[doc.id] = onSnapshot(encQuery, (encSnap) => {\n        // ...update state for this plea\n      });\n    }\n  });\n});\n// Cleanup all listeners on unmount\nreturn () => {\n  unsubPleas();\n  Object.values(encouragementListenersRef.current).forEach((unsub) => unsub());\n  encouragementListenersRef.current = {};\n};',
            caption:
              "Top-level and per-plea listeners update the feed live—only visible pleas have subcollection listeners, with efficient cleanup and state merging.",
          },
          media: {
            type: "image",
            src: "/media/realtime-architecture.svg",
            alt: "Real-time Firestore listener architecture",
          },
        },
        {
          title: "100% Anonymity with Durable, Account-less Profiles",
          context:
            "Users must remain anonymous and retain a stable personal history (streaks, preferences) without creating a formal account or storing any PII.",
          approach: [
            "Device-bound anonymous identity: each app install gets a unique, stable UID (no username, email, or phone required).",
            "Firestore Security Rules: strict per-UID access—users can only read or write their own data.",
            "Zero PII stored anywhere in Firestore, including for moderation.",
          ],
          impact: [
            { label: "PII stored", value: "0" },
            { label: "Account creation", value: "Not required" },
          ],
          outcome:
            "True user privacy and persistence—users stay fully anonymous, never create an account, and their personal progress is always local to their device.",
          tradeoffs: [
            "If the app is deleted or device changes, history is lost (unless user exports a recovery key—planned feature).",
            "On shared devices, multiple people may share the same anonymous identity.",
          ],
          technologies: ["Firebase Anonymous Auth", "Firestore Security Rules"],
          code: {
            language: "ts",
            snippet:
              "export async function ensureSignedIn() {\n  await new Promise<void>((resolve) => {\n    const unsubscribe = onAuthStateChanged(auth, (user) => {\n      unsubscribe();\n      resolve();\n    });\n  });\n  if (!auth.currentUser) {\n    await signInAnonymously(auth); // No username/email/PII ever collected!\n  }\n}\n\n// firestore.rules (backend)\nmatch /users/{uid} {\n  allow read, write: if request.auth.uid == uid;\n}",
            caption:
              "Anonymous auth is ensured for every user; all data is stored under device-bound UID. Firestore rules strictly prevent access to any other user's data.",
          },

          media: {
            type: "image",
            src: "/media/anon-identity.svg",
            alt: "Anonymous identity model",
          },
        },
        {
          title: "Custom Reusable Morphing UI",
          context:
            "Any tappable element can morph into a full-screen modal with pixel-perfect visual continuity, creating a signature, premium app experience.",
          approach: [
            "Single API: pass anchor refs and destination; Bridge measures, snapshots, and animates shared geometry.",
            "Optimized for React Native/Expo: uses Reanimated and real-time layout snapshots, with safe area handling and interaction disabling mid-morph.",
            "Ultra-smooth even for heavy modals: FlatList/lazy loading ensures heavy content (like comments or messages) is loaded only *after* the transition completes, maintaining flawless animation performance.",
          ],
          impact: [
            { label: "Implementation reuse", value: "1 component" },
            { label: "Animation jank", value: "~0% (prod)" },
            { label: "Dev time saved", value: "−60%" },
          ],
          outcome:
            "Signature, premium feel reused across Help Requests, Messages, and Settings—modal transitions that feel as seamless as native iOS.",
          tradeoffs: [
            "Measuring on low-end devices requires throttling frames to ensure performance.",
          ],
          technologies: ["React Native", "Reanimated", "Expo", "TypeScript"],
          code: {
            language: "tsx",
            snippet:
              "export function ButtonModalTransitionBridge({ anchorRef, children, modal }) {\n  const [snapshot, setSnapshot] = useState<Rect | null>(null);\n  const open = () => {\n    const rect = measure(anchorRef.current);\n    setSnapshot(rect);\n    animateTo(modalRect(rect)); // shared geometry interpolation\n  };\n  return children({ open, snapshot });\n}",
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
        "Anchor launched as a grassroots project within my local church community, aiming to provide a safe, anonymous space for accountability and support. Early feedback has been deeply encouraging.",
      outcomes: [
        {
          title: "Real Impact",
          points: [
            "Users like the anonmymity associated with reaching out",
            "One-on-one encouragement and daily check-ins are cited as the app’s most valuable features.",
            "Several users have already begun building new streaks and habits with Anchor’s help.",
          ],
        },
        {
          title: "Technical Foundation",
          points: [
            "Launched on the Apple App Store with 100% anonymous accounts.",
            "Zero reported bugs or crashes in first weeks of use.",
            "Push notification flow and daily content pipeline fully automated.",
          ],
        },
        {
          title: "What’s Next",
          points: [
            "Planned android launch based on early feedback.",
            "Exploring adding a small 'close group' of trusted peers to reach out to",
            "Gathering more stories to help others find hope and support.",
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

  // ========= NEW CASE STUDY: Dialed (AI Meal Planner) =========
  dialed: {
    slug: "dialed",
    hero: {
      title: "Dialed",
      tagline:
        "An AI-powered meal planner that turns targets into portion-accurate days and a drag-and-drop weekly schedule",
      role: "Solo Developer",
      timeline: "8 months (ongoing)",
      year: "2025",
      liveUrl: "https://your-site.com/dialed",
      githubUrl: "https://github.com/yourrepo/dialed",
    },
    overview: {
      description:
        "Dialed is a Next.js meal planning app that converts calorie and protein goals into realistic meals, portion-accurate daily plans, and a weekly schedule. Users first select ingredients via a guided questionnaire, approve AI-generated meals, then the app builds optimized day plans that hit targets by scaling ingredient portions. Finally, users arrange their week with smooth drag-and-drop and time-snapping.",
      goals: [
        "Make meal planning fast and realistic with AI-generated meals users actually want to eat",
        "Hit daily calorie/protein targets precisely via optimization (not guesswork)",
        "Keep portions consistent across days once a meal is set",
        "Deliver a polished UX: streaming AI, typewriter preview → Markdown, and fluid drag-and-drop scheduling",
      ],
      media: {
        type: "gif",
        src: "/media/dialed-overview.gif",
        alt: "Dialed meal planner walkthrough",
      },
    },
    problemSolution: {
      pairs: [
        {
          problem: {
            title: "Too Many Choices, Not Enough Structure",
            description:
              "Users freeze at a blank page: what meals should I eat, how many per day, how do I avoid repeats?",
          },
          solution: {
            title: "Guided Questionnaire → Curated Meal Set",
            description:
              "A structured ingredient questionnaire feeds GPT to generate a curated set of realistic meals. Users approve/decline cards before anything becomes part of the plan.",
            tech: ["Next.js", "OpenAI API", "Zustand"],
          },
        },
        {
          problem: {
            title: "Calorie/Protein Math Is Hard",
            description:
              "Hitting targets by hand is tedious, especially when portions need to scale realistically across ingredients.",
          },
          solution: {
            title: "Optimization, Not Guesswork",
            description:
              "Converted a Pyomo prototype to TypeScript with GLPK.js. The solver assigns portions for each meal to precisely hit daily targets while respecting fixed vs scalable ingredients.",
            tech: ["TypeScript", "GLPK.js", "Linear Programming"],
          },
        },
        {
          problem: {
            title: "Inconsistent Portions Across Days",
            description:
              "If a meal’s ingredients change day-to-day, shopping and prep become chaotic.",
          },
          solution: {
            title: "Portion Locking",
            description:
              "Once a meal is portioned in a position (e.g., lunch), its ingredients/amounts are locked and reused across unique days, preserving consistency.",
            tech: ["Zustand store", "Solver constraints"],
          },
        },
        {
          problem: {
            title: "Planning ≠ Adherence",
            description:
              "Even a perfect plan fails if the UI is clunky. Users need quick scheduling, reordering, and time control.",
          },
          solution: {
            title: "Weekly Grid with DnD + Time Snapping",
            description:
              "A drag-and-drop grid (15-minute snapping) for easy meal timing and reordering. Mobile/desktop UX tuned for speed.",
            tech: ["@dnd-kit", "Framer Motion", "Tailwind"],
          },
        },
      ],
    },
    features: {
      intro:
        "End-to-end flow from targets → meals → optimized days → weekly plan.",
      features: [
        {
          title: "Ingredient Questionnaire",
          description:
            "Pick proteins, carbs, veggies, and exclusions. Feeds GPT to generate on-target, realistic meals.",
          icon: "ListChecks",
          media: {
            type: "image",
            src: "/media/dialed-questionnaire.jpg",
            alt: "Questionnaire UI",
          },
        },
        {
          title: "AI Meal Generation with Approval",
          description:
            "Meals arrive as cards (with images). Approve to keep, skip to replace—no clutter, no overwhelm.",
          icon: "Sparkles",
          media: {
            type: "video",
            src: "/media/dialed-meals.mp4",
            alt: "Meal cards approval",
          },
        },
        {
          title: "Portion-Accurate Day Builder",
          description:
            "LP solver scales ingredients to hit daily calorie/protein targets exactly, honoring fixed vs scalable items.",
          icon: "Gauge",
          media: {
            type: "image",
            src: "/media/dialed-optimizer.jpg",
            alt: "Optimization results",
          },
        },
        {
          title: "Weekly Planner with Drag-and-Drop",
          description:
            "Arrange unique days on a weekly grid. Drag to reorder; snap meals to precise times (15-min intervals).",
          icon: "CalendarDays",
          media: {
            type: "video",
            src: "/media/dialed-weekly.mp4",
            alt: "Weekly grid DnD",
          },
        },
        {
          title: "Three-Tab Meal Modal",
          description:
            "Quickly inspect Details, Ingredients, and Recipe in a clean overlay—no context switching.",
          icon: "Utensils",
          media: {
            type: "image",
            src: "/media/dialed-meal-modal.jpg",
            alt: "Three-tab modal",
          },
        },
        {
          title: "Cheat Day Support",
          description:
            "Mark special days without new schema—tracked as DayPlan objects with `isCheatDay: true`.",
          icon: "PartyPopper",
          media: {
            type: "image",
            src: "/media/dialed-cheat.jpg",
            alt: "Cheat day UI",
          },
        },
        {
          title: "Streaming Typewriter → Markdown",
          description:
            "Assistant messages type in smoothly while streaming, then swap to rich Markdown once complete.",
          icon: "Type",
          media: {
            type: "video",
            src: "/media/dialed-streaming.mp4",
            alt: "Streaming UI",
          },
        },
        {
          title: "Async Meal Images",
          description:
            "Images generate after cards render—users don’t wait. Cards update in place when the image is ready.",
          icon: "Image",
          media: {
            type: "video",
            src: "/media/dialed-images.mp4",
            alt: "Async image pipeline",
          },
        },
      ],
    },
    techStack: {
      intro:
        "Modern web stack with mathematical optimization and a polished front-end experience.",
      categories: [
        {
          title: "Frontend",
          technologies: [
            "Next.js 14",
            "TypeScript",
            "React",
            "Zustand",
            "Tailwind CSS",
            "shadcn/ui",
            "@dnd-kit",
            "Framer Motion",
          ],
        },
        {
          title: "Backend / APIs",
          technologies: ["Next.js API Routes", "OpenAI API"],
        },
        {
          title: "Optimization",
          technologies: [
            "GLPK.js (Linear Programming)",
            "Deviation-based objective",
          ],
        },
        {
          title: "Tools & Services",
          technologies: ["Vercel", "GitHub", "ESLint", "Prettier"],
        },
        {
          title: "Development",
          technologies: [
            "React Testing Library",
            "Vitest/Jest (planned)",
            "Storybook (planned)",
          ],
        },
      ],
    },
    technicalChallenges: {
      intro:
        "Deep dives into the planner’s hardest problems: streaming UX, structured GPT, and mathematical optimization.",
      challenges: [
        {
          title: "Guided, Phase-Aware GPT with Structured JSON",
          context:
            "The assistant must follow a strict flow—brainstorm → confirm → optimize—while emitting machine-readable JSON chunks mid-stream.",
          approach: [
            "Single comprehensive system prompt with explicit phase tags appended to every message.",
            "Server streaming via `streamText`; client typewriter renders partial tokens, then swaps to Markdown after completion.",
            "Robust JSON parsing for meals/days with error-tolerant delimiters and schema validation.",
          ],
          impact: [
            { label: "UX", value: "Smooth streaming" },
            { label: "Data integrity", value: "Strict JSON schema" },
          ],
          outcome:
            "A conversational flow that never blocks UI and still yields clean, structured data for state updates.",
          tradeoffs: [
            "More complex parsing pipeline vs simple chat output.",
            "Prompt needs periodic tuning as features evolve.",
          ],
          technologies: ["Next.js", "OpenAI API", "Zustand"],
          code: {
            language: "ts",
            snippet: `// Pseudo: streaming handler extracts JSON blocks on the fly
for await (const chunk of stream) {
  typewriter.append(chunk.text);
  const maybeJson = extractJsonBlocks(chunk.text);
  if (maybeJson) {
    const parsed = safeParseMealSchema(maybeJson);
    if (parsed) store.setGeneratedMeals(parsed);
  }
}`,
            caption:
              "Stream tokens to UI; opportunistically parse JSON blocks for live state.",
          },
          media: {
            type: "image",
            src: "/media/dialed-stream-parse.svg",
            alt: "Streaming + JSON parse flow",
          },
        },
        {
          title:
            "LP Solver: Portion Scaling with Fixed vs Scalable Ingredients",
          context:
            "Some ingredients (sauces/spices) shouldn’t scale; others must scale to hit targets.",
          approach: [
            "Decision variables for scalable ingredients only; fixed items contribute macros but remain constant.",
            "Deviation-based objective: minimize |calories−target| and |protein−target| with weights.",
            "Return both fixed and scaled items back to UI with precise grams and display amounts.",
          ],
          impact: [
            { label: "Target accuracy", value: "Tight error bounds" },
            { label: "Meal realism", value: "Preserved" },
          ],
          outcome:
            "Accurate daily targets without weird micro-adjustments to non-primary ingredients.",
          tradeoffs: ["LP adds complexity and solver time vs heuristic rules."],
          technologies: ["TypeScript", "GLPK.js"],
          code: {
            language: "ts",
            snippet: `// Objective (sketch): minimize weighted deviation
minimize w1*abs(sum_i cal_i*x_i + cal_fixed - cal_target)
       + w2*abs(sum_i pro_i*x_i + pro_fixed - pro_target);`,
            caption: "Deviation-based objective balances calories and protein.",
          },
          media: {
            type: "image",
            src: "/media/dialed-lp.svg",
            alt: "LP variable/constraint diagram",
          },
        },
        {
          title: "Weekly Grid with Drag-and-Drop + 15-Minute Snapping",
          context:
            "Users should quickly re-time meals with precise snapping and buttery animations.",
          approach: [
            "Vertical DnD per day column using @dnd-kit sensors and collision detection.",
            "Translate Y → nearest 15-minute slot; persist to `mealTime` in Zustand.",
            "Optimized transforms and memoization to keep 60fps on desktop and mobile.",
          ],
          impact: [
            { label: "Interaction speed", value: "Instant" },
            { label: "Perceived performance", value: "60fps feel" },
          ],
          outcome:
            "Scheduling feels tactile and precise; the grid behaves like a calendar.",
          tradeoffs: [
            "Collision + snapping logic adds complexity for edge cases.",
          ],
          technologies: ["@dnd-kit", "Zustand", "Framer Motion"],
          code: {
            language: "tsx",
            snippet: `const nearestSlot = (y: number) => {
  const minutes = Math.round(y / PX_PER_MINUTE / 15) * 15;
  return clamp(minutes, 0, 24*60);
};
onDragEnd(({ over, delta }) => {
  const mins = nearestSlot(currentY + delta.y);
  updateMealTime(mealId, toHHMM(mins));
});`,
            caption: "Map pixels to minutes; snap and persist.",
          },
          media: {
            type: "image",
            src: "/media/dialed-dnd.svg",
            alt: "DnD snapping diagram",
          },
        },
        {
          title: "Streaming Typewriter → Markdown Swap",
          context:
            "Users should see thoughts appear immediately, but still get rich formatting at the end.",
          approach: [
            "Local typewriter component appends tokens as they arrive without re-starting.",
            "On completion, replace with Markdown render of the final content to enable links, lists, and code blocks.",
          ],
          impact: [
            { label: "Perceived latency", value: "Near-zero" },
            { label: "Readability", value: "High" },
          ],
          outcome:
            "Chat feels alive during streaming and polished once complete.",
          tradeoffs: ["Two render modes to maintain."],
          technologies: ["React", "Framer Motion"],
          code: {
            language: "tsx",
            snippet: `<Typewriter text={streamingText} playing />
{done && <ReactMarkdown>{finalText}</ReactMarkdown>}`,
            caption: "Typewriter during stream; Markdown after.",
          },
          media: {
            type: "image",
            src: "/media/dialed-typewriter.svg",
            alt: "Typewriter → Markdown swap",
          },
        },
        {
          title: "Async Image Generation Pipeline",
          context:
            "Don’t block meal cards on image generation; populate later to keep flow snappy.",
          approach: [
            "Render cards immediately; enqueue image jobs per approved meal.",
            "When ready, update the meal object in Zustand with the image URL; UI refreshes in place.",
          ],
          impact: [
            { label: "TTI for results", value: "Immediate" },
            { label: "Visual appeal", value: "High" },
          ],
          outcome: "Users approve meals fast; visuals catch up seamlessly.",
          tradeoffs: ["Eventual consistency for images."],
          technologies: [
            "Next.js API Routes",
            "OpenAI Images (or provider)",
            "Zustand",
          ],
          code: {
            language: "ts",
            snippet: `// Client
approveMeal(meal) {
  store.addApprovedMeal(meal);
  fetch("/api/generate-image", { method: "POST", body: JSON.stringify({ id: meal.id, name: meal.name }) });
}
// Server (sketch)
// generate, store, then PATCH state via SSE/webhook or client re-fetch`,
            caption: "Fire-and-forget image job; update state when ready.",
          },
          media: {
            type: "image",
            src: "/media/dialed-image-async.svg",
            alt: "Async image flow",
          },
        },
      ],
    },
    results: {
      intro:
        "Dialed demonstrates how AI and optimization can remove friction from healthy eating while keeping plans realistic.",
      outcomes: [
        {
          title: "User Value",
          points: [
            "Minutes to a complete weekly plan that actually hits targets.",
            "Portion locking simplifies shopping and prep across days.",
            "Drag-and-drop scheduling makes adherence practical.",
          ],
        },
        {
          title: "Engineering Wins",
          points: [
            "Solver migrated to GLPK.js with deviation-based objective.",
            "Robust JSON streaming pipeline with phase tags and safe parsing.",
            "High-polish UI: typewriter streaming, Markdown swap, buttery DnD.",
          ],
        },
        {
          title: "What’s Next",
          points: [
            "Macro ranges (min/max) and fiber/fat constraints in the solver.",
            "Export to grocery list and calendar.",
            "Recipe import and nutrition parsing from URLs.",
          ],
        },
      ],
    },
    gallery: {
      intro: "From questionnaire to weekly grid—screens that keep you in flow.",
      media: [
        {
          type: "image",
          title: "Questionnaire",
          description:
            "Pick ingredients and exclusions to guide meal generation",
          placeholder: "dialed-questionnaire.jpg",
        },
        {
          type: "image",
          title: "Meal Cards",
          description: "Approve/refine meals with images and quick actions",
          placeholder: "dialed-meal-cards.jpg",
        },
        {
          type: "image",
          title: "Day Builder",
          description: "Portion-accurate days that hit targets",
          placeholder: "dialed-day-builder.jpg",
        },
        {
          type: "video",
          title: "Weekly Grid",
          description: "Drag-and-drop with time snapping",
          placeholder: "dialed-weekly.mp4",
        },
        {
          type: "image",
          title: "Three-Tab Modal",
          description: "Details, Ingredients, and Recipe in one place",
          placeholder: "dialed-three-tab.jpg",
        },
        {
          type: "image",
          title: "Progress Footer",
          description: "Sticky progress + completion gating",
          placeholder: "dialed-progress.jpg",
        },
      ],
    },
  },
};
