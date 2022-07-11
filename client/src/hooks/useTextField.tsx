import { useState, useCallback, ChangeEvent } from 'react';

type useTextFieldCallback = [
  string,
  (e: ChangeEvent<HTMLTextAreaElement>) => void,
];

function useTextField(initialValue: string = ''): useTextFieldCallback {
  const [text, setText] = useState(initialValue);
  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }, []);
  return [text, onChange];
}

export default useTextField;
