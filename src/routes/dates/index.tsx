import { component$ } from "@builder.io/qwik";
import { dates } from "~/data/dates";
import Navbar from "~/components/navbar";

export default component$(() => {
  return (
    <>
      <div class={"bg-base-200"}>
        <Navbar />
        <div class={"container mx-auto max-w-2xl p-4"}>
          <div class={"space-y-4"}>
            <div class={"collapse"}></div>
            {dates.map((data, index) => (
              <details
                key={index}
                class="bg-base-100 border-base-300 collapse border"
              >
                <summary class="collapse-title bg-base-100 text-accent font-semibold">
                  {data.name}
                </summary>
                <div key={index} class="collapse-content flex flex-col">
                  {data.activities.map((activity, index) => (
                    <div key={index} class={"flex flex-col"}>
                      <div
                        class={
                          "badge badge-lg badge-primary px-4 py-3 text-lg font-semibold"
                        }
                      >
                        {activity.location}
                      </div>
                      <div class={"mt-2 mb-4 text-lg leading-relaxed italic"}>
                        {activity.description}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});