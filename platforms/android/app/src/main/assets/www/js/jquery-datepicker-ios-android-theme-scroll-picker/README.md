Mobiscroll
==========

## jquery-datepicker-ios-android-theme fork
This is a fork from brodybits, thanks.

What's new:

1. IOS8 style support (Breathing the fresh air once again)
2. Multilanguage (Simplified Chinese added)
3. Zepto compatible
4. Fix a bunch of bugs (See below)

Please check [Demo Page](https://htmlpreview.github.io/?https://github.com/chuyik/jquery-datepicker-ios-android-theme/blob/scroll-picker/demo_without_jqueryui.html) and [demo_without_jqueryui.html](./demo_without_jqueryui.html) for more details.

## Look like sh*t or not

### IOS
<img width="400" alt="qq20150813-4 2x" src="https://cloud.githubusercontent.com/assets/6262943/9249453/96f9b328-41f7-11e5-8d52-fcfa336ff559.png">

### Android ICS
<img width="400" alt="qq20150813-5 2x" src="https://cloud.githubusercontent.com/assets/6262943/9249465/ae1fef0e-41f7-11e5-9455-9b8faf005302.png">

### Android ICS Light
<img width="400" alt="qq20150813-6 2x" src="https://cloud.githubusercontent.com/assets/6262943/9249554/7cd85552-41f8-11e5-92c0-36fa727acf3b.png">

## Usage
```javascript
$('#date').scroller({
  theme: 'ios',  // options: ios / ios-classic / android-ics / android-ics light / android / sense-ui
  lang: 'zh_CN', // options: zh_CN (default: Englishhhh)
  preset: 'date', // options  date / time / datetime
  onClose: function(),
  onSelect: function(),
  onCancel: function()
});
```

Changelog 1.7.5
===============

Bugfixes
--------

  * Avoid CSS selector conflicts
  
  * Full screen blackdrop warranty

Enhancements
------------

  * Zepto compatible

Changelog 1.7
===============

Bugfixes
--------

  * nahnnn

Enhancements
------------

  * IOS8 style

  * Multilanguage

  * Click blackdrop to close

Notes
-----

  * original `ios` theme is renamed to `ios-classic`

Changelog 1.6
===============

Bugfixes
--------

  * Fixed: Tap & hold changes the value on a 300ms interval instead of 200ms (for slower devices)

  * Fixed: When using custom wheels, parseValue function defaults to first value on the wheel, if cannot parse the input value to a valid wheel value

Enhancements
------------

  * Added: _showLabel_ option - show/hide labels on the top of the wheels, default is *true*

  * Added: _showValue_ option - show/hide formatted value in the header of the popup, default is *true*

  * Added: Android ICS ('android-ics') and Android ICS Light ('android-ics light') skins

Changelog 1.5.3
===============

Bugfixes
--------

  * Fixed: Mouse scroll wheel works now with jQuery 1.7+

  * Fixed: Don't always parse input value on show, only if changed

  * Fixed: Time was incorrectly parsed, if there was no date

Changelog 1.5.2
===============

Bugfixes
--------

  * Fixed: First selected value did not work correctly by default for custom scrollers

  * Fixed: Incorerect parsing of am/pm time for 12:xx AM

Enhancements
------------

  * Added: animation on touchend/mouseup event

  * Added: full CSS3 support for Opera 11 and IE10

Changelog 1.5.1
===============

Bugfixes
--------

  * Fixed: Destroy didn't set correctly the original readonly state of the input element.

  * Fixed: Input element is not set to readonly if showOnFocus is false

  * Fixed: Disabled state of form inputs was not correctly reset after hiding the scroller.

  * Fixed: Don't show scroller if disabled and show is called programatically.

Enhancements
------------

  * Added: if the onClose handler returns false, close is now prevented.

  * Added: onCancel event handler.

Notes
-----

  * From now we are using .prop to set readonly/disabled states. This means thet jQuery >= 1.6 is required.

Changelog 1.5
=============

Bugfixes
--------

  * Fixed: _setDate_ method incorrectly sets year, when _seconds_ option is *false*

Enhancements
------------

  * Added: _mode_ option, with two possible values: 'scroller' and 'clickpick', where 'scroller' is the default behaviour, while 'clickpick' renders + and - buttons for each wheel (Android style).

  * Added: new and updated skins: Android, Sense UI, iOS. Set the _theme_ option to 'android', 'sense-ui' and 'ios'

Notes
-----

  * Support for jQuery Mobile 1.0beta1 is now removed (click event was not working). Upgrade to beta2 to use the latest version of MobiScroll.

Known Issues
------------

  * 'Scroller' mode is still not working in Firefox Mobile and IE on WP7

  * When using 'Clickpick' mode, very fast taps causes page zoom on HTC Android.

Changelog 1.0.2
===============

Bugfixes
--------

  * Fixed: Click bleedtrough and focus holding with JQM beta 1
  * Fixed: Missing hour 0 on timepicker

Enhancements
------------

  * Added: Date format options for date wheels through the dateOrder option
