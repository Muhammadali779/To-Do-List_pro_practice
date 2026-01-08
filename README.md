# 📘 FULL PROJECT GUIDE

## Multi-Tenant Task & Project Management System

Bu hujjat loyihani **0 dan oxirigacha qanday qilish kerakligini** tushuntiradi.
O‘qib bo‘lgach, sen:

* backend logikani
* database structure’ni
* UI rollarini
* frontend/backend fayllarni

aniq tasavvur qila olasan.

---

# 1️⃣ USER ROLES & UI LOGIC (ENG MUHIM)

Tizimda **3 ta role** bor:

* **Owner**
* **Admin**
* **Member**

UI **role’ga qarab o‘zgaradi**. Bitta UI emas.

---

## 🟣 OWNER UI

### Owner kim?

* Organization’ni yaratgan user
* Eng yuqori huquq

### Owner ko‘radigan sahifalar:

* Dashboard
* Organizations settings
* Users management
* Projects
* Tasks
* Analytics (oddiy)

### Owner NIMA QILA OLADI?

✅ Organization yaratish / o‘chirish
✅ User qo‘shish (invite)
✅ User role o‘zgartirish
✅ Project yaratish / o‘chirish
✅ Task yaratish / o‘chirish
✅ Hamma task’larni ko‘rish
✅ Admin’larni tayinlash

📌 **UI elementlar:**

* “Add user” tugmasi
* Role dropdown
* Organization settings panel

---

## 🔵 ADMIN UI

### Admin kim?

* Organization ichida project boshqaruvchi

### Admin ko‘radigan sahifalar:

* Dashboard
* Projects
* Tasks

❌ Organization settings YO‘Q
❌ User role o‘zgartirish YO‘Q

### Admin NIMA QILA OLADI?

✅ Project yaratish / edit
✅ Task yaratish
✅ Task assign qilish
✅ Task status o‘zgartirish
✅ Member’larning task’larini ko‘rish

📌 **UI elementlar:**

* “Create project”
* “Assign task”
* Task status select

---

## 🟢 MEMBER UI

### Member kim?

* Oddiy user

### Member ko‘radigan sahifalar:

* My Tasks
* Profile

❌ Project yaratish YO‘Q
❌ Boshqa user’larni ko‘rish YO‘Q

### Member NIMA QILA OLADI?

✅ Faqat o‘ziga biriktirilgan task’larni ko‘radi
✅ Task status’ni o‘zgartiradi
✅ Deadline’ni ko‘radi

📌 **UI elementlar:**

* Task list
* Status dropdown
* Deadline badge

---

## 🎯 MUHIM QOIDA (INTERVIEW UCHUN)

> UI’da tugma yo‘qligi — yetarli emas.
> Backend **baribir permission tekshiradi**.

---

# 2️⃣ DATABASE TABLE’LAR (JADVAL KO‘RINISHIDA)

## 🧑 USERS TABLE

| Field           | Type     | Description  |
| --------------- | -------- | ------------ |
| id              | UUID     | Primary Key  |
| email           | string   | Unique       |
| hashed_password | string   | Bcrypt hash  |
| is_active       | boolean  | User active  |
| created_at      | datetime | Created time |

---

## 🏢 ORGANIZATIONS TABLE

| Field      | Type     | Description       |
| ---------- | -------- | ----------------- |
| id         | UUID     | Primary Key       |
| name       | string   | Organization name |
| owner_id   | UUID     | FK → users.id     |
| created_at | datetime | Created time      |

---

## 👥 ORGANIZATION_MEMBERS TABLE

| Field           | Type     | Description            |
| --------------- | -------- | ---------------------- |
| id              | UUID     | Primary Key            |
| user_id         | UUID     | FK → users.id          |
| organization_id | UUID     | FK → organizations.id  |
| role            | enum     | owner / admin / member |
| joined_at       | datetime | Join date              |

📌 **Bu table — multi-tenant yuragi**

---

## 📁 PROJECTS TABLE

| Field           | Type     | Description           |
| --------------- | -------- | --------------------- |
| id              | UUID     | Primary Key           |
| name            | string   | Project name          |
| organization_id | UUID     | FK → organizations.id |
| created_by      | UUID     | FK → users.id         |
| is_deleted      | boolean  | Soft delete           |
| created_at      | datetime | Created time          |

---

## ✅ TASKS TABLE

| Field       | Type     | Description               |
| ----------- | -------- | ------------------------- |
| id          | UUID     | Primary Key               |
| title       | string   | Task title                |
| description | text     | Task details              |
| status      | enum     | todo / in_progress / done |
| priority    | enum     | low / medium / high       |
| deadline    | datetime | Deadline                  |
| project_id  | UUID     | FK → projects.id          |
| assigned_to | UUID     | FK → users.id             |
| is_deleted  | boolean  | Soft delete               |
| created_at  | datetime | Created time              |

---

# 3️⃣ UMUMIY FILE STRUCTURE (BACKEND + FRONTEND)

```
project-root/
│
├── backend/
│   └── app/
│       ├── api/
│       │   ├── auth/
│       │   ├── users/
│       │   ├── organizations/
│       │   ├── projects/
│       │   └── tasks/
│       │
│       ├── core/
│       │   ├── config.py
│       │   ├── security.py
│       │   └── dependencies.py
│       │
│       ├── models/
│       ├── schemas/
│       ├── services/
│       ├── repositories/
│       ├── db/
│       ├── tests/
│       └── main.py
│
├── frontend/
│   ├── index.html          # login
│   ├── dashboard.html     # owner/admin
│   ├── my-tasks.html      # member
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       ├── auth.js        # login, token
│       ├── api.js         # fetch wrapper
│       ├── owner.js       # owner UI logic
│       ├── admin.js       # admin UI logic
│       └── member.js      # member UI logic
│
├── docker-compose.yml
├── .env
└── README.md
```

---

# 4️⃣ FRONTEND ↔ BACKEND QANDAY ISHLAYDI

* Login → token olinadi
* Token `localStorage`
* API request:

  ```
  Authorization: Bearer <token>
  ```
* Backend token’dan:

  * user_id
  * organization_id
  * role

ni aniqlaydi

---

