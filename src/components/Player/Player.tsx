import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

import { mousePosition } from "@/hooks/Visual";
import { Icon } from "../Global";

export const Player = component$(() => {
  const store = useStore(
    {
      mouse: { x: 0, y: 75, dragging: false },
      volume: "0",
    },
    { recursive: true }
  );

  mousePosition(store.mouse);

  // useClientEffect$(() => {
  //   const height = window.innerHeight;

  //   store.mouse.y = height - 75;
  // });

  return (
    <footer
      class="relative col-span-2 grid max-h-28 min-h-[2rem] w-full 
      grid-cols-[auto_1fr_auto] rounded-b-lg bg-surface-100/95 px-4"
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

      <p class="grid h-full place-content-center">
        <h1 class="font-600">Johann Gonçalves Pereira</h1>
        <h3 class="pl-1 text-xs italic">{"=>"} Front end developer</h3>
      </p>

      <div></div>

      <div class="flex items-center gap-2">
        <Icon name="lyrics" />
        <Icon name="queue_music" />
        <Icon name="devices" />

        <div class="grid h-6 grid-cols-[auto_1fr] items-center gap-2">
          <Icon name="volume_up" />

          <input
            type="range"
            min="0"
            max="100"
            step="5"
            class="absolute col-start-2 row-start-1 w-24 scale-x-125 cursor-pointer opacity-0"
            value={store.volume}
            onInput$={(ev) =>
              (store.volume = (ev.target as HTMLInputElement).value)
            }
          />
          <div class="h-1 w-24 rounded-full bg-surface-800">
            <div
              class="h-full rounded-full bg-emerald-500"
              style={{ width: `${store.volume}%` }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  );
});
