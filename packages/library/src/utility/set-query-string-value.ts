import { setQueryStringWithoutReload } from './set-query-string-without-reload';

const setQueryStringValue = (key: string, value: string, queryString = window.location.search): void => {
  let qsUpdate: string;
  if (queryString === '') {
    qsUpdate = `?${key}=${value}`;
  } else {
    qsUpdate = queryString.concat(`&${key}=${value}`);
  }
  setQueryStringWithoutReload(qsUpdate);
};

export { setQueryStringValue };
