export default function SkeletonChart() {
  return (
    <div
      className="
        h-[360px]
        rounded-xl
        bg-gradient-to-br from-gray-900 to-gray-800
        border border-gray-800
        p-6
        animate-pulse
        flex flex-col
      "
    >
      <div className="h-4 w-1/4 bg-gray-700 rounded mb-4" />
      <div className="flex-1 bg-gray-700/30 rounded-lg" />
    </div>
  );
}
