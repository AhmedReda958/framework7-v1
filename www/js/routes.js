var routes = [
  {
    path: "/",
    componentUrl: "./pages/home.html",
  },
  {
    path: "/popular/",
    componentUrl: "./pages/popular.html",
  },
  {
    path: "/product/:id/",
    componentUrl: "./pages/product.html",
  },
  {
    path: "/settings/",
    url: "./pages/settings.html",
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: "(.*)",
    url: "./pages/404.html",
  },
];
