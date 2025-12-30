import { component$, useComputed$ } from "@builder.io/qwik";
import { Type } from "~/data/builds";

interface Props {
  type: Type
}

const ICON_MAP: Record<Type, string> = {
  [Type.AQUA]: "/icons/aqua.png",
  [Type.IGNIS]: "/icons/ignis.png",
  [Type.VENTUS]: "/icons/ventus.png",
  [Type.TERRA]: "/icons/terra.png",
  [Type.LUX]: "/icons/lux.png",
  [Type.UMBRA]: "/icons/umbra.png",
};

export default component$((props: Props)=> {

  const iconsSrc = useComputed$(() => ICON_MAP[props.type]);

  return <>
    <img
      key={iconsSrc.value}
      src={iconsSrc.value}
      width={"24"}
      height={"24"}
      alt={""}
    />
  </>
})