function filterApiData(apiData, mandatoryKeys) {
  for (let key of mandatoryKeys) {
    apiData = apiData.filter((e) => {
      return e.hasOwnProperty(key);
    });
  }
  return apiData;
}
