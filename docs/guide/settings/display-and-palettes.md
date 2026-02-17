# Display & Palettes

## Color Scheme

**Platform**: macOS, iOS, visionOS

Options:
- `Light`
- `Dark`
- `System`

Default: `System`

Effect: changes overall app UI appearance.

## Element Colors

**Platform**: macOS, iOS, visionOS

Options:
- `OVITO`
- `Materials Project`
- `VESTA`
- `AtomEye`
- `NAIIVE`

Default: `NAIIVE`

Effect: used when particle types have valid element mapping (symbol/atomic number).

## Fallback Colors

**Platform**: macOS, iOS, visionOS

Options:
- `Tab10`
- `OVITO`

Default: `Tab10`

Effect: used for type IDs that do not have element mapping.

### Tab10 fallback order

![Tab10 palette order](/images/settings/palettes/tab10.svg)

Order and hex values:

| Index | Hex |
|---|---|
| 1 | `#1F77B4` |
| 2 | `#FF7F0E` |
| 3 | `#2CA02C` |
| 4 | `#D62728` |
| 5 | `#9467BD` |
| 6 | `#8C564B` |
| 7 | `#E377C2` |
| 8 | `#7F7F7F` |
| 9 | `#BCBD22` |
| 10 | `#17BECF` |

### OVITO fallback order

![OVITO fallback palette order](/images/settings/palettes/ovito-fallback.svg)

Order and hex values:

| Index | Hex |
|---|---|
| 1 | `#FF6666` |
| 2 | `#6666FF` |
| 3 | `#FFFF00` |
| 4 | `#FF66FF` |
| 5 | `#66FF33` |
| 6 | `#CCFFB3` |
| 7 | `#B300FF` |
| 8 | `#33FFFF` |

---
- OVITO: https://www.ovito.org/
- Materials Project: https://materialsproject.org/
- Jmol colors (used by Materials Project-style palette variants): https://jmol.sourceforge.net/jscolors/
- VESTA: https://jp-minerals.org/vesta/en/
- AtomEye (legacy project page/archive): http://li.mit.edu/Archive/Graphics/A/
- Matplotlib Tab10: https://matplotlib.org/stable/gallery/color/color_cycle_default.html