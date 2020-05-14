import { useState, useCallback } from 'react'

type useTextFieldCallback = [string, (e: React.ChangeEvent<HTMLTextAreaElement>) => void];

function useTextField(initialValue: string): useTextFieldCallback {
  const [text, setText] = useState(initialValue);
  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }, []);
  return [text, onChange];
}

export default useTextField;
