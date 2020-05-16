import { useCallback, useState } from 'react'

function useToogle(initialValue = false): [boolean, (e: any) => void] {
  const [value, setValue] = useState(initialValue);
  const toogle = useCallback(() => {
    setValue(prevValue => !prevValue);
  }, []);

  return [value, toogle];
}

export default useToogle;
