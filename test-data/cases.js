// File: test-data/cases.js
// Playwright data-driven test cases for swifttranslator.com (Singlish -> Sinhala)

const { expect } = require("@playwright/test");

module.exports = [
  
  // POSITIVE FUNCTIONAL (24)

  {
    id: "Pos_Fun_0001",
    name: "Simple Daily Question",
    type: "POS",
    length: "S",
    input: "oyaata heta vaedak thiyenavadha?",
    expected: "ඔයාට හෙට වැඩක් තියෙනවද?",
    covered: "Daily language usage → Interrogative (question) → S → Accuracy validation",
  },
  
  {
    id: "Pos_Fun_0002",
    name: "Future Plan Sentense",
    type: "POS",
    length: "S",
    input: "api heta science class yamu.",
    expected: "අපි හෙට science class යමු.",
    covered: "Daily language usage → Future tense → S → Accuracy validation",
  },

    {
    id: "Pos_Fun_0003",
    name: "Polite Command",
    type: "POS",
    length: "S",
    input: "karuNakaralaa mata karadhara karannepaa.",
    expected: "කරුණකරලා මට කරදර කරන්නෙපා.",
    covered: "Greeting / request / response → Imperative → S → Accuracy validation",
  },

  {
    id: "Pos_Fun_0004",
    name: "Compound Sentence",
    type: "POS",
    length: "M",
    input: "mata party ekata enna puluvan. EEth amma permission dhevidha dhanne nae.",
    expected: "මට party එකට එන්න පුලුවන්. ඒත් අම්ම permission දෙවිද දන්නෙ නැ.",
    covered: "Daily language usage → Compound sentence → M → Accuracy validation",
  },

  {
    id: "Pos_Fun_0005",
    name: "Mixed english with time",
    type: "POS",
    length: "M",
    input: "oyaa lecture eka ivara velaa project group discussion ekata  enavadha?",
    expected: "ඔයා lecture එක ඉවර වෙලා project group discussion එකට  එනවද?",
    covered: "Mixed Singlish + English → Interrogative → M → Robustness validation",
  },

  {
    id: "Pos_Fun_0006",
    name: "Currency usage",
    type: "POS",
    length: "S",
    input: "meeka Rs.8000 k venavaa.",
    expected: "මේක Rs.8000 ක් වෙනවා.",
    covered: "Numbers & punctuation → Simple sentence → S → Formatting validation",
  },

  {
    id: "Pos_Fun_0007",
    name: "Place name sentence",
    type: "POS",
    length: "M",
    input: "Kandy vala riya anathurak velaa paara vahalaa thiyennee",
    expected: "Kandy වල රිය අනතුරක් වෙලා පාර වහලා තියෙන්නේ",
    covered: "Names / places → Complex sentence → M → Robustness validation",
  },

  {
    id: "Pos_Fun_0008",
    name: "Plural command",
    type: "POS",
    length: "M",
    input: "oyaala haemooma heta homework karagena enna.",
    expected: "ඔයාල හැමෝම හෙට homework කරගෙන එන්න.",
    covered: "Daily language usage → Plural form → M → Accuracy validation",
  },

  {
    id: "Pos_Fun_0009",
    name: "English technical term with WhatsApp",
    type: "POS",
    length: "S",
    input: "api WhatsApp message ekak dhaamu.",
    expected: "අපි WhatsApp message එකක් දාමු.",
    covered: "Mixed Singlish + English → Simple sentence → S → Robustness validation",
  },

  {
    id: "Pos_Fun_0010",
    name: "Informal praise",
    type: "POS",
    length: "S",
    input: "anee oyaa eeka hariyatama karalaa.",
    expected: "අනේ ඔයා ඒක හරියටම කරලා.",
    covered: "Daily language usage → Simple sentence → S → Accuracy validation",
  },

  {
    id: "Pos_Fun_0011",
    name: "Past tense simple praise",
    type: "POS",
    length: "S",
    input: "panthiya hoDHAta igaennuvaa",
    expected: "පන්තිය හොඳට ඉගැන්නුවා",
    covered: "Daily language usage → Past tense → S → Accuracy validation",
  },

  {
    id: "Pos_Fun_0012",
    name: "Negative form",
    type: "POS",
    length: "S",
    input: "mama ehema karannee naehae",
    expected: "මම එහෙම කරන්නේ නැහැ",
    covered: "Daily language usage → Negation → S → Accuracy validation",
  },

  {
    id: "Pos_Fun_0013",
    name: "Question with option",
    type: "POS",
    length: "M",
    input: "oyaata mama Message ekak dhaannadha, call ekak gannadha?",
    expected: "ඔයාට මම Message එකක් දාන්නද, call එකක් ගන්නද?",
    covered: "Daily language usage → Interrogative → M → Accuracy validation",
  },

  {
    id: "Pos_Fun_0014",
    name: "Instruction sentence",
    type: "POS",
    length: "M",
    input: "mee potha kiyavalaa labana sathiyee baara dhenna.",
    expected: "මේ පොත කියවලා ලබන සතියේ බාර දෙන්න.",
    covered: "Daily language usage → Imperative → M → Accuracy validation",
  },

  {
    id: "Pos_Fun_0015",
    name: "Mixed English instruction",
    type: "POS",
    length: "S",
    input: " office ekata vahaama enna.",
    expected: " office එකට වහාම එන්න.",
    covered: "Mixed Singlish + English → Imperative → S → Robustness validation",
  },

  {
    id: "Pos_Fun_0016",
    name: "Conditional sentence",
    type: "POS",
    length: "M",
    input: "oyaa meka havas venna kalin ivara karanavanam mama potha dhennam",
    expected: "ඔයා මෙක හවස් වෙන්න කලින් ඉවර කරනවනම් මම පොත දෙන්නම්",
    covered: "Daily language usage → Complex sentence → M → Accuracy validation",
  },

  {
    id: "Pos_Fun_0017",
    name: "Short greeting",
    type: "POS",
    length: "S",
    input: "suba raathriyak!",
    expected: "සුබ රාත්‍රියක්!",
    covered: "Greeting / request / response → Simple sentence → S → Accuracy validation",
  },

  {
    id: "Pos_Fun_0018",
    name: "Emotional response",
    type: "POS",
    length: "S",
    input: "e vidhihata hoDHAyi",
    expected: "එ විදිහට හොඳයි",
    covered: "Daily language usage → Simple sentence → S → Accuracy validation",
  },

  {
    id: "Pos_Fun_0019",
    name: "Convert long mixed-language daily activities",
    type: "POS",
    length: "L",
    input: "adha mama udhee 10AM vedhdhi campus ekata giyaa. apita 10.30AM lecture ekak thibune. eka 12.30PM ivara velaa api lunch ganna canteen ekata giyaa. lunch aragena bording ekata enna hadhanakotama message ekak aavaa Lab Session ekak reschedule karalaa kiyalaa. dhaen api mee ekata yana gaman inne",
    expected: "අද මම උදේ 10AM වෙද්දි campus එකට ගියා. අපිට 10.30AM lecture එකක් තිබුනෙ. එක 12.30PM ඉවර වෙලා අපි lunch ගන්න canteen එකට ගියා. lunch අරගෙන බොර්ඩින්ග් එකට එන්න හදනකොටම message එකක් ආවා Lab Session එකක් reschedule කරලා කියලා. දැන් අපි මේ එකට යන ගමන් ඉන්නේ",
    covered: "Long paragraph → Complex sentence → L → Robustness validation",
  },

  {
    id: "Pos_Fun_0020",
    name: "Future tense",
    type: "POS",
    length: "S",
    input: "mama heta maathara yanavaa",
    expected: "මම හෙට මාතර යනවා",
    covered: "Daily language usage → Future tense → S → Accuracy validation",
  },

  {
    id: "Pos_Fun_0021",
    name: "Repetition emphasis",
    type: "POS",
    length: "S",
    input: "tika tika iganaganna.",
    expected: "ටික ටික ඉගනගන්න.",
    covered: "Word combination → Simple sentence → S → Accuracy validation",
  },

  {
    id: "Pos_Fun_0022",
    name: "Short feeling",
    type: "POS",
    length: "S",
    input: "apee puus paetiyaa lassanayi",
    expected: "අපේ පූස් පැටියා ලස්සනයි",
    covered: "Daily language usage → Simple sentence → S → Accuracy validation",
  },

  {
    id: "Pos_Fun_0023",
    name: "English abbreviations and short forms",
    type: "POS",
    length: "S",
    input: "OTP ekak SMS karalaa evanna.",
    expected: "OTP එකක් SMS කරලා එවන්න.",
    covered: "Mixed Singlish + English → Imperative → S → Robustness validation",
  },

  {
    id: "Pos_Fun_0024",
    name: "Date and Time",
    type: "POS",
    length: "S",
    input: "2026.02.26 apee gedhara party ekata 7 P.M enna",
    expected: "2026.02.26 අපේ ගෙදර party එකට 7 P.M එන්න",
    covered: "Numbers & punctuation → Imperative → S → Formatting validation",
  },

  
  // NEGATIVE FUNCTIONAL (10)
  
  {
    id: "Neg_Fun_0001",
    name: "Joined words",
    type: "NEG",
    length: "S",
    input: "mamagedharayanavaa",
    expected: "මම ගෙදර යනවා",
    covered: "Joined words → Simple sentence → S → Robustness validation",
  },

  {
    id: "Neg_Fun_0002",
    name: "Slang-heavy short sentence",
    type: "NEG",
    length: "S",
    input: "ela ban mokakdha scene eka",
    expected: "එල බන් , මොකක්ද scene එක?",
    covered: "Slang / informal language → Interrogative → S → Robustness validation",
  },

  {
    id: "Neg_Fun_0003",
    name: "Excess punctuation marks",
    type: "NEG",
    length: "S",
    input: "mama gedhara yanavaa!!!",
    expected: "මම ගෙදර යනවා",
    covered: "Symbol noise → Simple sentence → S → Robustness validation",
  },

  {
    id: "Neg_Fun_0004",
    name: "Misspelled negation word",
    type: "NEG",
    length: "S",
    input: "mata eeka karanna ba",
    expected: "මට ඒක කරන්න බෑ",
    covered: "Typo handling → Negation → S → Robustness validation",
  },

  {
    id: "Neg_Fun_0005",
    name: "Mixed Singlish + English with typos",
    type: "NEG",
    length: "M",
    input: "mama offce giyaa Zoom ekata join venna namuth meeting eka hariyata therune naee.",
    expected: "මම office ගියා Zoom එකට join වෙන්න නමුත් meeting එක හරියට තෙරුනෙ නෑ.",
    covered: "Typo handling → Complex sentence → M → Robustness validation",
  },

  {
    id: "Neg_Fun_0006",
    name: "Multiple consecutive spaces",
    type: "NEG",
    length: "M",
    input: "mama     gedhara     giyaata     passe     amma     ekka     kathaa kalaa",
    expected: "මම ගෙදර ගියාට පස්සෙ අම්ම     එක්ක කතා කලා",
    covered: "Multiple space stress → Complex sentence → M → Formatting validation",
  },

  {
    id: "Neg_Fun_0007",
    name: "Incomplete sentence structure",
    type: "NEG",
    length: "M",
    input: "mama yanna hithan inne namuth heta monavadha venne kiyala\n",
    expected: "මම යන්න හිතන් ඉන්නේ නමුත් හෙට මොනවද වෙන්නෙ කියල දන්නෙ නෑ\n",
    covered: "Incomplete structure → Complex sentence → M → Robustness validation",
  },

  {
    id: "Neg_Fun_0008",
    name: "Random unsupported symbols",
    type: "NEG",
    length: "M",
    input: "mama ##@@ gedhara giyaa % passe amma ekka kathaa kalaa\n",
    expected: "මම අද ගෙදර ගියාට පස්සෙ අම්ම එක්ක කතා කලා\n\n",
    covered: "Symbol noise → Complex sentence → M → Robustness validation",
  },

  {
    id: "Neg_Fun_0009",
    name: "Convert long unstructured paragraph without punctuation",
    type: "NEG",
    length: "L",
    input: "adha mama kaemps giyaa udhee lecture ekakata attend venna lecture ekata yanakota tikak parakku unaa mokadha bus eke crowd eka vaedi class eka atharathuredhi lecturer assignment eka gaena kiyala dhunna saha next week deadline eka kiyala kivvaa passe yaluvo ekka canteen ekee lunch eka gaththaa iita passe library ekata gihin notes balala, group discussion ekakata join unaa raee venne kalin hostel ekata aavaa aevilla kaalaa nidhaagaththaa",
    expected: "අද මම කැම්ප්ස් ගියා උදේ lecture එකකට attend වෙන්න. lecture එකට යනකොට ටිකක් පරක්කු උනා, මොකද bus eke crowd එක වැඩි. class එක අතරතුරෙදි lecturer assignment එක ගැන කියල දුන්න සහ next week deadline එක කියල කිව්වා. පස්සෙ යලුවො එක්ක canteen එකේ lunch එක ගත්තා. ඊට පස්සෙ library එකට ගිහින් notes බලල, group discussion එකකට join උනා. රෑ වෙන්නෙ කලින් hostel එකට ආවා, ඇවිල්ල කාලා නිදාගත්තා.",
    covered: "Long paragraph → Complex sentence → L → Robustness validation",
  },

  {
    id: "Neg_Fun_0010",
    name: "Question sentence without question mark",
    type: "NEG",
    length: "S",
    input: "oyaa hodhindha",
    expected: "ඔයා හොදින්ද?",
    covered: "Missing punctuation → Interrogative → S → Formatting validation",
  },

  
  // POSITIVE UI (1)
  
  {
    id: "Pos_UI_0001",
    name: "Sinhala output updates automatically in real-time",
    type: "POS_UI",
    length: "S",
    input: "mama iiyee office giyaa.",
    expected: "මම ඊයේ office ගියා.",
    uiAction: "REAL_TIME_UPDATE",
    covered: "UI behavior → Real-time output rendering → S → Responsiveness validation",
  },

];