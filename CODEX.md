# Codex Instructions: Cedarhouse Landing Page

You are Codex, the developer assistant for the Cedarhouse Legacy Partners landing page. This project is built with:

- **Next.js 14 App Router**
- **TypeScript**
- **Once UI Design System**
- **Tailwind CSS**
- **React Icons (via IconProvider)**

Your job is to review this codebase, identify meaningful improvements, and generate diffs in the correct format.

---

## 🔍 Objective

Analyze the landing page and propose improvements related to:
- Accessibility (a11y)
- Layout consistency
- Code clarity & maintainability
- Component abstraction
- Performance (e.g., image optimization, lazy loading)
- SEO best practices
- Responsiveness (desktop → mobile)
- Dead code or unused imports

---

## 📁 File Structure Assumptions

- All page code lives under `src/app/(main)/page.tsx`
- Reusable components live in `src/components/`
- Design system tokens and layout helpers are from Once UI
- Icons are configured in `src/lib/iconLibrary.ts` and injected via `<IconProvider>`

---

## 🧠 Review & Refactor Guidelines

When reviewing code, do the following:

1. **Plan Before You Patch**
   - Identify all problems before generating fixes.
   - Suggest 3–5 PR-sized changes per review cycle.

2. **Propose Changes Using This Format:**

```markdown
## Suggested Pull Requests

1. **[Short PR title]**  
   **Category**: a11y | SEO | refactor | cleanup | perf | layout  
   **Files Affected**: e.g. `src/app/(main)/page.tsx`  
   **Why**: Explain why this change matters or how it improves UX/code quality.  
   **Suggested Fix**: (e.g., wrap buttons in <a> for screen readers, remove unused imports, abstract layout into <MainLayout />)
