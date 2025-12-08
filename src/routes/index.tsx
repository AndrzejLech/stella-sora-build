import { $, component$, Signal, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Build, builds, Role, Type } from "~/data/builds";
import TrekkerDropdown from "~/components/router-head/trekker-dropdown";
import BuildElement from "~/components/router-head/build-element";

const getOrder = (type: Type): number  => {
  switch(type){
    case Type.IGNIS: return 0;
    case Type.AQUA: return 1;
    case Type.VENTUS: return 2;
    case Type.LUX: return 3;
    case Type.UMBRA: return 4;
    case Type.TERRA: return 5;
  }
}

const mainBuilds = builds
  .filter(build => build.role == Role.MAIN)
  .sort((a, b) => getOrder(a.type) - getOrder(b.type));

const supportBuilds = builds
  .filter(build => build.role == Role.SUPPORT)
  .sort((a, b) => getOrder(a.type) - getOrder(b.type));

export default component$(() => {
  const mainTrekkers: Signal<Build[]> = useSignal(mainBuilds)
  const mainTrekker: Signal<Build | null> = useSignal(mainBuilds[0])
  const supportTrekkers: Signal<Build[]> = useSignal(supportBuilds)
  const firstSupportTrekker: Signal<Build | null> = useSignal(supportBuilds[1])
  const secondSupportTrekker: Signal<Build | null> = useSignal(supportBuilds[2])


  const handleMainTrekkerDropDown = $((trekker: Build) => {
    mainTrekker.value = trekker
  })

  const handleFirstSupportTrekkerDropDown = $((trekker: Build) => {
    firstSupportTrekker.value = trekker
  })
  const handleSecondSupportTrekkerDropDown = $((trekker: Build) => {
    secondSupportTrekker.value = trekker
  })

  return (
    <>
      <div class={"w-full h-full flex flex-col items-center"}>
        <div class={"p-8 container"}>
          <h1>Stella Sora Builds</h1>
          <div class={"card flex flex-row bg-base-100 p-4 m-2"}>
            <TrekkerDropdown
              list={mainTrekkers.value}
              value={mainTrekker.value as Build}
              onItemSelect$={handleMainTrekkerDropDown}
            ></TrekkerDropdown>
            <TrekkerDropdown
              list={supportTrekkers.value}
              value={firstSupportTrekker.value as Build}
              onItemSelect$={handleFirstSupportTrekkerDropDown}
            ></TrekkerDropdown>
            <TrekkerDropdown
              list={supportTrekkers.value}
              value={secondSupportTrekker.value as Build}
              onItemSelect$={handleSecondSupportTrekkerDropDown}
            ></TrekkerDropdown>
          </div>
          <div class={"m-2"}>
            <BuildElement
              value={mainTrekker.value as Build}
            ></BuildElement>
            <BuildElement
              value={firstSupportTrekker.value as Build}
            ></BuildElement>
            <BuildElement
              value={secondSupportTrekker.value as Build}
            ></BuildElement>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Stella Sora Builds",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

