# KpopVerse Test - Social Feed Upgrade

## How to Use

1. Unzip this folder into your `KpopVerse-Test` project.
2. Copy `SocialFeed.jsx` into `src/pages/` if not already there.
3. In your `App.jsx` or `router.jsx`, add this route:

```jsx
import SocialFeed from './pages/SocialFeed';
<Route path="/social" element={<SocialFeed />} />
```

4. Run your test project:

```bash
npm install
npm run dev
```

5. Visit `http://localhost:5173/social` to view the social feed page.

This is a test version only. Once approved, it can be merged into the live site.
