'use strict';

angular.module('katarsApp')
  .controller('DownloadCtrl', ['$scope', function($scope) {
    $scope.platforms = [
      {
        name: 'OS X',
        fileName: 'rust-1.3.0-x86_64-apple-darwin.pkg',
      },
      {
        name: 'Linux',
        fileName: 'rust-1.3.0-x86_64-unknown-linux-gnu.tar.gz'
      },
      {
        name: 'Windows',
        fileName: 'rust-1.3.0-x86_64-pc-windows-gnu.msi'
      }
    ];
  }]);
