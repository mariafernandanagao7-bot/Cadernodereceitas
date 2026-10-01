# Velvet Atelier app

## What I’ll build
- A responsive Portuguese recipe notebook matching the supplied rose-and-ivory editorial styling.
- The recipe notebook as the home screen, including search, category filters, collections, featured recipes, and bottom navigation.
- A collection detail screen with recipe cards and a working “new recipe” bottom sheet.
- A guided kitchen screen with progress, ingredients, a functional countdown timer, and step navigation.
- A completion screen with rating, tasting-note selection, save/share feedback, and a return path to the notebook.

## Interaction flow
```text
Notebook → Collection → New recipe sheet
    │
    └────→ Kitchen mode → Completion
```

## Technical details
- Implement the experience in the existing TanStack Start home route with reusable React sections and local interaction state.
- Preserve the exact reference typography, colors, content, and supplied hotlinked food imagery.
- Define all visual roles as semantic tokens in the global design system and include responsive desktop layouts while retaining the mobile references.
- Add page metadata, keyboard-accessible controls, and reduced-motion support.
- Verify the finished flow and visual layout in the running preview at desktop and mobile sizes.
