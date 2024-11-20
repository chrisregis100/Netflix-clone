/* eslint-disable react/prop-types */
import clsx from "clsx";

function Button({ children, classname }) {
  return (
    <button
      className={clsx(
        "bg-primary-red text-lg px-4 py-2 text-primary hover:bg-secondary-red-200 rounded-md",
        classname
      )}
    >
      {children}
    </button>
  );
}

export default Button;
