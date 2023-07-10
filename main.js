const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      url: "https://www.vuemastery.com",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
    };
  },
});
