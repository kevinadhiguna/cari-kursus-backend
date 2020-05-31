const axios = require('axios');
const qs = require('qs');

const BASE_URL = "http://localhost:3030/cari-kursus/query";

// headers for the HTTP request
const headers = {
  'Accept': 'application/sparql-results+json,*/*;q=0.9',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
};

exports.get = async (param) => {
  const queryData = {
    query:
      `PREFIX cl: <http://carikursus.com/ns/courselist#>

      SELECT ?c ?name ?category ?platform ?link ?desc ?feature
      WHERE
      {
        ?c     cl:name    ?name ;
              cl:category    ?category ;
              cl:platform    ?platform ;
              cl:link    ?link ;
              cl:desc    ?desc ;
        OPTIONAL {?c     cl:feature  ?feature . }
        FILTER contains(lcase(str(?name)), lcase(str("${param.name ? param.name : ''}")))
        FILTER contains(lcase(str(?category)), lcase(str("${param.category ? param.category : ''}")))
        FILTER contains(lcase(str(?platform)), lcase(str("${param.platform ? param.platform : ''}")))
      }`
  };

  try {
    const { data } = await axios(BASE_URL, {
      method: 'POST',
      headers,
      data: qs.stringify(queryData)
    });
    return data.results;
  } catch (err) {
    console.error("ERROR : " + err);
    return Promise.reject(err);
  }
}