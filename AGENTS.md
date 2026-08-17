# Engineering & Development Standards

## Objective

Build production-grade software that is scalable, maintainable, secure, accessible, performant, SEO-optimized, and easy for developers to understand, extend, and maintain.

Every solution should be suitable for production deployment unless explicitly instructed otherwise.

---

# Development Workflow

Before writing any code:

- Understand the project requirements.
- Ask clarifying questions whenever requirements are ambiguous.
- Identify potential edge cases.
- Suggest improvements when appropriate.
- Create a complete implementation plan.
- Divide the project into logical development phases.
- Explain the architecture before implementation.

Do not begin implementation until the project scope is clear.

---

# Project Initialization

When creating a new project:

- Create a project directory using the project name.
- Initialize the project.
- Install and configure all required dependencies.
- Configure TypeScript.
- Configure ESLint.
- Configure Prettier.
- Configure Tailwind CSS when applicable.
- Configure path aliases.
- Configure environment variables.
- Configure Git.
- Verify the project builds successfully.

Use the most stable and widely adopted tooling unless instructed otherwise.

---

# Engineering Principles

When multiple solutions exist:

1. Prefer simplicity over complexity.
2. Prefer maintainability over cleverness.
3. Prefer readability over brevity.
4. Prefer scalability over shortcuts.
5. Prefer type safety over convenience.
6. Prefer reusable abstractions over duplicated logic.
7. Prefer composition over inheritance.
8. Prefer explicit code over hidden behavior.
9. Avoid premature optimization.
10. Avoid unnecessary abstractions.

---

# Architecture

Design software that is modular, reusable, and loosely coupled.

Separate:

- UI
- Business Logic
- State Management
- API Layer
- Services
- Utilities
- Configuration

Business logic must never be tightly coupled to presentation components.

Design modules so they can be reused throughout the project.

Avoid circular dependencies.

Keep dependencies minimal.

---

# Folder Structure

Organize projects by feature whenever practical.

Example:

```
src/
├── app/
├── assets/
├── components/
├── features/
├── hooks/
├── lib/
├── providers/
├── services/
├── store/
├── styles/
├── types/
├── utils/
├── constants/
```

Keep folders focused and maintainable.

Avoid dumping unrelated files into the same directory.

---

# Code Quality

Write clean, self-documenting code.

Requirements:

- Single Responsibility Principle
- Meaningful naming
- Small focused functions
- Small maintainable files
- Eliminate duplicated logic
- Eliminate dead code
- Avoid deeply nested logic
- Prefer early returns
- Prefer composition
- Refactor when complexity increases

Avoid unnecessary comments.

Only document:

- Business rules
- Complex algorithms
- Architectural decisions

---

# TypeScript Standards

Strict Mode is mandatory.

Never use:

- `any`
- `@ts-ignore`
- unnecessary assertions
- implicit unknown types

Always:

- Type component props
- Type API responses
- Type hooks
- Export shared interfaces
- Prefer interfaces for object contracts
- Prefer type inference when obvious

Every exported function should have predictable typing.

---

# React Standards

Components should remain small and reusable.

Prefer:

- Composition
- Custom Hooks
- Reusable UI Components

Avoid:

- Prop drilling
- Massive components
- Duplicate logic

Memoize only when measurable performance benefits exist.

Use Client Components only when required.

Prefer Server Components whenever appropriate.

---

# State Management

Choose the smallest solution capable of solving the problem.

Priority:

1. Local State
2. Context API
3. Zustand
4. Redux (only when absolutely necessary)

Avoid unnecessary global state.

---

# API & Data Layer

Never fetch data directly inside presentation components.

Centralize:

- API Clients
- Services
- Data Fetching

Always handle:

- Loading State
- Error State
- Empty State
- Retry Logic

Validate every external response.

Never trust external data.

Sanitize all user input.

---

# Styling Standards

Maintain a consistent design system.

Requirements:

- Utility-first styling when applicable
- Design tokens
- CSS variables
- Consistent spacing
- Consistent typography
- Consistent border radius
- Consistent shadows
- Reusable style patterns

Avoid hardcoded values whenever reusable tokens exist.

---

# Responsive Design

Develop mobile-first.

Support:

- Mobile
- Tablet
- Laptop
- Desktop
- Ultra-wide displays

Verify layouts across all supported breakpoints.

Never assume desktop-only layouts.

---

# UI & UX Standards

Design quality should feel modern and premium.

Design inspiration:

- Apple
- Stripe
- Linear
- Vercel
- Google
- Notion

Requirements:

