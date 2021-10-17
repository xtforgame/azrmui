import { useState, useCallback } from 'react';

export default () => {
  const [, updateState] = useState<any>({});
  return useCallback(() => updateState({}), []);
};
