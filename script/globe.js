// Helper function to return flag image URL for a given country name.
function getFlagUrl(countryName) {
  const mapping = {
    "United States of America": "us",
    "Brazil": "br",
    "Mexico": "mx",
    "Canada": "ca",
    "Russia": "ru",
    "Argentina": "ar",
    "Bolivia": "bo",
    "Colombia": "co",
    "Paraguay": "py",
    "Indonesia": "id",
    "South Africa": "za",
    "Papua New Guinea": "pg",
    "Germany": "de",
    "China": "cn",
    "Chile": "cl",
    "Australia": "au",
    "France": "fr",
    "United Kingdom": "gb",
    "Venezuela": "ve",
    "Ecuador": "ec",
    "India": "in",
    "Iran": "ir",
    "Guatemala": "gt",
    "Philippines": "ph",
    "Sweden": "se",
    "Saudi Arabia": "sa",
    "Democratic Republic of the Congo": "cd",
    "Kenya": "ke",
    "Zimbabwe": "zw",
    "Peru": "pe",
    "Ukraine": "ua",
    "Angola": "ao",
    "Japan": "jp",
    "United Republic of Tanzania": "tz",
    "Costa Rica": "cr",
    "Algeria": "dz",
    "Pakistan": "pk",
    "Spain": "es",
    "Finland": "fi",
    "Nicaragua": "ni",
    "Libya": "ly",
    "Cuba": "cu",
    "Uruguay": "uy",
    "Oman": "om",
    "Italy": "it",
    "Czech Republic": "cz",
    "Poland": "pl",
    "New Zealand": "nz",
    "Guyana": "gy",
    "Panama": "pa",
    "Malaysia": "my",
    "Namibia": "na",
    "South Korea": "kr",
    "Honduras": "hn",
    "Iraq": "iq",
    "Thailand": "th",
    "Mozambique": "mz",
    "Turkey": "tr",
    "Iceland": "is",
    "Kazakhstan": "kz",
    "Norway": "no",
    "Syria": "sy",
    "Zambia": "zm",
    "South Sudan": "ss",
    "Egypt": "eg",
    "Madagascar": "mg",
    "North Korea": "kp",
    "Denmark": "dk",
    "Greece": "gr",
    "Botswana": "bw",
    "Sudan": "sd",
    "Croatia": "hr",
    "Bulgaria": "bg",
    "El Salvador": "sv",
    "Belarus": "by",
    "Myanmar": "mm",
    "Portugal": "pt",
    "Switzerland": "ch",
    "The Bahamas": "bs",
    "Lithuania": "lt",
    "Somalia": "so",
    "Chad": "td",
    "Ethiopia": "et",
    "Yemen": "ye",
    "Morocco": "ma",
    "Suriname": "sr",
    "French Polynesia": "pf",
    "Nigeria": "ng",
    "Uzbekistan": "uz",
    "Afghanistan": "af",
    "Austria": "at",
    "Belize": "bz",
    "Israel": "il",
    "Nepal": "np",
    "Uganda": "ug",
    "Romania": "ro",
    "Vietnam": "vn",
    "Gabon": "ga",
    "Mongolia": "mn",
    "United Arab Emirates": "ae",
    "Latvia": "lv",
    "Belgium": "be",
    "Hungary": "hu",
    "Laos": "la",
    "Ireland": "ie",
    "Central African Republic": "cf",
    "Azerbaijan": "az",
    "Taiwan": "tw",
    "Dominican Republic": "do",
    "Solomon Islands": "sb",
    "Slovakia": "sk",
    "Cameroon": "cm",
    "Malawi": "mw",
    "Vanuatu": "vu",
    "Mauritania": "mr",
    "Niger": "ne",
    "Liberia": "lr",
    "Netherlands": "nl",
    "Puerto Rico": "pr",
    "Tunisia": "tn",
    "Fiji": "fj",
    "Jamaica": "jm",
    "Kyrgyzstan": "kg",
    "Republic of the Congo": "cg",
    "Ivory Coast": "ci",
    "Republic of Serbia": "rs",
    "Turkmenistan": "tm",
    "Mali": "ml",
    "New Caledonia": "nc",
    "Bosnia and Herzegovina": "ba",
    "Lesotho": "ls",
    "Tajikistan": "tj",
    "Antarctica": "aq",
    "Burkina Faso": "bf",
    "Georgia": "ge",
    "Senegal": "sn",
    "Kiribati": "ki",
    "Sri Lanka": "lk",
    "Bangladesh": "bd",
    "Estonia": "ee",
    "Jordan": "jo",
    "Cambodia": "kh",
    "Guinea": "gn",
    "Slovenia": "si",
    "Northern Cyprus": "cy",
    "Greenland": "gl",
    "Marshall Islands": "mh",
    "Swaziland": "sz",
    "Haiti": "ht",
    "Seychelles": "sc",
    "Djibouti": "dj",
    "Eritrea": "er",
    "Armenia": "am",
    "Cook Islands": "ck",
    "Ghana": "gh",
    "Macedonia": "mk",
    "Cape Verde": "cv",
    "Maldives": "mv",
    "Singapore": "sg",
    "Guinea Bissau": "gw",
    "Lebanon": "lb",
    "Sierra Leone": "sl",
    "Togo": "tg",
    "Turks and Caicos Islands": "tc",
    "Burundi": "bi",
    "Equatorial Guinea": "gq",
    "Falkland Islands": "fk",
    "Kuwait": "kw",
    "Moldova": "md",
    "Rwanda": "rw",
    "Benin": "bj",
    "East Timor": "tl",
    "Kosovo": "xk",
    "Micronesia": "fm",
    "Qatar": "qa",
    "Saint Vincent and the Grenadines": "vc",
    "Tonga": "to",
    "Western Sahara": "eh",
    "Guam": "gu",
    "Mauritius": "mu",
    "Montenegro": "me",
    "Northern Mariana Islands": "mp",
    "Albania": "al",
    "Bahrain": "bh",
    "British Virgin Islands": "vg",
    "Comoros": "km",
    "French Southern and Antarctic Lands": "tf",
    "Samoa": "ws",
    "Spratly Islands": "xx",
    "Svalbard": "sj",
    "Trinidad and Tobago": "tt",
    "American Samoa": "as",
    "Antigua and Barbuda": "ag",
    "Cayman Islands": "ky",
    "Grenada": "gd",
    "Palau": "pw",
    "Palestinian Territories": "ps",
    "Anguilla": "ai",
    "Bhutan": "bt",
    "Dominica": "dm",
    "Guernsey": "gg",
    "Hong Kong": "hk",
    "Luxembourg": "lu",
    "Saint Kitts and Nevis": "kn",
    "Saint Lucia": "lc",
    "Saint Pierre and Miquelon": "pm",
    "São Tomé and Príncipe": "st",
    "Virgin Islands of the U.S.": "vi",
    "Wallis and Futuna": "wf",
    "Aruba": "aw",
    "Barbados": "bb",
    "Bermuda": "bm",
    "British Indian Ocean Territory": "io",
    "Brunei": "bn",
    "Faroe Islands": "fo",
    "Gambia": "gm",
    "Gibraltar": "gi",
    "Jan Mayen": "sj",
    "Jersey": "je",
    "Macau": "mo",
    "Malta": "mt",
    "Isle of Man": "im",
    "Montserrat": "ms",
    "Nauru": "nr",
    "Niue": "nu",
    "Paracel Islands": "xx",
    "Saint Barthelemy": "bl",
    "Saint Helena, Ascension and Tristan da Cunha": "sh",
    "Saint Martin": "mf",
    "Sint Maarten": "sx",
    "Tuvalu": "tv",
    "Wake Island": "xx"
  };
  const code = mapping[countryName] || 'xx';
  return `https://flagcdn.com/32x24/${code}.png`;
}

