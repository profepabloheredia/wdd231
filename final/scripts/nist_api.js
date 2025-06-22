// ****** NOT IN USE*****

// select HTML elements in the document
const cveID= document.querySelector('#cveID');
const description = document.querySelector('#description');
const score = document.querySelector('#score');

// const axios = require('axios');

const API_URL = 'https://services.nvd.nist.gov/rest/json/cves/1.0';
const API_KEY = 'api_key_here'; // Optional, but increases rate limit

async function fetchTopVulnerabilities(limit = 15) {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'apiKey': API_KEY
      },
      params: {
        resultsPerPage: limit,
        sortBy: 'cvssV3Severity'
      }
    });

    const items = response.data.result.CVE_Items;
    const vulnerabilities = items.map(item => {
      const cveID = item.cve.CVE_data_meta.ID;
      const description = item.cve.description.description_data[0].value;
      const score = item.impact?.baseMetricV3?.cvssV3?.baseScore || 'N/A';
        displayResults(cveID,description,score);

      return {
        cveID,
        description,
        score
      };
    });

    console.log(vulnerabilities);
    return vulnerabilities;

  } catch (error) {
    console.error('Error fetching vulnerabilities:', error.message);
  }
}



fetchTopVulnerabilities();
