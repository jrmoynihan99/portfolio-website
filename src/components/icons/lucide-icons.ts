// Import only the icons actually used in your app
import {
  // Features icons
  Gauge,
  ListChecks,
  Sparkles,
  Scale,
  CalendarDays,
  ShoppingCart,
  Shuffle,
  AlertCircle,
  Shield,
  BookOpen,
  Users,
  MessageCircle,
  TrendingUp,
  Bell,

  // UI icons (from TechnicalChallenges, etc.)
  ChevronDown,
  ChevronUp,
  Maximize2,
  X,
  Copy,
  Check,
} from "lucide-react";

// Export them
export {
  // Features
  Gauge,
  ListChecks,
  Sparkles,
  Scale,
  CalendarDays,
  ShoppingCart,
  Shuffle,
  AlertCircle,
  Shield,
  BookOpen,
  Users,
  MessageCircle,
  TrendingUp,
  Bell,

  // UI
  ChevronDown,
  ChevronUp,
  Maximize2,
  X,
  Copy,
  Check,
};

// Also export as a map for dynamic access in Features.tsx
export const icons = {
  Gauge,
  ListChecks,
  Sparkles,
  Scale,
  CalendarDays,
  ArrowPath: Shuffle, // ArrowPath doesn't exist in Lucide, using Shuffle
  ShoppingCart,
  Shuffle,
  AlertCircle,
  Shield,
  BookOpen,
  Users,
  MessageCircle,
  TrendingUp,
  Bell,
  ChevronDown,
  ChevronUp,
  Maximize2,
  X,
  Copy,
  Check,
} as const;

export type IconName = keyof typeof icons;