// Build a master mapping from country to an array of product details.
var countryProducts = {};
function addProduct(country, product, status) {
  if (!countryProducts[country]) {
    countryProducts[country] = [];
  }
  countryProducts[country].push({ product: product, status: status });
}

// --- Define product line data as arrays ---

// CliniQuant
var cliniQuant_reg = ["Philippines", "Malaysia", "Myanmar", "Ukraine", "Kazakhstan", "Mexico", "El Salvador", "Nicaragua", "Tanzania", "Vietnam", "Indonesia", "Turkey", "Brazil", "Colombia", "Kenya", "South Africa"];
var cliniQuant_under = ["Sri Lanka", "Iraq", "Uzbekistan", "Honduras", "Ecuador", "Russia", "Egypt"];
cliniQuant_reg.forEach(function(c){ addProduct(c, "CliniQuant", "Registered"); });
cliniQuant_under.forEach(function(c){ addProduct(c, "CliniQuant", "Under Registration"); });

// CliniQuant micro
var cliniQuantMicro_reg = ["Malaysia", "Kazakhstan", "Mexico", "Ethiopia", "Tanzania", "Vietnam", "Turkey", "Colombia", "Kenya"];
var cliniQuantMicro_under = ["Iraq"];
cliniQuantMicro_reg.forEach(function(c){ addProduct(c, "CliniQuant micro", "Registered"); });
cliniQuantMicro_under.forEach(function(c){ addProduct(c, "CliniQuant micro", "Under Registration"); });

