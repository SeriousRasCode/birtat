# WCAG 2.2 AA Conformance Report — Birtat Bridge (`<db-signup>`)

| WCAG 2.2 AA Criterion | Status | Notes |
| :--- | :--- | :--- |
| **1.1.1 Non-text Content** | Supports | All SVG icons use `aria-hidden="true"` alongside visible text labels. |
| **1.3.1 Info and Relationships** | Supports | Proper `<label for>` pairing, headings (`<h2>`), and grouped keypads with `role="group"`. |
| **1.3.5 Identify Input Purpose** | Supports | Phone and name inputs carry appropriate `type="tel"` and `autocomplete="name"`. |
| **1.4.3 Contrast (Minimum)** | Supports | Default palette exceeds 4.5:1; Sunlight Mode provides ultra-high contrast `#FFD700` on `#000000`. |
| **1.4.10 Reflow (200% Zoom / 320px)** | Supports | Responsive single-column layout with `max-width: 540px`, zero fixed heights, and no horizontal scroll. |
| **2.1.1 Keyboard** | Supports | Full flow navigable via Tab, Enter, Space, Escape, and telephone keypad (`0`–`9`, `*`, `#`). |
| **2.1.2 No Keyboard Trap** | Supports | No focus traps; focus moves forward or back cleanly across each question step. |
| **2.2.1 Timing Adjustable** | Supports | Zero timers, countdowns, or session timeouts anywhere in the registration flow. |
| **2.4.3 Focus Order** | Supports | Logical reading and tab order; focus shifts to the active step heading on navigation. |
| **2.4.7 Focus Visible** | Supports | High-contrast `3px solid #f5a300` `:focus-visible` ring with `2px outline-offset`. |
| **2.5.8 Target Size (Minimum)** | Supports | Interactive controls meet or exceed 44×44px touch targets (keypad buttons are 54px tall). |
| **3.1.2 Language of Parts** | Supports | Amharic parts marked with `lang="am"`, switching screen readers to Ethiopic TTS voice. |
| **3.3.1 Error Identification** | Supports | Errors are communicated in text words, announced via `role="alert"`, not color alone. |
| **3.3.2 Labels or Instructions** | Supports | Clear step labels and instructions with audio prompt playback support. |

---

## Testing Summary
* **Automated Testing:** Verified with `axe-core` CLI and Chrome DevTools Lighthouse (0 critical, 0 serious issues).
* **Manual Testing:** Full keyboard-only navigation without mouse, 200% browser zoom reflow, muted audio mode, and Blindfold (black screen curtain) mode.

## Co-Designer & Device Testing
* **Who tested:** Co-designer with visual impairment and hackathon engineering team.
* **Devices Tested:**
  * Low-cost Android phone (Tecno Spark / Android 12, Chrome Mobile) with **TalkBack** screen reader.
  * Windows 11 laptop (Chrome 131) with **NVDA 2024.1** screen reader.
* **What could be done unaided:**
  * Completed full 5-step registration independently in Amharic with the screen completely off (Blindfold mode).
  * Entered Ethiopian phone number (`09...`) using the physical keypad and on-screen keypad.
  * Successfully selected no-document partner referral route and received provisional referral code (`DB-xxxx`).
  * Reviewed saved accommodations in `profile.html` mounted in edit mode.
* **What could not be done / Limitations:**
  * Native Web Speech API speech-to-text requires internet connectivity in mobile Chrome; when offline, live speech-to-text is unavailable, so the learner uses recorded voice notes (`MediaRecorder`) or the telephone keypad numbers.

### Color Vision Deficiency (CVD) & Multi-lingual Testing
* **Color Blindness Palettes Tested:**
  * **Protanopia (Red-Blind)**: Cobalt blue (`#2563eb`) & golden amber (`#d97706`) replaces red/green confusion.
  * **Deuteranopia (Green-Blind)**: Deep navy (`#1d4ed8`) & yellow-gold (`#f59e0b`).
  * **Tritanopia (Blue-Blind)**: High-contrast cyan (`#06b6d4`) & crimson (`#f43f5e`).
  * **Achromatopsia (Monochrome)**: 100% pure high-contrast grayscale (21:1 contrast ratio, zero color dependency).
  * **Sunlight Mode**: High-visibility stark white and pure black outdoor mode.
* **Languages Supported & Tested:**
  * **Amharic (አማርኛ)**, **English**, **Afaan Oromoo (Oromo)**, **Tigrinya (ትግርኛ)**, and **Somali (Af-Soomaali)** with native question phrasing and accommodations.
* **EthSL Sign Language Studio & 2-Way Camera:**
  * Studio broadcast featuring the certified human model with kinetic AR gesture arrows.
  * 2-Way webcam input allowing users to sign back with automated hand reticle and gesture detection confirmation.
