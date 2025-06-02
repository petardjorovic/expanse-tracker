import { useEffect, useRef } from "react";
import { type Color } from "../lib/types";

// const convertToArray = <T,>(value: T):T[] => {
//   return [value]
// }

function convertToArray<T>(value: T): T[] {
  return [value];
}

convertToArray("Hello");
convertToArray(5);

type User = {
  sessionId: string;
  name: string;
};

type Guest = Omit<User, "name">;

const buttonTextOptions = [
  "Click me!",
  "Click me again!",
  "Click me one more time",
] as const; //! ovako postaje readonly

type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};

export default function Button<T>({
  countValue,
  countHistory,
}: ButtonProps<T>) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousButtonColor = localStorage.getItem("buttonColor") as Color;
  }, []);

  useEffect(() => {
    fetch("someUrl")
      .then((response) => response.json())
      .then((data: unknown) => {
        // validation with zod schema.parse
      });
  }, []);

  return (
    <button
      ref={btnRef}
      className="bg-blue-500 text-white rounded px-4 py-2 mt-5"
    >
      {buttonTextOptions.map((option) => option)}
    </button>
  );
}
