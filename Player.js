class Player {
    constructor(){
      this.name=null
      this.index=0
    this.distance=0
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:name,
        distance:this.distance
      })
    }
    static getPlayerInfo(){
        var playerRef = database.ref("players")
        playerRef.on("value",(data)=>{
        allPlayers=data.val()
        })
    }
  }
  