// AutoQuant100i
var autoQuant100i_reg = ["Philippines", "Myanmar", "Oman", "Ukraine", "Mexico", "Tanzania", "Vietnam", "Brazil", "Kenya"];
var autoQuant100i_under = ["Sri Lanka", "Iraq", "Uzbekistan", "Honduras", "Ecuador"];
autoQuant100i_reg.forEach(function(c){ addProduct(c, "AutoQuant100i", "Registered"); });
autoQuant100i_under.forEach(function(c){ addProduct(c, "AutoQuant100i", "Under Registration"); });

// AutoQuant 200i
var autoQuant200i_reg = ["Philippines", "Malaysia", "Myanmar", "Oman", "Saudi Arabia", "Ukraine", "Kazakhstan", "Mexico", "Nicaragua", "Honduras", "Ethiopia", "Tanzania", "Vietnam", "Indonesia", "Turkey", "Brazil", "Colombia", "Kenya", "South Africa"];
var autoQuant200i_under = ["Sri Lanka", "Iraq", "Uzbekistan", "Ecuador", "Russia"];
autoQuant200i_reg.forEach(function(c){ addProduct(c, "AutoQuant 200i", "Registered"); });
autoQuant200i_under.forEach(function(c){ addProduct(c, "AutoQuant 200i", "Under Registration"); });

// CelQuant 3i
var celQuant3i_reg = ["Philippines", "Malaysia", "Iran", "Saudi Arabia", "Ukraine", "Kazakhstan", "Mexico", "Indonesia", "Brazil", "Colombia", "Kenya", "South Africa"];
var celQuant3i_under = ["Iraq"];
celQuant3i_reg.forEach(function(c){ addProduct(c, "CelQuant 3i", "Registered"); });
celQuant3i_under.forEach(function(c){ addProduct(c, "CelQuant 3i", "Under Registration"); });

// CelQuant 360
var celQuant360_reg = ["Philippines", "Oman", "Ukraine", "Kazakhstan", "Mexico", "Indonesia", "Brazil"];
var celQuant360_under = ["Sri Lanka", "Iraq"];
celQuant360_reg.forEach(function(c){ addProduct(c, "CelQuant 360", "Registered"); });
celQuant360_under.forEach(function(c){ addProduct(c, "CelQuant 360", "Under Registration"); });

// EIAWash
var eiaWash_reg = ["Philippines", "Malaysia", "Syria", "Ukraine", "Kazakhstan", "Vietnam", "Indonesia", "Turkey", "Brazil", "Colombia", "South Africa"];
var eiaWash_under = ["Sri Lanka", "Iraq", "Uzbekistan", "Ecuador"];
eiaWash_reg.forEach(function(c){ addProduct(c, "EIAWash", "Registered"); });
eiaWash_under.forEach(function(c){ addProduct(c, "EIAWash", "Under Registration"); });

