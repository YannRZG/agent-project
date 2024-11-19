// ProgressBar.jsx
export default function ProgressBar({ progress }) {
    return (
      <div className="w-4/6 bg-gray-300 rounded-full h-2">
        <div
          className="bg-yellow-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  }
  