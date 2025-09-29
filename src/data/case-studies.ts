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

export interface TechnicalChallenge {
  title: string;
  problem: string;
  solution: string;
  technologies?: string[];
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
          title: "Mobile",
          technologies: [
            "React Native",
            "Expo",
            "TypeScript",
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
            "Sentry",
            "Analytics",
          ],
        },
        {
          title: "Development",
          technologies: ["Git", "GitHub", "VS Code", "Expo CLI", "ESLint"],
        },
      ],
    },
    technicalChallenges: {
      intro:
        "Building Anchor presented several complex technical challenges that required innovative solutions and careful architectural decisions.",
      challenges: [
        {
          title: "Real-Time Notification System at Scale",
          problem:
            "Users needed instant notifications for help requests across thousands of potential responders without causing server overload or notification spam. The system had to handle bursts of activity while maintaining sub-second delivery times.",
          solution:
            "Implemented Firebase Cloud Messaging with intelligent batching and targeting. Built a queue management system that prioritizes active users and staggers delivery to prevent server spikes. Added user-specific rate limiting that respects notification preferences while ensuring critical messages always get through.",
          technologies: [
            "Firebase Cloud Messaging",
            "Cloud Functions",
            "Firestore Triggers",
          ],
        },
        {
          title: "Cost-Effective AI Content Moderation",
          problem:
            "Every message needed AI screening before delivery, but OpenAI API costs would become unsustainable as the user base grew. Initial projections showed $2000+/month in AI costs at scale, threatening the non-profit's viability.",
          solution:
            "Designed a multi-tier moderation system that uses pattern matching and keyword filters first, only escalating to AI when necessary. Implemented aggressive caching of similar content decisions and batched API requests. Result: 85% cost reduction while maintaining safety standards.",
          technologies: ["OpenAI API", "Redis Caching", "Pattern Matching"],
        },
        {
          title: "Anonymous Yet Accountable Identity System",
          problem:
            "Users needed complete anonymity to feel safe, but this created opportunities for abuse without any accountability mechanism. How do you ban bad actors when everyone is anonymous?",
          solution:
            "Created a device fingerprinting system that tracks behavior patterns without collecting personal data. Implemented a reputation score that's tied to device IDs rather than user accounts. Bad actors can be shadowbanned or rate-limited based on behavior patterns while maintaining user anonymity.",
          technologies: [
            "Device Fingerprinting",
            "Firestore Security Rules",
            "Behavioral Analysis",
          ],
        },
        {
          title: "Offline-First Architecture for Crisis Moments",
          problem:
            "Users often need help when they have poor connectivity or are in locations with spotty internet. A failed SOS send during a moment of crisis could have serious consequences and erode trust in the platform.",
          solution:
            "Built comprehensive offline support with Redux Persist and Firestore offline persistence. Implemented optimistic UI updates and a robust queue system that automatically retries failed actions. Added clear visual indicators for offline mode and pending actions so users always know the status of their requests.",
          technologies: [
            "Redux Persist",
            "Firestore Offline Persistence",
            "Background Sync",
          ],
        },
        {
          title: "Scalable Real-Time Community Feed",
          problem:
            "The community feed needed to update in real-time across potentially thousands of concurrent users, but Firestore's real-time listeners have cost and performance implications at scale. Too many listeners would create unsustainable Firebase costs.",
          solution:
            "Implemented a hybrid approach using real-time listeners for active users and pagination with polling for background updates. Added intelligent listener management that detaches when the app is backgrounded. Built a smart caching layer that reduces redundant queries by 70%.",
          technologies: [
            "Firestore Real-time Listeners",
            "Pagination",
            "Client-side Caching",
          ],
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
