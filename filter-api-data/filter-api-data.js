function filterApiData(apiData, mandatoryKeys) {
  let result = [];
  apiData.forEach((entry) => {
    if (mandatoryKeys.every((key) => Object.keys(entry).includes(key))) {
      result.push(entry);
    }
  });
  return result;
}
