import * as React from 'react';
import { getQueryStringValue, setQueryStringValue } from '../utility';

const useQueryString = <T>(key: string, initialValue: T) => {
  const [value, setValue] = React.useState<string>(getQueryStringValue(key) || JSON.stringify(initialValue));
  const onSetValue = React.useCallback<(newValue: T) => void>(
    (newValue) => {
      setValue(JSON.stringify(newValue));
      setQueryStringValue(key, JSON.stringify(newValue));
    },
    [key],
  );

  return [value, onSetValue];
};

export default useQueryString;
