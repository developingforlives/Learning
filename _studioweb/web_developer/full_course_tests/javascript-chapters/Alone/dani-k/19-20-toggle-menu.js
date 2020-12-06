let toggleNavStatus = true; //this means to me that, yes, it is true that the toggleNavStatus is hidden by default

let toggleNav = function () {
   let getSidebar = document.querySelector(".nav-sidebar");
   let getSidebarUl = document.querySelector(".nav-sidebar ul");
   let getSidebarTitle = document.querySelector(".nav-sidebar span");
   let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); //This select all items and not only the first one

   if (toggleNavStatus === true) {
      getSidebarUl.style.visibility = "visible";
      getSidebar.style.width = "280px";
      getSidebarTitle.style.opacity = "0.6";

      let arrayLength = getSidebarLinks.length;
      console.log(arrayLength); //I just put this to show
      for (let i = 0; i < arrayLength; i++) {
         console.log(i); //I just put this to show
         getSidebarLinks[i].style.opacity = "1";
      }
      toggleNavStatus = false;
   }

   else if (toggleNavStatus === false) {
      getSidebarUl.style.visibility = "hidden";
      getSidebar.style.width = "60px";
      getSidebarTitle.style.opacity = "0";

      let arrayLength = getSidebarLinks.length;
      for (let i = 0; i < arrayLength; i++) {
         getSidebarLinks[i].style.opacity = "0";
      }
      toggleNavStatus = true;
   }
}