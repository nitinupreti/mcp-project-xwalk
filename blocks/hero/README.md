# Hero Block

A full-width hero block with background image and centered content overlay, styled to match the AEM.live design.

## Features

- Full-width background image with responsive sizing
- Centered content overlay with dark gradient for readability
- Support for heading, description text, and call-to-action buttons
- Responsive typography that scales across device sizes
- Smooth hover effects on buttons

## Content Structure

The hero block expects two rows:

1. **Row 1 (Image)**: Contains the background image
   - One cell with an image (picture element)

2. **Row 2 (Content)**: Contains the hero content
   - Heading (h1, h2, etc.)
   - Description paragraph(s)
   - Button container with CTA buttons

## Usage Example

```
| Hero |
|------|
| ![Hero Background](image.jpg) |
| # Delivering at lightspeed<br>AEM sites are fast. Built for speed...<br>[Get started](link) [Explore](link2) |
```

## Styling

The block includes:
- Minimum height of 500px (mobile) to 700px (desktop)
- Dark gradient overlay for text readability
- Text shadows for enhanced contrast
- Responsive font sizes (48px mobile to 72px desktop for headings)
- Button styles for primary and secondary CTAs

## Test Content

Test content is available at: `/drafts/hero-test.plain.html`

To test locally:
1. Restart your dev server with: `aem up --html-folder drafts`
2. Navigate to: `http://localhost:3000/drafts/hero-test`
