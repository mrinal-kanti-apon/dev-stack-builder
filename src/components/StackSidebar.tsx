import type { Technology } from "../type";

type StackSidebarProps = {
  selectedTechnologies: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
};

const StackSidebar = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
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
            onClick={onRemoveAll}
            className="text-xs font-bold text-red-500 transition hover:text-red-700"
          >
            Remove All
          </button>
        )}
      </div>

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
                onClick={() => onRemove(technology.id)}
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
  );
};

export default StackSidebar;