- Strong visual hierarchy
- Premium typography
- Balanced whitespace
- Consistent spacing
- Professional color palette
- Smooth animations
- Meaningful micro-interactions
- Excellent usability
- Consistent component design
- Accessible contrast ratios

Avoid generic template-style interfaces.

Every screen should feel polished and production-ready.

---

# Accessibility

Accessibility is mandatory.

Requirements:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Focus states
- ARIA labels where appropriate
- Screen reader compatibility
- Accessible color contrast
- Accessible forms
- Proper button semantics

Never sacrifice accessibility for aesthetics.

---

# SEO Standards

Every public-facing website must follow modern SEO best practices.

## Technical SEO

- Semantic HTML
- Proper heading hierarchy
- One H1 per page
- Unique page titles
- Unique meta descriptions
- Canonical URLs
- robots.txt
- sitemap.xml
- Open Graph metadata
- Twitter Card metadata
- Structured Data (JSON-LD) where applicable
- Descriptive URLs
- Internal linking
- Image alt text

## Performance SEO

- Optimize Core Web Vitals
- Minimize render-blocking resources
- Lazy load images
- Lazy load non-critical components
- Optimize fonts
- Optimize images
- Reduce layout shifts
- Reduce unused CSS
- Reduce unused JavaScript

SEO should be built into the architecture from the beginning.

---

# Performance Standards

Performance is a core requirement.

Requirements:

- Optimize bundle size
- Code splitting
- Lazy loading
- Dynamic imports
- Memoization where beneficial
- Minimize JavaScript shipped
- Optimize fonts
- Optimize images
- Prevent layout shifts
- Avoid unnecessary renders
- Use Suspense where appropriate
- Prefer server rendering when beneficial

Optimize for Core Web Vitals.

---

# Security Standards

Security is mandatory.

## Input Security

- Validate every input
- Sanitize external data
- Escape rendered content where necessary

## Authentication

- Never expose secrets
- Never hardcode credentials
- Store secrets only in environment variables

## API Security

- Validate API responses
- Handle malformed responses
- Prevent unnecessary data exposure

## Frontend Security

- Avoid unsafe HTML rendering
- Remove debugging information
- Prevent accidental exposure of sensitive information

## Dependency Security

Before adding a dependency verify:

- Necessity
- Maintenance
- Security
- Bundle size

Never introduce unnecessary security risks.

---

# Error Handling

Every feature should gracefully handle:

- Loading
- Empty State
- Error State
- Retry
- Edge Cases
- Unexpected Data

Errors should be informative, actionable, and user-friendly.

Never fail silently.

---

# Dependency Management

Before adding any dependency:

- Verify necessity
- Check maintenance status
- Check security advisories
- Check bundle size
- Consider native alternatives

Avoid unnecessary dependencies.

---

# Testing

Test whenever appropriate.

Prioritize:

- Business Logic
- Utilities
- Custom Hooks
- Core Components
- API Layer

Use:

- Unit Tests
- Integration Tests
- End-to-End Tests when applicable

Never claim tests passed unless they were executed.

---

# Documentation

Every production project must include:

- README
- Installation Guide
- Environment Setup
- Development Commands
- Build Instructions
- Deployment Guide
- Architecture Overview

Document only information that provides long-term value.

---

# Git Standards

Use Conventional Commits.

Examples:

- feat:
- fix:
- refactor:
- docs:
- style:
- test:
- chore:

Write concise and meaningful commit messages.

---

# AI Assistant Rules

When modifying or generating code:

- Preserve existing architecture.
- Reuse existing components.
- Reuse existing utilities.
- Avoid duplicate logic.
- Avoid dead code.
- Do not break existing APIs unnecessarily.
- Update related types.
- Update documentation when behavior changes.
- Explain architectural decisions when multiple valid approaches exist.
- Prefer incremental improvements over unnecessary rewrites.

Never sacrifice maintainability for short-term speed.

---

# Code Review Checklist

Before considering implementation complete:

- Remove duplicated logic.
- Remove unused imports.
- Remove dead code.
- Simplify unnecessary complexity.
- Verify naming consistency.
- Verify folder organization.
- Verify type safety.
- Verify accessibility.
- Verify responsiveness.
- Verify SEO.
- Verify security.
- Verify performance.
- Verify production readiness.

---

# Definition of Done

A task is complete only when:

- Functionality works correctly.
- Code is production-ready.
- No TypeScript errors exist.
- No lint errors exist.
- No unused code remains.
- Responsive design is verified.
- Accessibility requirements are satisfied.
- SEO requirements are satisfied.
- Security requirements are satisfied.
- Performance remains acceptable.
- Documentation is updated.
- Project architecture remains clean.
- Code follows all engineering standards defined in this document.