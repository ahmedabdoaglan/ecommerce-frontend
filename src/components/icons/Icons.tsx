import React from "react";
import "./animations.css";

interface IconProps {
  title?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const WishlistIcon: React.FC<IconProps> = ({
  title,
  className,
  width = 28,
  height = 28,
}) => (
  <svg
    fill="none"
    stroke="#e91e63"
    strokeWidth={2}
    width={width}
    height={height}
    className={`heart-icon soft-shadow ${className || ""}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title && <title>{title}</title>}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    />
  </svg>
);

export const CartIcon: React.FC<IconProps> = ({
  title,
  className,
  width = 28,
  height = 28,
}) => (
  <svg
    fill="none"
    stroke="#2563eb"
    strokeWidth={2}
    width={width}
    height={height}
    className={`cart-icon soft-shadow ${className || ""}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title && <title>{title}</title>}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h6a2 2 0 002-2v-4m-5 9a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"
    />
  </svg>
);

export const LikeIcon: React.FC<IconProps> = ({
  title,
  className,
  width = 24,
  height = 24,
}) => (
  <svg
    fill="none"
    stroke="#9ca3af"
    strokeWidth={2}
    width={width}
    height={height}
    className={`heart-icon ${className || ""}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transition: "all 0.2s ease" }}
  >
    {title && <title>{title}</title>}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    />
  </svg>
);

export const LikeFillIcon: React.FC<IconProps> = ({
  title,
  className,
  width = 24,
  height = 24,
}) => (
  <svg
    fill="#dc2626"
    stroke="#dc2626"
    strokeWidth={1}
    width={width}
    height={height}
    className={`heart-filled ${className || ""}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transition: "all 0.2s ease",
      filter: "drop-shadow(0 2px 8px rgba(220, 38, 38, 0.4))",
    }}
  >
    {title && <title>{title}</title>}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    />
  </svg>
);

export const EmptyCartIcon: React.FC<IconProps> = ({
  title,
  className,
  width = 120,
  height = 120,
}) => (
  <svg
    fill="none"
    stroke="#64748b"
    strokeWidth={1.5}
    width={width}
    height={height}
    className={`empty-icon ${className || ""}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title && <title>{title}</title>}
    <defs>
      <linearGradient id="cartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f1f5f9" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    {/* Main cart structure */}
    <circle cx="9" cy="21" r="1" fill="#94a3b8" />
    <circle cx="20" cy="21" r="1" fill="#94a3b8" />
    <path
      d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      stroke="#64748b"
      strokeWidth={2}
    />
    <path d="M12 12V8" strokeLinecap="round" stroke="#cbd5e1" />
    <path d="M10 10h4" strokeLinecap="round" stroke="#cbd5e1" />
  </svg>
);

export const EmptyWishlistIcon: React.FC<IconProps> = ({
  title,
  className,
  width = 120,
  height = 120,
}) => (
  <svg
    fill="none"
    strokeWidth={1.5}
    width={width}
    height={height}
    className={`empty-icon ${className || ""}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title && <title>{title}</title>}
    <defs>
      <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fce7f3" />
        <stop offset="50%" stopColor="#f3e8ff" />
        <stop offset="100%" stopColor="#ede9fe" />
      </linearGradient>
    </defs>
    <path
      fill="url(#heartGradient)"
      stroke="#e879f9"
      strokeWidth={2}
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    />
    <path d="M12 12V8" stroke="#d946ef" strokeLinecap="round" strokeWidth={2} />
    <path d="M10 10h4" stroke="#d946ef" strokeLinecap="round" strokeWidth={2} />
  </svg>
);

export const EmptySearchIcon: React.FC<IconProps> = ({
  title,
  className,
  width = 120,
  height = 120,
}) => (
  <svg
    fill="none"
    stroke="#6b7280"
    strokeWidth={2}
    width={width}
    height={height}
    className={`empty-icon ${className || ""}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title && <title>{title}</title>}
    <circle
      cx="11"
      cy="11"
      r="8"
      stroke="#e5e7eb"
      strokeWidth={3}
      fill="#f9fafb"
    />
    <path
      d="M21 21l-4.35-4.35"
      stroke="#9ca3af"
      strokeLinecap="round"
      strokeWidth={3}
    />
    <circle cx="11" cy="11" r="3" fill="#e5e7eb" />
  </svg>
);

export const LoadingSpinner: React.FC<IconProps> = ({
  title,
  className,
  width = 40,
  height = 40,
}) => (
  <div
    className={`spinner-border text-info ${className || ""}`}
    role="status"
    style={{ width: `${width}px`, height: `${height}px` }}
  >
    <span className="visually-hidden">{title || "Loading..."}</span>
  </div>
);
