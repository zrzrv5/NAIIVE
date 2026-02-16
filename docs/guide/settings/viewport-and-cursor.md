# Viewport & Cursor

## Gizmo Position

**Platform**: macOS, iOS, visionOS

Options:
- `Top Left`
- `Top Right`
- `Bottom Left`
- `Bottom Right`

Default: `Top Left`

Effect: moves the orientation gizmo overlay corner.

## Camera Projection

**Platform**: macOS, iOS, visionOS

Options:
- `Perspective`
- `Orthographic`

Default: `Orthographic`

Effect: changes how depth/scale are perceived in the standard viewport.

## Show Mesh Grid

**Platform**: macOS, iOS, visionOS

Default behavior: On

Effect: toggles the infinite helper grid in the standard (non-immersive) renderer.

## Show Rotation Center

**Platform**: macOS, iOS, visionOS

Default: On

Effect: toggles rotation-center ring visuals during active rotation interactions.

Note: this only controls visibility of the indicator, not center computation.

## Picking Cursor (macOS only)

**Platform**: macOS

Options:
- `Default`
- `Crosshair`
- `Soyboy 1`
- `Soyboy 2`

Default: `Default`

### Cursor visuals

| Option | Preview |
|---|---|
| Default | ![Default cursor](/images/settings/cursors/default-arrow.png) |
| Crosshair | ![Crosshair cursor](/images/settings/cursors/crosshair.png) |
| Soyboy 1 | ![Soyboy 1 cursor](/images/settings/cursors/soyboy-1.png) |
| Soyboy 2 | ![Soyboy 2 cursor](/images/settings/cursors/soyboy-2.png) |

Reference API:
- [`NSCursor.arrow`](https://developer.apple.com/documentation/appkit/nscursor/arrow)
- [`NSCursor.crosshair`](https://developer.apple.com/documentation/appkit/nscursor/crosshair)

Implementation note: when there is no pick hit under pointer, cursor falls back to the standard arrow.
