export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div
        className="w-12 h-12 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"
        aria-label="Loading"
      />
      <p className="mt-4 text-sm text-gray-600 text-center">
        Loading recycling facilities...
      </p>
    </div>
  );
}
