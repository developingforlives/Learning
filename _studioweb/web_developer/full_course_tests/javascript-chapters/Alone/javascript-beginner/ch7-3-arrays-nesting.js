let students = [["Thomas", 92, 90],
["Roger", 99, 100],
["Amber", 81, 85],
["Jennifer", 69, 88]
];
document.write(students[0][0] + "<br><br>");
document.write(students[1][2] + "<br><br>");
document.write(students[0][0][3] + "<br><br>");

document.write(students.length + " items are inside of the students array<br><br>");


let i = 0;
let j = 0;
for (i = 0; i < students.length; i++) {
   for (j = 0; j < students[i].length; j++) {
      document.write("students[" + i + "][" + j + "] = " + students[i][j] + "<br><br>");
   }
}


let students2 = [["Thomas", 92, 90],
["Roger", 99, 100],
["Amber", 81, 85],
["Jennifer", 69, 88]
];
let l = 0;
let m = 0;
for (l = 0; l < students2.length; l++) {
   for (m = 0; m < students2[l].length; m++) {
      if (m === 0) {
         document.write(students2[l][m] + ": ");
      } else if (m === students2[l].length - 1) {
         document.write(students2[l][m] + "<br>");
      } else {
         continue;
      }
   }
}

document.write("<h1 style='color: blue'>Exercise</h1>");

computerParts = [["Monitors", "LCD Screens", "Vibrant Colors"],
["Motherboards", "Fast"],
["Chips", "Pentium", "Very Fast"],
["Hard Drives", "100-500 GB", "Fast Reading"],
["DVD-ROMs", "Burn CDs", "Burn DVDs", "Listen to both!"],
["Cases", "All Sizes", "Choice of Colors"],
["Power Supplies", "We can get one for any computer!"],
];

document.write(computerParts.length + " items are inside of the computerParts array<br><br>");

let n = 0;
let o = 0;
for (n = 0; n < computerParts.length; n++) {
   for (o = 0; o < computerParts[l].length; o++) {
      if (o === 0) {
         document.write(computerParts[n][o] + ": ");
      } else if (o === computerParts[n].length - 1) {
         document.write(computerParts[n][o] + "<br>");
      } else {
         continue;
      }
   }
}