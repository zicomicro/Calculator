# Calculator

A clean, responsive, and feature-rich digital calculator built with vanilla HTML, CSS, and modern JavaScript as part of **The Odin Project** Foundations curriculum.


## Features

- **Core Arithmetic Operations:** Addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- **Sequential Calculations:** Chain operations together (e.g., `12 + 7 - 1 = 18`) without having to hit `=` between steps.
- **Floating-Point Precision:** Supports decimals (`.`) while preventing redundant decimal points (e.g., prevents `12.3.4`).
- **Rounded Outputs:** Automatically limits long decimal fractions to prevent display overflow.
- **Smart Division by Zero:** Prevents app crashes with a custom playful error message (`Nice try! 😂`).
- **Undo / Backspace (`⌫`):** Easily edit the last typed digit without resetting the whole operation.
- **All Clear (`C`):** Resets internal calculation state and the display screen.
- **Full Keyboard Support:**
  - `0` - `9`: Enter numbers
  - `+`, `-`, `*`, `/`: Select operators
  - `Enter` or `=`: Evaluate calculation
  - `Backspace`: Undo last digit
  - `Escape`: Clear all (`C`)
  - `.`: Enter decimal

---

## Built With

- **HTML:** Semantic markup and accessible button structures with a `readonly` display screen.
- **CSS:** Flexbox layout, tactile button hover/active states, and a modern dark theme.
- **JavaScript:** Pure vanilla JavaScript utilizing event-driven architecture, modular arithmetic functions, and state tracking.

---

## Getting Started

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone git@github.com:zicomicro/Calculator.git