const setQueryStringWithoutReload = (qsValue: string): void => {
  const newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + qsValue;
  window.history.pushState({ path: newUrl }, '', newUrl);
};

export { setQueryStringWithoutReload };
