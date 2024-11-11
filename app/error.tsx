"use client";

import ErrorAlert from "@/components/ErrorAlert";
import Section from "@/ui/Section";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error(props: ErrorProps) {
  return (
    <Section>
      <ErrorAlert />
    </Section>
  );
}
