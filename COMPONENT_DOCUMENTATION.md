# Corporate Modernism - Component Documentation

A complete reference guide for all UI components and patterns used throughout the website.

## Table of Contents

1. [Buttons](#buttons)
2. [Cards](#cards)
3. [Navigation](#navigation)
4. [Forms](#forms)
5. [Typography](#typography)
6. [Spacing & Grid](#spacing--grid)
7. [Colors](#colors)
8. [Shadows & Elevation](#shadows--elevation)
9. [Icons](#icons)
10. [Patterns](#patterns)

---

## Buttons

### Primary Button

**Purpose**: Main call-to-action button for important interactions

**Specifications**:
- Padding: 14px 32px (vertical × horizontal)
- Font Size: 16px
- Font Weight: 500
- Border Radius: 6px
- Background: #3B82F6 (Deep Blue)
- Text Color: White
- Shadow: `0 2px 6px rgba(59, 130, 246, 0.15)`

**States**:
- **Default**: #3B82F6
- **Hover**: #2563EB with `0 4px 12px rgba(59, 130, 246, 0.25)` shadow
- **Active/Pressed**: #1D4ED8
- **Disabled**: #BFBFBF with 60% opacity

**HTML**:
```html
<button class="btn btn-primary">Click Here</button>
<a href="#" class="btn btn-primary">Learn More</a>
```

**CSS**:
```css
.btn-primary {
    background-color: #3B82F6;
    color: white;
    box-shadow: 0 2px 6px rgba(59, 130, 246, 0.15);
}

.btn-primary:hover {
    background-color: #2563EB;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
    transform: translateY(-2px);
}
```

---

### Secondary Button

**Purpose**: Alternative action, less emphasis than primary

**Specifications**:
- Padding: 14px 32px
- Font Size: 16px
- Font Weight: 500
- Border Radius: 6px
- Background: Transparent
- Border: 2px solid #3B82F6
- Text Color: #3B82F6

**States**:
- **Default**: Transparent with border
- **Hover**: #DBEAFE background
- **Active**: #BFDBFE background

**HTML**:
```html
<button class="btn btn-secondary">Learn More</button>
```

---

## Cards

### Standard Card

**Purpose**: Container for grouped content

**Specifications**:
- Padding: 32px
- Background: #FFFFFF
- Border: 1px solid #E8E8E8
- Border Radius: 8px
- Shadow: `0 1px 3px rgba(0, 0, 0, 0.08)`
- Transition: All 0.3s ease

**Hover State**:
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.12)`
- Transform: `translateY(-4px)`

**HTML Structure**:
```html
<div class="principle-card">
    <div class="card-icon">
        <svg>...</svg>
    </div>
    <h3>Card Title</h3>
    <p>Card description text...</p>
</div>
```

**CSS**:
```css
.principle-card {
    background-color: white;
    border: 1px solid #E8E8E8;
    padding: 40px 32px;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.principle-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
}
```

---

## Navigation

### Sticky Navigation Bar

**Purpose**: Primary site navigation, always accessible

**Specifications**:
- Height: 72px
- Background: #FAFAFA with 0.95 opacity
- Border Bottom: 1px solid #E8E8E8
- Position: Sticky (top: 0)
- Z-Index: 1000
- Backdrop Filter: blur(10px)

**Components**:
1. **Logo**: Left-aligned, 18px font size, semibold weight
2. **Menu**: Center or right-aligned, flex layout, 40px gap
3. **Links**: 14px, medium weight, #757575 color
4. **Active State**: Color changes to #3B82F6 with underline

**Mobile Behavior**:
- Navigation menu hidden on screens below 768px
- Hamburger toggle appears (3-line icon)
- Menu appears as overlay on small screens

**HTML**:
```html
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <span class="logo-icon">◆</span>
            <span class="logo-text">Corporate Modernism</span>
        </div>
        <ul class="nav-menu">
            <li><a href="index.html" class="nav-link active">Home</a></li>
            <li><a href="about.html" class="nav-link">About</a></li>
        </ul>
    </div>
</nav>
```

---

## Forms

### Input Fields

**Specifications**:
- Height: 40px
- Padding: 12px 16px
- Font Size: 16px
- Border Radius: 6px
- Border: 1px solid #E8E8E8
- Font Color: #424242

**States**:
- **Focus**: 
  - Border Color: #3B82F6
  - Box Shadow: `0 0 0 3px rgba(59, 130, 246, 0.1)`
- **Error**: 
  - Border Color: #EF4444
  - Box Shadow: `0 0 0 3px rgba(239, 68, 68, 0.1)`
- **Disabled**: 
  - Background: #F5F5F5
  - Color: #BFBFBF
  - Cursor: not-allowed

**HTML**:
```html
<input type="text" placeholder="Enter text..." class="input-field">
<textarea class="input-field"></textarea>
```

**CSS**:
```css
input[type="text"],
textarea {
    height: 40px;
    padding: 12px 16px;
    border: 1px solid #E8E8E8;
    border-radius: 6px;
    font-size: 16px;
    transition: all 0.3s ease;
}

input:focus,
textarea:focus {
    border-color: #3B82F6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    outline: none;
}
```

---

## Typography

### Heading Hierarchy

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|---|---|
| **H1** | 48px | Bold (700) | 1.2 | -0.02em | Page titles, hero headlines |
| **H2** | 42px | Bold (700) | 1.2 | -0.02em | Section headings |
| **H3** | 32px | Semibold (600) | 1.3 | -0.01em | Subsection headings |
| **H4** | 24px | Semibold (600) | 1.3 | 0em | Card titles |
| **H5** | 20px | Medium (500) | 1.4 | 0em | Minor headings |
| **Body** | 16px | Regular (400) | 1.6 | 0em | Paragraph text |
| **Small** | 14px | Regular (400) | 1.5 | 0em | Secondary text |
| **Caption** | 12px | Light (300) | 1.5 | 0.05em | Captions, labels |

### Font Family

Primary: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Weight Scale

- Light: 300
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### HTML Examples**:
```html
<h1>Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection</h3>
<p>Regular paragraph text with normal line height.</p>
<p class="text-small">Smaller secondary text.</p>
<span class="text-caption">Caption or label text.</span>
```

---

## Spacing & Grid

### Grid System

- **Container Max Width**: 1200px
- **Number of Columns**: 12 or 16
- **Gutter Width**: 24px (desktop), 16px (mobile)
- **Padding**: 24px (desktop), 16px (mobile)

### Spacing Scale

Based on 4px base unit:

| Size | Value | Usage |
|------|-------|-------|
| 3xs | 8px | Minimal spacing |
| 2xs | 12px | Tight spacing |
| xs | 16px | Standard small spacing |
| sm | 20px | Small spacing |
| md | 24px | Standard spacing |
| lg | 32px | Large spacing |
| xl | 40px | Extra large spacing |
| 2xl | 48px | Heading spacing |
| 3xl | 60px | Section separation |
| 4xl | 80px | Large section gap |

### Common Spacing Patterns**:

```css
/* Card spacing */
.card {
    padding: 32px;        /* 2 × 16px base unit */
    margin-bottom: 32px;
}

.card + .card {
    margin-left: 32px;    /* Gap between cards */
}

/* Section spacing */
section {
    padding: 100px 0;     /* Top/bottom */
    margin-top: 100px;
}

/* Typography spacing */
h1 {
    margin-bottom: 24px;  /* Heading bottom margin */
}

h1 + p {
    margin-bottom: 40px;  /* Content after heading */
}
```

---

## Colors

### Color Palette

#### Neutrals

```
Neutral 50:  #FAFAFA  (Off-white)      - Primary background
Neutral 100: #F5F5F5  (Very light gray) - Secondary background
Neutral 200: #E8E8E8  (Light gray)     - Dividers, borders
Neutral 300: #D9D9D9  (Gray)           - Input borders
Neutral 400: #BFBFBF  (Medium gray)    - Disabled states
Neutral 500: #999999  (Dark gray)      - Secondary text
Neutral 600: #757575  (Darker gray)    - Secondary text
Neutral 700: #616161  (Dark)           - Secondary text
Neutral 800: #424242  (Very dark)      - Primary text
Neutral 900: #1A1A1A  (Near black)     - Headlines
```

#### Brand Colors

**Deep Blue**:
```
Blue 50:   #EFF6FF (Very light)
Blue 100:  #DBEAFE
Blue 200:  #BFDBFE
Blue 400:  #60A5FA
Blue 500:  #3B82F6 (Primary accent) ← USE THIS
Blue 600:  #2563EB (Hover)
Blue 700:  #1D4ED8 (Active)
Blue 800:  #1E40AF
Blue 900:  #1E3A8A (Dark)
```

**Emerald Green**:
```
Emerald 50:   #F0FDF4
Emerald 100:  #DCFCE7
Emerald 200:  #D1FAE5
Emerald 500:  #10B981 (Secondary accent)
Emerald 600:  #059669 (Hover)
Emerald 700:  #047857 (Active)
```

### Color Usage Guidelines**

| Color | Usage |
|-------|-------|
| #FAFAFA | Page background |
| #E8E8E8 | Borders, dividers |
| #BFBFBF | Disabled states, placeholders |
| #757575 | Secondary text, captions |
| #424242 | Primary body text |
| #1A1A1A | Headlines, emphasis |
| #3B82F6 | Primary CTA, focus states, links |
| #2563EB | Button hover |
| #1D4ED8 | Button active |
| #10B981 | Alternative accent (growth theme) |

### Accessibility

- **Contrast Ratio**: All text colors maintain 4.5:1 contrast minimum
- **Color Blind Safe**: Neutral palette with blue/green accents
- **Never rely on color alone**: Always use icons, text, or other indicators

---

## Shadows & Elevation

### Shadow System

Corporate Modernism uses subtle, diffused shadows for depth without heaviness.

```css
/* Elevation 1 - Subtle lift */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
/* Usage: Cards, slight elevation */

/* Elevation 2 - Elevated */
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.10);
/* Usage: Hovered cards, dropdowns */

/* Elevation 3 - Prominent */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
/* Usage: Modals, prominent cards */

/* Elevation 4 - Top level */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
/* Usage: Overlays, popovers */
```

### Implementation**:

```css
.card {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s ease;
}

.card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
```

---

## Icons

### Icon Guidelines

Icons in Corporate Modernism should be:
- **Geometric**: Built from basic shapes (circles, rectangles, lines)
- **Minimal**: Simplified to essential form
- **Consistent**: Same stroke width and style
- **Scalable**: Looks good from 16px to 48px

### Icon Styles**

**Stroke Icons** (Used primarily):
- Stroke Width: 2px
- Size: 24px × 24px (default)
- Color: #3B82F6 (accent) or #757575 (secondary)

**Solid Icons** (Rare, emphasis):
- Fill: #3B82F6
- Size: 16px × 16px
- Color: #3B82F6 or #10B981

### SVG Example**:

```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 6v6l4 2"></path>
</svg>
```

---

## Patterns

### Hero Section

**Layout**: 2-column grid on desktop, 1-column on mobile
- Left: Content (headline, subtitle, CTAs)
- Right: Visual element (geometric shapes, image)

**Spacing**:
- Headline: 56px, bold
- Subtitle: 18px, regular
- Gap to buttons: 40px
- Gap between columns: 60px

### Card Grid

**Desktop**: 3-column grid, 32px gap
**Tablet**: 2-column grid, 32px gap
**Mobile**: 1-column stack, 32px gap

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
}
```

### Section Layout

**Standard Section**:
1. Top padding: 100px
2. Bottom padding: 100px
3. Background color (white or light gray)
4. Border separation (optional, 1px #E8E8E8)

### Responsive Behavior

**Breakpoints**:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

**Adaptations**:
- Font sizes reduce on smaller screens
- Spacing reduces on mobile (24px → 16px)
- Columns reduce (3 → 2 → 1)
- Navigation becomes hamburger menu

---

## Implementation Checklist

- [ ] Choose primary font (Inter recommended)
- [ ] Set up color variables
- [ ] Create button components
- [ ] Build card components
- [ ] Design forms
- [ ] Establish grid system
- [ ] Test on multiple screen sizes
- [ ] Validate accessibility
- [ ] Create consistent spacing
- [ ] Document all patterns

---

## Best Practices

1. **Consistency**: Use the same spacing, colors, and typography throughout
2. **Restraint**: Don't use all sizes/weights at once
3. **Accessibility**: Test color contrast and keyboard navigation
4. **Performance**: Minimize CSS complexity
5. **Documentation**: Keep this reference updated as you extend the system
6. **Testing**: Test on real devices and browsers

---

## Resources

- **Design Tokens**: See `design-tokens.json`
- **Design Guide**: See `CORPORATE_MODERNISM_DESIGN_GUIDE.md`
- **Live Examples**: See `index.html` and `about.html`
- **CSS**: See `styles.css`

