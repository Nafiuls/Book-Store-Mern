// LoadingSpinner.jsx

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 w-full h-full border-4 border-solid border-t-transparent border-blue-500 rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
