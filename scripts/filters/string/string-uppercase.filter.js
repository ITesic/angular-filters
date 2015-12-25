angular.module('angular-filters.string')
    .filter('stringUppercase', ['underscore',
        function(_u) {
            return function(str) {
                if (_u.isString(str)) {
                    return str.toUpperCase();
                }
                return str;
            }
        }
    ]);
