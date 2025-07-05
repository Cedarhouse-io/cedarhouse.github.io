# Once UI Next.js - Comprehensive API Documentation

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Configuration System](#configuration-system)
4. [Provider Components](#provider-components)
5. [Icon Management](#icon-management)
6. [Layout Components](#layout-components)
7. [Page Components](#page-components)
8. [Styling System](#styling-system)
9. [TypeScript Configuration](#typescript-configuration)
10. [Once UI Core Components](#once-ui-core-components)
11. [Installation & Setup](#installation--setup)
12. [Usage Examples](#usage-examples)
13. [Deployment Guide](#deployment-guide)

## Overview

This is a Next.js starter template built with the Once UI design system. It provides a comprehensive foundation for building modern web applications with a focus on design consistency, accessibility, and developer experience.

### Key Features

- **Design System**: Built on Once UI Core components
- **Theming**: Comprehensive theming system with light/dark mode support
- **SEO Optimized**: Built-in meta tags, schema markup, and SEO components
- **TypeScript**: Full TypeScript support with proper type definitions
- **Responsive**: Mobile-first responsive design
- **Performance**: Optimized for speed and performance

## Project Structure

```
src/
├── app/
│   └── (main)/
│       ├── layout.tsx      # Root layout with SEO and theme setup
│       └── page.tsx        # Main landing page
├── components/
│   └── Providers.tsx       # Theme and context providers
└── resources/
    ├── once-ui.config.js   # Main configuration file
    ├── icons.ts            # Icon library definitions
    └── custom.css          # Custom CSS styles
```

## Configuration System

### once-ui.config.js

The main configuration file that controls all aspects of the design system.

#### Core Configuration

```javascript
// Theme and styling configuration
const style = {
  theme: "system",           // "dark" | "light" | "system"
  neutral: "gray",           // "sand" | "gray" | "slate"
  brand: "blue",             // Color scheme for brand elements
  accent: "indigo",          // Color scheme for accent elements
  solid: "contrast",         // "color" | "contrast" | "inverse"
  solidStyle: "flat",        // "flat" | "plastic"
  border: "playful",         // "rounded" | "playful" | "conservative"
  surface: "filled",         // "filled" | "translucent"
  transition: "all",         // "all" | "micro" | "macro"
  scaling: "100"             // "90" | "95" | "100" | "105" | "110"
};
```

#### Usage Example

```javascript
import { style } from "@/resources/once-ui.config";

// Apply theme programmatically
document.documentElement.setAttribute('data-theme', style.theme);
```

#### Data Visualization Configuration

```javascript
const dataStyle = {
  variant: "gradient",       // "flat" | "gradient" | "outline"
  mode: "categorical",       // "categorical" | "divergent" | "sequential"
  height: 24,               // Default chart height in rem
  axis: {
    stroke: "var(--neutral-alpha-weak)"
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  }
};
```

#### Visual Effects Configuration

```javascript
const effects = {
  mask: {
    cursor: false,           // Enable cursor-based masking
    x: 50,                   // Horizontal position (0-100)
    y: 0,                    // Vertical position (0-100)
    radius: 100              // Mask radius
  },
  gradient: {
    display: false,          // Show/hide gradient effect
    x: 50,                   // Horizontal position
    y: 0,                    // Vertical position
    width: 100,              // Gradient width
    height: 100,             // Gradient height
    tilt: 0,                 // Rotation angle
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50              // Opacity (0-100)
  },
  dots: {
    display: true,           // Show/hide dot pattern
    size: "2",               // Dot size
    color: "brand-on-background-weak",
    opacity: 40              // Opacity (0-100)
  }
};
```

#### SEO and Metadata Configuration

```javascript
const meta = {
  home: {
    path: "/",
    title: "Once UI for Next.js",
    description: "An open-source design system...",
    image: "/images/og/home.jpg",
    canonical: "https://once-ui.com",
    robots: "index,follow",
    alternates: [{ href: "https://once-ui.com", hrefLang: "en" }]
  }
};
```

#### Schema Configuration

```javascript
const schema = {
  logo: "",
  type: "Organization",
  name: "Once UI",
  description: meta.home.description,
  email: "lorant@once-ui.com"
};
```

#### Font Configuration

```javascript
import { Geist } from "next/font/google";

const fonts = {
  heading: Geist({ variable: "--font-heading", subsets: ["latin"] }),
  body: Geist({ variable: "--font-body", subsets: ["latin"] }),
  label: Geist({ variable: "--font-label", subsets: ["latin"] }),
  code: Geist_Mono({ variable: "--font-code", subsets: ["latin"] })
};
```

## Provider Components

### Providers.tsx

The main provider component that wraps the application with necessary contexts.

```typescript
interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps): JSX.Element
```

#### Features

- **ThemeProvider**: Manages theme state and styling
- **DataThemeProvider**: Handles data visualization theming
- **ToastProvider**: Provides toast notification system
- **IconProvider**: Manages icon library

#### Usage Example

```tsx
import { Providers } from '@/components/Providers';

function App({ children }) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}
```

#### Provider Hierarchy

```tsx
<ThemeProvider theme={...}>
  <DataThemeProvider variant={...}>
    <ToastProvider>
      <IconProvider icons={iconLibrary}>
        {children}
      </IconProvider>
    </ToastProvider>
  </DataThemeProvider>
</ThemeProvider>
```

## Icon Management

### icons.ts

Centralized icon management system using React Icons.

```typescript
import { IconType } from "react-icons";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  // Add more icons here
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
```

#### Adding New Icons

```typescript
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi2";

export const iconLibrary = {
  rocket: HiOutlineRocketLaunch,
  home: HiOutlineHome,
  user: HiOutlineUser,
};
```

#### Using Icons in Components

```tsx
import { Button } from "@once-ui-system/core";

<Button prefixIcon="rocket">
  Launch App
</Button>
```

## Layout Components

### layout.tsx

The root layout component with comprehensive SEO and theming setup.

#### Key Features

- **SEO Optimization**: Automatic meta tag generation
- **Theme Initialization**: Client-side theme setup
- **Font Loading**: Optimized font loading
- **Background Effects**: Visual effects and patterns

#### Meta Generation

```typescript
export async function generateMetadata() {
  return Meta.generate({
    title: meta.home.title,
    description: meta.home.description,
    baseURL: baseURL,
    path: meta.home.path,
    canonical: meta.home.canonical,
    image: meta.home.image,
    robots: meta.home.robots,
    alternates: meta.home.alternates,
  });
}
```

#### Theme Initialization Script

The layout includes a client-side script that:
- Applies default theme settings
- Resolves system theme preferences
- Loads saved user preferences
- Handles theme switching

## Page Components

### page.tsx

The main landing page component showcasing Once UI components.

#### Components Used

```tsx
import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx,
} from "@once-ui-system/core";
```

#### Page Structure

```tsx
<Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
  <Column maxWidth="s" horizontal="center" gap="l" align="center">
    <Badge>
      <Logo />
      <Text>An ecosystem, not a UI kit</Text>
    </Badge>
    <Heading variant="display-strong-xl">
      Presence that doesn't beg for attention
    </Heading>
    <Text variant="heading-default-xl">
      Build with clarity, speed, and quiet confidence
    </Text>
    <Button href="https://docs.once-ui.com">
      Explore docs
    </Button>
  </Column>
</Column>
```

## Styling System

### custom.css

Custom CSS variables and overrides for brand-specific styling.

#### Custom Color Schemes

```css
:root {
  /* Brand Colors */
  --scheme-brand-100: #08002f;
  --scheme-brand-500: #5071cc;
  --scheme-brand-1000: #ccf6ff;
  
  /* Alpha Values */
  --scheme-brand-600-10: rgba(111,148,241,0.1);
  --scheme-brand-600-30: rgba(111,148,241,0.3);
  --scheme-brand-600-50: rgba(111,148,241,0.5);
}
```

#### Responsive Breakpoints

Once UI uses a mobile-first approach with these breakpoints:
- `xs`: 0px (mobile)
- `s`: 640px (large mobile)
- `m`: 768px (tablet)
- `l`: 1024px (desktop)
- `xl`: 1280px (large desktop)

## TypeScript Configuration

### tsconfig.json

Optimized TypeScript configuration for Next.js and Once UI.

#### Key Settings

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "moduleResolution": "bundler",
    "jsx": "preserve",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### Path Mapping

The `@/*` alias maps to the `src/` directory for cleaner imports:

```typescript
import { Providers } from '@/components/Providers';
import { style } from '@/resources/once-ui.config';
```

## Once UI Core Components

### Layout Components

#### Column
```tsx
<Column 
  fillWidth          // Take full width
  center            // Center content
  padding="l"       // Large padding
  gap="m"           // Medium gap between children
  maxWidth="s"      // Small max width
  horizontal="center" // Center horizontally
  align="center"    // Center alignment
>
  {children}
</Column>
```

#### Flex
```tsx
<Flex 
  direction="row"   // "row" | "column"
  justify="center"  // "start" | "center" | "end" | "between"
  align="center"    // "start" | "center" | "end" | "stretch"
  wrap="wrap"       // "nowrap" | "wrap"
  gap="m"          // Spacing between items
>
  {children}
</Flex>
```

### Typography Components

#### Heading
```tsx
<Heading 
  variant="display-strong-xl"  // Size and weight variant
  as="h1"                      // HTML element
  color="brand"                // Color scheme
  marginBottom="m"             // Bottom margin
>
  Your heading text
</Heading>
```

#### Text
```tsx
<Text 
  variant="body-default-m"     // Typography variant
  onBackground="neutral-weak"  // Background color context
  wrap="balance"               // Text wrapping behavior
  align="center"               // Text alignment
>
  Your text content
</Text>
```

#### LetterFx
```tsx
<LetterFx 
  trigger="hover"    // "hover" | "click" | "instant"
  speed="fast"       // Animation speed
>
  Animated text
</LetterFx>
```

### Interactive Components

#### Button
```tsx
<Button 
  variant="primary"      // "primary" | "secondary" | "tertiary"
  size="m"              // "s" | "m" | "l"
  href="/path"          // Link destination
  target="_blank"       // Link target
  prefixIcon="rocket"   // Icon before text
  suffixIcon="arrow"    // Icon after text
  arrowIcon            // Show arrow icon
  loading              // Show loading state
  disabled             // Disable button
  onClick={handleClick} // Click handler
>
  Button Text
</Button>
```

### Visual Components

#### Badge
```tsx
<Badge 
  variant="brand"           // Color variant
  size="s"                 // Size variant
  border="neutral-medium"   // Border color
  onBackground="neutral"    // Background context
  vertical="center"         // Vertical alignment
  gap="8"                  // Internal gap
>
  <Icon name="star" />
  Badge content
</Badge>
```

#### Logo
```tsx
<Logo 
  dark="/logo-dark.svg"    // Dark theme logo
  light="/logo-light.svg"  // Light theme logo
  icon="/icon.svg"         // Icon version
  href="/"                 // Link destination
  size="m"                 // Logo size
  alt="Company Logo"       // Alt text
/>
```

#### Line
```tsx
<Line 
  vert                     // Vertical line
  background="neutral"     // Line color
  height="24"             // Height in spacing units
  width="1"               // Width in pixels
/>
```

### Background and Effects

#### Background
```tsx
<Background 
  position="absolute"      // CSS position
  mask={{                 // Mask effect settings
    x: 50,
    y: 0,
    radius: 100,
    cursor: true
  }}
  gradient={{             // Gradient effect settings
    display: true,
    opacity: 50,
    colorStart: "brand",
    colorEnd: "transparent"
  }}
  dots={{                 // Dot pattern settings
    display: true,
    size: "2",
    color: "neutral",
    opacity: 40
  }}
/>
```

### SEO Components

#### Meta
```tsx
Meta.generate({
  title: "Page Title",
  description: "Page description",
  baseURL: "https://yoursite.com",
  path: "/current-path",
  canonical: "https://yoursite.com/canonical",
  image: "/og-image.jpg",
  robots: "index,follow",
  alternates: [{ href: "https://yoursite.com", hrefLang: "en" }]
});
```

#### Schema
```tsx
<Schema 
  as="webPage"             // Schema type
  baseURL="https://yoursite.com"
  title="Page Title"
  description="Page description"
  path="/current-path"
/>
```

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/once-ui-system/nextjs-starter.git
cd nextjs-starter
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Your Project

1. Update `baseURL` in `src/resources/once-ui.config.js`
2. Customize the `style` object for your brand
3. Add your icons to `src/resources/icons.ts`
4. Update SEO metadata in the config file

### 4. Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your application.

### 5. Build for Production

```bash
npm run build
npm run start
```

## Usage Examples

### Creating a Custom Page

```tsx
"use client";

import {
  Column,
  Heading,
  Text,
  Button,
  Card,
  Grid
} from "@once-ui-system/core";

export default function AboutPage() {
  return (
    <Column fillWidth center padding="xl" gap="xl">
      <Column maxWidth="m" gap="l">
        <Heading variant="display-strong-l" align="center">
          About Our Company
        </Heading>
        
        <Text variant="body-default-l" onBackground="neutral-weak">
          We're building the future of design systems...
        </Text>
        
        <Grid columns="1" tabletColumns="2" gap="l">
          <Card padding="l" border="neutral-medium">
            <Heading variant="heading-strong-m">Mission</Heading>
            <Text>Our mission statement...</Text>
          </Card>
          
          <Card padding="l" border="neutral-medium">
            <Heading variant="heading-strong-m">Vision</Heading>
            <Text>Our vision for the future...</Text>
          </Card>
        </Grid>
        
        <Button 
          variant="primary" 
          size="l" 
          href="/contact"
          arrowIcon
        >
          Get in Touch
        </Button>
      </Column>
    </Column>
  );
}
```

### Custom Theme Implementation

```typescript
// theme.config.ts
export const customTheme = {
  theme: "light",
  brand: "violet",
  accent: "cyan",
  neutral: "slate",
  solid: "color",
  border: "conservative",
  scaling: "105"
};

// Apply theme
import { customTheme } from './theme.config';

Object.entries(customTheme).forEach(([key, value]) => {
  document.documentElement.setAttribute(`data-${key}`, value);
});
```

### Adding Custom Icons

```typescript
// icons.ts
import { 
  HiOutlineRocketLaunch,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineHeart
} from "react-icons/hi2";

export const iconLibrary = {
  rocket: HiOutlineRocketLaunch,
  home: HiOutlineHome,
  user: HiOutlineUser,
  settings: HiOutlineCog,
  heart: HiOutlineHeart,
};

// Usage in components
<Button prefixIcon="heart">Like</Button>
<Button suffixIcon="settings">Settings</Button>
```

### Responsive Design Patterns

```tsx
<Grid 
  columns="1"           // 1 column on mobile
  tabletColumns="2"     // 2 columns on tablet
  desktopColumns="3"    // 3 columns on desktop
  gap="m"
>
  {items.map(item => (
    <Card key={item.id}>
      {item.content}
    </Card>
  ))}
</Grid>
```

### Form Implementation

```tsx
"use client";

import { useState } from 'react';
import {
  Column,
  Input,
  Textarea,
  Button,
  Heading,
  Toast
} from "@once-ui-system/core";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    Toast.success("Message sent successfully!");
  };

  return (
    <Column maxWidth="s" gap="l">
      <Heading variant="heading-strong-l">Contact Us</Heading>
      
      <form onSubmit={handleSubmit}>
        <Column gap="m">
          <Input
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          
          <Input
            type="email"
            label="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          
          <Textarea
            label="Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            rows={4}
            required
          />
          
          <Button type="submit" variant="primary" size="l">
            Send Message
          </Button>
        </Column>
      </form>
    </Column>
  );
}
```

## Deployment Guide

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fnextjs-starter)

### Custom Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Export static files (optional):
   ```bash
   npm run export
   ```

3. Deploy the `out/` directory to your hosting provider

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## Best Practices

### Performance Optimization

1. **Use Static Generation**: Leverage Next.js static generation for better performance
2. **Optimize Images**: Use Next.js Image component for automatic optimization
3. **Code Splitting**: Components are automatically code-split
4. **Font Optimization**: Fonts are preloaded and optimized

### Accessibility

1. **Semantic HTML**: Once UI components use proper semantic markup
2. **Keyboard Navigation**: All interactive elements support keyboard navigation
3. **Screen Readers**: ARIA labels and descriptions are included
4. **Color Contrast**: Theme colors meet WCAG contrast requirements

### SEO Best Practices

1. **Meta Tags**: Use the Meta component for proper meta tag generation
2. **Schema Markup**: Implement structured data with the Schema component
3. **Semantic Structure**: Use proper heading hierarchy
4. **Image Alt Text**: Always provide meaningful alt text for images

## Troubleshooting

### Common Issues

1. **Theme Not Applied**: Ensure Providers component wraps your app
2. **Icons Not Showing**: Check that icons are properly imported in icons.ts
3. **TypeScript Errors**: Verify path mappings in tsconfig.json
4. **Styling Issues**: Import the base CSS file in your main component

### Getting Help

- [Documentation](https://docs.once-ui.com)
- [Discord Community](https://discord.com/invite/5EyAQ4eNdS)
- [GitHub Issues](https://github.com/once-ui-system/nextjs-starter/issues)

---

*This documentation covers all public APIs, components, and configuration options available in the Once UI Next.js starter. For the most up-to-date information, refer to the [official Once UI documentation](https://docs.once-ui.com).*