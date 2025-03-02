# Animate.scss

This is a port of Dan Eden's [Animate.css](http://daneden.github.io/animate.css/) for SASS.

## Doesn't this already exist somewhere else?

Yes, there are plenty of other ports of this library. Many of them aren't very active projects and, honestly, I was just a little too lazy to submit my changes to those repositories.

Also, I was looking for something a little more flexible. This version allows you to import all animations at a whopping 53kb or only import what you need. It's a flavor thing.

## Installing

Grab it with Bower
````
bower install animatewithsass
````

The default import includes all animations. 

```
@import "animate.scss";
```

Want to pick and choose which animations are imported? Go into animate.scss and comment out what you don't need.

```
// Import the animations
  // "_attention-seekers/attention-seekers.scss", // This will not import
@use "_bouncing-entrances/bouncing-entrances.scss" as entrances;
@use "_bouncing-exits/bouncing-exits.scss" as *;
@use "_fading-entrances/fading-entrances.scss" as *;
@use "_fading-exits/fading-exits.scss" as *;
@use "_flippers/flippers.scss" as *;
@use "_lightspeed/lightspeed.scss" as *;
@use "_rotating-entrances/rotating-entrances.scss" as *;
@use "_rotating-exits/rotating-exits.scss" as *;
@use "_specials/specials.scss" as *;
```
You only want one of two of the animations? You can `@use` the mixins specific
    to partials in animate.scss instead (Example: `@use "_attention-seekers/bounce" as *;`) 
    and `@forward` `properties` to export the referenced keyframes.

## Usage

Once your files have been added to your project and you've customized your `@imports`, you can start including the animations directly to your classes.

```
.your-class-name {
  @include bounce();
}
```

The mixin includes configurable options to customize the `delay`, `count` `duration`, `function` and `fill-mode` of your animations.

```
.your-class-name {
  @include bounce(
    $duration: 1s,
    $count: 2,
    $delay: .2s,
    $function: ease, 
    $fill: both
  );
}
```

## Just Want the CSS?

You can have that too. Link up animate.css to your document `<head>` and add the animations like you would any class name.

## Licenses

Animate.css and Animate.scss are both licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing

Feel free to submit a pull request. I'm open to animations not included in Animate.css. If you're going to submit a pull request, please match the formatting (naming convention and file structure) and include a demo of your submission on [CodePen](http://www.codepen.io).

Thanks!
