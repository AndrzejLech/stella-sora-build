import { $, component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();

  const navigateToDates = $(() => {
    nav("/dates")
  })

  const navigateToBuilds = $(() => {
    nav("/")
  })

  return <>
    <div class={"navbar bg-base-100 shadow-sm"}>
      <a class={"btn btn-ghost text-xl"} href={"#"}>
        Stella Sora Builds
      </a>
      <button class={"btn btn-primary m-2"} onClick$={navigateToBuilds}>Builds</button>
      <button class={"btn btn-secondary m-2"} onClick$={navigateToDates}>Dates</button>
    </div>
  </>
})