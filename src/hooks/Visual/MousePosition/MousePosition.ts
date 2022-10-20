import { $, useOnWindow } from "@builder.io/qwik";

type mousePositionProps = {
  x: number;
  y: number;
  dragging?: boolean;
};

export const mousePosition = (store: mousePositionProps) => {
  useOnWindow(
    "mousemove",
    $((event) => {
      if (store.dragging || undefined) {
        store.x = (event as MouseEvent).x;
        store.y = (event as MouseEvent).y;
      }
    })
  );
};
