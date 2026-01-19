
# St Monica Academy Interactive Website

This project is a full-stack interactive school website for St Monica Academy Kitengela, featuring:
- Modern React frontend (interactive-website/frontend)
- Node.js/Express backend (interactive-website/backend)
- PostgreSQL database
- Real-time features, parent portal, downloadable resources, and more

---

## Table of Contents
1. [Project Structure](#project-structure)
2. [Setup & Installation](#setup--installation)
3. [Frontend Overview](#frontend-overview)
4. [Backend Overview](#backend-overview)
5. [Key Features](#key-features)
6. [How Each Part Works](#how-each-part-works)
7. [Development & Contribution](#development--contribution)

---

## Project Structure

```
interactive-website/
	frontend/         # React app (UI, pages, components)
	backend/          # Node.js/Express API server
	database/         # SQL schema, migrations, seeds
	docker/           # Docker setup files
	docs/             # Documentation (API, design, setup)
public/             # Static files (for legacy or root)
src/                # (legacy or root-level React code)
README.md           # This file
```

---

## Setup & Installation

### Prerequisites
- Node.js (v18+ recommended)
- npm
- PostgreSQL

### 1. Clone the Repository
```
git clone https://github.com/Obiero-Samuel/St-Monica-Academy-Kitengela.git
cd St-Monica-Academy-Kitengela/interactive-website
```

### 2. Install Dependencies
#### Backend:
```
cd backend
npm install
```
#### Frontend:
```
cd ../frontend
npm install
```

### 3. Configure Environment
- Copy `.env.example` to `.env` in backend and fill in DB, JWT, and email settings.

### 4. Database Setup
- Run the SQL in `database/schema.sql` to create tables.
- (Optional) Use migrations/seeds for test data.

### 5. Start Servers
#### Backend:
```
cd backend
npm start
```
#### Frontend:
```
cd ../frontend
npm start
```

---

## Frontend Overview

- **React** SPA in `frontend/`
- Main entry: `src/App.js` (routing)
- Pages: `src/pages/` (Home, Admissions, Parent Portal, Fee Structure, etc.)
- Components: `src/components/` (Header, Footer, Auth, etc.)
- Styles: `src/styles/`
- Public assets: `public/` (PDFs, images)

## Backend Overview

- **Node.js/Express** API in `backend/`
- Main entry: `src/server.js`
- Routes: `src/routes/` (auth, user, parent, etc.)
- Controllers: `src/controllers/`
- Models: `models/` (User, Parent, etc.)
- Config: `src/config/` (database, server)

---

## Key Features

- **Parent Portal**: Registration, OTP email verification, dashboard
- **Downloadable Fee Structure**: PDFs in `/frontend/public/`, linked in UI
- **Counselling & Transport Department Pages**: Info, contact, and services
- **Mobile Responsive & Accessible**: Modern UI, accessible navigation
- **Real-time Features**: Notifications, live charts (backend + frontend)
- **Authentication**: JWT, bcrypt password hashing
- **API Documentation**: See `docs/API.md`

---

## How Each Part Works

### 1. Navigation & Routing
- `src/App.js`: Sets up all routes using React Router.
- `src/components/common/Header` and `Footer`: Navigation links, including Parent Portal, Fee Structure, Counselling, and Transport.

### 2. Parent Portal
- `src/pages/ParentPortal/ParentPortal.js`: Handles registration, OTP, and login.
- `src/pages/ParentPortal/ParentDashboard.js`: Parent dashboard after login.
- Backend: `backend/models/Parent.js`, `controllers/parent.controller.js`, `routes/parent.routes.js`.

### 3. Fee Structure
- PDFs placed in `frontend/public/` (e.g., `Fee structure 2026- Junior.pdf`)
- `src/pages/FeeStructure/FeeStructure.js`: Download links for PDFs.
- Linked in footer and navigation.

### 4. Counselling & Transport Department
- `src/pages/CounsellingDepartment/CounsellingDepartment.js`: Info, contact, and services.
- `src/pages/TransportDepartment/TransportDepartment.js`: Info, contact, and services.
- Linked in footer and navigation.

### 5. Backend API
- `src/routes/`: All API endpoints (auth, parent, user, etc.)
- `src/controllers/`: Logic for each endpoint
- `models/`: Sequelize models for DB tables

### 6. Real-time Features
- Socket.io used for notifications, live charts, and presence

---

## Development & Contribution

1. Fork or clone the repo
2. Create a new branch for your feature/fix
3. Commit and push changes
4. Open a pull request

---

## Credits
- Developed by Obiero Samuel and contributors
- For questions, open an issue or contact the maintainer
