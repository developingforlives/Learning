var myMovie = {
   title: "The Social Network",
   releaseYear: "2010",
   duration: 2.0,
   actors: [
      {
         name: "Jessie Eisenberg",
         birthday: new Date("October 5, 1983"),
         hometown: "New York, New York",
      },
      {
         name: "Ronnie Mara",
         birthday: new Date("April 17, 1985"),
         hometown: "Bedford New York",
      },
   ]
}

document.write(myMovie);

document.write("<br><hr><br>");

document.write(myMovie.title);

document.write("<br><hr><br>");

document.write(myMovie.actors[0].name);

document.write("<br><hr><br>");

document.write("<h1 style='color: blue'>" + myMovie.actors[0].name + "</h1>");

document.write("<h1 style='color: blue'>" + myMovie.actors[0].birthday + "</h1>");

document.write("<h1 style='color: blue'>" + myMovie.actors[0].hometown + "</h1>");

document.write("<br><hr><br>");

document.write("<h1 style='color: red'>" + myMovie.actors[0].name + "</h1>");

document.write("<h1 style='color: red'>" + myMovie.actors[0].birthday + "</h1>");

document.write("<h1 style='color: red'>" + myMovie.actors[0].hometown + "</h1>");