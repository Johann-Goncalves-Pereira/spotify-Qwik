import {
  component$,
  useClientEffect$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";

import styles from "./styles.scss";

export const CanvasGradient = component$(() => {
  useStylesScoped$(styles);

  const state = useStore({
    deg: 0,
  });

  useClientEffect$(() => {
    const randomDeg = Math.floor(Math.random() * 360) + 1;
    state.deg = randomDeg;

    const interval = setInterval(() => {
      state.deg = state.deg + 1;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div
      class="gradient-bg"
      style={`--deg_:${state.deg}deg`}
      aria-hidden="true"
    ></div>
  );
});
