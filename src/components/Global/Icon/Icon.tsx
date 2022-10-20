import { component$ } from "@builder.io/qwik";

type IconProps = {
  name: string;
  className?: string;
};

export const Icon = component$(({ name = "", className = "" }: IconProps) => {
  return <i class={`material-symbols-rounded ${className}`}>{name}</i>;
});
