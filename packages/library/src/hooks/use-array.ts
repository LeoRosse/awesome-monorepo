import * as React from "react";

const useArray = <T>(defaultArray: T[]) => {
  const [array, setArray] = React.useState<T[]>(defaultArray);
  const emptyArray: T[] = [];

  function push(element: T) {
    setArray((a) => [...a, element]);
  }

  function filter(callback: (element: T) => T[]) {
    setArray((a) => a.filter(callback));
  }

  function update(index: number, newElement: T) {
    setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1)]);
  }

  function remove(index: number) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1)]);
  }

  function clear() {
    setArray(emptyArray);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
};

export { useArray };
