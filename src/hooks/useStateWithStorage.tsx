import React, { useEffect, useState } from 'react';

export default function useStateWithStorage(
  key: string
): [number, React.Dispatch<React.SetStateAction<number>>] {
  const storedValue = localStorage.getItem('accountTotal');
  const initialValue = storedValue ? JSON.parse(storedValue) : 0;

  const [state, setState] = useState<number>(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
