
```markdown
# ACHNAHIYA Frontend

A modern and responsive Angular frontend for the ACHNAHIYA Learning Management System (LMS) platform.

---

## 📚 Overview

ACHNAHIYA is a full-featured LMS platform that allows instructors to create courses, upload educational materials, and manage student enrollments. This repository contains the **frontend** codebase built with **Angular 15+** and **Tailwind CSS**, providing a smooth and interactive user experience.

---

## 🛠️ Technologies Used

- [Angular](https://angular.io/) 15+
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [RxJS](https://rxjs.dev/)
- [Angular Router](https://angular.io/guide/router)
- [HTTPClient Module](https://angular.io/guide/http)
- API connection via [Laravel Sanctum](https://laravel.com/docs/sanctum)

---

## 📁 Project Structure

```

achnahiya-frontend/
├── src/
│   ├── app/              # Main application modules & components
│   ├── assets/           # Images, icons, styles
│   ├── environments/     # Environment configs
│   └── index.html        # Root HTML
├── angular.json          # Angular CLI config
├── tailwind.config.js    # Tailwind configuration
├── package.json          # Project metadata and scripts
└── tsconfig.json         # TypeScript config

````

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
````

### 2. Run development server

```bash
ng serve
```

Open your browser at: [http://localhost:4200](http://localhost:4200)

---

## 🌐 Connect to Backend API

Make sure the backend Laravel API is running (e.g., at `http://127.0.0.1:8000`).

Update the environment file:

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/api'
};
```

---

## 📦 Production Build

To build the app for production:

```bash
ng build
```

The output will be in the `dist/` folder.

---

## 🧪 Testing

If tests are configured:

```bash
ng test
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Developed with ❤️ by **Rachid Yaya**

```
