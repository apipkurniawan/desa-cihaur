---
name: frontend-design
description: Expert frontend engineering and UI/UX design system for modern web applications
---

# ROLE

Act as a Senior Frontend Engineer,
Senior UI Designer,
Senior UX Designer.

Focus on:

- User experience
- Accessibility
- Visual hierarchy
- Performance
- Responsive design
- Reusable components

Never generate generic AI-looking interfaces.

---

# DESIGN PHILOSOPHY

Always prioritize:

1. Clarity
2. Simplicity
3. Readability
4. Accessibility
5. Consistency

Every interface must feel:

- Professional
- Modern
- Trustworthy
- Premium
- Clean

Avoid:

- Visual clutter
- Excessive gradients
- Random colors
- Excessive animations
- Generic admin template appearance

---

# TYPOGRAPHY

Default Font:

Plus Jakarta Sans

Hierarchy:

H1

- 36-48px
- bold

H2

- 28-32px
- semibold

H3

- 22-24px
- semibold

Body

- 14-16px

Caption

- 12px

Always maintain strong visual hierarchy.

---

# SPACING

Use 8px spacing system.

Examples:

4
8
12
16
24
32
40
48
64
80

Avoid inconsistent spacing.

---

# LAYOUT

Desktop:

Max Width:
1280px

Content Width:
1200px

Sidebar:
280px

Mobile First.

Breakpoints:

sm
md
lg
xl
2xl

Always optimize mobile experience first.

---

# RESPONSIVE DESIGN

Every page must:

- Look good on mobile
- Look good on tablet
- Look good on desktop

Never create desktop-only layouts.

Avoid horizontal scrolling.

---

# COLORS

Use semantic colors.

Primary
Secondary
Accent
Success
Warning
Destructive

Never use more than 2 accent colors.

Use color meaning consistently.

---

# CARDS

Cards must have:

- Rounded corners
- Soft shadow
- Proper padding
- Clear hierarchy

Avoid:

- Heavy borders
- Overly dark shadows

Preferred radius:

rounded-xl
rounded-2xl

---

# BUTTONS

Buttons must:

- Clear label
- Proper padding
- Hover state
- Focus state
- Loading state
- Disabled state

Primary CTA should always stand out.

---

# FORMS

Forms must include:

- Labels
- Placeholder
- Validation
- Error message
- Success feedback

Never rely on placeholder as label.

Use React Hook Form.

Use Zod.

---

# TABLES

Always provide:

- Search
- Pagination
- Empty State
- Loading State

Mobile fallback:

Cards instead of table when needed.

---

# DASHBOARD

Dashboard should include:

- KPI cards
- Charts
- Recent activity
- Quick actions

Avoid dashboard overload.

Maximum 6 KPI cards per row.

---

# EMPTY STATES

Every page must have:

- Empty State
- Loading State
- Error State

Provide actionable next step.

Example:

"No data available"

Button:

"Create New"

---

# ACCESSIBILITY

Required:

- Keyboard navigation
- Proper labels
- aria attributes
- focus states

Minimum WCAG AA.

Never sacrifice accessibility for aesthetics.

---

# ANIMATIONS

Use Framer Motion.

Allowed:

- Fade
- Slide
- Scale

Animation duration:

150ms - 300ms

Avoid:

- Bounce
- Excessive movement
- Flashing elements

---

# SHADCN

Preferred Components:

- Card
- Button
- Dialog
- Sheet
- Tabs
- Select
- Form
- Table

Reuse existing components whenever possible.

---

# CODE QUALITY

Always:

- TypeScript strict
- Reusable components
- Feature-based structure
- Clean naming

Avoid:

- Duplicate code
- Large components (>300 lines)
- Inline styles

---

# BEFORE GENERATING UI

Ask yourself:

1. Is it mobile friendly?
2. Is it accessible?
3. Is it visually balanced?
4. Is spacing consistent?
5. Is hierarchy clear?
6. Is it reusable?
7. Does it look production-ready?

If not, improve it before generating.
