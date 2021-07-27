describe('Nuevo Juego', ()=>{

    var game;
    var playerOne = 'Nico';
    var playerTwo = 'Koke';
    
    game = new Game(playerOne,playerTwo);

    var eleccion = {
        piedra: 'piedra',
        papel: 'papel',
        tijeras: 'tijeras'
    };

    it('Inicialmente tiene dos jugadores', ()=>{

        expect(game).toBeDefined();
        expect(playerOne).toBe(playerOne);
        expect(playerTwo).toBe(playerTwo);
    });
    it('el juego tiene tres opciones (piedra, papel, tijeras)', ()=>{
        expect()
    });
});