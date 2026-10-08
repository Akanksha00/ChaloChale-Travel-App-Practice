# ChaloChale Travel App 🌍✈️

A modern, responsive travel booking application built with Bootstrap 5, HTML, CSS, and JavaScript. Features AI-powered travel recommendations, interactive filtering, and a beautiful UI/UX design.

![ChaloChale](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Features

### Core Functionality
- **Home Page**: Hero carousel, search functionality, featured destinations, popular packages, testimonials, and newsletter subscription
- **Destinations Page**: Filterable destination cards with search, region, type, and budget filters
- **Tour Packages Page**: Categorized packages (Beach, Adventure, Cultural, Romantic, Family) with dynamic filtering
- **About Us Page**: Company story, mission/vision, core values, team members, and customer testimonials
- **Contact Page**: Contact form, Google Maps integration, FAQ section, and contact information
- **Booking System**: Multi-step booking form (Trip Details → Traveler Info → Payment) with live summary
- **Authentication**: Modern Login and Signup pages with social login options

### AI-Powered Features
- **Smart Travel Recommendations**: AI system that suggests destinations based on:
  - Budget (Budget/Moderate/Luxury)
  - Travel style (Adventure/Relaxation/Cultural/Romantic)
  - Trip duration (Short/Medium/Long)

### Design & UX
- Modern gradient color scheme (orange/blue theme)
- Smooth animations and transitions
- Card-based layouts with hover effects
- Glassmorphism navbar
- Custom scrollbar styling
- Responsive design for all devices (mobile, tablet, desktop)
- Professional typography and spacing

### Interactive Features
- Dynamic destination filtering with multiple criteria
- Package category filtering
- Multi-step booking form with validation
- Live booking summary updates
- Form submissions with success feedback
- Smooth scroll navigation
- Scroll-based animations
- Toast notification system
- Navbar scroll effects

## 📁 Project Structure

```
ChaloChale Practice/
├── index.html              # Home page
├── destinations.html       # Destinations page
├── packages.html          # Tour packages page
├── about.html             # About us page
├── contact.html           # Contact page
├── booking.html           # Booking page
├── login.html             # Login page
├── signup.html            # Signup page
├── css/
│   └── style.css          # Custom styles
├── js/
│   └── script.js          # JavaScript functionality
├── images/                # Travel images
│   ├── beach.webp
│   ├── mountain.jpg
│   ├── city.webp
│   ├── bali.jpg
│   ├── paris.jpg
│   ├── santorini.jpg
│   ├── venice.jpg
│   ├── japan.jpg
│   └── ... (more images)
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Bootstrap 5.3.8** - Responsive framework
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Typography

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)
- Git (for version control)
- GitHub account (for hosting)

## 🎯 How to Run Locally

### Option 1: Using Python (Recommended)
```bash
# Navigate to project directory
cd "D:\IT Vedant\Studies\Bootstrap\ChaloChale Practice"

# Start Python HTTP server
python -m http.server 8080

# Open browser and visit
# http://localhost:8080
```

### Option 2: Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory
cd "D:\IT Vedant\Studies\Bootstrap\ChaloChale Practice"

# Start server
http-server -p 8080

# Open browser and visit
# http://localhost:8080
```

### Option 3: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Direct File Access
Simply open `index.html` in your browser (some features may not work without a server)

## 🌐 How to Deploy

### Deploy to Vercel (Recommended)
1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run in project directory:
```bash
vercel
```
4. Follow the prompts

### Deploy to Netlify
1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Drag and drop the project folder to Netlify dashboard
3. Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy
```

### Deploy to GitHub Pages
See instructions below in "How to Add to GitHub"

## 📦 How to Add to GitHub

### Step 1: Initialize Git Repository
```bash
# Navigate to your project directory
cd "D:\IT Vedant\Studies\Bootstrap\ChaloChale Practice"

# Initialize Git
git init
```

### Step 2: Create .gitignore File
Create a `.gitignore` file in your project root to exclude unnecessary files:

```gitignore
# Node modules
node_modules/

# VS Code
.vscode/

# IDE
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Environment
.env
.env.local
```

### Step 3: Add Files to Git
```bash
# Add all files
git add .

# Or add specific files
git add index.html css/ js/ images/
```

### Step 4: Create Initial Commit
```bash
git commit -m "Initial commit: ChaloChale Travel App

- Added complete travel booking application
- Implemented AI-powered recommendations
- Created responsive design with Bootstrap 5
- Added all pages: Home, Destinations, Packages, About, Contact, Booking, Login, Signup
- Integrated interactive JavaScript features
- Added modern UI/UX design"
```

### Step 5: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top-right corner
3. Select **New repository**
4. Fill in repository details:
   - Repository name: `chalo-chale-travel-app` (or your preferred name)
   - Description: `A modern travel booking application with AI-powered recommendations`
   - Choose **Public** or **Private**
   - **Do NOT** initialize with README, .gitignore, or license (we already have them)
5. Click **Create repository**

### Step 6: Link Local Repository to GitHub
```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/chalo-chale-travel-app.git

# Verify remote
git remote -v
```

### Step 7: Push to GitHub
```bash
# Push to main branch
git push -u origin main

# If your local branch is named 'master', use:
git push -u origin master
```

### Step 8: Verify on GitHub
1. Go to your GitHub repository page
2. You should see all your files uploaded
3. The code is now hosted on GitHub!

## 🌍 Enable GitHub Pages (Optional)

To host your site for free using GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **GitHub Pages** section
4. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**
6. Wait a few minutes
7. Your site will be available at: `https://YOUR_USERNAME.github.io/chalo-chale-travel-app/`

## 🔄 How to Update GitHub

After making changes to your project:

```bash
# Check status
git status

# Add changed files
git add .

# Commit changes
git commit -m "Your commit message describing changes"

# Push to GitHub
git push
```

## 🎨 Customization

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #ff6b35;    /* Orange */
    --secondary-color: #004e89;  /* Blue */
    --accent-color: #f7c59f;
    /* ... more variables */
}
```

### Adding New Destinations
Edit `destinations.html` and add new destination cards following the existing pattern.

### Modifying AI Recommendations
Edit the `aiRecommendations` object in `js/script.js` to add or modify destination suggestions.

## 🐛 Troubleshooting

### Images Not Loading
- Ensure image paths are correct in HTML files
- Check that images exist in the `images/` folder
- Use a local server (some browsers block local file image loading)

### Bootstrap Not Working
- Verify CDN link in HTML `<head>` section
- Check internet connection (CDN requires internet)
- Consider downloading Bootstrap locally

### JavaScript Not Functioning
- Check browser console for errors (F12)
- Ensure `script.js` is linked at the bottom of HTML files
- Verify jQuery is not required (this project uses vanilla JS)

## 📝 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact:
- Email: info@chalochale.com
- Phone: +91 98765 43210

## 🙏 Acknowledgments

- Bootstrap Team for the amazing framework
- Font Awesome for the icon library
- Unsplash for the beautiful travel images
- All contributors and supporters

---

**Built with ❤️ for travelers worldwide**

**ChaloChale - Your Journey Begins Here!** ✈️🌴🏔️
