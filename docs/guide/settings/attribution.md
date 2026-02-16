# Sources & Attribution

This page documents external references for naming and palette conventions used in Naiive settings.

## Palette references

### OVITO
- Website: https://www.ovito.org/
- Documentation portal: https://www.ovito.org/manual/

In Naiive: `OVITO` is a named palette preset and an OVITO-style fallback list.

### Materials Project
- Website: https://materialsproject.org/
- Organization: https://github.com/materialsproject

In Naiive: `Materials Project` is a named element-color preset.

### VESTA
- Website: https://www.jp-minerals.org/vesta/en/

In Naiive: `VESTA` is a named element-color preset.

### AtomEye
- Legacy project page: http://li.mit.edu/Archive/Graphics/A/
- Secondary reference (module docs pointing to official site): https://hpcdocs.kennesaw.edu/modules/Software/AtomEye/

In Naiive: `AtomEye` is a named element-color preset.

### Tab10 (Matplotlib default cycle)
- Default color cycle reference: https://matplotlib.org/stable/gallery/color/color_cycle_default.html
- Colors documentation: https://matplotlib.org/stable/users/explain/colors/colors.html

In Naiive: `Tab10` is a fallback categorical color cycle.

## Cursor references

- `NSCursor`: https://developer.apple.com/documentation/appkit/nscursor
- `NSCursor.arrow`: https://developer.apple.com/documentation/appkit/nscursor/arrow
- `NSCursor.crosshair`: https://developer.apple.com/documentation/appkit/nscursor/crosshair

## Implementation note

Naiive stores palette values as app-defined numeric color tables in source code.

- We do not import external software code or binaries for these palette presets.
- Names and visual conventions are referenced for user familiarity and interoperability.
- If any maintainer of an external tool wants a wording change for attribution, we can update this page.
