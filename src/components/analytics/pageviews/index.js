const periods = [
  { id: "_1", text: "Today", width: "35px", active: false },
  { id: "_2", text: "Yesterday", width: "55px", active: false },
  { id: "_3", text: "Week", width: "31px", active: false },
  { id: "_4", text: "Month", width: "35px", active: true },
  { id: "_5", text: "Quarter", width: "42px", active: false },
  { id: "_6", text: "Year", width: "25px", active: false },
];

const pagereviewData = [
  {
    id: "_1",
    page: "page",

    title: " /Defect Arrival Rate",
    pageReview_data: "872,337 (15.82%)",
    uniquePagreview: "574,332 (15.33%)",
    average_ontime: "005:43",
    extrance: "802,873 (16.75%)",
    exit: "29.56%",
    pageValue: "$1,093 (5.11%) ",
  },
  {
    id: "_2",
    title: " /fiexd rate",
    pageReview_data: "803,792 (14.39%)",
    uniquePagreview: "456,792 (13.93%)",
    average_ontime: "00:05:24",
    extrance: "793,982 (15.64%)",
    exit: "76.13%",
    pageValue: "$6,792 (36.16%)",
  },

  {
    id: "_3",
    title: " /cycle time",
    pageReview_data: "740,702 (13.46%)",
    uniquePagreview: "405,860 (13.25%)",
    average_ontime: "00:04:36",
    extrance: "684,873(14.33%)",
    exit: "41.54%",
    pageValue: "$702 (3.47%)",
  },
  {
    id: "_4",
    title: " /lead time",
    pageReview_data: "676,659 (10.29%)",
    uniquePagreview: "340,765 (11.70%)",
    average_ontime: "00:04:12",
    extrance: "638,982 (13.02%)",
    exit: "46.42%",
    pageValue: "$2,659 (11.64%)",
  },
  {
    id: "_5",
    title: "/new features",
    pageReview_data: "508,837 (7.74%)",
    uniquePagreview: "317,543 (10.66%)",
    average_ontime: "00:04:11",
    extrance: "555,982 (10.44%)",
    exit: "27.40%",
    pageValue: "$4,508 (23.43%)",
  },
  {
    id: "_6",
    title: "/ready features",
    pageReview_data: "495,938 (7.38%)",
    uniquePagreview: "310,554 (10.58%)",
    average_ontime: "00:02:56",
    extrance: "297,303 (6.07%)",
    exit: "28.89%",
    pageValue: "$495 (7.38%)",
  },
];

const pageStatistic = [
  {
    id: 1,
    forum: "page",
  },
  {
    id: 2,
    forum: "Pageviews",
    forumCount: "356,928",
    chart: "./pageviews/Chart.png",
  },
  {
    id: 3,
    forum: " Unique pageviews",
    forumCount: "275,588",
    chart: "./pageviews/Chart-2.png",
  },
  {
    id: 4,
    forum: "Avg. time on page",
    forumCount: "00:03:51",
    chart: "./pageviews/Chart-3.png",
  },
  {
    id: 5,
    forum: "Extrances",
    forumCount: "315,643",
    chart: "./pageviews/Chart-4.png",
  },
  {
    id: 6,
    forum: "% Exit",
    forumCount: "39,84%",
    chart: "./pageviews/Chart-5.png",
  },
  {
    id: 7,
    forum: "Page value",
    forumCount: "$19,983",
    chart: "./pageviews/Chart-6.png",
  },
];

export { periods, pagereviewData, pageStatistic };
