import {
  EmptyCartIcon,
  EmptyWishlistIcon,
  EmptySearchIcon,
  LoadingSpinner,
} from "@components/icons";

type LottieHandlerProps = {
  type: "loading" | "error" | "success" | "empty" | "notFound";
  message?: string;
  className?: string;
};

/**
 *
 * @param type - The type of state to display
 * @param message - Optional message to show below the icon
 * @param className - Additional CSS classes
 */
const LottieHandler = ({ type, message, className }: LottieHandlerProps) => {
  const getIcon = () => {
    switch (type) {
      case "loading":
        return <LoadingSpinner width={60} height={60} />;

      case "error":
        return (
          <div
            style={{
              fontSize: "4rem",
              color: "#dc3545",
              animation: "pulse 2s ease-in-out infinite",
            }}
          >
            💥
          </div>
        );

      case "success":
        return (
          <div
            style={{
              fontSize: "4rem",
              color: "#198754",
              animation: "heartBeat 0.8s ease-in-out",
            }}
          >
            🎉
          </div>
        );

      case "empty":
        if (message?.toLowerCase().includes("cart")) {
          return <EmptyCartIcon width={150} height={150} />;
        } else if (message?.toLowerCase().includes("wishlist")) {
          return <EmptyWishlistIcon width={150} height={150} />;
        } else {
          return <EmptySearchIcon width={150} height={150} />;
        }

      case "notFound":
        return <EmptySearchIcon width={200} height={200} />;

      default:
        return (
          <div
            style={{
              fontSize: "4rem",
              color: "#6c757d",
              opacity: 0.7,
            }}
          >
            📦
          </div>
        );
    }
  };

  const getContainerStyle = () => {
    const baseStyle = {
      width: "400px",
      height: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "16px",
      transition: "all 0.3s ease",
    };

    if (type === "empty") {
      return {
        ...baseStyle,
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        border: "2px dashed #e2e8f0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      };
    }

    if (type === "error") {
      return {
        ...baseStyle,
        background: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)",
        border: "2px dashed #fecaca",
      };
    }

    if (type === "success") {
      return {
        ...baseStyle,
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
        border: "2px dashed #bbf7d0",
      };
    }

    return baseStyle;
  };

  const getMessageStyle = () => {
    const baseStyle = {
      fontSize: "18px",
      marginTop: "24px",
      fontWeight: "500" as const,
      textAlign: "center" as const,
      maxWidth: "400px",
      lineHeight: "1.5",
    };

    switch (type) {
      case "error":
        return {
          ...baseStyle,
          color: "#dc3545",
        };
      case "success":
        return {
          ...baseStyle,
          color: "#198754",
        };
      case "loading":
        return {
          ...baseStyle,
          color: "#0d6efd",
        };
      default:
        return {
          ...baseStyle,
          color: "#6c757d",
        };
    }
  };

  return (
    <div className={`d-flex flex-column align-items-center ${className || ""}`}>
      <div style={getContainerStyle()}>{getIcon()}</div>

      {message && <h3 style={getMessageStyle()}>{message}</h3>}
    </div>
  );
};

export default LottieHandler;