// EIAQuant
var eiaQuant_reg = ["Philippines", "Malaysia", "Syria", "Ukraine", "Kazakhstan", "Vietnam", "Indonesia", "Brazil", "Colombia", "South Africa"];
var eiaQuant_under = ["Sri Lanka", "Iraq", "Uzbekistan", "Ecuador"];
eiaQuant_reg.forEach(function(c){ addProduct(c, "EIAQuant", "Registered"); });
eiaQuant_under.forEach(function(c){ addProduct(c, "EIAQuant", "Under Registration"); });

// ClotQuant 2
var clotQuant2_reg = ["Philippines", "Malaysia", "Ukraine", "Kazakhstan", "Mexico", "Ethiopia", "Tanzania", "Vietnam", "Indonesia", "Turkey", "Brazil", "Colombia", "Kenya", "South Africa"];
var clotQuant2_under = ["Sri Lanka", "Iraq", "El Salvador", "Ecuador"];
clotQuant2_reg.forEach(function(c){ addProduct(c, "ClotQuant 2", "Registered"); });
clotQuant2_under.forEach(function(c){ addProduct(c, "ClotQuant 2", "Under Registration"); });

// ClotQuant 4
var clotQuant4_reg = ["Philippines", "Malaysia", "Ukraine", "Kazakhstan", "Mexico", "Ethiopia", "Tanzania", "Vietnam", "Indonesia", "Turkey", "Brazil", "Colombia", "Kenya", "South Africa"];
var clotQuant4_under = ["Sri Lanka", "Iraq", "El Salvador", "Ecuador"];
clotQuant4_reg.forEach(function(c){ addProduct(c, "ClotQuant 4", "Registered"); });
clotQuant4_under.forEach(function(c){ addProduct(c, "ClotQuant 4", "Under Registration"); });

// Build the Highcharts map data from countryProducts.
var mapData = [];
for (var country in countryProducts) {
  var products = countryProducts[country];
  // Use blue if any product is Registered; otherwise use orange.
  var hasRegistered = products.some(function(p){ return p.status === "Registered"; });
  var color = hasRegistered ? "#1f78b4" : "#f57c00";
  mapData.push({
    name: country,
    color: color,
    products: products,
    flag: getFlagUrl(country)
  });
}

// Function to generate and display the product table when a country is clicked.
function generateProductTable(point) {
  var products = point.products;
  if (!products || products.length === 0) {
    document.getElementById('productTableContainer').innerHTML = "<p>No product data available for " + point.name + ".</p>";
    return;
  }
  var html = '<h3><img src="' + (point.flag || getFlagUrl(point.name)) +
             '" style="vertical-align:middle; margin-right:5px;" /> ' +
             point.name + ' - Product Details</h3>';
  html += '<table>';
  html += '<thead><tr><th>Sr. No.</th><th>Product Name</th><th>Reg. Status</th></tr></thead>';
  html += '<tbody>';
  products.forEach(function(prod, index) {
    html += '<tr><td>' + (index + 1) + '</td><td>' + prod.product + '</td><td>' + prod.status + '</td></tr>';
  });
  html += '</tbody></table>';
  document.getElementById('productTableContainer').innerHTML = html;
}

// Create a graticule (grid lines) for the map.
const getGraticule = () => {
  const lines = [];
  // Meridians
  for (let x = -180; x <= 180; x += 15) {
    lines.push({
      geometry: {
        type: 'LineString',
        coordinates: (x % 90 === 0) ? [[x, -90], [x, 0], [x, 90]] : [[x, -80], [x, 80]]
      }
    });
  }
  // Latitudes
  for (let y = -90; y <= 90; y += 10) {
    const coordinates = [];
    for (let x = -180; x <= 180; x += 5) {
      coordinates.push([x, y]);
    }
    lines.push({
      geometry: {
        type: 'LineString',
        coordinates: coordinates
      },
      lineWidth: (y === 0) ? 2 : undefined
    });
  }
  return lines;
};

