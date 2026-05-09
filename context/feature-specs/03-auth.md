Clerk is already installed and connected. Wire it into the Next.js app: provider, auth pages, redirects, route protection, and user menu.

## Design

Use Clerk's `dark` theme from `@clerk/themes` as the base.

Override Clerk appearance variables using the app's existing CSS variables. Do not hardcode colors.

Sign-in and sign-up pages:

- Full-screen video background (background.mp4 from public directory) that autoplays, loops continuously, and is muted
- Video is fixed position with -z-10 to stay behind all content
- Dark overlay (bg-black/60) over video for better contrast
- Two-panel layout on large screens:
  - Left panel (50%): Ghost AI branding, headline, description, and three feature highlights with cyan accent
  - Right panel (50%): Centered Clerk authentication form
- Mobile: Form only, video background still visible
- Cyan (#00c8d4) accent color for branding elements
- Professional feature list with icon bullets

Keep the layout minimal and professional.

## Implementation

Wrap the root layout with `ClerkProvider` using Clerk's `dark` theme.

Create sign-in and sign-up pages using Clerk components.

Use `proxy.ts` at the project root, not `middleware.ts`.

Define public routes using the existing sign-in and sign-up env vars. Protect everything else by default.

Update `/`:

- authenticated users redirect to `/editor`
- unauthenticated users redirect to `/sign-in`

Add Clerk's built-in `UserButton` to the editor navbar right section for profile settings and logout.

Keep Clerk's default user menu and profile flows intact. Do not rebuild or heavily customize Clerk internals.

Use existing Clerk env vars. Do not rename or invent new ones.

## Dependencies

install: @clerk/ui.

## Check When Done

- `proxy.ts` exists at the root
- all routes are protected except public auth paths
- auth pages use CSS variables with no hardcoded colors
- `ClerkProvider` wraps the root layout
- `npm run build` passes
