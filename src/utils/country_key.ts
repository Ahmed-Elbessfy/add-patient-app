
type COUNTRY_CODE = string;

type Country = {
  code: string;
  emoji: string;
  unicode: string;
  name: string;
  title: string;
  dialCode: number;
};

export const CountryCodeList: COUNTRY_CODE[] = [
  "AD",
  "AE",
  "AF",
  "AG",
  "AI",
  "AL",
  "AM",
  "AO",
  "AR",
  "AS",
  "AT",
  "AU",
  "AW",
  "AZ",
  "BA",
  "BB",
  "BD",
  "BE",
  "BF",
  "BG",
  "BH",
  "BI",
  "BJ",
  "BL",
  "BM",
  "BN",
  "BO",
  "BR",
  "BS",
  "BT",
  "BW",
  "BY",
  "BZ",
  "CA",
  "CC",
  "CD",
  "CF",
  "CG",
  "CH",
  "CI",
  "CK",
  "CL",
  "CM",
  "CN",
  "CO",
  "CR",
  "CU",
  "CV",
  "CX",
  "CY",
  "CZ",
  "DE",
  "DJ",
  "DK",
  "DM",
  "DO",
  "DZ",
  "EC",
  "EE",
  "EG",
  "ER",
  "ES",
  "ET",
  "FI",
  "FJ",
  "FK",
  "FM",
  "FO",
  "FR",
  "GA",
  "GB",
  "GD",
  "GE",
  "GF",
  "GG",
  "GH",
  "GI",
  "GL",
  "GM",
  "GN",
  "GP",
  "GQ",
  "GR",
  "GS",
  "GT",
  "GU",
  "GW",
  "GY",
  "HK",
  "HN",
  "HR",
  "HT",
  "HU",
  "ID",
  "IE",
  "IL",
  "IM",
  "IN",
  "IO",
  "IQ",
  "IR",
  "IS",
  "IT",
  "JE",
  "JM",
  "JO",
  "JP",
  "KE",
  "KG",
  "KH",
  "KI",
  "KM",
  "KN",
  "KP",
  "KR",
  "KW",
  "KY",
  "KZ",
  "LA",
  "LB",
  "LC",
  "LI",
  "LK",
  "LR",
  "LS",
  "LT",
  "LU",
  "LV",
  "LY",
  "MA",
  "MC",
  "MD",
  "ME",
  "MF",
  "MG",
  "MH",
  "MK",
  "ML",
  "MM",
  "MN",
  "MO",
  "MP",
  "MQ",
  "MR",
  "MS",
  "MT",
  "MU",
  "MV",
  "MW",
  "MX",
  "MY",
  "MZ",
  "NA",
  "NC",
  "NE",
  "NF",
  "NG",
  "NI",
  "NL",
  "NO",
  "NP",
  "NR",
  "NU",
  "NZ",
  "OM",
  "PA",
  "PE",
  "PF",
  "PG",
  "PH",
  "PK",
  "PL",
  "PM",
  "PN",
  "PR",
  "PS",
  "PT",
  "PW",
  "PY",
  "QA",
  "RE",
  "RO",
  "RS",
  "RU",
  "RW",
  "SA",
  "SB",
  "SC",
  "SD",
  "SE",
  "SG",
  "SH",
  "SI",
  "SJ",
  "SK",
  "SL",
  "SM",
  "SN",
  "SO",
  "SR",
  "ST",
  "SV",
  "SY",
  "SZ",
  "TC",
  "TD",
  "TG",
  "TH",
  "TJ",
  "TK",
  "TL",
  "TM",
  "TN",
  "TO",
  "TR",
  "TT",
  "TV",
  "TW",
  "TZ",
  "UA",
  "UG",
  "US",
  "UY",
  "UZ",
  "VA",
  "VC",
  "VE",
  "VG",
  "VI",
  "VN",
  "VU",
  "WF",
  "WS",
  "XK",
  "YE",
  "YT",
  "ZA",
  "ZM",
  "ZW",
];

