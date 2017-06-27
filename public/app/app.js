"use strict"

const config = [
    "$stateProvider",
    "$urlRouterProvider",
];

angular.module('wildNoteApp', [
        "ui.router", "ngResource",
    ])

    .config(config)

    .factory("Users", ["$resource", function ($resource) {
        return $resource("/users");
    }])


function Config($stateProvider, $urlRouterProvider) {
    const states = [
        {
            name: "home",
            url: "app/components/home/home.html",
            component: "home"
        },

    ]

    states.forEach((state) => {
        $stateProvider.state(state)
    })

    $urlRouterProvider.otherwise('/')
}
