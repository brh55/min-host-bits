# min-host-bits [![Travis](https://img.shields.io/travis/brh55/min-host-bits.svg?style=flat-square)](https://travis-ci.org/brh55/min-host-bits) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)

> Calculate minimum host bits needed for desired number of hosts with account for network address and broadcast address
>
> **minHostBits(256)** // 9

## Install

`$ npm install --save min-host-bits` **OR** `$ yarn add min-host-bits`

## Usage
```javascript
var desiredHosts = 3000;
var minimumHostBits = minHostBits(desiredHosts);
console.log(minimumHostBits) // 12
```

## API
### minHostBits(n)
Returns the minimum number of host bits accounting for the network address and broadcast address

#### n
*n* number of desired hosts

## Related
[min-prefix-length](https://github.com/brh55/min-prefix-length) - :1234: Calculate the minimum prefix length for an IPv4 subnet based on a desired number of host
## License
MIT
