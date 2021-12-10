const getQueryStringValue = (key: string, queryString = window.location.search) => {
  const values = queryString
    .slice(1)
    .split('&')
    .reduce((acc, curr) => {
      const currSplitted = curr.split('=');
      if (currSplitted[0] === key && currSplitted[1]) acc = currSplitted[1];
      return acc;
    }, '');
  return values;
};

export { getQueryStringValue };
