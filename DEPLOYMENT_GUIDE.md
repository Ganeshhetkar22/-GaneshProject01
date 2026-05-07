# 📘 Deployment & Update Guide

Complete guide for updating your portfolio on GitHub and Netlify.

## 🚀 Quick Update Workflow

### **1. Make Changes Locally**
```bash
# Start development server
npm run dev

# Make your changes to components, styles, content, etc.
# The dev server will hot-reload automatically
```

### **2. Build & Test Production**
```bash
# Build production version
npm run build

# Check for TypeScript errors
npm run typecheck

# Run ESLint
npm run lint
```

### **3. Commit Changes to Git**
```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "Update: Add new feature or fix description"

# Examples:
# git commit -m "Update: Add new project to portfolio"
# git commit -m "Fix: Improve mobile responsiveness"
# git commit -m "Refactor: Optimize Hero section animations"
# git commit -m "Content: Update skills and experience"
```

### **4. Push to GitHub**
```bash
# Push to GitHub
git push origin master

# Or simply:
git push
```

### **5. Automatic Netlify Deployment**
- Netlify automatically detects the push
- Builds and deploys your changes
- Takes 2-5 minutes
- Check deployment status at: https://app.netlify.com/

---

## 📝 Common Update Scenarios

### **Scenario 1: Update Content (Text/Copy)**
```bash
# Files to edit:
# - components/portfolio/Hero.tsx (heading, description)
# - components/portfolio/About.tsx (about text)
# - components/portfolio/Contact.tsx (contact text)
# - components/portfolio/Projects.tsx (project details)
# - components/portfolio/Services.tsx (service descriptions)
# - components/portfolio/Skills.tsx (skills list)

npm run dev
# Make changes in your editor
git add .
git commit -m "Content: Update portfolio text and descriptions"
git push
```

### **Scenario 2: Add New Project**
```bash
# 1. Edit components/portfolio/Projects.tsx
# 2. Add new project object to PROJECTS array
# 3. Add project image to public/images/
# 4. Test locally

npm run build
git add .
git commit -m "Feature: Add new project to portfolio"
git push
```

### **Scenario 3: Update Styling/Colors**
```bash
# Files to edit:
# - app/globals.css (global styles)
# - tailwind.config.ts (theme colors)
# - components/portfolio/*.tsx (component styles)

npm run dev
# Make style changes
git add .
git commit -m "Style: Update color scheme and animations"
git push
```

### **Scenario 4: Update Profile Image**
```bash
# 1. Replace public/images/ganesh-profile.jpeg
#    (keep same filename and format)
# 2. Clear browser cache (Ctrl+Shift+Delete)
# 3. Rebuild and push

npm run build
git add public/images/
git commit -m "Update: Replace profile image"
git push
```

### **Scenario 5: Add New Section**
```bash
# 1. Create new component in components/portfolio/
# 2. Import in app/page.tsx
# 3. Add to main content
# 4. Style and test

npm run dev
# Build and verify
git add .
git commit -m "Feature: Add new portfolio section"
git push
```

---

## 🔄 Git Commands Reference

### **Check Status**
```bash
# See what files changed
git status

# See detailed changes
git diff

# See commit history
git log --oneline
```

### **Undo Changes**
```bash
# Discard local changes (⚠️ be careful!)
git checkout -- .

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

### **Branching (Optional)**
```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes and commit
git add .
git commit -m "Add new section"

# Push branch
git push origin feature/new-section

# Create Pull Request on GitHub (optional)

