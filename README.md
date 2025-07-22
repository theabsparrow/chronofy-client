# ⏰ Chronofy

Chronofy is a simple and elegant event scheduling web application. This **client-side** React app allows users to create, view, update, archive, and delete events — all with an intuitive user experience and stylish UI.

---

## 🔗 Project Links

- **🔴 Server Live**: https://chronofy-server.vercel.app/api/v1
- **🌐 Client Live**: https://chronofy.vercel.app/
- **📦 Server GitHub Repo**: https://github.com/theabsparrow/Chronofy-server.git

---

## 🧰 Technologies Used

- **React.js** (Raw React, not Next.js)
- **TypeScript**
- **React Router DOM**
- **Tailwind CSS**
- **TanStack Query (React Query)** – for data fetching and mutation
- **React Hook Form + Zod** – form handling and validation
- **Vercel** – for deployment
- **Vite** – for development server and build tooling

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/theabsparrow/chronofy-client.git
cd chronofy-client

```

```bash
npm install
# or
yarn install

```

```bash
VITE_API_BASE_URL=https://your-backend-api.vercel.app
```

```bash
npm run dev
# or
yarn dev
```

✅ Create new events with title, date, time, optional notes, and category

✅ Display upcoming and archived events

✅ Update or delete existing events

✅ Archive and unarchive events

✅ Responsive design and clean UI

✅ Toast notifications for feedback

✅ Form validation with Zod and React Hook Form

```chronofy-client/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Pages (Home, Archive, Details)
│   ├── hooks/           # Custom hooks (fetch, update, delete, etc.)
│   ├── service/         # Axios config
│   ├── types/           # TypeScript types
│   ├── App.tsx
│   └── main.tsx
└── ...
```
