import {
  component$,
  useStore,
  $,
  useOnDocument,
  useClientEffect$,
} from "@builder.io/qwik";

export const Sidebar = component$(() => {
  const store = useStore(
    {
      document: { x: 260, y: 0 },
      dragging: false,
    },
    { recursive: true }
  );

  useClientEffect$(() => {
    updateMouse(store.document);
  });

  return (
    <header
      class="relative h-full rounded-tl-lg bg-surface-100"
      style={{ width: `${store.document.x}px` }}
    >
      <div
        class="absolute inset-y-0 left-full w-1 cursor-col-resize bg-red-400"
        onMouseDown$={() => (store.dragging = true)}
        onMouseUp$={() => (store.dragging = false)}
        document:onMouseMove$={(event) => {
          store.document.x = (event as MouseEvent).x;
          store.document.y = (event as MouseEvent).y;
        }}
      ></div>{" "}
      <div class="fixed inset-0 m-auto h-fit w-fit">
        ( {store.document.x}, {store.dragging})
      </div>
    </header>
  );
});

export const updateMouse = (store: { x: number; y: number }) => {
  document.addEventListener("mousemove", (event) => {
    store.x = (event as MouseEvent).x;
    store.y = (event as MouseEvent).y;
  });
};
