type KpiCardProps = {
  title: string;
  value: string;
  change: number;
};

export default function KpiCard({
  title,
  value,
  change,
}: KpiCardProps) {
  const isPositive = change >= 0;

  return (
    <div
      className="
        relative
        bg-gradient-to-br from-gray-900 to-gray-800
        rounded-xl
        p-6
        border border-gray-800
        shadow-md
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-gray-700
      "
    >

      <p className="text-sm text-gray-400">
        {title}
      </p>


      <h3 className="text-3xl font-bold mt-2 tracking-tight">
        {value}
      </h3>


      <div
        className={`mt-3 inline-flex items-center gap-1 text-sm font-medium ${
          isPositive ? "text-green-400" : "text-red-400"
        }`}
      >
        <span className="text-base">
          {isPositive ? "▲" : "▼"}
        </span>
        <span>
          {Math.abs(change)}%
        </span>
        <span className="text-gray-400 font-normal">
          vs last period
        </span>
      </div>


      <div
        className={`pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
        ${
          isPositive
            ? "hover:opacity-100 bg-green-500/5"
            : "hover:opacity-100 bg-red-500/5"
        }`}
      />
    </div>
  );
}
