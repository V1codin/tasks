export default class Req {
  constructor(setts) {
    this.api_key = setts.API_KEY;
    // this.base_url = setts.URL;
    this.base_url = "https://api.themoviedb.org/4/";
    this.image_url = "https://image.tmdb.org/t/p/";
    this.request_token = setts.REQUEST_TOKEN;

    this.config_url = setts.CONFIG_URL;
    this.search_url = setts.SEARCH_URL;

    this.builded_url = this.base_url;

    // this.clearUrl();
  }
  send() {
    return fetch(this.builded_url);
  }
  getListByPopularity(page, stateFn) {
    return async () => {
      try {
        const res = await fetch(
          `${this.base_url}discover/movie?sort_by=popularity.desc&page=${page}&language=ru`,
          {
            headers: {
              Authorization: `Bearer ${this.request_token}`,
              "Content-Type": "application/json;charset=utf-8",
            },
          }
        );
        const data = await res.json();
        console.log("data: ", data);
        stateFn({
          ...data,
        });
      } catch (e) {
        console.log(e);
      }
    };
  }
}
/*
class First {
  constructor(setts) {
    this.api_key = setts.API_KEY;
    this.base_url = setts.URL;
    this.config_url = setts.CONFIG_URL;
    this.search_url = setts.SEARCH_URL;

    this.images_config = null;
    this.builded_url = this.base_url;

    this.clearUrl();
    this.configImageRequest();
  }
  send() {
    return fetch(this.builded_url);
  }

  setCatalog(catalog) {
    this.builded_url += catalog;
    return this;
  }

  addApiKey() {
    this.builded_url += `?api_key=${this.api_key}`;
    return this;
  }
  addFilmNumber(num) {
    this.builded_url += "/" + num;
    return this;
  }
  addLanguage(languageAbbreviateion) {
    if (/([a-z]{2})-([A-Z]{2})/.test(languageAbbreviateion)) {
      this.builded_url += `&language=${languageAbbreviateion}`;
      return this;
    } else {
      throw new Error("Incorrect Language");
    }
  }

  configImageRequest() {
    fetch(`${this.config_url}?api_key=${this.api_key}`)
      .then((r) => {
        if (r.status >= 200 && r.status < 300) {
          return r.json();
        } else {
          throw new Error(`Ошибка ${r.status}`);
        }
      })
      .then((a) => {
        this.images_config = a;
        // console.log("this.images_config: ", this.images_config);
        this.clearUrl();
      });
  }

  addToLink(...strings) {
    this.builded_url += strings.join(",");
    return this;
  }

  multipleDataRequest() {
    this.builded_url += "&append_to_response=";
    return this;
  }

  searchByKeyWords(...keyWords) {
    return fetch(
      `${this.search_url}/movie?api_key=${this.api_key}&query=${keyWords.join(
        "+"
      )}`
    ).then((r) => {
      if (r.status >= 200 && r.status < 300) {
        return r.json();
      } else {
        throw new Error(`Ошибка ${r.status}`);
      }
    });
  }

  clearUrl() {
    this.builded_url = this.base_url;
  }
}
*/

/*
let filmNumber = 2;
const api_key = "b52392c01367247b75d6e6d0d642001a";
const apiForUrl = `?api_key=${api_key}`;

const url = `https://api.themoviedb.org/3/movie/${filmNumber}`;


const request = fetch(url + apiForUrl + "&language=ru");

 request.then((r) => r.json()).then((q) => console.log(q));

 */
