export default {
  product: "Socks",
  description: "This is a pair of amazing socks",
  onSale: true,
  selectedProduct : 0,
  variants: [
    {
      id: 1000,
      inventory: 15,
      color: "green",
      image: {
        url: "./assets/images/vmSocks-green-onWhite.jpg",
        alt: "green socks"
        },
    },
    {
      id: 1001,
      inventory: 5,
      color: "blue",
      image: {
        url: "./assets/images/vmSocks-blue-onWhite.jpg",
        alt: "green socks"
        },
    }
  ],
  sizes: [ "S", "M", "L"],
  details: ['80% cotton', '20% polyester', 'Gender-neutral'],
  premium: true
}