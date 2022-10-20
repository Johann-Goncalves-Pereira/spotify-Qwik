import { component$, Slot } from "@builder.io/qwik";
import { Sidebar } from "@components/Sidebar";
import { Player } from "@components/Player";
import { Main } from "@components/Main";
import { CanvasGradient } from "@components/Global";

export default component$(() => {
  return (
    <>
      <Sidebar />
      <Main>
        <Slot name="main" />
      </Main>
      <Player />
      <CanvasGradient />
    </>
  );
});
