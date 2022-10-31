import { component$, useStore } from "@builder.io/qwik";

import { mousePosition } from "@/hooks/Visual";

import { AsideItem, AsideList } from "@components/Sidebar";

export const Sidebar = component$(() => {
  const store = useStore(
    {
      mouse: { x: 220, y: 0, dragging: false },
    },
    { recursive: true }
  );

  mousePosition(store.mouse);

  return (
    <header
      class={`relative grid h-full max-w-sm grid-rows-[auto_auto_1fr] gap-3 rounded-tl-lg bg-surface-100/95 py-2 ${
        store.mouse.x <= 100 &&
        "pointer-events-none max-w-0 [&+main]:rounded-tl-lg"
      }`}
      style={{ width: `${store.mouse.x}px` }}
      aria-hidden={`${store.mouse.x <= 175}`}
    >
      <div
        class={`pointer-events-auto cursor-col-resize ${
          store.mouse.dragging
            ? "fixed inset-0"
            : "absolute inset-y-0 left-full w-1"
        }`}
        aria-hidden="true"
        onMouseDown$={() => (store.mouse.dragging = true)}
        onMouseUp$={() => (store.mouse.dragging = false)}
      ></div>

      <AsideList>
        <AsideItem icon="home" title="Home" />
        <AsideItem icon="search" title="Search" />
        <AsideItem icon="bookmark" title="Your library" />
      </AsideList>
      <AsideList></AsideList>
      <AsideList></AsideList>
    </header>
  );
});
