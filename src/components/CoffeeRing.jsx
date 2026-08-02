export default function CoffeeRing({ className = "" }) {
  return (
    <div className={`ring-divider ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="24" rx="21" ry="17" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
        <ellipse cx="24" cy="24" rx="15" ry="12" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
        <ellipse cx="26" cy="23" rx="8" ry="6.5" stroke="currentColor" strokeWidth="1.4" opacity="0.9" />
      </svg>
    </div>
  );
}
