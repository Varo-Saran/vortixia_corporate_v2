# Vortixia Corporate — Design Token & Semantic Blueprint (v2.0)
## Aesthetic System: High-Contrast Neo-Brutalist & Premium Editorial

This document serves as the single source of design truth. The Impeccable Design Auditor enforces these rules strictly. Any layout drifting into generic gradients, soft blurs, or centered boilerplate structures will fail the audit.

---

## 1. Core Palette & Semantic Mapping

We eliminate all multi-colored neon gradients and soft glowing accents. The visual identity relies on stark, uncompromising contrast.

| Token Name | Value / Tailwind Class | Functional Role |
| :--- | :--- | :--- |
| `--bg-primary` | `#F9F9FB` / `bg-[#F9F9FB]` | Main workspace background (Light Mode default) |
| `--bg-dark` | `#0B0B0C` / `bg-[#0B0B0C]` | Deep structural canvas (Dark Mode / Section blocks) |
| `--text-main` | `#111112` / `text-[#111112]` | High-legibility primary copy and massive headings |
| `--text-muted` | `#5A5A62` / `text-[#5A5A62]` | Secondary metadata, micro-labels, and descriptions |
| `--accent-volt` | `#CCFF00` / `bg-[#CCFF00]` | High-visibility attention grabber (CTAs, interactive indicators) |
| `--border-stark` | `#111112` / `border-[#111112]` | Hard structural dividers, table frames, and component containers |

---

## 2. Typography Hierarchy

* **Primary Display:** `Space Grotesk` (or a sharp geometric sans). Used for impact, hero statements, and structural titles. Left-aligned, heavy weights.
* **Body Text:** `Plus Jakarta Sans` (or standard highly legible modern system sans). Used for reading layouts, data tables, and application interfaces.

    h1 { font-family: 'Space Grotesk'; font-weight: 700; letter-spacing: -0.04em; text-align: left; }
    p  { font-family: 'Plus Jakarta Sans'; font-weight: 400; line-height: 1.6; text-align: left; }

---

## 3. Layout, Borders & Spatial Rules

* **No Centered Blocks:** All primary structural layout containers, text headers, and sections are **strictly left-aligned**. Centering is reserved exclusively for numerical data metrics.
* **Hard Boundaries:** Components do not float with soft drop-shadows. Use explicit 1px or 2px solid borders (`--border-stark`).
* **Hard Elevation:** Instead of standard box-shadow blurs, interactive cards use hard, unblurred offset shadows:

    .neo-card {
      border: 2px solid var(--border-stark);
      box-shadow: 4px 4px 0px 0px var(--border-stark);
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }
    .neo-card:hover {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px 0px var(--border-stark);
    }

* **Asymmetric Bento Grids:** Structural layouts (Services, Projects, Team grids) must utilize mismatched column weights or staggered modular layouts rather than perfectly uniform multi-column boxes.

---

## 4. Component Manifestos (Taste-Skill Strict Rules)

* **Buttons & CTAs:** Sharp square corners (`rounded-none`). Solid `--border-stark`. Fill with `--bg-primary` or `--accent-volt`. Text must be uppercase, tracking-wider, bold.
* **Form Inputs:** Clean block fields with explicit bottom lines or full hard-bordered boxes. Active states shift to an `--accent-volt` fill background or stark solid border weight upgrade. No glowing outer shadows.
* **Job Boards & Tables:** Raw, clean line separators. Clean semantic alignment.