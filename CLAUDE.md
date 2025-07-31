# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting

## Project Context

This is a **hybrid donation platform for spiritual events** supporting both UPI and cash donations with instant WhatsApp receipts. The platform includes a unified admin panel and public website, designed for inclusivity across different user segments (tech-savvy and traditional devotees).

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
- `src/lib/` - Utility functions and constants

### Authentication Flow
The app uses Supabase for authentication with the following patterns:
- Server actions in `src/actions/auth.ts` handle sign up, sign in, password reset
- Middleware in `src/utils/supabase/middleware.ts` protects `/protected` routes
- Environment variables `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are required
- Authenticated users are redirected to `/protected`, unauthenticated to `/sign-in`

### MVP Scope & Business Requirements

**Single Admin Account**: 
- Only one admin account exists (Admin/admin@123)
- No signup/registration flows for regular users
- Sign-in button integrated on main website, not separate admin URL

**Public Website Structure**:
- Navigation includes: Home, About, Events, Gallery, Contact (defined in `src/lib/constants.ts`)
- Home is the default landing page
- Consistent branding with green (#043933) background and white text

**Core Features to Implement**:
- Hybrid donation flow (UPI QR codes + cash entry)
- Minimal donor registration (WhatsApp number mandatory, name/location optional)
- Automated WhatsApp receipt delivery
- Unified admin panel for event and donation management
- Real-time dashboard for cash and digital donations
- DPDPA compliance for data privacy
- Mobile-responsive design for all components

### Component Patterns
- Uses shadcn/ui configuration in `components.json` with "new-york" style
- Path aliases configured: `@/` points to `src/`
- Form components use React Hook Form with Zod validation
- Server components are preferred, client components marked with "use client"
- Custom color scheme: primary green (#043933) and white text

### Data Model Requirements
Core entities to implement:
- **Donor**: WhatsApp number (required), Donor ID (unique), name/location (optional)
- **Donation**: type (UPI/cash), amount, timestamp, event ID, donor reference, receipt status
- **Event**: event ID, name, date/time, description, images, status

### Integration Requirements
- **UPI Payment**: Static QR code integration with payment gateway
- **WhatsApp Business API**: Automated receipt delivery with pre-approved templates
- **Admin Panel**: Cash donation entry, real-time dashboard updates
- **Offline Support**: Queue cash entries when network is unreliable, sync when reconnected

### Environment Setup
The app checks for required Supabase environment variables and shows warnings if missing. Set up:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Performance & Scalability Targets
- Support 1,000+ concurrent donation transactions/minute during peak events
- 95th percentile donation completion time under 2 minutes
- 99.9% uptime during event periods
- Admin dashboard updates within 15 seconds

### Compliance & Security
- **DPDPA Compliance**: Data minimization, explicit consent, secure handling
- **Role-based Access Control**: Admin/staff/volunteer permissions
- **Audit Logging**: All privileged actions logged with timestamps
- **Data Encryption**: AES-256 for personal data at rest and in transit
- **UPI Compliance**: NPCI and RBI guidelines for payment processing

### User Experience Priorities
- **Admin Panel**: Non-technical user friendly, mobile-responsive, contextual help
- **Donor Journey**: Minimal steps (3 or fewer), clear progress indicators
- **Accessibility**: WCAG 2.1 AA compliance, multilingual support (Hindi + regional)
- **Volunteer Support**: On-site assistance for less tech-savvy users