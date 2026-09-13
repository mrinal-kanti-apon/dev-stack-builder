import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../type";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/public/data/technologies-data.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

const handleAddToStack = (technology: Technology) => {
  const alreadyAdded = selectedTechnologies.some(
    (item) => item.id === technology.id,
  );

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack.`);
    return;
  }

  setSelectedTechnologies([...selectedTechnologies, technology]);

  toast.success(`${technology.name} added to your stack.`);
};

const handleRemoveFromStack = (id: number) => {
  const technology = selectedTechnologies.find(
    (item) => item.id === id,
  );

  setSelectedTechnologies(
    selectedTechnologies.filter((item) => item.id !== id),
  );

  if (technology) {
    toast.info(`${technology.name} removed from your stack.`);
  }
};

const handleRemoveAll = () => {
  if (selectedTechnologies.length === 0) {
    return;
  }

  setSelectedTechnologies([]);

  toast.info("All technologies removed from your stack.");
};

const isAdded = (id: number) => {
  return selectedTechnologies.some((item) => item.id === id);
};

  return (
    <section
      id="technologies"
      className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
            Developer Technologies
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Build Your{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Perfect Stack
            </span>
          </h2>

          <p className="mt-4 text-slate-600">
            Explore modern technologies and choose the tools that match your
            development journey.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-60 items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <span className="loading loading-spinner loading-lg text-orange-500" />
              <p className="text-sm font-medium text-slate-500">
                Loading technologies...
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mx-auto max-w-lg rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="font-semibold text-red-600">{error}</p>
          </div>
        )}

        {/* Main content */}
        {!loading && !error && (
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            {/* Technology grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {technologies.map((technology) => (
                <article
                  key={technology.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-3">
                      <img
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                      {technology.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {technology.name}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
                    {technology.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {technology.category}
                    </span>

                    <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
                      {technology.difficulty}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>

                      <span className="text-sm font-semibold text-slate-700">
                        {technology.rating}
                      </span>
                    </div>

                    <button
                      type="button"
                      disabled={isAdded(technology.id)}
                      onClick={() => handleAddToStack(technology)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        isAdded(technology.id)
                          ? "cursor-not-allowed bg-slate-200 text-slate-500"
                          : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg"
                      }`}
                    >
                      {isAdded(technology.id)
                        ? "✓ Added to Stack"
                        : "Add to Stack"}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Your Stack */}
            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Your Stack
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {selectedTechnologies.length} Technology
                    {selectedTechnologies.length !== 1 ? "ies" : "y"} Selected
                  </p>
                </div>

                {selectedTechnologies.length > 0 && (
                  <button
                    type="button"
                    onClick={handleRemoveAll}
                    className="text-xs font-bold text-red-500 transition hover:text-red-700"
                  >
                    Remove All
                  </button>
                )}
              </div>

              {/* Empty state */}
              {selectedTechnologies.length === 0 && (
                <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                    +
                  </div>

                  <p className="mt-4 font-semibold text-slate-700">
                    Your Stack is empty
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Add technologies from the list to build your stack.
                  </p>
                </div>
              )}

              {/* Selected items */}
              {selectedTechnologies.length > 0 && (
                <div className="mt-6 space-y-3">
                  {selectedTechnologies.map((technology) => (
                    <div
                      key={technology.id}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 p-2">
                        <img
                          src={technology.icon}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-slate-900">
                          {technology.name}
                        </p>

                        <p className="text-xs text-slate-500">
                          {technology.category}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveFromStack(technology.id)}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                        aria-label={`Remove ${technology.name}`}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologySection;