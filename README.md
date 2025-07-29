# 🌅 Smooth jQuery Image Slider

A sleek, responsive, and minimal image slider built with HTML, CSS, and jQuery. It features smooth transitions, autoplay, navigation arrows, dot indicators, and a gallery toggle — all with a modern, stylish UI.

---

## 🚀 Features

- ✅ Smooth automatic sliding (with pause on hover)
- ⬅️➡️ Previous/Next navigation arrows
- 🔘 Clickable dot indicators
- 📱 Responsive and mobile-friendly
- 🎨 Gradient background + clean interface
- 🧩 Show/hide gallery toggle button

---

## 📸 Preview

![Slider Preview](screenshot.png) 

---

## 🚀 Live Demo

🌐 [View the deployed site]()

---

## 🛠 Tech Stack

- HTML5  
- CSS3  
- jQuery (v3.6.0 via CDN)

---

## 📂 Folder Structure

```
📁 smooth-image-slider/
├── index.html      
├── style.css       
├── script.js       
└── README.md      
```

---

## 📷 Image Sources (from Pexels)

- https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg  
- https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg  
- https://images.pexels.com/photos/1188083/pexels-photo-1188083.png  
- https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg  

---

## ▶️ How to Run

1. **Clone or download the repo**
   ```bash
   git clone https://github.com/your-username/smooth-image-slider.git
   ```

2. **Open `index.html`** in your browser.  
   No build tools needed — just pure frontend code.

---

## 🧰 Customization

- **To add more images:**  
  Add more `<img class="slide" src="your-link.jpg" />` inside `.slider`.

- **To change auto-slide speed:**  
  Edit this in `script.js`:
  ```js
  let timer = setInterval(next, 4000); // in milliseconds
  ```

- **To modify UI colors:**  
  Tweak the gradient and styles inside `style.css`.

---

## 🌐 CDN Used

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---
