var PokeSearch = angular.module('PokeSearch', ['ngResource', 'ngRoute','angucomplete-alt'])

PokeSearch.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'search.html',
            controller: 'SearchEngine'
        })
        .when('/pokemon/:idP/', {
            templateUrl: 'pokemon.html',
            controller: 'PokemonDetails'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true)
});