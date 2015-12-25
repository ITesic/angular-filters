angular.module('angular-filters.string')
    .filter('stringLowercase', ['underscore',
        function(_u) {
            return function(str) {
                if (_u.isString(str)) {
                    return str.toLowerCase();
                }
                return str;
            }
        }
    ]);
