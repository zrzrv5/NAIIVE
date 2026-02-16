# Spatial

## Spatial Vertical Rotation

**Platform**: macOS, visionOS

Options:
- `Depends (+X CCW)`
- `Depends (+X CW)`
- `Always Clockwise`
- `Always Counterclockwise`

Default: `Depends (+X CCW)`

Effect: controls direction mapping for up/down hand movement used by spatial one-hand rotation (XZ ring / Y-axis behavior).

How `Depends` modes work:
- They switch sign based on whether the user view is on the model `+X` side or `-X` side.
- `Depends (+X CW)` is the flipped variant of `Depends (+X CCW)`.

## Hide macOS Spatial Background

**Platform**: macOS only

Default: Off

Effect: toggles the optional background rendered behind spatial content in macOS remote spatial mode.

Why it exists: hiding background can look more passthrough-like, but may expose black tile artifacts in some mixed immersive compositions.
