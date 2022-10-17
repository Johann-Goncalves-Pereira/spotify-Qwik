import { component$, Slot } from "@builder.io/qwik";
import { Sidebar } from "@components/Sidebar";
import { Player } from "@components/Player";
import { Main } from "@components/Main";

export default component$(() => {
  return (
    <>
      <Sidebar />
        <Main>
          <Slot name="main" />
        </Main>
      <Player />
    </>
  );
});
