# Analytics Dashboard

A modern, responsive, production-ready **Admin Analytics Dashboard** built using **Next.js**, **TypeScript**, **Tailwind CSS**, **Recharts**, and **Zustand**.

This project was developed as part of a frontend technical assignment to demonstrate real-world dashboard development practices including component reusability, state management, data visualization, and UI/UX design.

---

## Live Demo

🔗 https://analytics-dashboard-31kg.vercel.app

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts & Visualization:** Recharts
- **State Management:** Zustand
- **Data Handling:** Static JSON (mocked data)
- **Package Manager:** npm
- **Deployment:** Vercel

---

## Setup Instructions

To run the project locally:

```bash
npm install
npm run dev

## Features

### Dashboard Layout
- Collapsible sidebar navigation
- Top header with notification icon and user avatar
- Responsive layout for desktop, tablet, and mobile

### Analytics Overview
- KPI cards with growth indicators:
  - Total Revenue
  - Total Users
  - Orders
  - Conversion Rate
- Color-coded trends (positive / negative)

### Charts & Visualizations
- **Revenue Over Time** – Line Chart
- **Orders Per Month** – Bar Chart
- **User Distribution** – Pie Chart
- **Traffic Sources** – Horizontal Bar Chart
- Interactive tooltips and responsive containers

### Filters & State Management
- Date range filter (Last 7 days / 30 days / 12 months)
- User type filter (All users)
- Global state handled using Zustand

### UI / UX
- Clean and modern dark-themed UI
- Consistent spacing and typography
- Responsive grid system
- Hover effects and smooth interactions

### Project Structures
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   ├── KpiCard.tsx
│   ├── RevenueLineChart.tsx
│   ├── OrdersBarChart.tsx
│   ├── UserPieChart.tsx
│   ├── TrafficSourceChart.tsx
│   ├── Filters.tsx
│   ├── SkeletonCard.tsx
│   └── SkeletonChart.tsx
├── data/
│   └── chartData.ts

### Architecture Decisions
- App Router (Next.js): Used for modern routing and layout composition.
- Component-Based Design: Each dashboard section is modular and reusable.
- Zustand for State: Lightweight global state management for filters and shared UI state.
- Static Mock Data: Used to focus on UI, state handling, and visualization logic.
- Tailwind CSS: Enables rapid styling with consistent design tokens.

Assumptions
- Dashboard uses mocked static data (no backend API).
- Authentication and role-based access are not implemented.
- The focus is on frontend architecture, UI quality, and data visualization.

Authentication
- Authentication is not implemented.
- No test credentials are required.

Author
Adib Ahmed
Frontend Developer
GitHub: https://github.com/Adib5947

License
This project is for educational and evaluation purposes.