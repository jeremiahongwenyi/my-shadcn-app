# A Beginner's Guide to Using Shadcn UI in React


This project  explores **Shadcn UI**, a component library built on top of Radix UI and Tailwind CSS, because it provides elegant, customizable, and accessible React components. The goal is to integrate Shadcn into a React project and render a styled UI component (for example, a button or card) while learning how to structure and reuse components efficiently.



## 1. Installation & Setup Instructions

### Step 1: Create a React Project

Run the following commands in your terminal:

```bash
npm create vite@latest my-shadcn-app -- --template react
cd my-shadcn-app
npm install
```

### Step 2: Install Tailwind CSS (v4)

Install Tailwind CSS version 4:

```bash
npm install tailwindcss @tailwindcss/vite
```

> **Note:** This installs Tailwind CSS v4. You no longer need PostCSS or Autoprefixer.

### Step 3: Configure the Vite Plugin

Update your `vite.config.js` file:

```javascript
import tailwindcss from "@tailwindcss/vite";

export default {
  plugins: [tailwindcss()],
};
```

### Step 4: Import Tailwind CSS

Add the following to your `src/index.css`:

```css
@import 'tailwindcss';
```

### Step 5: Configure Shadcn UI Library

Follow these steps to set up Shadcn UI:

#### 1. Update `tsconfig.json` and `tsconfig.app.json` to add `baseUrl` and `paths`

Edit `tsconfig.app.json` file and add the following code to the `compilerOptions` object to resolve paths for your IDE:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### 2. Update `vite.config.ts`

Add the following code to the `vite.config.ts` so your app can resolve paths without error:

First, install the required types:

```bash
npm install -D @types/node
```

Then update your `vite.config.ts`:

```typescript
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

#### 3. Initialize Shadcn UI

Run the `shadcn` init command to setup your project:

```bash
npx shadcn@latest init
```

You will be asked a few questions to configure `components.json`.

#### 4. Add Components

You can now start adding components to your project:

```bash
npx shadcn@latest add button
```

The command above will add the `Button` component to your project. You can then import it like this:

```javascript
import { Button } from "./components/ui/button";
```

---

## 2. Minimal Working Example

This example demonstrates a minimal React app using Shadcn UI and Tailwind CSS. It renders a heading and a styled Button component.

### Code Example

```jsx
import { Button } from "./components/ui/button";
import "./App.css";

function App() {
  return (
    <>
      <h1 className='font-bold text-5xl shadow'>
        Integrating Shadcn
      </h1>
      <Button className='p-4 rounded-2xl mt-7 bg-red-700'>
        Go to Docs
      </Button>
    </>
  );
}

export default App;
```

### Expected Output

A page with a large heading and a red "Go to Docs" button.

---



## 3. References

- **Tailwind CSS Documentation:** [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)
- **Shadcn UI Documentation:** [https://ui.shadcn.com/docs/installation/vite](https://ui.shadcn.com/docs/installation/vite)

---

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Author

Your Name - https://x.com/Jerehongwenyi

---

**Happy Coding! 🚀**