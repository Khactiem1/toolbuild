window._apis = {
  dictionary: "http://localhost:5098/api/v1/", //Local//
  file: "http://localhost:5265/", //Local//
  // dictionary: "http://uatapicms.green24h.vn:1080/api/v1/", //UAT//
  // file: "http://uatcdn.green24h.vn:1080/", //UAT//
};
window._toasConfig = {};
window._goongConfig = {
  apiKey: "FSsHEg0CzsICAZriTYq6AOS9FUaxajlxVT6Pt03R",
  urlSearchLocation: (inputSearch, apiKey = "FSsHEg0CzsICAZriTYq6AOS9FUaxajlxVT6Pt03R") => `https://rsapi.goong.io/Geocode?api_key=${apiKey}&address=${encodeURIComponent(inputSearch)}`,
};
window._appConfig = {
  axiosTimeout: 500000, //timeout (ms)
};

