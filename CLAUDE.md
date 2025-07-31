# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting

## Architecture Overview

This is a Next.js 15 application with Supabase authentication integration, built using the App Router pattern and shadcn/ui components.

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **Authentication**: Supabase Auth with SSR
- **UI**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Forms**: React Hook Form with Zod validation
- **Theme**: next-themes for dark/light mode

### Directory Structure
- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable React components
- `src/components/ui/` - shadcn/ui component library
- `src/actions/` - Server actions for authentication
- `src/utils/supabase/` - Supabase client configuration
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions

### Authentication Flow
The app uses Supabase for authentication with the following patterns:
- Server actions in `src/actions/auth.ts` handle sign up, sign in, password reset
- Middleware in `src/utils/supabase/middleware.ts` protects `/protected` routes
- Environment variables `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are required
- Authenticated users are redirected to `/protected`, unauthenticated to `/sign-in`

### Component Patterns
- Uses shadcn/ui configuration in `components.json` with "new-york" style
- Path aliases configured: `@/` points to `src/`
- Form components use React Hook Form with Zod validation
- Server components are preferred, client components marked with "use client"

### Environment Setup
The app checks for required Supabase environment variables and shows warnings if missing. Set up:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`