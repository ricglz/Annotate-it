import { useAlert } from 'react-alert';
import { useCallback } from 'react'

type callback = (e: Error) => void;

function useOnErrorMutationAlert(): callback {
  const alert = useAlert();
  const onError = useCallback((e: any) => {
    e.forEach((e: Error) => alert.show(e.message));
  }, [alert]);

  return onError;
}

export default useOnErrorMutationAlert;
