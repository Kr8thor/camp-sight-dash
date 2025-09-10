# CAMP SIGHT DASHBOARD - QUICK CLONE & SETUP PROMPT

## Copy this entire prompt to Claude tomorrow:

"Please help me quickly set up the Camp Sight Dashboard project on my desktop. Here are the requirements:

### Project Location & Environment:
- **MUST BE CLONED TO**: `C:\DevProjects\camp-sight-dash`
- **Environment**: Windows Desktop (NOT Docker)
- **Port**: Must run on `http://localhost:8080/`
- **Node Version**: v22.18.0
- **npm Version**: 10.9.3

### Setup Commands to Execute:
```powershell
# 1. Navigate to DevProjects directory
cd C:\DevProjects

# 2. Clone the repository
git clone https://github.com/Kr8thor/camp-sight-dash.git

# 3. Enter project directory
cd camp-sight-dash

# 4. Install dependencies
npm install

# 5. Start development server
npm run dev
```

### Critical Rules:
1. DO NOT change any dashboard data or calculations
2. DO NOT modify the port (must stay 8080)
3. DO NOT use Docker containers
4. MAINTAIN the exact path: `C:\DevProjects\camp-sight-dash`
5. The project uses a SOFTENED Indie Campers color scheme (implemented on Sept 10, 2025)

### What's Already Configured:
- ✅ Softened Indie Campers branding (Orange #FF5B00 → HSL(21, 70%, 58%))
- ✅ Warm cream backgrounds instead of harsh white
- ✅ All components styled with new color scheme
- ✅ Mock data intact in `/src/data/mockData.ts`
- ✅ Vite configured for port 8080

### Quick Verification:
After setup, the dashboard should show:
- Indie Campers KPI Dashboard header in soft orange
- Business Results section with 4 KPI cards
- SEO Health Metrics with 3 category cards
- Two trend charts (Organic & AI Search Revenue)
- All in softer, eye-friendly colors

Please execute these commands and confirm the dashboard is running properly on localhost:8080."

---

## ALTERNATIVE: If you need to push changes from your current desktop first:

### On Current Desktop (before switching):
```powershell
cd C:\DevProjects\camp-sight-dash
git add -A
git commit -m "Your commit message"
git push origin main
```

### On Other Desktop (tomorrow):
```powershell
cd C:\DevProjects\camp-sight-dash
git pull origin main
npm install
npm run dev
```

---

## PROJECT STATUS AS OF SEPTEMBER 10, 2025:

### ✅ Completed Today:
1. **Color Scheme Softening**:
   - Original harsh Orange (#FF5B00) → Soft Orange HSL(21, 70%, 58%)
   - Original deep Brown (#993600) → Soft Brown HSL(21, 60%, 38%)
   - Pure White (#FFFFFF) → Warm Cream HSL(30, 15%, 98%)
   - Added multiple color variations for better hierarchy

2. **Files Modified**:
   - `src/index.css` - Complete color system with Indie variables
   - `tailwind.config.ts` - Added indie color utilities
   - `src/components/Dashboard.tsx` - Updated with soft colors
   - `src/components/KPICard.tsx` - Hover effects added
   - `src/components/SEOMetricCard.tsx` - Group hover states
   - `src/components/TrendChart.tsx` - Chart colors updated

3. **Documentation Created**:
   - `COLOR_SCHEME_UPDATE.md` - Full color documentation
   - `color-preview.html` - Visual comparison tool

### 📊 Dashboard Features (DO NOT MODIFY):
- Business Results: Revenue metrics with YoY comparisons
- SEO Health: Authority, link quality, technical metrics
- Trend Charts: Organic and AI search revenue visualizations
- Real-time date display in header

### 🎨 Color Scheme Quick Reference:
```css
/* Primary Colors */
--indie-orange: 21 70% 58%;      /* Main orange - softer */
--indie-brown: 21 60% 38%;       /* Main brown - lighter */

/* Secondary Colors */
--indie-orange-soft: 21 50% 65%; /* For backgrounds */
--indie-brown-soft: 21 40% 48%;  /* For secondary text */

/* Backgrounds */
--indie-cream: 30 20% 97%;       /* Main background */
--indie-white: 30 15% 98%;       /* Card backgrounds */
```

### 🔧 Troubleshooting:
- **Port 8080 busy**: Vite will auto-select next available
- **Build errors**: Run `npm install` to ensure all dependencies
- **Missing colors**: Check that `src/index.css` has the new HSL values

---

## GITHUB REPOSITORY:
https://github.com/Kr8thor/camp-sight-dash

Last update: September 10, 2025 - Softened color scheme implementation