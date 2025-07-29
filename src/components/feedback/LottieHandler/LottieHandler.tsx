type LottieHandlerProps = {
  type: "loading" | "error" | "success" | "empty" | "notFound";
  message?: string;
  className?: string;
};

const LottieHandler = ({ type, message, className }: LottieHandlerProps) => {
  const getIcon = () => {
    switch (type) {
      case "loading":
        return "⏳";
      case "error":
        return "❌";
      case "success":
        return "✅";
      case "empty":
        return "📭";
      case "notFound":
        return "🔍";
      default:
        return "📦";
    }
  };

  const messageStyle =
    type === "error"
      ? { fontSize: "19px", color: "red" }
      : { fontSize: "19px", marginTop: "30px" };

  return (
    <div className={`d-flex flex-column align-items-center ${className || ""}`}>
      <div
        style={{
          width: "400px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "6rem",
        }}
      >
        {getIcon()}
      </div>
      {message && <h3 style={messageStyle}>{message}</h3>}
    </div>
  );
};

export default LottieHandler;
