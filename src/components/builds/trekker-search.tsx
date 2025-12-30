import {
  $,
  component$,
  QRL,
  useComputed$,
  useOnDocument,
  useSignal,
} from "@builder.io/qwik";
import { Build } from "~/data/builds";
import TypeIcon from "~/components/builds/type-icon";

interface Props {
  list: Build[],
  value: Build,
  onItemSelect$: QRL<(item: Build) => void>;
}

export default component$((props: Props)=> {
  const dropdownRef = useSignal<HTMLDetailsElement | undefined>()
  const query = useSignal("");
  const isFocused = useSignal(false);

  const handleSelection = $((item: Build) => {
    props.onItemSelect$(item)
    query.value = ""
      if(dropdownRef.value){
        dropdownRef.value.open = false
      }
  })

  const filteredList = useComputed$(() => {
    const search = query.value.toLowerCase().trim();
    if (!search) return props.list.slice(0, 3);

    return props.list
      .filter((item) => item.name.toLowerCase().includes(search))
      .slice(0, 3);
  });

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
    <div class={`dropdown ${isFocused.value ? "dropdown-open" : ""} relative w-full`}>
      <div class="form-control w-full">
        <label class="label p-1 text-xs opacity-70">{props.value.role}</label>
        <div class="join w-full border border-base-300 rounded-lg overflow-hidden">
          <div class="join-item bg-base-200 flex items-center px-3">
            <TypeIcon type={props.value.type} />
          </div>
          <input
            type="text"
            placeholder={"Enter Trekkers name..."}
            class="input input-bordered join-item w-full"
            value={query.value}
            onInput$={(e) => (query.value = (e.target as HTMLInputElement).value)}
            onFocus$={() => (isFocused.value = true)}
            onBlur$={() => setTimeout(() => (isFocused.value = false), 200)}
          />
        </div>
      </div>

      {isFocused.value && (
        <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full z-[100] border border-base-200 mt-1">
          {filteredList.value.length > 0 ? (
            filteredList.value.map((item) => (
              <li key={item.name}> {}
                <button
                  type="button"
                  class="flex justify-between"
                  onClick$={() => handleSelection(item)}
                >
                  <span>{item.name}</span>
                  <TypeIcon type={item.type} />
                </button>
              </li>
            ))
          ) : (
            <li class="disabled p-2 text-center text-xs">No results</li>
          )}
        </ul>
      )}
    </div>
  </>
})