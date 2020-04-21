export default {
  product: "Socks",
  description: "This is a pair of amazing socks",
  onSale: true,
  selectedProduct : 0,
  variants: [
    {
      inventory: 15,
      carted: 0,
      color: "green",
      image: {
        url: "./assets/images/vmSocks-green-onWhite.jpg",
        alt: "green socks"
        },
    },
    {
      inventory: 5,
      carted: 0,
      color: "blue",
      image: {
        url: "./assets/images/vmSocks-blue-onWhite.jpg",
        alt: "green socks"
        },
    }
  ],
  sizes: [ "S", "M", "L"],
  details: [ "S", "M", "L"],
  cart: 0,
  premium: true

}