"use client";

import { useEffect } from "react";

export default function AutoOpenPopover({ id }: { id?: string }) {
  useEffect(() => {
    if (!id) return;

    const popover = document.getElementById(id) as (HTMLElement & { showPopover?: () => void }) | null;
    if (popover && !popover.matches(":popover-open")) popover.showPopover?.();
  }, [id]);

  return null;
}
