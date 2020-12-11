let GameManager = {
   setGameStart: function (playerType) {
      this.resetPlayer(playerType);
      this.setPreFight();
   },
   resetPlayer: function (playerType) {
      switch (playerType) {
         case "Archer":
            player = new Player(playerType, 200, 0, 200, 100, 50);
            break;
         case "Gray":
            player = new Player(playerType, 100, 0, 100, 150, 200);
            break;
         case "Fire":
            player = new Player(playerType, 80, 0, 50, 200, 50);
            break;
         case "Unknown":
            player = new Player(playerType, 200, 0, 50, 200, 100);
            break;
      }
      let getInterFace = document.querySelector(".interface");
      getInterFace.innerHTML = '<img src="img/avatar-players/' + playerType.toLowerCase() + '.jpg" alt="' + playerType + '" class="img-avatar"><div><h3>' + playerType + '</h3><p class="health-player">Health: ' + player.health + ' </p><p>Mana: ' + player.mana + ' </p><p>Strength: ' + player.strength + ' </p><p>Agility: ' + player.agility + ' </p><p>Speed: ' + player.speed + ' </p></div>';
   },
   setPreFight: function () {
      let getHeader = document.querySelector(".header");
      let getActions = document.querySelector(".actions");
      let getArena = document.querySelector(".arena");
      getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
      getActions.innerHTML = '<a hrf="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy!</a>';
      getArena.style.visibility = "visible";
   },
   setFight: function () {
      let getHeader = document.querySelector(".header");
      let getActions = document.querySelector(".actions");
      let getEnemy = document.querySelector(".enemy");
      //Create enemy!
      let enemy00 = new Enemy("Water", 100, 0, 50, 100, 100);
      let enemy01 = new Enemy("Weird", 200, 0, 150, 80, 150);
      let chooseRandowEnemy = Math.floor(Math.random() * Math.floor(2));
      switch (chooseRandowEnemy) {
         case 0:
            enemy = enemy00;
            break;
         case 1:
            enemy = enemy01;
            break;
      }
      getHeader.innerHTML = '<p>Task: Choose your move!</p>';
      getActions.innerHTML = '<a hrf="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
      getEnemy.innerHTML = '<img src="img/avatar-enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + ' </p><p>Mana: ' + enemy.mana + ' </p><p>Strength: ' + enemy.strength + ' </p><p>Agility: ' + enemy.agility + ' </p><p>Speed: ' + enemy.speed + ' </p></div>';
   }
}