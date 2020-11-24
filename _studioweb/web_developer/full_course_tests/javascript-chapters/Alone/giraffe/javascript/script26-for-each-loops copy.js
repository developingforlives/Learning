var books = [
   {
      title: "Harry Potter",
      author: "JK Rowling",
      pages: 300,
   },
   {
      title: "Green Eggs & Ham",
      author: "Dr. Seuss",
      pages: 25,
   }
];

var friends = ["Oscar", "Angela", "Kevin"];

friends.forEach(function (friend) {
   document.write(friend + "<br>");
});


document.write("<br><hr><br>");


books.forEach(function (book) {
   document.write(book.title + "<br>");
   document.write(book.author + "<br><br>");
});