# Beautiful.ai Slide Production Workflow

## Manual-first integration

1. Course Factory writes module outline and slide requirements.
2. Slide owner creates/updates deck in Beautiful.ai.
3. Deck share URL is added to `beautiful-ai/deck-manifest.json`.
4. Delivery app reads manifest and shows deck link/embed per module.
5. Export PDF/PPT after major revisions and store under `course/slides/exports/` if needed.

## Future automation

If Beautiful.ai exposes reliable API/Zapier/automation access:

- create deck from module manifest
- update slide copy from module markdown
- export deck asset
- sync deck status back to platform

Until then, use deck manifest as source of truth for app integration.
