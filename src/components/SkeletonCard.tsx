export default function SkeletonCard() {
  return (
    <div
      className="
        h-[132px]
        rounded-xl
        p-6
        bg-gradient-to-br from-gray-900 to-gray-800
        border border-gray-800
        animate-pulse
        flex flex-col justify-between
      "
    >
      <div className="h-4 w-1/3 bg-gray-700 rounded" />
      <div className="h-8 w-1/2 bg-gray-700 rounded" />
      <div className="h-4 w-1/4 bg-gray-700 rounded" />
    </div>
  );
}
