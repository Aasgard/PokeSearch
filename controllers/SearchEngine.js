PokeSearch.controller('SearchEngine', ['$scope', '$log', '$location', 'PokemonFactory', function ($scope, $log, $location, PokemonFactory) {

    $scope.pokemons = null
    $scope.PokemonSelect = null
    $scope.loader = false
    $scope.image_name = "1.png"
    $scope.page_title = "PokeSearch - Recherche de Pokémons"

    loadSelect()

    function loadSelect() {
        PokemonFactory.getPokemons().success(function (response) {
            $scope.pokemons = response.results
            $log.info('Liste de Pokémon chargée entièrement')
        })
    }

    $scope.launchSearch = function () {
        $scope.loader = true
        if ($scope.pokemons) {
            var selectedPokemonURL = $scope.PokemonSelect.originalObject.url
            $log.info(selectedPokemonURL)

            PokemonFactory.getPokemonByURL(selectedPokemonURL).success(function (response) {
                $scope.loader = false
                $location.path('/pokemon/' + response.id)
            })
        }
    }
}])