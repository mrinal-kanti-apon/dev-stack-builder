import type { Technology } from "../type";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
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
          disabled={isAdded}
          onClick={() => onAdd(technology)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            isAdded
              ? "cursor-not-allowed bg-slate-200 text-slate-500"
              : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
};

export default TechnologyCard;