// Initialize the Highcharts map (Globe) in the #globe-container.
Highcharts.getJSON('https://code.highcharts.com/mapdata/custom/world.topo.json', topology => {
  const chart = Highcharts.mapChart('globe-container', {
    chart: {
      map: topology,
      backgroundColor: '#121212'
    },
    title: {
      text: 'CliniQuant Product Registration Data',
      floating: true,
      align: 'left',
      x: 20,
      y: 50,
      style: { textOutline: '2px white' }
    },
    legend: { enabled: false },
    mapNavigation: {
      enabled: true,
      enableDoubleClickZoomTo: true,
      buttonOptions: { verticalAlign: 'bottom' }
    },
    mapView: {
      maxZoom: 30,
      projection: { name: 'Orthographic', rotation: [60, -30] }
    },
    colorAxis: {
      min: 0,
      minColor: '#d3d3d3',
      maxColor: '#d3d3d3'
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        if (this.point.products && this.point.products.length > 0) {
          var registeredCount = this.point.products.filter(function(prod) {
            return prod.status === "Registered";
          }).length;
          var underCount = this.point.products.filter(function(prod) {
            return prod.status === "Under Registration";
          }).length;
          return `
            <div style="min-width:250px; padding:15px; background-color:${this.point.color}; border-radius:8px; color:#fff;">
              <span style="font-weight:bold; font-size:16px;">
                <img src="${this.point.flag || getFlagUrl(this.point.name)}" style="vertical-align:middle; margin-right:5px;" />
                ${this.point.name}
              </span><br/>
              Registered Products: ${registeredCount}<br/>
              Under Registration: ${underCount}<br/>Click for details.
            </div>
          `;
        } else {
          return `<div style="min-width:250px; padding:15px; background-color:#555; border-radius:8px; color:#fff;">${this.point.name}: No data available</div>`;
        }
      }
    },
    // Reduced animation duration for better responsiveness.
    plotOptions: { series: { animation: { duration: 300 }, clip: false } },
    series: [{
      name: 'Graticule',
      id: 'graticule',
      type: 'mapline',
      data: getGraticule(),
      nullColor: 'rgba(0, 0, 0, 0.05)',
      accessibility: { enabled: false },
      enableMouseTracking: false
    }, {
      data: mapData,
      joinBy: 'name',
      name: 'CliniQuant Data',
      colorByPoint: true,
      borderColor: '#000',
      borderWidth: 1,
      dataLabels: { enabled: false, format: '{point.name}' },
      accessibility: { exposeAsGroupOnly: true },
      point: {
        events: {
          click: function () { generateProductTable(this); }
        }
      }
    }]
  });
  
  // Render a sea background (a circle with a radial gradient) behind the globe.
  const renderSea = () => {
    let verb = 'animate';
    if (!chart.sea) {
      chart.sea = chart.renderer
        .circle()
        .attr({
          fill: {
            radialGradient: { cx: 0.4, cy: 0.4, r: 1 },
            // Both stops set to #121212 to match the desired ocean colour
            stops: [ [0, '#121212'], [1, '#121212'] ]
          },
          zIndex: -1
        })
        .add(chart.get('graticule').group);
      verb = 'attr';
    }
    const bounds = chart.get('graticule').bounds,
          p1 = chart.mapView.projectedUnitsToPixels({ x: bounds.x1, y: bounds.y1 }),
          p2 = chart.mapView.projectedUnitsToPixels({ x: bounds.x2, y: bounds.y2 });
    chart.sea[verb]({
      cx: (p1.x + p2.x) / 2,
      cy: (p1.y + p2.y) / 2,
      r: Math.min(p2.x - p1.x, p1.y - p2.y) / 2
    });
  };
  renderSea();
  Highcharts.addEvent(chart, 'redraw', renderSea);
  
  // Auto rotation: update the globe's projection rotation every 50ms.
  setInterval(function() {
    var currentRotation = chart.mapView.projection.rotation;
    var newRotation = [currentRotation[0] + 1, currentRotation[1], currentRotation[2]];
    chart.mapView.update({ projection: { rotation: newRotation } });
  }, 50);
});