export const CountriesDetails: { [key in COUNTRY_CODE]: Country } = {
  AD: {
    code: "AD",
    emoji: "🇦🇩",
    unicode: "U+1F1E6 U+1F1E9",
    name: "Andorra",
    title: "flag for Andorra",
    dialCode: 376,
  },
  AE: {
    code: "AE",
    emoji: "🇦🇪",
    unicode: "U+1F1E6 U+1F1EA",
    name: "United Arab Emirates",
    title: "flag for United Arab Emirates",
    dialCode: 971,
  },
  AF: {
    code: "AF",
    emoji: "🇦🇫",
    unicode: "U+1F1E6 U+1F1EB",
    name: "Afghanistan",
    title: "flag for Afghanistan",
    dialCode: 93,
  },
  AG: {
    code: "AG",
    emoji: "🇦🇬",
    unicode: "U+1F1E6 U+1F1EC",
    name: "Antigua and Barbuda",
    title: "flag for Antigua and Barbuda",
    dialCode: 1268,
  },
  AI: {
    code: "AI",
    emoji: "🇦🇮",
    unicode: "U+1F1E6 U+1F1EE",
    name: "Anguilla",
    title: "flag for Anguilla",
    dialCode: 1264,
  },
  AL: {
    code: "AL",
    emoji: "🇦🇱",
    unicode: "U+1F1E6 U+1F1F1",
    name: "Albania",
    title: "flag for Albania",
    dialCode: 355,
  },
  AM: {
    code: "AM",
    emoji: "🇦🇲",
    unicode: "U+1F1E6 U+1F1F2",
    name: "Armenia",
    title: "flag for Armenia",
    dialCode: 374,
  },
  AO: {
    code: "AO",
    emoji: "🇦🇴",
    unicode: "U+1F1E6 U+1F1F4",
    name: "Angola",
    title: "flag for Angola",
    dialCode: 244,
  },
  AR: {
    code: "AR",
    emoji: "🇦🇷",
    unicode: "U+1F1E6 U+1F1F7",
    name: "Argentina",
    title: "flag for Argentina",
    dialCode: 54,
  },
  AS: {
    code: "AS",
    emoji: "🇦🇸",
    unicode: "U+1F1E6 U+1F1F8",
    name: "American Samoa",
    title: "flag for American Samoa",
    dialCode: 1684,
  },
  AT: {
    code: "AT",
    emoji: "🇦🇹",
    unicode: "U+1F1E6 U+1F1F9",
    name: "Austria",
    title: "flag for Austria",
    dialCode: 43,
  },
  AU: {
    code: "AU",
    emoji: "🇦🇺",
    unicode: "U+1F1E6 U+1F1FA",
    name: "Australia",
    title: "flag for Australia",
    dialCode: 61,
  },
  AW: {
    code: "AW",
    emoji: "🇦🇼",
    unicode: "U+1F1E6 U+1F1FC",
    name: "Aruba",
    title: "flag for Aruba",
    dialCode: 297,
  },
  AZ: {
    code: "AZ",
    emoji: "🇦🇿",
    unicode: "U+1F1E6 U+1F1FF",
    name: "Azerbaijan",
    title: "flag for Azerbaijan",
    dialCode: 994,
  },
  BA: {
    code: "BA",
    emoji: "🇧🇦",
    unicode: "U+1F1E7 U+1F1E6",
    name: "Bosnia and Herzegovina",
    title: "flag for Bosnia and Herzegovina",
    dialCode: 387,
  },
  BB: {
    code: "BB",
    emoji: "🇧🇧",
    unicode: "U+1F1E7 U+1F1E7",
    name: "Barbados",
    title: "flag for Barbados",
    dialCode: 1246,
  },
  BD: {
    code: "BD",
    emoji: "🇧🇩",
    unicode: "U+1F1E7 U+1F1E9",
    name: "Bangladesh",
    title: "flag for Bangladesh",
    dialCode: 880,
  },
  BE: {
    code: "BE",
    emoji: "🇧🇪",
    unicode: "U+1F1E7 U+1F1EA",
    name: "Belgium",
    title: "flag for Belgium",
    dialCode: 32,
  },
  BF: {
    code: "BF",
    emoji: "🇧🇫",
    unicode: "U+1F1E7 U+1F1EB",
    name: "Burkina Faso",
    title: "flag for Burkina Faso",
    dialCode: 226,
  },
  BG: {
    code: "BG",
    emoji: "🇧🇬",
    unicode: "U+1F1E7 U+1F1EC",
    name: "Bulgaria",
    title: "flag for Bulgaria",
    dialCode: 359,
  },
  BH: {
    code: "BH",
    emoji: "🇧🇭",
    unicode: "U+1F1E7 U+1F1ED",
    name: "Bahrain",
    title: "flag for Bahrain",
    dialCode: 973,
  },
  BI: {
    code: "BI",
    emoji: "🇧🇮",
    unicode: "U+1F1E7 U+1F1EE",
    name: "Burundi",
    title: "flag for Burundi",
    dialCode: 257,
  },
  BJ: {
    code: "BJ",
    emoji: "🇧🇯",
    unicode: "U+1F1E7 U+1F1EF",
    name: "Benin",
    title: "flag for Benin",
    dialCode: 229,
  },
  BL: {
    code: "BL",
    emoji: "🇧🇱",
    unicode: "U+1F1E7 U+1F1F1",
    name: "Saint Barthélemy",
    title: "flag for Saint Barthélemy",
    dialCode: 590,
  },
  BM: {
    code: "BM",
    emoji: "🇧🇲",
    unicode: "U+1F1E7 U+1F1F2",
    name: "Bermuda",
    title: "flag for Bermuda",
    dialCode: 1441,
  },
  BN: {
    code: "BN",
    emoji: "🇧🇳",
    unicode: "U+1F1E7 U+1F1F3",
    name: "Brunei Darussalam",
    title: "flag for Brunei Darussalam",
    dialCode: 673,
  },
  BO: {
    code: "BO",
    emoji: "🇧🇴",
    unicode: "U+1F1E7 U+1F1F4",
    name: "Bolivia",
    title: "flag for Bolivia",
    dialCode: 591,
  },
  BR: {
    code: "BR",
    emoji: "🇧🇷",
    unicode: "U+1F1E7 U+1F1F7",
    name: "Brazil",
    title: "flag for Brazil",
    dialCode: 55,
  },
  BS: {
    code: "BS",
    emoji: "🇧🇸",
    unicode: "U+1F1E7 U+1F1F8",
    name: "Bahamas",
    title: "flag for Bahamas",
    dialCode: 1242,
  },
  BT: {
    code: "BT",
    emoji: "🇧🇹",
    unicode: "U+1F1E7 U+1F1F9",
    name: "Bhutan",
    title: "flag for Bhutan",
    dialCode: 975,
  },
  BW: {
    code: "BW",
    emoji: "🇧🇼",
    unicode: "U+1F1E7 U+1F1FC",
    name: "Botswana",
    title: "flag for Botswana",
    dialCode: 267,
  },
  BY: {
    code: "BY",
    emoji: "🇧🇾",
    unicode: "U+1F1E7 U+1F1FE",
    name: "Belarus",
    title: "flag for Belarus",
    dialCode: 375,
  },
  BZ: {
    code: "BZ",
    emoji: "🇧🇿",
    unicode: "U+1F1E7 U+1F1FF",
    name: "Belize",
    title: "flag for Belize",
    dialCode: 501,
  },
  CA: {
    code: "CA",
    emoji: "🇨🇦",
    unicode: "U+1F1E8 U+1F1E6",
    name: "Canada",
    title: "flag for Canada",
    dialCode: 1,
  },
  CC: {
    code: "CC",
    emoji: "🇨🇨",
    unicode: "U+1F1E8 U+1F1E8",
    name: "Cocos (Keeling) Islands",
    title: "flag for Cocos (Keeling) Islands",
    dialCode: 61,
  },
  CD: {
    code: "CD",
    emoji: "🇨🇩",
    unicode: "U+1F1E8 U+1F1E9",
    name: "Congo",
    title: "flag for Congo",
    dialCode: 243,
  },
  CF: {
    code: "CF",
    emoji: "🇨🇫",
    unicode: "U+1F1E8 U+1F1EB",
    name: "Central African Republic",
    title: "flag for Central African Republic",
    dialCode: 236,
  },
  CG: {
    code: "CG",
    emoji: "🇨🇬",
    unicode: "U+1F1E8 U+1F1EC",
    name: "Congo",
    title: "flag for Congo",
    dialCode: 242,
  },
  CH: {
    code: "CH",
    emoji: "🇨🇭",
    unicode: "U+1F1E8 U+1F1ED",
    name: "Switzerland",
    title: "flag for Switzerland",
    dialCode: 41,
  },
  CI: {
    code: "CI",
    emoji: "🇨🇮",
    unicode: "U+1F1E8 U+1F1EE",
    name: "Côte D'Ivoire",
    title: "flag for Côte D'Ivoire",
    dialCode: 225,
  },
  CK: {
    code: "CK",
    emoji: "🇨🇰",
    unicode: "U+1F1E8 U+1F1F0",
    name: "Cook Islands",
    title: "flag for Cook Islands",
    dialCode: 682,
  },
  CL: {
    code: "CL",
    emoji: "🇨🇱",
    unicode: "U+1F1E8 U+1F1F1",
    name: "Chile",
    title: "flag for Chile",
    dialCode: 56,
  },
  CM: {
    code: "CM",
    emoji: "🇨🇲",
    unicode: "U+1F1E8 U+1F1F2",
    name: "Cameroon",
    title: "flag for Cameroon",
    dialCode: 237,
  },
  CN: {
    code: "CN",
    emoji: "🇨🇳",
    unicode: "U+1F1E8 U+1F1F3",
    name: "China",
    title: "flag for China",
    dialCode: 86,
  },
  CO: {
    code: "CO",
    emoji: "🇨🇴",
    unicode: "U+1F1E8 U+1F1F4",
    name: "Colombia",
    title: "flag for Colombia",
    dialCode: 57,
  },
  CR: {
    code: "CR",
    emoji: "🇨🇷",
    unicode: "U+1F1E8 U+1F1F7",
    name: "Costa Rica",
    title: "flag for Costa Rica",
    dialCode: 506,
  },
  CU: {
    code: "CU",
    emoji: "🇨🇺",
    unicode: "U+1F1E8 U+1F1FA",
    name: "Cuba",
    title: "flag for Cuba",
    dialCode: 53,
  },
  CV: {
    code: "CV",
    emoji: "🇨🇻",
    unicode: "U+1F1E8 U+1F1FB",
    name: "Cape Verde",
    title: "flag for Cape Verde",
    dialCode: 238,
  },
  CX: {
    code: "CX",
    emoji: "🇨🇽",
    unicode: "U+1F1E8 U+1F1FD",
    name: "Christmas Island",
    title: "flag for Christmas Island",
    dialCode: 61,
  },
  CY: {
    code: "CY",
    emoji: "🇨🇾",
    unicode: "U+1F1E8 U+1F1FE",
    name: "Cyprus",
    title: "flag for Cyprus",
    dialCode: 537,
  },
  CZ: {
    code: "CZ",
    emoji: "🇨🇿",
    unicode: "U+1F1E8 U+1F1FF",
    name: "Czech Republic",
    title: "flag for Czech Republic",
    dialCode: 420,
  },
  DE: {
    code: "DE",
    emoji: "🇩🇪",
    unicode: "U+1F1E9 U+1F1EA",
    name: "Germany",
    title: "flag for Germany",
    dialCode: 49,
  },
  DJ: {
    code: "DJ",
    emoji: "🇩🇯",
    unicode: "U+1F1E9 U+1F1EF",
    name: "Djibouti",
    title: "flag for Djibouti",
    dialCode: 253,
  },
  DK: {
    code: "DK",
    emoji: "🇩🇰",
    unicode: "U+1F1E9 U+1F1F0",
    name: "Denmark",
    title: "flag for Denmark",
    dialCode: 45,
  },
  DM: {
    code: "DM",
    emoji: "🇩🇲",
    unicode: "U+1F1E9 U+1F1F2",
    name: "Dominica",
    title: "flag for Dominica",
    dialCode: 1767,
  },
  DO: {
    code: "DO",
    emoji: "🇩🇴",
    unicode: "U+1F1E9 U+1F1F4",
    name: "Dominican Republic",
    title: "flag for Dominican Republic",
    dialCode: 1849,
  },
  DZ: {
    code: "DZ",
    emoji: "🇩🇿",
    unicode: "U+1F1E9 U+1F1FF",
    name: "Algeria",
    title: "flag for Algeria",
    dialCode: 213,
  },
  EC: {
    code: "EC",
    emoji: "🇪🇨",
    unicode: "U+1F1EA U+1F1E8",
    name: "Ecuador",
    title: "flag for Ecuador",
    dialCode: 593,
  },
  EE: {
    code: "EE",
    emoji: "🇪🇪",
    unicode: "U+1F1EA U+1F1EA",
    name: "Estonia",
    title: "flag for Estonia",
    dialCode: 372,
  },
  EG: {
    code: "EG",
    emoji: "🇪🇬",
    unicode: "U+1F1EA U+1F1EC",
    name: "Egypt",
    title: "flag for Egypt",
    dialCode: 20,
  },
  ER: {
    code: "ER",
    emoji: "🇪🇷",
    unicode: "U+1F1EA U+1F1F7",
    name: "Eritrea",
    title: "flag for Eritrea",
    dialCode: 291,
  },
  ES: {
    code: "ES",
    emoji: "🇪🇸",
    unicode: "U+1F1EA U+1F1F8",
    name: "Spain",
    title: "flag for Spain",
    dialCode: 34,
  },
  ET: {
    code: "ET",
    emoji: "🇪🇹",
    unicode: "U+1F1EA U+1F1F9",
    name: "Ethiopia",
    title: "flag for Ethiopia",
    dialCode: 251,
  },
  FI: {
    code: "FI",
    emoji: "🇫🇮",
    unicode: "U+1F1EB U+1F1EE",
    name: "Finland",
    title: "flag for Finland",
    dialCode: 358,
  },
  FJ: {
    code: "FJ",
    emoji: "🇫🇯",
    unicode: "U+1F1EB U+1F1EF",
    name: "Fiji",
    title: "flag for Fiji",
    dialCode: 679,
  },
  FK: {
    code: "FK",
    emoji: "🇫🇰",
    unicode: "U+1F1EB U+1F1F0",
    name: "Falkland Islands (Malvinas)",
    title: "flag for Falkland Islands (Malvinas)",
    dialCode: 500,
  },
  FM: {
    code: "FM",
    emoji: "🇫🇲",
    unicode: "U+1F1EB U+1F1F2",
    name: "Micronesia",
    title: "flag for Micronesia",
    dialCode: 691,
  },
  FO: {
    code: "FO",
    emoji: "🇫🇴",
    unicode: "U+1F1EB U+1F1F4",
    name: "Faroe Islands",
    title: "flag for Faroe Islands",
    dialCode: 298,
  },
  FR: {
    code: "FR",
    emoji: "🇫🇷",
    unicode: "U+1F1EB U+1F1F7",
    name: "France",
    title: "flag for France",
    dialCode: 33,
  },
  GA: {
    code: "GA",
    emoji: "🇬🇦",
    unicode: "U+1F1EC U+1F1E6",
    name: "Gabon",
    title: "flag for Gabon",
    dialCode: 241,
  },
  GB: {
    code: "GB",
    emoji: "🇬🇧",
    unicode: "U+1F1EC U+1F1E7",
    name: "United Kingdom",
    title: "flag for United Kingdom",
    dialCode: 44,
  },
  GD: {
    code: "GD",
    emoji: "🇬🇩",
    unicode: "U+1F1EC U+1F1E9",
    name: "Grenada",
    title: "flag for Grenada",
    dialCode: 1473,
  },
  GE: {
    code: "GE",
    emoji: "🇬🇪",
    unicode: "U+1F1EC U+1F1EA",
    name: "Georgia",
    title: "flag for Georgia",
    dialCode: 995,
  },
  GF: {
    code: "GF",
    emoji: "🇬🇫",
    unicode: "U+1F1EC U+1F1EB",
    name: "French Guiana",
    title: "flag for French Guiana",
    dialCode: 594,
  },
  GG: {
    code: "GG",
    emoji: "🇬🇬",
    unicode: "U+1F1EC U+1F1EC",
    name: "Guernsey",
    title: "flag for Guernsey",
    dialCode: 44,
  },
  GH: {
    code: "GH",
    emoji: "🇬🇭",
    unicode: "U+1F1EC U+1F1ED",
    name: "Ghana",
    title: "flag for Ghana",
    dialCode: 233,
  },
  GI: {
    code: "GI",
    emoji: "🇬🇮",
    unicode: "U+1F1EC U+1F1EE",
    name: "Gibraltar",
    title: "flag for Gibraltar",
    dialCode: 350,
  },
  GL: {
    code: "GL",
    emoji: "🇬🇱",
    unicode: "U+1F1EC U+1F1F1",
    name: "Greenland",
    title: "flag for Greenland",
    dialCode: 299,
  },
  GM: {
    code: "GM",
    emoji: "🇬🇲",
    unicode: "U+1F1EC U+1F1F2",
    name: "Gambia",
    title: "flag for Gambia",
    dialCode: 220,
  },
  GN: {
    code: "GN",
    emoji: "🇬🇳",
    unicode: "U+1F1EC U+1F1F3",
    name: "Guinea",
    title: "flag for Guinea",
    dialCode: 224,
  },
  GP: {
    code: "GP",
    emoji: "🇬🇵",
    unicode: "U+1F1EC U+1F1F5",
    name: "Guadeloupe",
    title: "flag for Guadeloupe",
    dialCode: 590,
  },
  GQ: {
    code: "GQ",
    emoji: "🇬🇶",
    unicode: "U+1F1EC U+1F1F6",
    name: "Equatorial Guinea",
    title: "flag for Equatorial Guinea",
    dialCode: 240,
  },
  GR: {
    code: "GR",
    emoji: "🇬🇷",
    unicode: "U+1F1EC U+1F1F7",
    name: "Greece",
    title: "flag for Greece",
    dialCode: 30,
  },
  GS: {
    code: "GS",
    emoji: "🇬🇸",
    unicode: "U+1F1EC U+1F1F8",
    name: "South Georgia",
    title: "flag for South Georgia",
    dialCode: 500,
  },
  GT: {
    code: "GT",
    emoji: "🇬🇹",
    unicode: "U+1F1EC U+1F1F9",
    name: "Guatemala",
    title: "flag for Guatemala",
    dialCode: 502,
  },
  GU: {
    code: "GU",
    emoji: "🇬🇺",
    unicode: "U+1F1EC U+1F1FA",
    name: "Guam",
    title: "flag for Guam",
    dialCode: 1671,
  },
  GW: {
    code: "GW",
    emoji: "🇬🇼",
    unicode: "U+1F1EC U+1F1FC",
    name: "Guinea-Bissau",
    title: "flag for Guinea-Bissau",
    dialCode: 245,
  },
  GY: {
    code: "GY",
    emoji: "🇬🇾",
    unicode: "U+1F1EC U+1F1FE",
    name: "Guyana",
    title: "flag for Guyana",
    dialCode: 595,
  },
  HK: {
    code: "HK",
    emoji: "🇭🇰",
    unicode: "U+1F1ED U+1F1F0",
    name: "Hong Kong",
    title: "flag for Hong Kong",
    dialCode: 852,
  },
  HN: {
    code: "HN",
    emoji: "🇭🇳",
    unicode: "U+1F1ED U+1F1F3",
    name: "Honduras",
    title: "flag for Honduras",
    dialCode: 504,
  },
  HR: {
    code: "HR",
    emoji: "🇭🇷",
    unicode: "U+1F1ED U+1F1F7",
    name: "Croatia",
    title: "flag for Croatia",
    dialCode: 385,
  },
  HT: {
    code: "HT",
    emoji: "🇭🇹",
    unicode: "U+1F1ED U+1F1F9",
    name: "Haiti",
    title: "flag for Haiti",
    dialCode: 509,
  },
  HU: {
    code: "HU",
    emoji: "🇭🇺",
    unicode: "U+1F1ED U+1F1FA",
    name: "Hungary",
    title: "flag for Hungary",
    dialCode: 36,
  },
  ID: {
    code: "ID",
    emoji: "🇮🇩",
    unicode: "U+1F1EE U+1F1E9",
    name: "Indonesia",
    title: "flag for Indonesia",
    dialCode: 62,
  },
  IE: {
    code: "IE",
    emoji: "🇮🇪",
    unicode: "U+1F1EE U+1F1EA",
    name: "Ireland",
    title: "flag for Ireland",
    dialCode: 353,
  },
  IL: {
    code: "IL",
    emoji: "🇮🇱",
    unicode: "U+1F1EE U+1F1F1",
    name: "Israel",
    title: "flag for Israel",
    dialCode: 972,
  },
  IM: {
    code: "IM",
    emoji: "🇮🇲",
    unicode: "U+1F1EE U+1F1F2",
    name: "Isle of Man",
    title: "flag for Isle of Man",
    dialCode: 44,
  },
  IN: {
    code: "IN",
    emoji: "🇮🇳",
    unicode: "U+1F1EE U+1F1F3",
    name: "India",
    title: "flag for India",
    dialCode: 91,
  },
  IO: {
    code: "IO",
    emoji: "🇮🇴",
    unicode: "U+1F1EE U+1F1F4",
    name: "British Indian Ocean Territory",
    title: "flag for British Indian Ocean Territory",
    dialCode: 246,
  },
  IQ: {
    code: "IQ",
    emoji: "🇮🇶",
    unicode: "U+1F1EE U+1F1F6",
    name: "Iraq",
    title: "flag for Iraq",
    dialCode: 964,
  },
  IR: {
    code: "IR",
    emoji: "🇮🇷",
    unicode: "U+1F1EE U+1F1F7",
    name: "Iran",
    title: "flag for Iran",
    dialCode: 98,
  },
  IS: {
    code: "IS",
    emoji: "🇮🇸",
    unicode: "U+1F1EE U+1F1F8",
    name: "Iceland",
    title: "flag for Iceland",
    dialCode: 354,
  },
  IT: {
    code: "IT",
    emoji: "🇮🇹",
    unicode: "U+1F1EE U+1F1F9",
    name: "Italy",
    title: "flag for Italy",
    dialCode: 39,
  },
  JE: {
    code: "JE",
    emoji: "🇯🇪",
    unicode: "U+1F1EF U+1F1EA",
    name: "Jersey",
    title: "flag for Jersey",
    dialCode: 44,
  },
  JM: {
    code: "JM",
    emoji: "🇯🇲",
    unicode: "U+1F1EF U+1F1F2",
    name: "Jamaica",
    title: "flag for Jamaica",
    dialCode: 1876,
  },
  JO: {
    code: "JO",
    emoji: "🇯🇴",
    unicode: "U+1F1EF U+1F1F4",
    name: "Jordan",
    title: "flag for Jordan",
    dialCode: 962,
  },
  JP: {
    code: "JP",
    emoji: "🇯🇵",
    unicode: "U+1F1EF U+1F1F5",
    name: "Japan",
    title: "flag for Japan",
    dialCode: 81,
  },
  KE: {
    code: "KE",
    emoji: "🇰🇪",
    unicode: "U+1F1F0 U+1F1EA",
    name: "Kenya",
    title: "flag for Kenya",
    dialCode: 254,
  },
  KG: {
    code: "KG",
    emoji: "🇰🇬",
    unicode: "U+1F1F0 U+1F1EC",
    name: "Kyrgyzstan",
    title: "flag for Kyrgyzstan",
    dialCode: 996,
  },
  KH: {
    code: "KH",
    emoji: "🇰🇭",
    unicode: "U+1F1F0 U+1F1ED",
    name: "Cambodia",
    title: "flag for Cambodia",
    dialCode: 855,
  },
  KI: {
    code: "KI",
    emoji: "🇰🇮",
    unicode: "U+1F1F0 U+1F1EE",
    name: "Kiribati",
    title: "flag for Kiribati",
    dialCode: 686,
  },
  KM: {
    code: "KM",
    emoji: "🇰🇲",
    unicode: "U+1F1F0 U+1F1F2",
    name: "Comoros",
    title: "flag for Comoros",
    dialCode: 269,
  },
  KN: {
    code: "KN",
    emoji: "🇰🇳",
    unicode: "U+1F1F0 U+1F1F3",
    name: "Saint Kitts and Nevis",
    title: "flag for Saint Kitts and Nevis",
    dialCode: 1869,
  },
  KP: {
    code: "KP",
    emoji: "🇰🇵",
    unicode: "U+1F1F0 U+1F1F5",
    name: "North Korea",
    title: "flag for North Korea",
    dialCode: 850,
  },
  KR: {
    code: "KR",
    emoji: "🇰🇷",
    unicode: "U+1F1F0 U+1F1F7",
    name: "South Korea",
    title: "flag for South Korea",
    dialCode: 82,
  },
  KW: {
    code: "KW",
    emoji: "🇰🇼",
    unicode: "U+1F1F0 U+1F1FC",
    name: "Kuwait",
    title: "flag for Kuwait",
    dialCode: 965,
  },
  KY: {
    code: "KY",
    emoji: "🇰🇾",
    unicode: "U+1F1F0 U+1F1FE",
    name: "Cayman Islands",
    title: "flag for Cayman Islands",
    dialCode: 345,
  },
  KZ: {
    code: "KZ",
    emoji: "🇰🇿",
    unicode: "U+1F1F0 U+1F1FF",
    name: "Kazakhstan",
    title: "flag for Kazakhstan",
    dialCode: 77,
  },
  LA: {
    code: "LA",
    emoji: "🇱🇦",
    unicode: "U+1F1F1 U+1F1E6",
    name: "Lao People's Democratic Republic",
    title: "flag for Lao People's Democratic Republic",
    dialCode: 856,
  },
  LB: {
    code: "LB",
    emoji: "🇱🇧",
    unicode: "U+1F1F1 U+1F1E7",
    name: "Lebanon",
    title: "flag for Lebanon",
    dialCode: 961,
  },
  LC: {
    code: "LC",
    emoji: "🇱🇨",
    unicode: "U+1F1F1 U+1F1E8",
    name: "Saint Lucia",
    title: "flag for Saint Lucia",
    dialCode: 1758,
  },
  LI: {
    code: "LI",
    emoji: "🇱🇮",
    unicode: "U+1F1F1 U+1F1EE",
    name: "Liechtenstein",
    title: "flag for Liechtenstein",
    dialCode: 423,
  },
  LK: {
    code: "LK",
    emoji: "🇱🇰",
    unicode: "U+1F1F1 U+1F1F0",
    name: "Sri Lanka",
    title: "flag for Sri Lanka",
    dialCode: 94,
  },
  LR: {
    code: "LR",
    emoji: "🇱🇷",
    unicode: "U+1F1F1 U+1F1F7",
    name: "Liberia",
    title: "flag for Liberia",
    dialCode: 231,
  },
  LS: {
    code: "LS",
    emoji: "🇱🇸",
    unicode: "U+1F1F1 U+1F1F8",
    name: "Lesotho",
    title: "flag for Lesotho",
    dialCode: 266,
  },
  LT: {
    code: "LT",
    emoji: "🇱🇹",
    unicode: "U+1F1F1 U+1F1F9",
    name: "Lithuania",
    title: "flag for Lithuania",
    dialCode: 370,
  },
  LU: {
    code: "LU",
    emoji: "🇱🇺",
    unicode: "U+1F1F1 U+1F1FA",
    name: "Luxembourg",
    title: "flag for Luxembourg",
    dialCode: 352,
  },
  LV: {
    code: "LV",
    emoji: "🇱🇻",
    unicode: "U+1F1F1 U+1F1FB",
    name: "Latvia",
    title: "flag for Latvia",
    dialCode: 371,
  },
  LY: {
    code: "LY",
    emoji: "🇱🇾",
    unicode: "U+1F1F1 U+1F1FE",
    name: "Libya",
    title: "flag for Libya",
    dialCode: 218,
  },
  MA: {
    code: "MA",
    emoji: "🇲🇦",
    unicode: "U+1F1F2 U+1F1E6",
    name: "Morocco",
    title: "flag for Morocco",
    dialCode: 212,
  },
  MC: {
    code: "MC",
    emoji: "🇲🇨",
    unicode: "U+1F1F2 U+1F1E8",
    name: "Monaco",
    title: "flag for Monaco",
    dialCode: 377,
  },
  MD: {
    code: "MD",
    emoji: "🇲🇩",
    unicode: "U+1F1F2 U+1F1E9",
    name: "Moldova",
    title: "flag for Moldova",
    dialCode: 373,
  },
  ME: {
    code: "ME",
    emoji: "🇲🇪",
    unicode: "U+1F1F2 U+1F1EA",
    name: "Montenegro",
    title: "flag for Montenegro",
    dialCode: 382,
  },
  MF: {
    code: "MF",
    emoji: "🇲🇫",
    unicode: "U+1F1F2 U+1F1EB",
    name: "Saint Martin (French Part)",
    title: "flag for Saint Martin (French Part)",
    dialCode: 590,
  },
  MG: {
    code: "MG",
    emoji: "🇲🇬",
    unicode: "U+1F1F2 U+1F1EC",
    name: "Madagascar",
    title: "flag for Madagascar",
    dialCode: 261,
  },
  MH: {
    code: "MH",
    emoji: "🇲🇭",
    unicode: "U+1F1F2 U+1F1ED",
    name: "Marshall Islands",
    title: "flag for Marshall Islands",
    dialCode: 692,
  },
  MK: {
    code: "MK",
    emoji: "🇲🇰",
    unicode: "U+1F1F2 U+1F1F0",
    name: "Macedonia",
    title: "flag for Macedonia",
    dialCode: 389,
  },
  ML: {
    code: "ML",
    emoji: "🇲🇱",
    unicode: "U+1F1F2 U+1F1F1",
    name: "Mali",
    title: "flag for Mali",
    dialCode: 223,
  },
  MM: {
    code: "MM",
    emoji: "🇲🇲",
    unicode: "U+1F1F2 U+1F1F2",
    name: "Myanmar",
    title: "flag for Myanmar",
    dialCode: 95,
  },
  MN: {
    code: "MN",
    emoji: "🇲🇳",
    unicode: "U+1F1F2 U+1F1F3",
    name: "Mongolia",
    title: "flag for Mongolia",
    dialCode: 976,
  },
  MO: {
    code: "MO",
    emoji: "🇲🇴",
    unicode: "U+1F1F2 U+1F1F4",
    name: "Macao",
    title: "flag for Macao",
    dialCode: 853,
  },
  MP: {
    code: "MP",
    emoji: "🇲🇵",
    unicode: "U+1F1F2 U+1F1F5",
    name: "Northern Mariana Islands",
    title: "flag for Northern Mariana Islands",
    dialCode: 1670,
  },
  MQ: {
    code: "MQ",
    emoji: "🇲🇶",
    unicode: "U+1F1F2 U+1F1F6",
    name: "Martinique",
    title: "flag for Martinique",
    dialCode: 596,
  },
  MR: {
    code: "MR",
    emoji: "🇲🇷",
    unicode: "U+1F1F2 U+1F1F7",
    name: "Mauritania",
    title: "flag for Mauritania",
    dialCode: 222,
  },
  MS: {
    code: "MS",
    emoji: "🇲🇸",
    unicode: "U+1F1F2 U+1F1F8",
    name: "Montserrat",
    title: "flag for Montserrat",
    dialCode: 1664,
  },
  MT: {
    code: "MT",
    emoji: "🇲🇹",
    unicode: "U+1F1F2 U+1F1F9",
    name: "Malta",
    title: "flag for Malta",
    dialCode: 356,
  },
  MU: {
    code: "MU",
    emoji: "🇲🇺",
    unicode: "U+1F1F2 U+1F1FA",
    name: "Mauritius",
    title: "flag for Mauritius",
    dialCode: 230,
  },
  MV: {
    code: "MV",
    emoji: "🇲🇻",
    unicode: "U+1F1F2 U+1F1FB",
    name: "Maldives",
    title: "flag for Maldives",
    dialCode: 960,
  },
  MW: {
    code: "MW",
    emoji: "🇲🇼",
    unicode: "U+1F1F2 U+1F1FC",
    name: "Malawi",
    title: "flag for Malawi",
    dialCode: 265,
  },
  MX: {
    code: "MX",
    emoji: "🇲🇽",
    unicode: "U+1F1F2 U+1F1FD",
    name: "Mexico",
    title: "flag for Mexico",
    dialCode: 52,
  },
  MY: {
    code: "MY",
    emoji: "🇲🇾",
    unicode: "U+1F1F2 U+1F1FE",
    name: "Malaysia",
    title: "flag for Malaysia",
    dialCode: 60,
  },
  MZ: {
    code: "MZ",
    emoji: "🇲🇿",
    unicode: "U+1F1F2 U+1F1FF",
    name: "Mozambique",
    title: "flag for Mozambique",
    dialCode: 258,
  },
  NA: {
    code: "NA",
    emoji: "🇳🇦",
    unicode: "U+1F1F3 U+1F1E6",
    name: "Namibia",
    title: "flag for Namibia",
    dialCode: 264,
  },
  NC: {
    code: "NC",
    emoji: "🇳🇨",
    unicode: "U+1F1F3 U+1F1E8",
    name: "New Caledonia",
    title: "flag for New Caledonia",
    dialCode: 687,
  },
  NE: {
    code: "NE",
    emoji: "🇳🇪",
    unicode: "U+1F1F3 U+1F1EA",
    name: "Niger",
    title: "flag for Niger",
    dialCode: 227,
  },
  NF: {
    code: "NF",
    emoji: "🇳🇫",
    unicode: "U+1F1F3 U+1F1EB",
    name: "Norfolk Island",
    title: "flag for Norfolk Island",
    dialCode: 672,
  },
  NG: {
    code: "NG",
    emoji: "🇳🇬",
    unicode: "U+1F1F3 U+1F1EC",
    name: "Nigeria",
    title: "flag for Nigeria",
    dialCode: 234,
  },
  NI: {
    code: "NI",
    emoji: "🇳🇮",
    unicode: "U+1F1F3 U+1F1EE",
    name: "Nicaragua",
    title: "flag for Nicaragua",
    dialCode: 505,
  },
  NL: {
    code: "NL",
    emoji: "🇳🇱",
    unicode: "U+1F1F3 U+1F1F1",
    name: "Netherlands",
    title: "flag for Netherlands",
    dialCode: 31,
  },
  NO: {
    code: "NO",
    emoji: "🇳🇴",
    unicode: "U+1F1F3 U+1F1F4",
    name: "Norway",
    title: "flag for Norway",
    dialCode: 47,
  },
  NP: {
    code: "NP",
    emoji: "🇳🇵",
    unicode: "U+1F1F3 U+1F1F5",
    name: "Nepal",
    title: "flag for Nepal",
    dialCode: 977,
  },
  NR: {
    code: "NR",
    emoji: "🇳🇷",
    unicode: "U+1F1F3 U+1F1F7",
    name: "Nauru",
    title: "flag for Nauru",
    dialCode: 674,
  },
  NU: {
    code: "NU",
    emoji: "🇳🇺",
    unicode: "U+1F1F3 U+1F1FA",
    name: "Niue",
    title: "flag for Niue",
    dialCode: 683,
  },
  NZ: {
    code: "NZ",
    emoji: "🇳🇿",
    unicode: "U+1F1F3 U+1F1FF",
    name: "New Zealand",
    title: "flag for New Zealand",
    dialCode: 64,
  },
  OM: {
    code: "OM",
    emoji: "🇴🇲",
    unicode: "U+1F1F4 U+1F1F2",
    name: "Oman",
    title: "flag for Oman",
    dialCode: 968,
  },
  PA: {
    code: "PA",
    emoji: "🇵🇦",
    unicode: "U+1F1F5 U+1F1E6",
    name: "Panama",
    title: "flag for Panama",
    dialCode: 507,
  },
  PE: {
    code: "PE",
    emoji: "🇵🇪",
    unicode: "U+1F1F5 U+1F1EA",
    name: "Peru",
    title: "flag for Peru",
    dialCode: 51,
  },
  PF: {
    code: "PF",
    emoji: "🇵🇫",
    unicode: "U+1F1F5 U+1F1EB",
    name: "French Polynesia",
    title: "flag for French Polynesia",
    dialCode: 689,
  },
  PG: {
    code: "PG",
    emoji: "🇵🇬",
    unicode: "U+1F1F5 U+1F1EC",
    name: "Papua New Guinea",
    title: "flag for Papua New Guinea",
    dialCode: 675,
  },
  PH: {
    code: "PH",
    emoji: "🇵🇭",
    unicode: "U+1F1F5 U+1F1ED",
    name: "Philippines",
    title: "flag for Philippines",
    dialCode: 63,
  },
  PK: {
    code: "PK",
    emoji: "🇵🇰",
    unicode: "U+1F1F5 U+1F1F0",
    name: "Pakistan",
    title: "flag for Pakistan",
    dialCode: 92,
  },
  PL: {
    code: "PL",
    emoji: "🇵🇱",
    unicode: "U+1F1F5 U+1F1F1",
    name: "Poland",
    title: "flag for Poland",
    dialCode: 48,
  },
  PM: {
    code: "PM",
    emoji: "🇵🇲",
    unicode: "U+1F1F5 U+1F1F2",
    name: "Saint Pierre and Miquelon",
    title: "flag for Saint Pierre and Miquelon",
    dialCode: 508,
  },
  PN: {
    code: "PN",
    emoji: "🇵🇳",
    unicode: "U+1F1F5 U+1F1F3",
    name: "Pitcairn",
    title: "flag for Pitcairn",
    dialCode: 872,
  },
  PR: {
    code: "PR",
    emoji: "🇵🇷",
    unicode: "U+1F1F5 U+1F1F7",
    name: "Puerto Rico",
    title: "flag for Puerto Rico",
    dialCode: 1939,
  },
  PS: {
    code: "PS",
    emoji: "🇵🇸",
    unicode: "U+1F1F5 U+1F1F8",
    name: "Palestinian Territory",
    title: "flag for Palestinian Territory",
    dialCode: 970,
  },
  PT: {
    code: "PT",
    emoji: "🇵🇹",
    unicode: "U+1F1F5 U+1F1F9",
    name: "Portugal",
    title: "flag for Portugal",
    dialCode: 351,
  },
  PW: {
    code: "PW",
    emoji: "🇵🇼",
    unicode: "U+1F1F5 U+1F1FC",
    name: "Palau",
    title: "flag for Palau",
    dialCode: 680,
  },
  PY: {
    code: "PY",
    emoji: "🇵🇾",
    unicode: "U+1F1F5 U+1F1FE",
    name: "Paraguay",
    title: "flag for Paraguay",
    dialCode: 595,
  },
  QA: {
    code: "QA",
    emoji: "🇶🇦",
    unicode: "U+1F1F6 U+1F1E6",
    name: "Qatar",
    title: "flag for Qatar",
    dialCode: 974,
  },
  RE: {
    code: "RE",
    emoji: "🇷🇪",
    unicode: "U+1F1F7 U+1F1EA",
    name: "Réunion",
    title: "flag for Réunion",
    dialCode: 262,
  },
  RO: {
    code: "RO",
    emoji: "🇷🇴",
    unicode: "U+1F1F7 U+1F1F4",
    name: "Romania",
    title: "flag for Romania",
    dialCode: 40,
  },
  RS: {
    code: "RS",
    emoji: "🇷🇸",
    unicode: "U+1F1F7 U+1F1F8",
    name: "Serbia",
    title: "flag for Serbia",
    dialCode: 381,
  },
  RU: {
    code: "RU",
    emoji: "🇷🇺",
    unicode: "U+1F1F7 U+1F1FA",
    name: "Russia",
    title: "flag for Russia",
    dialCode: 7,
  },
  RW: {
    code: "RW",
    emoji: "🇷🇼",
    unicode: "U+1F1F7 U+1F1FC",
    name: "Rwanda",
    title: "flag for Rwanda",
    dialCode: 250,
  },
  SA: {
    code: "SA",
    emoji: "🇸🇦",
    unicode: "U+1F1F8 U+1F1E6",
    name: "Saudi Arabia",
    title: "flag for Saudi Arabia",
    dialCode: 966,
  },
  SB: {
    code: "SB",
    emoji: "🇸🇧",
    unicode: "U+1F1F8 U+1F1E7",
    name: "Solomon Islands",
    title: "flag for Solomon Islands",
    dialCode: 677,
  },
  SC: {
    code: "SC",
    emoji: "🇸🇨",
    unicode: "U+1F1F8 U+1F1E8",
    name: "Seychelles",
    title: "flag for Seychelles",
    dialCode: 248,
  },
  SD: {
    code: "SD",
    emoji: "🇸🇩",
    unicode: "U+1F1F8 U+1F1E9",
    name: "Sudan",
    title: "flag for Sudan",
    dialCode: 249,
  },
  SE: {
    code: "SE",
    emoji: "🇸🇪",
    unicode: "U+1F1F8 U+1F1EA",
    name: "Sweden",
    title: "flag for Sweden",
    dialCode: 46,
  },
  SG: {
    code: "SG",
    emoji: "🇸🇬",
    unicode: "U+1F1F8 U+1F1EC",
    name: "Singapore",
    title: "flag for Singapore",
    dialCode: 65,
  },
  SH: {
    code: "SH",
    emoji: "🇸🇭",
    unicode: "U+1F1F8 U+1F1ED",
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    title: "flag for Saint Helena, Ascension and Tristan Da Cunha",
    dialCode: 290,
  },
  SI: {
    code: "SI",
    emoji: "🇸🇮",
    unicode: "U+1F1F8 U+1F1EE",
    name: "Slovenia",
    title: "flag for Slovenia",
    dialCode: 386,
  },
  SJ: {
    code: "SJ",
    emoji: "🇸🇯",
    unicode: "U+1F1F8 U+1F1EF",
    name: "Svalbard and Jan Mayen",
    title: "flag for Svalbard and Jan Mayen",
    dialCode: 47,
  },
  SK: {
    code: "SK",
    emoji: "🇸🇰",
    unicode: "U+1F1F8 U+1F1F0",
    name: "Slovakia",
    title: "flag for Slovakia",
    dialCode: 421,
  },
  SL: {
    code: "SL",
    emoji: "🇸🇱",
    unicode: "U+1F1F8 U+1F1F1",
    name: "Sierra Leone",
    title: "flag for Sierra Leone",
    dialCode: 232,
  },
  SM: {
    code: "SM",
    emoji: "🇸🇲",
    unicode: "U+1F1F8 U+1F1F2",
    name: "San Marino",
    title: "flag for San Marino",
    dialCode: 378,
  },
  SN: {
    code: "SN",
    emoji: "🇸🇳",
    unicode: "U+1F1F8 U+1F1F3",
    name: "Senegal",
    title: "flag for Senegal",
    dialCode: 221,
  },
  SO: {
    code: "SO",
    emoji: "🇸🇴",
    unicode: "U+1F1F8 U+1F1F4",
    name: "Somalia",
    title: "flag for Somalia",
    dialCode: 252,
  },
  SR: {
    code: "SR",
    emoji: "🇸🇷",
    unicode: "U+1F1F8 U+1F1F7",
    name: "Suriname",
    title: "flag for Suriname",
    dialCode: 597,
  },
  ST: {
    code: "ST",
    emoji: "🇸🇹",
    unicode: "U+1F1F8 U+1F1F9",
    name: "Sao Tome and Principe",
    title: "flag for Sao Tome and Principe",
    dialCode: 239,
  },
  SV: {
    code: "SV",
    emoji: "🇸🇻",
    unicode: "U+1F1F8 U+1F1FB",
    name: "El Salvador",
    title: "flag for El Salvador",
    dialCode: 503,
  },
  SY: {
    code: "SY",
    emoji: "🇸🇾",
    unicode: "U+1F1F8 U+1F1FE",
    name: "Syrian Arab Republic",
    title: "flag for Syrian Arab Republic",
    dialCode: 963,
  },
  SZ: {
    code: "SZ",
    emoji: "🇸🇿",
    unicode: "U+1F1F8 U+1F1FF",
    name: "Swaziland",
    title: "flag for Swaziland",
    dialCode: 268,
  },
  TC: {
    code: "TC",
    emoji: "🇹🇨",
    unicode: "U+1F1F9 U+1F1E8",
    name: "Turks and Caicos Islands",
    title: "flag for Turks and Caicos Islands",
    dialCode: 1649,
  },
  TD: {
    code: "TD",
    emoji: "🇹🇩",
    unicode: "U+1F1F9 U+1F1E9",
    name: "Chad",
    title: "flag for Chad",
    dialCode: 235,
  },
  TG: {
    code: "TG",
    emoji: "🇹🇬",
    unicode: "U+1F1F9 U+1F1EC",
    name: "Togo",
    title: "flag for Togo",
    dialCode: 228,
  },
  TH: {
    code: "TH",
    emoji: "🇹🇭",
    unicode: "U+1F1F9 U+1F1ED",
    name: "Thailand",
    title: "flag for Thailand",
    dialCode: 66,
  },
  TJ: {
    code: "TJ",
    emoji: "🇹🇯",
    unicode: "U+1F1F9 U+1F1EF",
    name: "Tajikistan",
    title: "flag for Tajikistan",
    dialCode: 992,
  },
  TK: {
    code: "TK",
    emoji: "🇹🇰",
    unicode: "U+1F1F9 U+1F1F0",
    name: "Tokelau",
    title: "flag for Tokelau",
    dialCode: 690,
  },
  TL: {
    code: "TL",
    emoji: "🇹🇱",
    unicode: "U+1F1F9 U+1F1F1",
    name: "Timor-Leste",
    title: "flag for Timor-Leste",
    dialCode: 670,
  },
  TM: {
    code: "TM",
    emoji: "🇹🇲",
    unicode: "U+1F1F9 U+1F1F2",
    name: "Turkmenistan",
    title: "flag for Turkmenistan",
    dialCode: 993,
  },
  TN: {
    code: "TN",
    emoji: "🇹🇳",
    unicode: "U+1F1F9 U+1F1F3",
    name: "Tunisia",
    title: "flag for Tunisia",
    dialCode: 216,
  },
  TO: {
    code: "TO",
    emoji: "🇹🇴",
    unicode: "U+1F1F9 U+1F1F4",
    name: "Tonga",
    title: "flag for Tonga",
    dialCode: 676,
  },
  TR: {
    code: "TR",
    emoji: "🇹🇷",
    unicode: "U+1F1F9 U+1F1F7",
    name: "Turkey",
    title: "flag for Turkey",
    dialCode: 90,
  },
  TT: {
    code: "TT",
    emoji: "🇹🇹",
    unicode: "U+1F1F9 U+1F1F9",
    name: "Trinidad and Tobago",
    title: "flag for Trinidad and Tobago",
    dialCode: 1868,
  },
  TV: {
    code: "TV",
    emoji: "🇹🇻",
    unicode: "U+1F1F9 U+1F1FB",
    name: "Tuvalu",
    title: "flag for Tuvalu",
    dialCode: 688,
  },
  TW: {
    code: "TW",
    emoji: "🇹🇼",
    unicode: "U+1F1F9 U+1F1FC",
    name: "Taiwan",
    title: "flag for Taiwan",
    dialCode: 886,
  },
  TZ: {
    code: "TZ",
    emoji: "🇹🇿",
    unicode: "U+1F1F9 U+1F1FF",
    name: "Tanzania",
    title: "flag for Tanzania",
    dialCode: 255,
  },
  UA: {
    code: "UA",
    emoji: "🇺🇦",
    unicode: "U+1F1FA U+1F1E6",
    name: "Ukraine",
    title: "flag for Ukraine",
    dialCode: 380,
  },
  UG: {
    code: "UG",
    emoji: "🇺🇬",
    unicode: "U+1F1FA U+1F1EC",
    name: "Uganda",
    title: "flag for Uganda",
    dialCode: 256,
  },
  US: {
    code: "US",
    emoji: "🇺🇸",
    unicode: "U+1F1FA U+1F1F8",
    name: "United States",
    title: "flag for United States",
    dialCode: 1,
  },
  UY: {
    code: "UY",
    emoji: "🇺🇾",
    unicode: "U+1F1FA U+1F1FE",
    name: "Uruguay",
    title: "flag for Uruguay",
    dialCode: 598,
  },
  UZ: {
    code: "UZ",
    emoji: "🇺🇿",
    unicode: "U+1F1FA U+1F1FF",
    name: "Uzbekistan",
    title: "flag for Uzbekistan",
    dialCode: 998,
  },
  VA: {
    code: "VA",
    emoji: "🇻🇦",
    unicode: "U+1F1FB U+1F1E6",
    name: "Vatican City",
    title: "flag for Vatican City",
    dialCode: 379,
  },
  VC: {
    code: "VC",
    emoji: "🇻🇨",
    unicode: "U+1F1FB U+1F1E8",
    name: "Saint Vincent and The Grenadines",
    title: "flag for Saint Vincent and The Grenadines",
    dialCode: 1784,
  },
  VE: {
    code: "VE",
    emoji: "🇻🇪",
    unicode: "U+1F1FB U+1F1EA",
    name: "Venezuela",
    title: "flag for Venezuela",
    dialCode: 58,
  },
  VG: {
    code: "VG",
    emoji: "🇻🇬",
    unicode: "U+1F1FB U+1F1EC",
    name: "Virgin Islands, British",
    title: "flag for Virgin Islands, British",
    dialCode: 1284,
  },
  VI: {
    code: "VI",
    emoji: "🇻🇮",
    unicode: "U+1F1FB U+1F1EE",
    name: "Virgin Islands, U.S.",
    title: "flag for Virgin Islands, U.S.",
    dialCode: 1340,
  },
  VN: {
    code: "VN",
    emoji: "🇻🇳",
    unicode: "U+1F1FB U+1F1F3",
    name: "Viet Nam",
    title: "flag for Viet Nam",
    dialCode: 84,
  },
  VU: {
    code: "VU",
    emoji: "🇻🇺",
    unicode: "U+1F1FB U+1F1FA",
    name: "Vanuatu",
    title: "flag for Vanuatu",
    dialCode: 678,
  },
  WF: {
    code: "WF",
    emoji: "🇼🇫",
    unicode: "U+1F1FC U+1F1EB",
    name: "Wallis and Futuna",
    title: "flag for Wallis and Futuna",
    dialCode: 681,
  },
  WS: {
    code: "WS",
    emoji: "🇼🇸",
    unicode: "U+1F1FC U+1F1F8",
    name: "Samoa",
    title: "flag for Samoa",
    dialCode: 685,
  },
  XK: {
    code: "XK",
    emoji: "🇽🇰",
    unicode: "U+1F1FD U+1F1F0",
    name: "Kosovo",
    title: "flag for Kosovo",
    dialCode: 383,
  },
  YE: {
    code: "YE",
    emoji: "🇾🇪",
    unicode: "U+1F1FE U+1F1EA",
    name: "Yemen",
    title: "flag for Yemen",
    dialCode: 967,
  },
  YT: {
    code: "YT",
    emoji: "🇾🇹",
    unicode: "U+1F1FE U+1F1F9",
    name: "Mayotte",
    title: "flag for Mayotte",
    dialCode: 262,
  },
  ZA: {
    code: "ZA",
    emoji: "🇿🇦",
    unicode: "U+1F1FF U+1F1E6",
    name: "South Africa",
    title: "flag for South Africa",
    dialCode: 27,
  },
  ZM: {
    code: "ZM",
    emoji: "🇿🇲",
    unicode: "U+1F1FF U+1F1F2",
    name: "Zambia",
    title: "flag for Zambia",
    dialCode: 260,
  },
  ZW: {
    code: "ZW",
    emoji: "🇿🇼",
    unicode: "U+1F1FF U+1F1FC",
    name: "Zimbabwe",
    title: "flag for Zimbabwe",
    dialCode: 263,
  },
};
