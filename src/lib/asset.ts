// Assets live in /public/assets and are served from the site root.
// This mirrors the prototype's `R()` resolver, normalizing any path to an
// absolute URL the bundler/host can serve.
export const asset = (path: string): string => '/' + path.replace(/^\/+/, '');
