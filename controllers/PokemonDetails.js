PokeSearch.controller('PokemonDetails', ['$scope', '$log', '$location', '$routeParams', 'PokemonFactory', function ($scope, $log, $location, $routeParams, PokemonFactory) {
    $log.info("ID du Pokémon sélectionné : " + $routeParams.idP)
    var idPokemon = $routeParams.idP
    $scope.page_title = null;

    $scope.loading = true

    PokemonFactory.getPokemon(idPokemon).success(function (response) {
        $scope.pokemon = response
        $scope.page_title = "#" + $scope.pokemon.id
        $scope.loading = false
    })

    /*PokemonFactory.getSprite(idPokemon).success(function (response) {
        $scope.image_name = response[idPokemon - 1].image
    })*/
}])