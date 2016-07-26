# Entypo Icons - React Component
> A React component for the Entypo SVG icon library.

React-Entypo sets up all the icons of the [Entypo SVG library](http://www.entypo.com/ "Entypo") to be used as components which will render as inline SVGs. Both the main set and the Social Extension are included. This component is designed to use Entypo SVGs as inline icons and are set with default inline styling to be the same size as the base text in the container they're placed. No CSS is supplied by 'react-entypo'; therefore, any other styles will have to be passed to the component or set by style declarations elsewhere.

The SVGs use the same names as the files in the Entypo SVG library, but camel-cased instead of hyphens, and any special characters removed.

## Demo

[https://cox-auto-kc.github.io/react-entypo/](https://cox-auto-kc.github.io/react-entypo/)

## Install

```
npm install --save react-entypo
```

## Usage

Just import each icon you want to reference (and React, of course).

```js
var React = require('react');
var {EntypoArrowBoldRight, EntypoCalculator} = require('react-entypo');
```

or, import the ES6 way...

```js
import React from 'react';
import {EntypoArrowBoldRight, EntypoCalculator} from 'react-entypo';
```

...or, reference the icon by file. Initial path is 'react-entypo/lib/entypo/[ICONNAME]' where ICONNAME is the name of the icon (PascalCased).**[1]**
```js
import React from 'react';
import EntypoArrowBoldRight from 'react-entypo/lib/entypo/ArrowBoldRight';
import EntypoCalculator from 'react-entypo/lib/entypo/Calculator';
```

...then reference like any other component: `<EntypoArrowBoldRight />`, `<EntypoCalculator/>`.

Examples:
```
<Button>This Way! <EntypoArrowBoldRight/></Button>

<div><EntypoArrowBoldRight style/></div>

<Button><EntypoCalculator className="my-calc-icon" valign style{{'fill':'white','box-shadow':'0 0 5px rgba(0,0,0,.8)'}}/></Button>
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [style] | `String` |  | Additional inline styles, adds to: <br>`display:inline-block;`<br>`height:1em;`<br>`width:1em; user-select:none;`<br>`fill:currentColor;` |
| [valign] | `String | Boolean` | `'text-top'` | Adds `vertical-align:[valign]` to the standard styles (above, see **[2]**). <br>If `false`, does not output `'vertical-align:...'` to style attribute.<br>If `true` or used without a value, will set to  `vertical-align:middle`. |
| [className] | `String` |  | An extra set of CSS classes to add to the component. <br>Default is "entypo-icon entypo--[ICONNAME]" |
| [viewBox] | `String` | `'0 0 20 20'` | Default viewbox |

Other attributes can be passed but have no defaults. Examples include `data-` or `id` attributes.

> **[1]** - This will reduce the final package size.  Using the object notation in the above examples brings with them all the icons in that object (all 411 of them).  By referencing with the path name to the icon specifically means that only those specified will be in the final build file.  The downside is notation; however, as it's much easier to use the object notation as noted above to reference the icons and leaves fewer lines of code in your development files.</small>

> **[2]** - The default of "vertical-align:text-top" is due to the way the icons are created and being presented.  Since the icons are usually used inline with text, forcing alignment to base off text-top allows for better vertical spacing.  However, if an icon is used alone, setting vertical-alignment to "middle" works better visually since there's no text adjacent to provide any contextual vertical spacing issues.

---
## TODO

- Create docs page to reference icons and names.

---
## Attribution
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) @ [Daniel Bruce](http://www.entypo.com/ "Entypo")
