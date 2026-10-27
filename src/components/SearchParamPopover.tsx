"use client";

import { useSearchParams } from "next/navigation";
import AutoOpenPopover from "@/components/AutoOpenPopover";

export default function SearchParamPopover({
  parameter,
  popovers,
}: {
  parameter: string;
  popovers: readonly { slug: string; id: string }[];
}) {
  const searchParams = useSearchParams();
  const slug = searchParams.get(parameter);
  const id = popovers.find((popover) => popover.slug === slug)?.id;

  return <AutoOpenPopover id={id} />;
}
