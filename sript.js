const SearchFrom = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchBtn = document.getElementById("search-btn");
const SearchResult = document.getElementById("search-Result");
const ShowMore = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = SearchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=tgJ2q16x5yYc9t1ifxuUNZfZxvNt_rh4Vc5bpgbTC5A`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  if (page == 1) {
    SearchResult.innerHTML = "";
  }

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_";

    imageLink.appendChild(image);
    SearchResult.appendChild(imageLink);
  });
  ShowMore.style.display = "block";
}

SearchFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

ShowMore.addEventListener("click", () => {
  page++;
  searchImage();
});

var sideMenu = document.getElementById("sideMenu");
function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}


// ========---------------cotect form------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbyx9GHDj9pByhGU8fJIIRAdFe_nd1nOuv37svUC0TBLdWKiGWWMsUfAO8m-QK6xe2nh/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Massage sent successfully"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})