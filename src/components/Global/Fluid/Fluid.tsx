import {
  component$,
  useClientEffect$,
  useStylesScoped$,
} from "@builder.io/qwik";

import { Gradient } from "./whatamesh.mjs";

import styles from "./fluid.scss?inline";

export const Fluid = component$(() => {
  useStylesScoped$(styles);

  useClientEffect$(() => {
    const gradient = new Gradient();
    // @ts-ignore
    gradient.initGradient("#gradient-canvas");
  });

  return <canvas id="gradient-canvas" aria-hidden="true"></canvas>;
});
