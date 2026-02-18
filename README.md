# 📚 Bookmrk App

## ⚡ Quick Summary

Bookmrk App is a full-stack bookmark management application developed as part of a technical assessment. The project demonstrates modern web development practices including authentication, database design, and server/client rendering.

---

## 📖 Project Description

This application allows authenticated users to store and manage bookmarks in a centralized database.

Core functionality includes:

* Secure user authentication
* Bookmark creation with title and URL
* User-specific data isolation
* Persistent cloud storage

The project was built to showcase practical full-stack development skills, architectural understanding, and problem-solving ability.

---

## 🛠 Tech Stack

**Frontend**

* Next.js 16
* React 19
* Tailwind CSS 4
* Framer Motion
* Tanstack Query

**Backend / Data Layer**

* Supabase (Authentication & Database)
* PostgreSQL
* Drizzle ORM
* Drizzle Kit

**Utilities & Tooling**

* TypeScript
* Axios
* ESLint
* dotenv

---

## 🔐 Authentication

Authentication and session handling are implemented using **Supabase Auth** with Google OAuth.

---

## 🗄 Database

The application uses **PostgreSQL** hosted on Supabase.

* Schema & queries managed via **Drizzle ORM**
* Supabase Auth used for identity
* Supabase `user.id` mapped to application tables

---

## 🚀 Deployment

The application is deployed on **Vercel**.

🔗 *[Live URL:]* *(https://smart-bookmark-app-beryl-tau.vercel.app/)*

---

## ⚠️ Development Challenges

The most significant challenge during development was understanding and implementing the OAuth authentication flow.

I already had experience working with traditional authentication systems using:

* Access tokens
* Refresh tokens
* HTTP-only cookies
* Atomic session handling

However, OAuth introduces a different model based on redirects and authorization codes.

---

### Understanding OAuth

Initial effort focused on learning the OAuth flow:

* Sending parameters to Google
* Redirecting users
* Handling callback responses
* Receiving authorization codes
* Exchanging codes for sessions

This clarified how third-party identity providers integrate with application-level session logic.

After fully understanding OAuth, many concepts from my previous authentication-focused project started connecting naturally. Because of prior hands-on experience with sessions and token management, the remaining parts of the implementation became relatively straightforward.

OAuth required the steepest learning curve, but it ultimately became a one-time complexity that now makes future integrations significantly smoother.

---

### Boilerplate Complexity

Manual OAuth implementation required substantial boilerplate:

* Redirect handling
* Callback validation
* Code exchange
* Token storage

To simplify and stabilize the flow, Supabase OAuth was adopted.

---

### Supabase OAuth Integration

Supabase simplified:

* Provider configuration
* Secure session creation
* Token exchange
* Auth state management

**Authentication Flow:**
User → Google → Supabase → Application Callback

Using Next.js App Router:

* Callback route exchanges code for session
* Supabase manages internal auth tables (read-only)
* Session accessible on client & server

---

### Identity & Database Design

Key requirement:

* Reliable unique user identifier

Solution:

* Supabase `user.id` mapped to custom tables
* `bookmarks` table references authenticated users

Drizzle ORM ensured type-safe schema and queries.

---

### Deployment & Environment Configuration

Deployment required:

* Updating Supabase Site URL
* Configuring redirect URLs
* Supporting localhost & Vercel domains

Incorrect settings initially caused redirect/session issues, resolved through testing.

---

### AI-Assisted Learning

AI tools (ChatGPT, Claude) were used mainly to:

* Clarify documentation
* Simplify concepts
* Validate understanding
* Writing boilerplate codes

However, AI-generated code examples were sometimes:

* Slightly outdated
* Missing version-specific context
* Not fully aligned with current APIs

This required additional debugging and adjustments.

Most reliable progress came from:

* Official documentation
* Trial and error
* Manual testing

AI was helpful conceptually but not always efficient for direct implementation.

---

### Key Takeaways

* Stronger understanding of OAuth mechanics
* Comparison of traditional auth vs OAuth
* Practical Supabase Auth integration
* Callback/session handling in Next.js
* Importance of environment configuration
* Critical evaluation of AI-generated solutions

OAuth was the most educational part of this project, taking ~1.5 days of focused learning and experimentation.

---

## 📚 Resources Used

* Supabase Documentation
* Google OAuth Documentation
* OAuth References
* AI tools (ChatGPT, Claude)
* Trial and error / testing

---

## 🧭 Development Philosophy

This project reflects my core development principles:

* **Clean Architecture First** – Clear separation of concerns, predictable structure, and maintainable code organization
* **Type Safety First** – Leveraging TypeScript and Drizzle ORM to reduce runtime errors and improve developer confidence

These principles guide my approach to building scalable and reliable applications.

---

## 🧑‍💻 Author

Developed by **Soham Mitra**

---

## 🙏 Acknowledgement

Thank you for taking the time to review this project.
This application was developed as part of a technical evaluation to demonstrate practical development skills, architectural decisions, and problem-solving approaches.

