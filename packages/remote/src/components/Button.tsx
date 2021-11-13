import * as React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="bg-primary-200 hover:bg-primary-300 text-light font-bold py-2 px-4 rounded"
    onClick={onClick}
  >
    {label}
  </button>
);

export { Button };
