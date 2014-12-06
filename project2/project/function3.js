// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.

/**
* findAllProperties is a function that recursively iterates over
* a given object and returns the conten of all properties of
* this object that contain the given propertyName
* propertyName does not have to be the full property name
* but can be a substring. The function returns an array with
* all found content. If nothing is found an empty array is returned.
*/

function findAllProperties(jsObj, propertyName) {
    // variable definitions
    var _ruleList = [];
    // Iterate over the properties of the object
    for (var key in jsObj) {
        // Check for desired property
        //console.log(key, propertyName, key.indexOf(propertyName));
        if (key.indexOf(propertyName) > -1) {
            _ruleList.push(jsObj[key]);
        }
        // The property is not propertyName but
        // could contain it so recursively
        // call the function if to look for it
        // one level beyond
        else if (typeof jsObj[key] === 'object') {
            var _result = findAllProperties(jsObj[key],propertyName);
            // only add to ruleList if result is not empty
            if (_result.length !== 0) {
                _ruleList = _ruleList.concat(_result);
            }
        }
    }
    // return array of property contents or empty array if nothing is found
    return _ruleList;
}
/**
* ruleList is a function that takes an object
* and returns all found content of the property
* PROPERTY_NAME in an array of strings.
* PROPERTY_NAME must not contain any other properties
*/

function ruleList(results) {
    // constants and variables
    // change PROPERTY_NAME if you are looking for a different property
    PROPERTY_NAME = 'localizedRuleName';
    return findAllProperties(results, PROPERTY_NAME);
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.

/**
* totalBytes iterates over all properties of the pageStats
* property and sums up the content of those containing
* the KEYWORD 'Bytes'
*/

function totalBytes(results) {
    // constants and variable definitions
    KEYWORD = 'Bytes';
    // get array of all contents of properties containing KEYWORD in pageStats
    var _byteList = findAllProperties(results.pageStats, KEYWORD);
    // sum the array up and return the result
    for (var i = 0, _totalBytes = 0; i < _byteList.length; _totalBytes += _byteList[i++] * 1);
    return _totalBytes;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));