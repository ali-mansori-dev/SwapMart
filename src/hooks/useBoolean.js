import { useState, useCallback } from 'react';

function useBoolean(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);

  return [state, setTrue, setFalse];
}

export default useBoolean;