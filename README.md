# example-adaptableblotter-with-parceljs

Demo of the AdaptableBlotter - using parceljs as build tool for quick setup

This demo is using TypeScript for convenience - but it could easily be just JavaScript.

## Installation

NOTE: In order to be able to run `npm install`, you need to follow the [Adaptable Blotter installation instructions](https://adaptabletools.zendesk.com/hc/en-us/articles/360002754737-Installation) - so you need to be logged into our private NPM registry.

Run `npm install` (or `yarn`), depending on what tool you're using.

## Running for development

Execute the following command

```sh
$ npm run dev
```

NOTE: The first time you run this, it takes longer as parcel generates some cache, etc - subsequent runs will be a lot faster

Now navigate to [localhost:1234](http://localhost:1234) in order the see the AdaptableBlotter in action.

Any change you make in your sources will trigger a browser reload, since parceljs comes with built-in hot-reloading in order to keep you productive.

## Building for production

```sh
$ npm run build
```

This generates a `dist` folder, which you can deploy on a webserver.

On your local machine, you can run

```sh
$ npx serve dist
```

to launch a webserver that serves the generated `dist` folder - now go to [localhost:5000](http://localhost:5000) to see the production version.

## Running with minified script

This repo also shows how you can minify the AdaptableBlotter - for this, run `npm run minify` - this runs parceljs on the `ab.js` file found in the root folder. The script generates `minified/ab.js` - a minified version of the AdaptableBlotter, which contains all the dependencies the blotter needs to work properly.

Then, in order to use the minified version, you can run `npm run serve-minified` - which simply runs a webserver in the current folder - now you can open [localhost:1234/with-minified](http://localhost:1234/with-minified.html)

In order to modify the demo, you can edit the [with-minified.html](./with-minified.html) file, which uses the minified version of the AdaptableBlotter
