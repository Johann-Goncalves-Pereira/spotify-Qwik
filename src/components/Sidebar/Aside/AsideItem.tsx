import { Icon } from "@/components/Global";
import { component$ } from "@builder.io/qwik";

type AsideItemProps = {
  icon?: string;
  title: string;
};

export const AsideItem = component$(({ icon, title }: AsideItemProps) => {
  return (
    <li
      class={`grid max-w-full cursor-pointer items-center gap-2 
      px-3 py-2 text-surface-900/75 hover:text-surface-900 ${
        icon && "grid-cols-[auto_1fr]"
      }`}
    >
      {icon && <Icon name={icon} />}
      <b class="overflow-hidden text-ellipsis whitespace-nowrap">{title}</b>
    </li>
  );
});
