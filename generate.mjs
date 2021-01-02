import Podcast from "podcast";

/* lets create an rss feed */
const feed = new Podcast({
  title: "title",
  description: "description",
  feed_url: "https://jlarky.github.io/mishka-knizhka/feed.rss",
  site_url: "https://jlarky.github.io/mishka-knizhka",
  image_url:
    "https://mishka-knizhka.ru/wp-content/uploads/2018/03/feat-audio-skazka-o-care-saltane10.jpg",
  docs: "http://example.com/rss/docs.html",
  author: "Dylan Greene",
  managingEditor: "Dylan Greene",
  webMaster: "Dylan Greene",
  copyright: "2013 Dylan Greene",
  language: "en",
  categories: ["Category 1", "Category 2", "Category 3"],
  pubDate: "May 20, 2012 04:00:00 GMT",
  ttl: "60",
  itunesAuthor: "Max Nowack",
  itunesSubtitle: "I am a sub title",
  itunesSummary: "I am a summary",
  itunesOwner: { name: "Max Nowack", email: "max@unsou.de" },
  itunesExplicit: false,
  itunesCategory: [
    {
      text: "Entertainment",
      subcats: [
        {
          text: "Television",
        },
      ],
    },
  ],
  itunesImage:
    "https://mishka-knizhka.ru/wp-content/uploads/2018/03/feat-audio-skazka-o-care-saltane10.jpg",
});

feed.addItem({
  title: "Сказка о царе Салтане",
  description: "use this for the content. It can include html.",
  url: "http://example.com/article4?this&that", // link to the item
  guid: "1123", // optional - defaults to url
  categories: ["Category 1", "Category 2", "Category 3", "Category 4"], // optional - array of item categories
  author: "Guest Author", // optional - defaults to feed author property
  date: "May 27, 2012", // any format that js Date can parse.
  lat: 33.417974, //optional latitude field for GeoRSS
  long: -111.933231, //optional longitude field for GeoRSS
  enclosure: {
    url:
      "https://mishka-knizhka.ru/wp-content/uploads/2018/03/skazka-o-tsare-saltane.mp3",
    size: 25684128,
    type: "audio/mpeg",
  }, // optional enclosure
  itunesAuthor: "Max Nowack",
  itunesExplicit: false,
  itunesSubtitle: "I am a sub title",
  itunesSummary: "I am a summary",
  itunesDuration: 2902,
  itunesNewFeedUrl: "https://newlocation.com/example.rss",
});

// cache the xml to send to clients
const xml = feed.buildXml();

console.log(xml);
