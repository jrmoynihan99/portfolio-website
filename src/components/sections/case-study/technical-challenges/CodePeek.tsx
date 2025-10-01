import { Maximize2 } from "lucide-react";
import { CopyButton } from "./CopyButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodePeekProps {
  language: string;
  snippet: string;
  caption?: string;
  onExpand?: () => void;
}

export default function CodePeek({
  language,
  snippet,
  caption,
  onExpand,
}: CodePeekProps) {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-black/40">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-xs uppercase tracking-wider text-white/50">
          {language}
        </span>
        <div className="flex items-center gap-2">
          <CopyButton text={snippet} />
          {onExpand && (
            <button
              onClick={onExpand}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-2 py-1 text-xs text-white/70 hover:bg-white/5 cursor-pointer"
              aria-label="View full code"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              View
            </button>
          )}
        </div>
      </div>
      <SyntaxHighlighter
        language={language.toLowerCase()}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "0.75rem",
          background: "transparent",
          fontSize: "12.5px",
          lineHeight: "1.6",
          maxHeight: "12rem",
          borderRadius: 0,
        }}
        codeTagProps={{
          style: {
            fontFamily: "inherit",
          },
        }}
      >
        {snippet}
      </SyntaxHighlighter>
      {caption && (
        <div className="border-t border-white/10 px-3 py-2 text-xs text-white/50">
          {caption}
        </div>
      )}
    </div>
  );
}
