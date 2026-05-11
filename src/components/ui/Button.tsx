type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: React.ReactNode;
  variant?: string;
  full?: boolean;
  onClick?: () => void;
};

const Button = ({
  type,
  title,
  icon,
  variant = "",
  full,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-3 rounded-full border transition-all duration-300 ${variant} ${
        full ? "w-full" : ""
      }`}
    >
      {icon && icon}

      <span className="font-medium whitespace-nowrap">{title}</span>
    </button>
  );
};

export default Button;