import { $, component$, QRL, useOnDocument, useSignal } from "@builder.io/qwik";
import { Build } from "~/data/builds";
import TypeIcon from "~/components/builds/type-icon";

interface Props {
  list: Build[],
  value: Build,
  onItemSelect$: QRL<(item: Build) => void>;
}

export default component$((props: Props)=> {
  const dropdownRef = useSignal<HTMLDetailsElement | undefined>()

  const handleSelection = $((item: Build) => {
    props.onItemSelect$(item)

      if(dropdownRef.value){
        dropdownRef.value.open = false
      }
  })

  useOnDocument(
    'click',
    $((event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (dropdownRef.value && !dropdownRef.value.contains(target)) {
        dropdownRef.value.open = false;
      }
    })
  );

  return <>
    <details ref={dropdownRef} class={"relative"}>
      <summary class={"btn m-1"}>
        {props.value.role}: {props.value.name}  <TypeIcon type={props.value.type} />
      </summary>
      <ul class={"menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm absolute top-full left-0"}>
        {props.list.map((item: Build, index: number) =>
          <li key={index}>
            <button onClick$={() => handleSelection(item)}>
              {item.name} <TypeIcon type={item.type} />
            </button>
          </li>
        )}
      </ul>
    </details>
  </>
})