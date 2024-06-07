import style from "@/app/styles/button.module.scss";

interface ButtonProps {
  href?: string;
  title?: string;
  className?: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const buttonClassName = `${style.button} ${style[className] || ""}`;

  return (
    <>
      {rest.href ? (
        <a {...rest} className={buttonClassName}>
          {children}
        </a>
      ) : (
        <button {...rest} className={buttonClassName}>
          {children}
        </button>
      )}
    </>
  );
}
