# Rendering

## Frame Rate

**Platform**: macOS, iOS, visionOS

**Max FPS**
Sets the target frame rate during active interaction.
- Options: `60`, `90`, `120`, `240` fps
- Default: `120 fps`

**Idle FPS**
Lowers the frame rate when the app is inactive (no data updates or camera movement) to save resources.
- Options: `15`, `30`, `60` fps
- Note: This setting does not apply to Spatial rendering.
## Render Scale

**Platform**: macOS, iOS, visionOS

Options: `100%`, `75%`, `67%`, `50%`

Default: `75%`

Effect: changes internal rendering resolution. Lower values usually improve performance at some sharpness cost.

## Volume Resolution

**Platform**: macOS, iOS, visionOS

Options: `25%`, `50%`, `75%`, `100%`

Default: `50%`

Effect: changes internal volume pass resolution.

Constraint: effective volume scale is clamped so it never exceeds current Render Scale.
