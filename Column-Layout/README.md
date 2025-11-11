# 📐 Responsive Column Layout using Tailwind CSS

This project demonstrates how to build a **responsive multi-column layout** in **React** using **Tailwind CSS breakpoints**.  
The layout adjusts the number of columns based on screen size for a clean and consistent UI across devices.

---

## 🚀 Tech Used

- ⚛️ **React**
- 🎨 **Tailwind CSS**
- 📱 **Responsive Breakpoints**

---

## 📏 Tailwind Breakpoints Used

| Breakpoint | Screen Size | Layout Behavior |
|-----------|------------|----------------|
| `sm`      | ≥ 640px    | 2 Columns      |
| `md`      | ≥ 768px    | 3 Columns      |
| `lg`      | ≥ 1024px   | 4 Columns      |

Example classes used:
```html
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
````

---

## 🧱 Column Layout Preview

Each column contains responsive content that stacks on small screens and spreads out on larger screens.

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div className="p-4 bg-gray-200 rounded">Column 1</div>
  <div className="p-4 bg-gray-200 rounded">Column 2</div>
  <div className="p-4 bg-gray-200 rounded">Column 3</div>
  <div className="p-4 bg-gray-200 rounded">Column 4</div>
</div>
```

---

## ▶️ Run Locally

```bash
git clone https://github.com/PranavPatil-45/TAILWIND-CSS.git
cd Column-Layout
npm install
npm start
```

---

## 🖼️ Video File



https://github.com/user-attachments/assets/e2d196e7-4587-4b0e-9fe0-a6350fae116a




---

## 🙌 Author

**Pranav Patil**

If you like this project, consider ⭐ starring the repo!

```

---

If you want I can also:
✅ Generate **Screenshots**  
✅ Create a **demo GIF**  
✅ Create a **GitHub project thumbnail banner** (modern & minimal)

Just tell me:  
**Which theme do you prefer?**  
1) Dark 🖤  
2) Light 🤍  
3) Gradient Neon 🌈
```
