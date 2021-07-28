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
        expect(game.selection).toBeDefined();
        expect(game.selection.piedra).toBe(eleccion.piedra);
        expect(game.selection.tijeras).toBe(eleccion.tijeras);
        expect(game.selection.papel).toBe(eleccion.papel);
    });
});