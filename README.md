A simple web-app to assure one can exercise Rust katas even *without internet*. You can host it by running `make`, open an ad-hoc network and direct the students to your IP/hostname.

It provides:

* a curated list of Katas
* a pairing guide (in case you want to learn together)
* Rust installers (not included in repository)

## How to add a new Kata

* open the [Katas.js][] service file and the Kata meta-data
  - use the existing ones as example
  - don't forget to set the `originalSource` field in case the Kata is copied from elsewhere. Otherwise the field may remain unset.
* place a markdown description file into [`resources/katas/<your kata name>/description.md`][res-katas]
* optionally place all example files into `resources/katas/<your kata name>/examples` and add their filenames to the `example.files` array of the kata's meta-data object`.
* *if not done already, run `grunt serve` to test your changes*

## Initial Setup

Run `npm update && bower update`.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


[Katas.js]: https://github.com/Byron/katars/blob/master/app/scripts/services/katas.js#L9
[res-katas]: https://github.com/Byron/katars/tree/master/app/resources/katas