# Merge to master
git checkout master
git merge feature/new-section
git push
```

---

## 🚀 Netlify Deployment Info

### **Automatic Deployment**
- ✅ Every push to `master` branch triggers deployment
- ✅ Netlify runs: `npm run build`
- ✅ Publishes from: `out/` directory
- ✅ Takes 2-5 minutes

### **Check Deployment Status**
1. Go to: https://app.netlify.com/
2. Select your site
3. View "Deploys" tab
4. Check build logs if needed

### **Preview Builds**
- Each commit gets a preview URL
- Share with others before merging

### **Custom Domain (Optional)**
1. Go to Site Settings → Domain Management
2. Add your custom domain
3. Follow DNS setup instructions

---

## 📋 Best Practices

### **Commit Messages**
Use clear, descriptive messages:
```bash
# ✅ Good
git commit -m "Feature: Add testimonials section to portfolio"
git commit -m "Fix: Improve mobile navigation menu responsiveness"
git commit -m "Update: Change hero section heading copy"
git commit -m "Refactor: Optimize animation performance"

# ❌ Avoid
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

### **Commit Frequently**
- Commit after completing a feature
- Don't wait until everything is done
- Makes debugging easier

### **Test Before Push**
```bash
# Always test locally first
npm run dev

# Check for errors
npm run typecheck
npm run lint

# Build production version
npm run build

# Only then push
git push
```

### **Update Dependencies**
```bash
# Check for updates
npm outdated

# Update packages (be careful!)
npm update

# Test thoroughly
npm run build

# Commit updates
git add package.json package-lock.json
git commit -m "Update: Upgrade dependencies"
git push
```

---

## 🆘 Troubleshooting

### **Issue: Changes not showing on Netlify**
1. Check if push was successful: `git status`
2. Check Netlify build logs
3. Clear browser cache (Ctrl+Shift+Delete)
4. Hard refresh (Ctrl+Shift+R)

### **Issue: Build fails on Netlify**
1. Check local build works: `npm run build`
2. Check Netlify build logs for errors
3. Commit fix and push again

### **Issue: Forgot to add files**
```bash
# Undo last commit
git reset --soft HEAD~1

# Add all files
git add .

# Recommit
git commit -m "Initial commit message"
git push
```

### **Issue: Pushed wrong code**
```bash
# Revert last commit
git revert HEAD

# Or reset to previous version
git reset --hard HEAD~1
git push --force-with-lease
```

---

## 📊 Development Workflow Summary

```
Edit Files Locally
         ↓
npm run dev (test changes)
         ↓
npm run build (verify production build)
         ↓
git add . (stage changes)
         ↓
git commit -m "message" (create commit)
         ↓
git push origin master (push to GitHub)
         ↓
Netlify Automatic Deploy
         ↓
Live on https://your-site.netlify.app ✅
```

---

## 🎯 Common Update Examples

### **Example 1: Update About Section**
```bash
# 1. Edit components/portfolio/About.tsx
# 2. Update HIGHLIGHTS, FOCUS_AREAS arrays
# 3. Change description text

npm run dev
# Test changes in browser

git add .
git commit -m "Content: Update about section copy"
git push
# Wait for Netlify to deploy
```

### **Example 2: Add Skills**
```bash
# 1. Edit components/portfolio/Skills.tsx
# 2. Add new skill to SKILLS array
# 3. Add proficiency to PROFICIENCIES

npm run build
git add .
git commit -m "Feature: Add new skills to portfolio"
git push
```

### **Example 3: Change Colors**
```bash
# 1. Edit tailwind.config.ts
# 2. Edit app/globals.css
# 3. Check color names in components

npm run dev
# Verify colors look good

git add .
git commit -m "Style: Update color scheme"
git push
```

---

## 🔐 Security Notes

- Never commit `.env` files with secrets
- Never commit `node_modules/` or `.next/`
- Keep dependencies updated
- Review `.gitignore` before committing
- Use GitHub Secrets for sensitive data (Netlify)

---

## 📞 Need Help?

- Check Netlify Docs: https://docs.netlify.com/
- Check Git Docs: https://git-scm.com/doc
- Check Next.js Docs: https://nextjs.org/docs
- Check GitHub Docs: https://docs.github.com/

Happy updating! 🚀
