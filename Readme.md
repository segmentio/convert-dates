
# convert-dates

  Convert all Date instances in an object.

## Installation

    $ component install segmentio/convert-dates

## Example

```js
var convert = require('convert-dates');
var obj = { date: new Date() };

obj = convert(obj, function (date) { return 'string'; });

obj.date; // "string"
```

## API

### convertDates(object, converter)
  
  Passes all of the `Date` values in an `object` through the `converter` function.

## License

  MIT
