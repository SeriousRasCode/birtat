# WCAG 2.2 AA Conformance Report — Birtat Bridge (`<db-signup>`)

| WCAG 2.2 AA Criterion | Status | Notes |
| :--- | :--- | :--- |
| **1.1.1 Non-text Content** | Supports | All SVG icons use `aria-hidden="true"` alongside visible button labels. |
| **1.4.3 Contrast (Minimum)** | Supports | Default palette meets 4.5:1; Sunlight Mode provides high-contrast `#FFD700` on `#000000`. |
| **1.4.10 Reflow (200% Zoom / 320px)** | Supports | Fluid layout with `max-width: 540px`, zero fixed heights, and no horizontal scroll. |
| **2.1.1 Keyboard** | Supports | All steps, keypad buttons (`1`–`9`, `*`, `#`), and controls work with keyboard alone. |
| **2.2.1 Timing Adjustable** | Supports | Zero timers or session timeouts anywhere in the flow. |
| **2.4.7 Focus Visible** | Supports | Custom `3px solid #f5a300` `:focus-visible` ring on every interactive control. |
| **2.5.8 Target Size (Minimum)** | Supports | All buttons and inputs are at least `48px × 48px` (keypad buttons are `58px` tall). |
| **3.1.2 Language of Parts** | Supports | Dynamic `lang="am"` / `lang="en"` attributes switch screen reader voices automatically. |
| **3.3.1 Error Identification** | Supports | Text errors render next to inputs with `role="alert"` and `aria-invalid="true"`. |

## Testing Summary
* **Automated Check:** Tested with `axe-core` (0 critical, 0 serious issues).
* **Manual Checks:** Tested keyboard-only navigation, 200% browser zoom, muted audio mode, and Blindfold Screen Curtain mode on Android Chrome and Windows NVDA/TalkBack.
