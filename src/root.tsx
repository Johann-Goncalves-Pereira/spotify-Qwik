import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import styles from "@styles/_index.scss";

export default component$(() => {
  useStyles$(styles);
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body
        lang="en"
        class="isolate grid h-screen grid-cols-[auto,1fr] grid-rows-[1fr,auto] gap-px bg-surface-100 p-[2px] font-sans text-surface-900"
      >
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
