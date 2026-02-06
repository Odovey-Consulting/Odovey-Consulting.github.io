# Contributors Guide - Odovey Consulting Website

## 🎯 **Tech Stack Rules & Best Practices**

### **Next.js 15 + App Router Rules**

- **File-based routing**: Create `app/page-name/page.tsx` for new routes
- **Layout hierarchy**: Use `layout.tsx` files to wrap child pages with common elements
- **Server vs Client components**: Use `'use client'` directive only when needed (forms, state, events)
- **Metadata**: Define SEO metadata in `layout.tsx` or page files using `export const metadata`
- **Images**: Always use `next/image` component, never `<img>` tags
- **Links**: Always use `next/link` component, never `<a>` tags for internal navigation
- **API routes**: Create in `app/api/` directory if backend functionality needed

### **React + TypeScript Rules**

- **Component naming**: Use PascalCase for components (`MyComponent.tsx`)
- **File extensions**: Use `.tsx` for React components, `.ts` for utilities
- **Props typing**: Always define interfaces for component props
- **Export patterns**: Use named exports for components: `export function Header() {}`
- **State management**: Use `useState` for local state, avoid complex state libraries initially
- **Event handlers**: Type event parameters: `(e: React.FormEvent) => void`

### **JSX Syntax Rules (CRITICAL)**

- **Special characters**: Use HTML entities for `<` (`&lt;`), `>` (`&gt;`), `&` (`&amp;`) in text content
- **String interpolation**: Use `{variable}` for dynamic content
- **Conditional rendering**: Use `{condition && <Component />}` or ternary operators
- **Lists**: Always use `key` prop when rendering arrays: `{items.map(item => <div key={item.id}>)}`
- **Class names**: Use `className` not `class`
- **Self-closing tags**: Always self-close empty elements: `<div />`, `<input />`

### **Tailwind CSS Rules**

- **Utility classes**: Prefer Tailwind utilities over custom CSS
- **Custom styles**: Add custom styles to `app/globals.css` using `@layer` directives
- **Responsive design**: Use responsive prefixes: `md:`, `lg:`, `xl:`
- **Color system**: Use project colors: `primary-600`, `secondary-600`, standard colors
- **Component classes**: Define reusable styles in `globals.css` (`.btn-primary`, `.section-padding`)
- **Hover states**: Add hover effects: `hover:bg-blue-700`, `hover:scale-105`

### **File Structure Rules**

```
app/                    # Pages and layouts (App Router)
├── page.tsx           # Home page (/)
├── layout.tsx         # Root layout
├── globals.css        # Global styles
└── [page]/page.tsx    # Individual pages

components/            # Reusable UI components
├── Header.tsx         # Navigation
├── Footer.tsx         # Footer
└── [Component].tsx    # Other reusable components

public/               # Static assets
├── images/           # Images and media
├── icons/            # Icons and logos
└── favicon.ico       # Favicon

Configuration files at root level
```

### **Development Workflow Rules**

- **Always run**: `npm run dev` for development
- **Check terminal**: Monitor for compilation errors and warnings
- **Hot reload**: Save files to see changes instantly
- **Error debugging**: Read terminal errors first, then browser console
- **TypeScript**: Fix TypeScript errors before proceeding
- **Testing**: Test all pages and forms before committing changes

### **Code Quality Rules**

- **Consistent formatting**: Use consistent indentation (2 spaces)
- **Component size**: Keep components under 200 lines, split if larger
- **Function naming**: Use descriptive names: `handleSubmit`, `toggleMenu`
- **Comments**: Add comments for complex logic, avoid obvious comments
- **Console logs**: Remove `console.log` statements before production
- **Error handling**: Always handle potential errors (try/catch, optional chaining)

### **Content Management Rules**

- **Text content**: Edit directly in component files for now
- **Images**: Place in `public/images/` and reference as `/images/filename.jpg`
- **SEO**: Update metadata in `layout.tsx` and individual pages
- **Forms**: Use controlled components with proper validation
- **Links**: Ensure all internal links use Next.js `Link` component

### **Common Error Prevention**

- **JSX text content**: Never use `<`, `>`, `&` directly in JSX text
- **Import paths**: Use relative imports for local files, absolute for packages
- **Missing keys**: Always provide `key` prop for mapped elements
- **Event handlers**: Bind event handlers properly to avoid infinite renders
- **State updates**: Never mutate state directly, use setter functions
- **TypeScript**: Don't ignore TypeScript errors, fix them properly

### **Performance Best Practices**

- **Image optimization**: Use Next.js Image component with proper dimensions
- **Bundle size**: Avoid importing entire libraries, use specific imports
- **Lazy loading**: Use dynamic imports for heavy components
- **Caching**: Leverage Next.js built-in caching mechanisms
- **SEO**: Ensure proper meta tags and semantic HTML structure

### **Deployment Preparation**

- **Build testing**: Run `npm run build` to test production build
- **Environment variables**: Use `.env.local` for sensitive data
- **Error pages**: Implement custom 404 and error pages
- **Performance**: Test Core Web Vitals and loading speeds
- **Accessibility**: Ensure proper ARIA labels and semantic HTML

### **Emergency Debugging Steps**

1. **Check terminal output** for compilation errors
2. **Clear browser cache** and refresh
3. **Restart dev server**: Stop (`Ctrl+C`) and run `npm run dev` again
4. **Check file paths** and import statements
5. **Validate JSX syntax** for special characters
6. **Review recent changes** and undo if necessary

### **Git Workflow**

- **Commit frequently** with descriptive messages
- **Test before committing** - ensure site builds and runs
- **Backup before major changes** - commit working state first
- **Use branches** for experimental features
- **Document changes** in commit messages

---

## 🚨 **Critical Reminders**

- **JSX Special Characters**: Always escape `<`, `>`, `&` in text content
- **TypeScript Errors**: Never ignore, always fix TypeScript compilation errors
- **File Extensions**: Use `.tsx` for React components, `.ts` for utilities
- **Component Exports**: Use named exports for better tree-shaking
- **Development Server**: Keep `npm run dev` running while developing

---

## 📞 **When You Need Help**

- **Error messages**: Read them carefully, they usually point to the exact problem
- **Documentation**: Next.js, React, Tailwind, and TypeScript docs are excellent
- **Stack Overflow**: Search for specific error messages
- **GitHub Issues**: Check project repositories for similar issues

Remember: This tech stack is powerful but has specific rules. Following these guidelines will prevent 90% of common issues and ensure smooth development.
