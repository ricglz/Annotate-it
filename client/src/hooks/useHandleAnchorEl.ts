import { useState, useCallback } from 'react';

type AnchorEl = HTMLElement | null;
type AnchorEvent = React.MouseEvent<HTMLElement>;

function useHandleAnchorEl() : [
  AnchorEl,
  (event: AnchorEvent) => void,
  () => void,
] {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onOpen = useCallback((event: AnchorEvent) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const onClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  return [anchorEl, onOpen, onClose];
}

export default useHandleAnchorEl;
