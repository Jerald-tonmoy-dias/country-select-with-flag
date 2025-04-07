const countriesData = [
	{
		"code": "ad",
		"name": "Andorra",
		"svg": "ad.svg"
	},
	{
		"code": "ae",
		"name": "United Arab Emirates",
		"svg": "ae.svg"
	},
	{
		"code": "af",
		"name": "Afghanistan",
		"svg": "af.svg"
	},
	{
		"code": "ag",
		"name": "Antigua and Barbuda",
		"svg": "ag.svg"
	},
	{
		"code": "ai",
		"name": "Anguilla",
		"svg": "ai.svg"
	},
	{
		"code": "al",
		"name": "Albania",
		"svg": "al.svg"
	},
	{
		"code": "am",
		"name": "Armenia",
		"svg": "am.svg"
	},
	{
		"code": "ao",
		"name": "Angola",
		"svg": "ao.svg"
	},
	{
		"code": "aq",
		"name": "Antarctica",
		"svg": "aq.svg"
	},
	{
		"code": "ar",
		"name": "Argentina",
		"svg": "ar.svg"
	},
	{
		"code": "as",
		"name": "American Samoa",
		"svg": "as.svg"
	},
	{
		"code": "at",
		"name": "Austria",
		"svg": "at.svg"
	},
	{
		"code": "au",
		"name": "Australia",
		"svg": "au.svg"
	},
	{
		"code": "aw",
		"name": "Aruba",
		"svg": "aw.svg"
	},
	{
		"code": "ax",
		"name": "\u00c5land Islands",
		"svg": "ax.svg"
	},
	{
		"code": "az",
		"name": "Azerbaijan",
		"svg": "az.svg"
	},
	{
		"code": "ba",
		"name": "Bosnia and Herzegovina",
		"svg": "ba.svg"
	},
	{
		"code": "bb",
		"name": "Barbados",
		"svg": "bb.svg"
	},
	{
		"code": "bd",
		"name": "Bangladesh",
		"svg": "bd.svg"
	},
	{
		"code": "be",
		"name": "Belgium",
		"svg": "be.svg"
	},
	{
		"code": "bf",
		"name": "Burkina Faso",
		"svg": "bf.svg"
	},
	{
		"code": "bg",
		"name": "Bulgaria",
		"svg": "bg.svg"
	},
	{
		"code": "bh",
		"name": "Bahrain",
		"svg": "bh.svg"
	},
	{
		"code": "bi",
		"name": "Burundi",
		"svg": "bi.svg"
	},
	{
		"code": "bj",
		"name": "Benin",
		"svg": "bj.svg"
	},
	{
		"code": "bl",
		"name": "Saint Barth\u00e9lemy",
		"svg": "bl.svg"
	},
	{
		"code": "bm",
		"name": "Bermuda",
		"svg": "bm.svg"
	},
	{
		"code": "bn",
		"name": "Brunei Darussalam",
		"svg": "bn.svg"
	},
	{
		"code": "bo",
		"name": "Bolivia, Plurinational State of",
		"svg": "bo.svg"
	},
	{
		"code": "bq",
		"name": "Bonaire, Sint Eustatius and Saba",
		"svg": "bq.svg"
	},
	{
		"code": "br",
		"name": "Brazil",
		"svg": "br.svg"
	},
	{
		"code": "bs",
		"name": "Bahamas",
		"svg": "bs.svg"
	},
	{
		"code": "bt",
		"name": "Bhutan",
		"svg": "bt.svg"
	},
	{
		"code": "bv",
		"name": "Bouvet Island",
		"svg": "bv.svg"
	},
	{
		"code": "bw",
		"name": "Botswana",
		"svg": "bw.svg"
	},
	{
		"code": "by",
		"name": "Belarus",
		"svg": "by.svg"
	},
	{
		"code": "bz",
		"name": "Belize",
		"svg": "bz.svg"
	},
	{
		"code": "ca",
		"name": "Canada",
		"svg": "ca.svg"
	},
	{
		"code": "cc",
		"name": "Cocos (Keeling) Islands",
		"svg": "cc.svg"
	},
	{
		"code": "cd",
		"name": "Congo, The Democratic Republic of the",
		"svg": "cd.svg"
	},
	{
		"code": "cf",
		"name": "Central African Republic",
		"svg": "cf.svg"
	},
	{
		"code": "cg",
		"name": "Congo",
		"svg": "cg.svg"
	},
	{
		"code": "ch",
		"name": "Switzerland",
		"svg": "ch.svg"
	},
	{
		"code": "ci",
		"name": "C\u00f4te d'Ivoire",
		"svg": "ci.svg"
	},
	{
		"code": "ck",
		"name": "Cook Islands",
		"svg": "ck.svg"
	},
	{
		"code": "cl",
		"name": "Chile",
		"svg": "cl.svg"
	},
	{
		"code": "cm",
		"name": "Cameroon",
		"svg": "cm.svg"
	},
	{
		"code": "cn",
		"name": "China",
		"svg": "cn.svg"
	},
	{
		"code": "co",
		"name": "Colombia",
		"svg": "co.svg"
	},
	{
		"code": "cr",
		"name": "Costa Rica",
		"svg": "cr.svg"
	},
	{
		"code": "cu",
		"name": "Cuba",
		"svg": "cu.svg"
	},
	{
		"code": "cv",
		"name": "Cabo Verde",
		"svg": "cv.svg"
	},
	{
		"code": "cw",
		"name": "Cura\u00e7ao",
		"svg": "cw.svg"
	},
	{
		"code": "cx",
		"name": "Christmas Island",
		"svg": "cx.svg"
	},
	{
		"code": "cy",
		"name": "Cyprus",
		"svg": "cy.svg"
	},
	{
		"code": "cz",
		"name": "Czechia",
		"svg": "cz.svg"
	},
	{
		"code": "de",
		"name": "Germany",
		"svg": "de.svg"
	},
	{
		"code": "dj",
		"name": "Djibouti",
		"svg": "dj.svg"
	},
	{
		"code": "dk",
		"name": "Denmark",
		"svg": "dk.svg"
	},
	{
		"code": "dm",
		"name": "Dominica",
		"svg": "dm.svg"
	},
	{
		"code": "do",
		"name": "Dominican Republic",
		"svg": "do.svg"
	},
	{
		"code": "dz",
		"name": "Algeria",
		"svg": "dz.svg"
	},
	{
		"code": "ec",
		"name": "Ecuador",
		"svg": "ec.svg"
	},
	{
		"code": "ee",
		"name": "Estonia",
		"svg": "ee.svg"
	},
	{
		"code": "eg",
		"name": "Egypt",
		"svg": "eg.svg"
	},
	{
		"code": "eh",
		"name": "Western Sahara",
		"svg": "eh.svg"
	},
	{
		"code": "er",
		"name": "Eritrea",
		"svg": "er.svg"
	},
	{
		"code": "es",
		"name": "Spain",
		"svg": "es.svg"
	},
	{
		"code": "et",
		"name": "Ethiopia",
		"svg": "et.svg"
	},
	{
		"code": "eu",
		"name": "European Union",
		"svg": "eu.svg"
	},
	{
		"code": "fi",
		"name": "Finland",
		"svg": "fi.svg"
	},
	{
		"code": "fj",
		"name": "Fiji",
		"svg": "fj.svg"
	},
	{
		"code": "fk",
		"name": "Falkland Islands (Malvinas)",
		"svg": "fk.svg"
	},
	{
		"code": "fm",
		"name": "Micronesia, Federated States of",
		"svg": "fm.svg"
	},
	{
		"code": "fo",
		"name": "Faroe Islands",
		"svg": "fo.svg"
	},
	{
		"code": "fr",
		"name": "France",
		"svg": "fr.svg"
	},
	{
		"code": "ga",
		"name": "Gabon",
		"svg": "ga.svg"
	},
	{
		"code": "gb-eng",
		"name": "England",
		"svg": "gb-eng.svg"
	},
	{
		"code": "gb-nir",
		"name": "Northern Ireland",
		"svg": "gb-nir.svg"
	},
	{
		"code": "gb-sct",
		"name": "Scotland",
		"svg": "gb-sct.svg"
	},
	{
		"code": "gb-wls",
		"name": "Wales",
		"svg": "gb-wls.svg"
	},
	{
		"code": "gb",
		"name": "United Kingdom",
		"svg": "gb.svg"
	},
	{
		"code": "gd",
		"name": "Grenada",
		"svg": "gd.svg"
	},
	{
		"code": "ge",
		"name": "Georgia",
		"svg": "ge.svg"
	},
	{
		"code": "gf",
		"name": "French Guiana",
		"svg": "gf.svg"
	},
	{
		"code": "gg",
		"name": "Guernsey",
		"svg": "gg.svg"
	},
	{
		"code": "gh",
		"name": "Ghana",
		"svg": "gh.svg"
	},
	{
		"code": "gi",
		"name": "Gibraltar",
		"svg": "gi.svg"
	},
	{
		"code": "gl",
		"name": "Greenland",
		"svg": "gl.svg"
	},
	{
		"code": "gm",
		"name": "Gambia",
		"svg": "gm.svg"
	},
	{
		"code": "gn",
		"name": "Guinea",
		"svg": "gn.svg"
	},
	{
		"code": "gp",
		"name": "Guadeloupe",
		"svg": "gp.svg"
	},
	{
		"code": "gq",
		"name": "Equatorial Guinea",
		"svg": "gq.svg"
	},
	{
		"code": "gr",
		"name": "Greece",
		"svg": "gr.svg"
	},
	{
		"code": "gs",
		"name": "South Georgia and the South Sandwich Islands",
		"svg": "gs.svg"
	},
	{
		"code": "gt",
		"name": "Guatemala",
		"svg": "gt.svg"
	},
	{
		"code": "gu",
		"name": "Guam",
		"svg": "gu.svg"
	},
	{
		"code": "gw",
		"name": "Guinea-Bissau",
		"svg": "gw.svg"
	},
	{
		"code": "gy",
		"name": "Guyana",
		"svg": "gy.svg"
	},
	{
		"code": "hk",
		"name": "Hong Kong",
		"svg": "hk.svg"
	},
	{
		"code": "hm",
		"name": "Heard Island and McDonald Islands",
		"svg": "hm.svg"
	},
	{
		"code": "hn",
		"name": "Honduras",
		"svg": "hn.svg"
	},
	{
		"code": "hr",
		"name": "Croatia",
		"svg": "hr.svg"
	},
	{
		"code": "ht",
		"name": "Haiti",
		"svg": "ht.svg"
	},
	{
		"code": "hu",
		"name": "Hungary",
		"svg": "hu.svg"
	},
	{
		"code": "id",
		"name": "Indonesia",
		"svg": "id.svg"
	},
	{
		"code": "ie",
		"name": "Ireland",
		"svg": "ie.svg"
	},
	{
		"code": "il",
		"name": "Israel",
		"svg": "il.svg"
	},
	{
		"code": "im",
		"name": "Isle of Man",
		"svg": "im.svg"
	},
	{
		"code": "in",
		"name": "India",
		"svg": "in.svg"
	},
	{
		"code": "io",
		"name": "British Indian Ocean Territory",
		"svg": "io.svg"
	},
	{
		"code": "iq",
		"name": "Iraq",
		"svg": "iq.svg"
	},
	{
		"code": "ir",
		"name": "Iran, Islamic Republic of",
		"svg": "ir.svg"
	},
	{
		"code": "is",
		"name": "Iceland",
		"svg": "is.svg"
	},
	{
		"code": "it",
		"name": "Italy",
		"svg": "it.svg"
	},
	{
		"code": "je",
		"name": "Jersey",
		"svg": "je.svg"
	},
	{
		"code": "jm",
		"name": "Jamaica",
		"svg": "jm.svg"
	},
	{
		"code": "jo",
		"name": "Jordan",
		"svg": "jo.svg"
	},
	{
		"code": "jp",
		"name": "Japan",
		"svg": "jp.svg"
	},
	{
		"code": "ke",
		"name": "Kenya",
		"svg": "ke.svg"
	},
	{
		"code": "kg",
		"name": "Kyrgyzstan",
		"svg": "kg.svg"
	},
	{
		"code": "kh",
		"name": "Cambodia",
		"svg": "kh.svg"
	},
	{
		"code": "ki",
		"name": "Kiribati",
		"svg": "ki.svg"
	},
	{
		"code": "km",
		"name": "Comoros",
		"svg": "km.svg"
	},
	{
		"code": "kn",
		"name": "Saint Kitts and Nevis",
		"svg": "kn.svg"
	},
	{
		"code": "kp",
		"name": "Korea, Democratic People's Republic of",
		"svg": "kp.svg"
	},
	{
		"code": "kr",
		"name": "Korea, Republic of",
		"svg": "kr.svg"
	},
	{
		"code": "kw",
		"name": "Kuwait",
		"svg": "kw.svg"
	},
	{
		"code": "ky",
		"name": "Cayman Islands",
		"svg": "ky.svg"
	},
	{
		"code": "kz",
		"name": "Kazakhstan",
		"svg": "kz.svg"
	},
	{
		"code": "la",
		"name": "Lao People's Democratic Republic",
		"svg": "la.svg"
	},
	{
		"code": "lb",
		"name": "Lebanon",
		"svg": "lb.svg"
	},
	{
		"code": "lc",
		"name": "Saint Lucia",
		"svg": "lc.svg"
	},
	{
		"code": "li",
		"name": "Liechtenstein",
		"svg": "li.svg"
	},
	{
		"code": "lk",
		"name": "Sri Lanka",
		"svg": "lk.svg"
	},
	{
		"code": "lr",
		"name": "Liberia",
		"svg": "lr.svg"
	},
	{
		"code": "ls",
		"name": "Lesotho",
		"svg": "ls.svg"
	},
	{
		"code": "lt",
		"name": "Lithuania",
		"svg": "lt.svg"
	},
	{
		"code": "lu",
		"name": "Luxembourg",
		"svg": "lu.svg"
	},
	{
		"code": "lv",
		"name": "Latvia",
		"svg": "lv.svg"
	},
	{
		"code": "ly",
		"name": "Libya",
		"svg": "ly.svg"
	},
	{
		"code": "ma",
		"name": "Morocco",
		"svg": "ma.svg"
	},
	{
		"code": "mc",
		"name": "Monaco",
		"svg": "mc.svg"
	},
	{
		"code": "md",
		"name": "Moldova, Republic of",
		"svg": "md.svg"
	},
	{
		"code": "me",
		"name": "Montenegro",
		"svg": "me.svg"
	},
	{
		"code": "mf",
		"name": "Saint Martin (French part)",
		"svg": "mf.svg"
	},
	{
		"code": "mg",
		"name": "Madagascar",
		"svg": "mg.svg"
	},
	{
		"code": "mh",
		"name": "Marshall Islands",
		"svg": "mh.svg"
	},
	{
		"code": "mk",
		"name": "North Macedonia",
		"svg": "mk.svg"
	},
	{
		"code": "ml",
		"name": "Mali",
		"svg": "ml.svg"
	},
	{
		"code": "mm",
		"name": "Myanmar",
		"svg": "mm.svg"
	},
	{
		"code": "mn",
		"name": "Mongolia",
		"svg": "mn.svg"
	},
	{
		"code": "mo",
		"name": "Macao",
		"svg": "mo.svg"
	},
	{
		"code": "mp",
		"name": "Northern Mariana Islands",
		"svg": "mp.svg"
	},
	{
		"code": "mq",
		"name": "Martinique",
		"svg": "mq.svg"
	},
	{
		"code": "mr",
		"name": "Mauritania",
		"svg": "mr.svg"
	},
	{
		"code": "ms",
		"name": "Montserrat",
		"svg": "ms.svg"
	},
	{
		"code": "mt",
		"name": "Malta",
		"svg": "mt.svg"
	},
	{
		"code": "mu",
		"name": "Mauritius",
		"svg": "mu.svg"
	},
	{
		"code": "mv",
		"name": "Maldives",
		"svg": "mv.svg"
	},
	{
		"code": "mw",
		"name": "Malawi",
		"svg": "mw.svg"
	},
	{
		"code": "mx",
		"name": "Mexico",
		"svg": "mx.svg"
	},
	{
		"code": "my",
		"name": "Malaysia",
		"svg": "my.svg"
	},
	{
		"code": "mz",
		"name": "Mozambique",
		"svg": "mz.svg"
	},
	{
		"code": "na",
		"name": "Namibia",
		"svg": "na.svg"
	},
	{
		"code": "nc",
		"name": "New Caledonia",
		"svg": "nc.svg"
	},
	{
		"code": "ne",
		"name": "Niger",
		"svg": "ne.svg"
	},
	{
		"code": "nf",
		"name": "Norfolk Island",
		"svg": "nf.svg"
	},
	{
		"code": "ng",
		"name": "Nigeria",
		"svg": "ng.svg"
	},
	{
		"code": "ni",
		"name": "Nicaragua",
		"svg": "ni.svg"
	},
	{
		"code": "nl",
		"name": "Netherlands",
		"svg": "nl.svg"
	},
	{
		"code": "no",
		"name": "Norway",
		"svg": "no.svg"
	},
	{
		"code": "np",
		"name": "Nepal",
		"svg": "np.svg"
	},
	{
		"code": "nr",
		"name": "Nauru",
		"svg": "nr.svg"
	},
	{
		"code": "nu",
		"name": "Niue",
		"svg": "nu.svg"
	},
	{
		"code": "nz",
		"name": "New Zealand",
		"svg": "nz.svg"
	},
	{
		"code": "om",
		"name": "Oman",
		"svg": "om.svg"
	},
	{
		"code": "pa",
		"name": "Panama",
		"svg": "pa.svg"
	},
	{
		"code": "pe",
		"name": "Peru",
		"svg": "pe.svg"
	},
	{
		"code": "pf",
		"name": "French Polynesia",
		"svg": "pf.svg"
	},
	{
		"code": "pg",
		"name": "Papua New Guinea",
		"svg": "pg.svg"
	},
	{
		"code": "ph",
		"name": "Philippines",
		"svg": "ph.svg"
	},
	{
		"code": "pk",
		"name": "Pakistan",
		"svg": "pk.svg"
	},
	{
		"code": "pl",
		"name": "Poland",
		"svg": "pl.svg"
	},
	{
		"code": "pm",
		"name": "Saint Pierre and Miquelon",
		"svg": "pm.svg"
	},
	{
		"code": "pn",
		"name": "Pitcairn",
		"svg": "pn.svg"
	},
	{
		"code": "pr",
		"name": "Puerto Rico",
		"svg": "pr.svg"
	},
	{
		"code": "ps",
		"name": "Palestine, State of",
		"svg": "ps.svg"
	},
	{
		"code": "pt",
		"name": "Portugal",
		"svg": "pt.svg"
	},
	{
		"code": "pw",
		"name": "Palau",
		"svg": "pw.svg"
	},
	{
		"code": "py",
		"name": "Paraguay",
		"svg": "py.svg"
	},
	{
		"code": "qa",
		"name": "Qatar",
		"svg": "qa.svg"
	},
	{
		"code": "re",
		"name": "R\u00e9union",
		"svg": "re.svg"
	},
	{
		"code": "ro",
		"name": "Romania",
		"svg": "ro.svg"
	},
	{
		"code": "rs",
		"name": "Serbia",
		"svg": "rs.svg"
	},
	{
		"code": "ru",
		"name": "Russian Federation",
		"svg": "ru.svg"
	},
	{
		"code": "rw",
		"name": "Rwanda",
		"svg": "rw.svg"
	},
	{
		"code": "sa",
		"name": "Saudi Arabia",
		"svg": "sa.svg"
	},
	{
		"code": "sb",
		"name": "Solomon Islands",
		"svg": "sb.svg"
	},
	{
		"code": "sc",
		"name": "Seychelles",
		"svg": "sc.svg"
	},
	{
		"code": "sd",
		"name": "Sudan",
		"svg": "sd.svg"
	},
	{
		"code": "se",
		"name": "Sweden",
		"svg": "se.svg"
	},
	{
		"code": "sg",
		"name": "Singapore",
		"svg": "sg.svg"
	},
	{
		"code": "sh",
		"name": "Saint Helena, Ascension and Tristan da Cunha",
		"svg": "sh.svg"
	},
	{
		"code": "si",
		"name": "Slovenia",
		"svg": "si.svg"
	},
	{
		"code": "sj",
		"name": "Svalbard and Jan Mayen",
		"svg": "sj.svg"
	},
	{
		"code": "sk",
		"name": "Slovakia",
		"svg": "sk.svg"
	},
	{
		"code": "sl",
		"name": "Sierra Leone",
		"svg": "sl.svg"
	},
	{
		"code": "sm",
		"name": "San Marino",
		"svg": "sm.svg"
	},
	{
		"code": "sn",
		"name": "Senegal",
		"svg": "sn.svg"
	},
	{
		"code": "so",
		"name": "Somalia",
		"svg": "so.svg"
	},
	{
		"code": "sr",
		"name": "Suriname",
		"svg": "sr.svg"
	},
	{
		"code": "ss",
		"name": "South Sudan",
		"svg": "ss.svg"
	},
	{
		"code": "st",
		"name": "Sao Tome and Principe",
		"svg": "st.svg"
	},
	{
		"code": "sv",
		"name": "El Salvador",
		"svg": "sv.svg"
	},
	{
		"code": "sx",
		"name": "Sint Maarten (Dutch part)",
		"svg": "sx.svg"
	},
	{
		"code": "sy",
		"name": "Syrian Arab Republic",
		"svg": "sy.svg"
	},
	{
		"code": "sz",
		"name": "Eswatini",
		"svg": "sz.svg"
	},
	{
		"code": "tc",
		"name": "Turks and Caicos Islands",
		"svg": "tc.svg"
	},
	{
		"code": "td",
		"name": "Chad",
		"svg": "td.svg"
	},
	{
		"code": "tf",
		"name": "French Southern Territories",
		"svg": "tf.svg"
	},
	{
		"code": "tg",
		"name": "Togo",
		"svg": "tg.svg"
	},
	{
		"code": "th",
		"name": "Thailand",
		"svg": "th.svg"
	},
	{
		"code": "tj",
		"name": "Tajikistan",
		"svg": "tj.svg"
	},
	{
		"code": "tk",
		"name": "Tokelau",
		"svg": "tk.svg"
	},
	{
		"code": "tl",
		"name": "Timor-Leste",
		"svg": "tl.svg"
	},
	{
		"code": "tm",
		"name": "Turkmenistan",
		"svg": "tm.svg"
	},
	{
		"code": "tn",
		"name": "Tunisia",
		"svg": "tn.svg"
	},
	{
		"code": "to",
		"name": "Tonga",
		"svg": "to.svg"
	},
	{
		"code": "tr",
		"name": "Turkey",
		"svg": "tr.svg"
	},
	{
		"code": "tt",
		"name": "Trinidad and Tobago",
		"svg": "tt.svg"
	},
	{
		"code": "tv",
		"name": "Tuvalu",
		"svg": "tv.svg"
	},
	{
		"code": "tw",
		"name": "Taiwan, Province of China",
		"svg": "tw.svg"
	},
	{
		"code": "tz",
		"name": "Tanzania, United Republic of",
		"svg": "tz.svg"
	},
	{
		"code": "ua",
		"name": "Ukraine",
		"svg": "ua.svg"
	},
	{
		"code": "ug",
		"name": "Uganda",
		"svg": "ug.svg"
	},
	{
		"code": "um",
		"name": "United States Minor Outlying Islands",
		"svg": "um.svg"
	},
	{
		"code": "us",
		"name": "United States",
		"svg": "us.svg"
	},
	{
		"code": "uy",
		"name": "Uruguay",
		"svg": "uy.svg"
	},
	{
		"code": "uz",
		"name": "Uzbekistan",
		"svg": "uz.svg"
	},
	{
		"code": "va",
		"name": "Holy See (Vatican City State)",
		"svg": "va.svg"
	},
	{
		"code": "vc",
		"name": "Saint Vincent and the Grenadines",
		"svg": "vc.svg"
	},
	{
		"code": "ve",
		"name": "Venezuela, Bolivarian Republic of",
		"svg": "ve.svg"
	},
	{
		"code": "vg",
		"name": "Virgin Islands, British",
		"svg": "vg.svg"
	},
	{
		"code": "vi",
		"name": "Virgin Islands, U.S.",
		"svg": "vi.svg"
	},
	{
		"code": "vn",
		"name": "Viet Nam",
		"svg": "vn.svg"
	},
	{
		"code": "vu",
		"name": "Vanuatu",
		"svg": "vu.svg"
	},
	{
		"code": "wf",
		"name": "Wallis and Futuna",
		"svg": "wf.svg"
	},
	{
		"code": "ws",
		"name": "Samoa",
		"svg": "ws.svg"
	},
	{
		"code": "xk",
		"name": "Kosovo",
		"svg": "xk.svg"
	},
	{
		"code": "ye",
		"name": "Yemen",
		"svg": "ye.svg"
	},
	{
		"code": "yt",
		"name": "Mayotte",
		"svg": "yt.svg"
	},
	{
		"code": "za",
		"name": "South Africa",
		"svg": "za.svg"
	},
	{
		"code": "zm",
		"name": "Zambia",
		"svg": "zm.svg"
	},
	{
		"code": "zw",
		"name": "Zimbabwe",
		"svg": "zw.svg"
	}
];
 class CountrySelector {
	constructor(selector, options = {}) {
		this.element = document.querySelector(selector);
		this.defaultCountry = options.defaultCountry || 'US';
		this.flagsBasePath = options.flagsPath || './flags/';
		this.countries = [];
		this.init();
	}

	async init() {
		this.countries = countriesData.map(country => ({
			name: country.name,
			code: country.code.toUpperCase(),
			flag: `${this.flagsBasePath}${country.svg}`
		})).sort((a, b) => a.name.localeCompare(b.name));
		this.createDropdown();
	}

	createDropdown() {
		const wrapper = document.createElement('div');
		wrapper.classList.add('cswf_country-selector-wrapper');

		const flagWrapper = document.createElement('div');
		flagWrapper.classList.add('cswf_flag-wrapper');
		const flagImg = document.createElement('img');
		flagImg.classList.add('cswf_flag');
		flagImg.alt = 'flag';
		flagWrapper.appendChild(flagImg);

		const codeWrapper = document.createElement('div');
		codeWrapper.classList.add('cswf_country-code-wrapper');
		const countryCode = document.createElement('span');
		countryCode.classList.add('cswf_country-code');
		const arrowIcon = document.createElement('span');
		arrowIcon.classList.add('cswf_arrow-icon');
		arrowIcon.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
		codeWrapper.appendChild(countryCode);
		codeWrapper.appendChild(arrowIcon);

		const dropdownContainer = document.createElement('div');
		dropdownContainer.classList.add('cswf_dropdown-container');

		const searchInput = document.createElement('input');
		searchInput.classList.add('cswf_search-input');
		searchInput.type = 'text';
		searchInput.placeholder = 'Search country...';

		const dropdownList = document.createElement('ul');
		dropdownList.classList.add('cswf_dropdown-list');

		dropdownContainer.appendChild(searchInput);
		dropdownContainer.appendChild(dropdownList);

		this.populateDropdown(dropdownList);

		searchInput.addEventListener('input', (e) => {
			const searchTerm = e.target.value.toLowerCase();
			this.filterCountries(searchTerm, dropdownList);
		});

		searchInput.addEventListener('click', (e) => {
			e.stopPropagation();
		});

		wrapper.addEventListener('click', () => {
			const isOpen = dropdownContainer.classList.contains('show');
			wrapper.classList.toggle('show', !isOpen);
			dropdownContainer.classList.toggle('show', !isOpen);
		});

		wrapper.appendChild(flagWrapper);
		wrapper.appendChild(codeWrapper);
		wrapper.appendChild(dropdownContainer);
		this.element.appendChild(wrapper);

		this.setCountry(this.defaultCountry);

		document.addEventListener('click', (event) => {
			if (!wrapper.contains(event.target)) {
				wrapper.classList.remove('show');
				dropdownContainer.classList.remove('show');
			}
		});
	}

	populateDropdown(dropdownList) {
		dropdownList.innerHTML = '';
		this.countries.forEach(country => {
			const listItem = document.createElement('li');
			listItem.textContent = country.name;
			listItem.setAttribute('data-code', country.code);
			listItem.setAttribute('data-flag', country.flag);

			listItem.addEventListener('click', () => {
				this.setCountry(country.code);
			});

			dropdownList.appendChild(listItem);
		});
	}

	filterCountries(searchTerm, dropdownList) {
		const filteredCountries = this.countries.filter(country =>
			country.name.toLowerCase().includes(searchTerm)
		);
		dropdownList.innerHTML = '';

		filteredCountries.forEach(country => {
			const listItem = document.createElement('li');
			listItem.textContent = country.name;
			listItem.setAttribute('data-code', country.code);
			listItem.setAttribute('data-flag', country.flag);

			listItem.addEventListener('click', () => {
				this.setCountry(country.code);
			});

			dropdownList.appendChild(listItem);
		});
	}

	setCountry(code) {
		const selectedCountry = this.countries.find(c => c.code === code.toUpperCase());
		if (selectedCountry) {
			this.element.querySelector('.cswf_flag').src = selectedCountry.flag;
			this.element.querySelector('.cswf_country-code').textContent = selectedCountry.code;
		}
	}
}
