'use strict';

module.exports = n =>
    (n <= 0) ? 0 : Math.ceil(Math.log2(n + 2));
