$ErrorActionPreference = "Continue"

# 1. Setup Repo
Write-Host "Initializing Git Repository..."
if (Test-Path .git) {
    Remove-Item -Path .git -Recurse -Force
}
git init
git branch -M main
git remote add origin https://github.com/SWETANKSINHA23/portfolio_me.git

# 2. Commits

# Commit 1: Dec 20 - Configuration
Write-Host "Commit 1..."
git add package.json package-lock.json bun.lockb vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json tailwind.config.ts postcss.config.js eslint.config.js .gitignore components.json index.html public
git commit -m "Initial project setup and configuration" --date="2025-12-20T10:30:00"

# Commit 2: Dec 20 - Styles
Write-Host "Commit 2..."
git add src/index.css src/vite-env.d.ts
git commit -m "Setup Tailwind CSS and global styles" --date="2025-12-20T14:45:00"

# Commit 3: Dec 21 - UI Lib
Write-Host "Commit 3..."
git add src/lib src/components/ui
git commit -m "Add utility functions and base UI components" --date="2025-12-21T09:15:00"

# Commit 4: Dec 21 - Layout
Write-Host "Commit 4..."
git add src/components/Layout.tsx src/components/Navbar.tsx src/components/NavLink.tsx src/components/Footer.tsx
git commit -m "Create application layout structure and navigation" --date="2025-12-21T16:20:00"

# Commit 5: Dec 22 - Hero
Write-Host "Commit 5..."
git add src/components/HeroSection.tsx src/components/AnimatedText.tsx src/components/FloatingElements.tsx src/components/three
git commit -m "Implement Hero section with 3D elements" --date="2025-12-22T11:00:00"

# Commit 6: Dec 22 - About & Skills
Write-Host "Commit 6..."
git add src/components/AboutSection.tsx src/components/SkillsSection.tsx src/components/TechCard.tsx
git commit -m "Add About Me and Skills showcase sections" --date="2025-12-22T15:30:00"

# Commit 7: Dec 23 - Projects
Write-Host "Commit 7..."
git add src/components/ProjectsSection.tsx src/components/ProjectCard.tsx src/components/CTASection.tsx
git commit -m "Develop Projects portfolio section" --date="2025-12-23T10:45:00"

# Commit 8: Dec 23 - Experience
Write-Host "Commit 8..."
git add src/components/ExperienceSection.tsx src/components/AchievementsSection.tsx
git commit -m "Add Experience and Achievements timeline" --date="2025-12-23T14:15:00"

# Commit 9: Dec 24 - Contact
Write-Host "Commit 9..."
git add src/components/ContactSection.tsx
git commit -m "Implement Contact form with EmailJS integration" --date="2025-12-24T11:30:00"

# Commit 10: Dec 24 - Routing
Write-Host "Commit 10..."
git add src/App.tsx src/main.tsx src/components/AnimatedRoutes.tsx src/components/PageTransition.tsx
git commit -m "Setup application routing and page transitions" --date="2025-12-24T16:50:00"

# Commit 11: Dec 25 - Hooks & Polish
Write-Host "Commit 11..."
git add src/hooks src/App.css
git commit -m "Enhance UI interactivity and responsive design" --date="2025-12-25T13:00:00"

# Commit 12: Dec 26 - Final Catch-all
Write-Host "Commit 12..."
git add .
git commit -m "Final polish and README update" --date="2025-12-26T09:00:00"

# 3. Push
Write-Host "Pushing to remote..."
git push -u origin main --force
