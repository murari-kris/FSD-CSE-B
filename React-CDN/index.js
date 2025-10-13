// Array of book data
const books = [
  { imageSrc: "books-stack_10220514.png", price: "150/-" },
  { imageSrc: "image2.jpg", price: "200/-" },
  { imageSrc: "image3.png", price: "250/-" }
];

const bookCards = books.map(book =>
  React.createElement(
    "div",
    { className: "card" },
    React.createElement("img", {
      src: book.imageSrc,
      width: "150",
      height: "150",
      alt: "Book Image"
    }),
    React.createElement("h4", null, "Price: " + book.price)
  )
);


const container = React.createElement("div", null, bookCards);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
