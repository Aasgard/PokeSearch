PokeSearch
    .factory('PokemonFactory', ['$http', '$log', function ($http,$log) {

        var urlBase = 'http://pokeapi.co/api/v2/pokemon'
        var spritesJSON = 'assets/PokemonSprites.json';
        var dataFactory = {}

        dataFactory.getPokemons = function () {
            return $http.get(urlBase)
        };

        dataFactory.getSprite = function(id){
            return $http.get(spritesJSON)
        }

        dataFactory.getPokemon = function (idPokemon) {
            return $http.get(urlBase + '/' + idPokemon);
        };

        dataFactory.getPokemonByURL = function (url) {
            return $http.get(url)
        }

        return dataFactory;
    }]);