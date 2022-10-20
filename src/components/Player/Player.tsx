import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

import { mousePosition } from "@/hooks/Visual";

export const Player = component$(() => {
  const store = useStore(
    {
      mouse: { x: 0, y: 75, dragging: false },
    },
    { recursive: true }
  );

  mousePosition(store.mouse);

  useClientEffect$(() => {
    const height = window.innerHeight;

    store.mouse.y = height - 75;
  });

  return (
    <footer
      class="relative col-span-2 max-h-28 min-h-[2rem] w-full rounded-b-lg bg-surface-100"
      style={{ height: `calc(100vh - ${store.mouse.y}px - 2px)` }}
      aria-hidden={`${store.mouse.y <= 75}`}
    >
      <div
        class={`pointer-events-auto cursor-row-resize ${
          store.mouse.dragging
            ? "fixed inset-0"
            : "absolute inset-x-0 bottom-full h-1"
        }`}
        aria-hidden="true"
        onMouseDown$={() => (store.mouse.dragging = true)}
        onMouseUp$={() => (store.mouse.dragging = false)}
      ></div>
    </footer>
  );
});
