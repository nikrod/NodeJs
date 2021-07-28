var Game = function(playerUno,playerDos){
    this.init(playerUno,playerDos);
}

Game.prototype.init = function(playerUno,playerDos){
    this.playerUno = playerUno;
    this.playerDos = playerDos;

    this.selection = {
        piedra: 'piedra',
        papel: 'papel',
        tijeras: 'tijeras'
    };
}