import { $, component$, Signal, useSignal } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Build, builds, Role, Type } from "~/data/builds";
import TrekkerDropdown from "~/components/builds/trekker-dropdown";
import BuildElement from "~/components/builds/build-element";
import Navbar from "~/components/navbar";

const getOrder = (type: Type): number => {
  switch (type) {
    case Type.IGNIS:
      return 0;
    case Type.AQUA:
      return 1;
    case Type.VENTUS:
      return 2;
    case Type.LUX:
      return 3;
    case Type.UMBRA:
      return 4;
    case Type.TERRA:
      return 5;
  }
};

const mainBuilds = builds
  .filter((build) => build.role == Role.MAIN)
  .sort((a, b) => getOrder(a.type) - getOrder(b.type));

const supportBuilds = builds
  .filter((build) => build.role == Role.SUPPORT)
  .sort((a, b) => getOrder(a.type) - getOrder(b.type));

export default component$(() => {
  const mainTrekkers: Signal<Build[]> = useSignal(mainBuilds);
  const mainTrekker: Signal<Build | null> = useSignal(mainBuilds[0]);
  const supportTrekkers: Signal<Build[]> = useSignal(supportBuilds);
  const firstSupportTrekker: Signal<Build | null> = useSignal(supportBuilds[1]);
  const secondSupportTrekker: Signal<Build | null> = useSignal(
    supportBuilds[2],
  );

  const handleMainTrekkerDropDown = $((trekker: Build) => {
    mainTrekker.value = trekker;
  });

  const handleFirstSupportTrekkerDropDown = $((trekker: Build) => {
    firstSupportTrekker.value = trekker;
  });
  const handleSecondSupportTrekkerDropDown = $((trekker: Build) => {
    secondSupportTrekker.value = trekker;
  });

  return (
    <>
      <div class={"flex h-full w-full flex-col items-center"}>
        <Navbar></Navbar>
        <div class={"container p-8"}>
          <div class={"card bg-base-100 m-2 flex flex-row p-4"}>
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
            <BuildElement value={mainTrekker.value as Build}></BuildElement>
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
