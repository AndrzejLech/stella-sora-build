import { component$ } from "@builder.io/qwik";
import { Build } from "~/data/builds";
import TypeIcon from "~/components/router-head/type-icon";

interface Props {
  value: Build,
}

export default component$((props: Props) => {
  return (
    <>
      <div class={"card bg-base-100 p-6 shadow-xl border border-base-200"}>
        <div class={"grid grid-cols-1 md:grid-cols-4 gap-2"}>
          <div class={"flex items-center gap-2 mb-4 pb-4"}>
            <TypeIcon type={props.value.type}></TypeIcon>

            <div class={"flex flex-col"}>
              <h2 class={"text-2xl font-bold text-base-content"}>{props.value.name}</h2>
              <p class={"text-base-content/70"}>{props.value.role}</p>
            </div>
          </div>

          <div class={"flex flex-col gap-2 p-2 bg-base-200 rounded-lg"}>
            <h3 class={"text-lg font-semibold mb-1 text-pink-300"}>Pink Potentials</h3>
            {props.value.pink.map((value, index) =>
              <div key={index} class={"card bg-pink-400 p-2 rounded-md shadow-sm"}>
                <p class={"text-sm text-gray-900"}>{value}</p>
              </div>
            )}
          </div>

          <div class={"flex flex-col gap-2 p-2 bg-base-200 rounded-lg"}>
            <h3 class={"text-lg font-semibold mb-1 text-cyan-300"}>Chromatic Potentials</h3>
            {props.value.chromatic.map((value, index) =>
              <div key={index} class={"card bg-cyan-400 p-2 rounded-md shadow-sm"}>
                <p class={"text-sm text-gray-900"}>{value}</p>
              </div>
            )}
          </div>

          <div class={"flex flex-col gap-2 p-2 bg-base-200 rounded-lg"}>
            <h3 class={"text-lg font-semibold mb-1 text-orange-300"}>Orange Potentials</h3>
            {props.value.orange.map((value, index) =>
              <div key={index} class={"card bg-orange-400 p-2 rounded-md shadow-sm"}>
                <p class={"text-sm text-gray-900"}>{value}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
});