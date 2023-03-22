var $$ = Dom7;

var app = new Framework7({
  name: "My App", // App name
  theme: "auto", // Automatic theme detection
  el: "#app", // App root element

  // App store
  store: store,
  // App routes
  routes: routes,
});

$$(document).on("page:init", function (e) {
  // e.preloader.show();
  fetch("https://dummyjson.com/products?limit=100")
    .then((res) => res.json())
    .then((res) => {
      store.dispatch("addProduct", res.products);
      // e.preloader.hide();
    });
});
