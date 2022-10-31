import { component$, Slot } from "@builder.io/qwik";

export const Main = component$(() => {
  return (
    <main class="h-full w-full rounded-tr-lg bg-surface-100/95">
      <Slot />
    </main>
  );
});
