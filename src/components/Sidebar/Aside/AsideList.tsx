import { component$, Slot } from "@builder.io/qwik";

export const AsideList = component$(() => {
  return (
    <aside class="h-full overflow-auto py-1 ">
      <nav>
        <ul class="">
          <Slot />
        </ul>
      </nav>
    </aside>
  );
});
