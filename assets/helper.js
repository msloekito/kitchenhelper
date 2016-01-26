/* JavaScript Document */

(function(){

	var app = angular.module('myCalculator', []);

	app.controller('CalculatorController', ['$scope', function($scope){

		$scope.unit_options = ["teaspoon", "tablespoon", "cup"];
		$scope.current_amount = 12;
		$scope.current_serving = 3;
		$scope.current_unit = "teaspoon"


		$scope.calculate = function(){


			// calculation
			if ($scope.current_unit == "teaspoon")	{
				$scope.tsp = ($scope.current_amount * 1 * $scope.current_serving).toFixed(1);
				$scope.tbsp = ($scope.current_amount * 1 / 3 * $scope.current_serving).toFixed(1);
				$scope.cup = ($scope.current_amount * 1 / 48 * $scope.current_serving).toFixed(1);
			} else if ($scope.current_unit == "tablespoon")	{
				$scope.tsp = ($scope.current_amount * 3 * $scope.current_serving).toFixed(1);
				$scope.tbsp = ($scope.current_amount * 1 * $scope.current_serving).toFixed(1);
				$scope.cup = ($scope.current_amount * 1 / 16 * $scope.current_serving).toFixed(1);
			} else if ($scope.current_unit == "cup")	{
				$scope.tsp = ($scope.current_amount * 48 * $scope.current_serving).toFixed(1);
				$scope.tbsp = ($scope.current_amount * 16 * $scope.current_serving).toFixed(1);
				$scope.cup = ($scope.current_amount * 1 * $scope.current_serving).toFixed(1);
			}

			// form validation (amount and serving cannot be less than 1)	
			if ( $scope.current_amount < 1) {scope.current_amount = 1;}
			if ( $scope.current_serving < 1) {scope.current_serving = 1;}

		}

		$scope.calculate();

	}]);







})();