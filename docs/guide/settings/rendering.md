# Rendering

## Preferred FPS

**Platform**: macOS, iOS, visionOS

Options: `15`, `30`, `60`, `90`, `120` fps

Default: `120 fps`

Current status: stored in settings, but currently not wired to the render view frame cap.

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
