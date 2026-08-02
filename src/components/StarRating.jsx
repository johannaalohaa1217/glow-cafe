export default function StarRating({ rating = 5, max = 5 }) {
  return (
    <div className="stars" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          width="16"
          height="16"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
