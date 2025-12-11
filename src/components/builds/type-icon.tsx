import { component$ } from "@builder.io/qwik";
import { Type } from "~/data/builds";

interface Props {
  type: Type
}

export default component$((props: Props)=> {

  const returnIcon = ((type: Type): string => {
    switch (type) {
      case Type.AQUA:
        return "/icons/aqua.png";
      case Type.IGNIS:
        return "/icons/ignis.png";
      case Type.VENTUS:
        return "/icons/ventus.png";
      case Type.TERRA:
        return "/icons/terra.png";
      case Type.LUX:
        return "/icons/lux.png";
      case Type.UMBRA:
        return "/icons/umbra.png";
    }
  })

  return <>
    <img src={returnIcon(props.type)} width={"24"} height={"24"} alt={""}/>
  </>
})