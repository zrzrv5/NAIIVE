# Understanding the Interface
> Updated 2026-02-18

NAIIVE uses a unified 3-column layout across macOS, visionOS, iPadOS, and iOS (landscape), as shown below:

![NAIIVE UI Overview](/images/ui/macOS/main.png)

From left to right:
- **Left — Hierarchy Panel** (red region): browse and select objects in the scene
- **Center — Main Viewport** (green region): the primary 3D view
- **Right — Inspector Panel** (blue region): view and edit properties of the selected object

On macOS, the toolbar (orange region) also includes a button to toggle the **Node Editor** (currently experimental).

## Main Viewport

### Camera Controls

| Action | Input |
|--------|-------|
| Rotate | Click and drag / two-finger swipe on trackpad |
| Zoom | Two-finger pinch |
| Pan | Hold **Shift** + two-finger swipe |
| Snap to axis | Click on the 3D gizmo |
| Toggle projection | Switch between **Perspective** and **Orthographic** in the toolbar |

## Inspector Panel

The Inspector Panel on the right displays information and editable properties for the object selected in the left sidebar.

![NAIIVE Inspector Panel](/images/ui/macOS/inspector.png)

Numeric fields can be edited by typing a value directly or by **clicking and dragging** on the field to scrub the value.