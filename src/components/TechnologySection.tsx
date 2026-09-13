import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../type";
import StackSidebar from "./StackSidebar";
import TechnologyCard from "./TechnologyCard";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies-data.json");

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
    const technology = selectedTechnologies.find((item) => item.id === id);

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
            <span className="brand-gradient-text">Perfect Stack</span>
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded(technology.id)}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            {/* Your Stack */}
            <StackSidebar
              selectedTechnologies={selectedTechnologies}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologySection;
