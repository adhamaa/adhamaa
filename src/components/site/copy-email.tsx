"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

export function CopyEmail({ className }: { className?: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — select the address instead");
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-border/80 px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground",
        className
      )}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-brand" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {profile.email}
    </button>
  );
}
