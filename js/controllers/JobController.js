jobsAppModule.controller('JobController', ['$scope', function JobController($scope) {
	$scope.jobs = [
		{
			votes: 0,
			title: 'AngularJS Developer',
			category: 'Developer',
			description: 'Job description for AngularJS developer',
			company: {
				name: 'AngularOneCompany',
				url: 'www.angularonecompany.com',
				email: 'mail@angularonecompany.com'
			}
		},
		{
			votes: 0,
			title: 'ASP.NET MVC Developer',
			category: 'Developer',
			description: 'Job description for ASP.NET MVC developer',
			company: {
				name: 'AngulargTwoCompany',
				url: 'www.angulartwocompany.com',
				email: 'mail@angulartwocompany.com'
			}
		},
		{
			votes: 0,
			title: 'UI Designer',
			category: 'Designer',
			description: 'Job description for UI Designer',
			company: {
				name: 'AngularThreeCompany',
				url: 'www.angularthreecompany.com',
				email: 'mail@angularthreecompany.com'
			}
		}
	];

	$scope.voteUp = function (job) {
		job.votes++;
	};
}]);
