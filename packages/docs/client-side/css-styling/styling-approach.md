# Vanilla CSS, Bootstrap or CSS in JavaScript?

To keep complexity minimal, vanilla CSS is the main approach. Some Bootstrap with the Bootstrap CDN has been used and CSS in JavaScript, where possible, avoided.

CSS files are adjacent to the main components and imported, while an App-level App.css has some global styles.

This will be refactored last, as the aim of this repo is to show the workings of the GraphQL API with React, initially the project was stable when released with React v17. With the incremental breaking changes in v18 and v19, some changes are mandatory.

These include the updating of PropTypes, deprecated in v19, but available in v18 to TypeScript and updating testing libraries to Vite and removing Jest.

Vanilla CSS keeps updates simple and minimal - cosmetic changes will be made for look and feel rather than functionality.

The key functional changes would be adding break-points for mobile.
