# Vercel Deployment Guide for Yashaswi Finserv Website

## 📋 Files Modified for Vercel Deployment

### New Files Created:
1. **`api/index.js`** - Serverless function entry point for Vercel
2. **`vercel.json`** - Vercel configuration file for routing
3. **`.vercelignore`** - Files to exclude from Vercel deployment
4. **`VERCEL_DEPLOYMENT.md`** - This deployment guide

### Modified Files:
1. **`backend/server.js`** - Updated to support DATABASE_URL format (still works locally)
2. **`package.json`** - Added vercel-build script and engines specification

---

## 🚀 Step-by-Step Deployment Instructions

### Prerequisites:
- GitHub account (or GitLab/Bitbucket)
- Vercel account (free tier works)
- MySQL database (hosted on services like PlanetScale, AWS RDS, or any MySQL provider)

---

### Step 1: Prepare Your Code

1. **Commit all changes to Git:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```
   (Replace `main` with your branch name if different)

---

### Step 2: Set Up MySQL Database

You need a hosted MySQL database. Options:
- **PlanetScale** (Recommended - Free tier available)
- **AWS RDS** (MySQL)
- **DigitalOcean Managed Databases**
- **Railway** (MySQL)
- **Any MySQL hosting service**

**Note:** Local MySQL won't work with Vercel. You need a cloud-hosted MySQL instance.

---

### Step 3: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended for first time)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login

2. **Click "Add New Project"**

3. **Import your Git repository:**
   - Connect your GitHub account if not already connected
   - Select your repository (`yashaswi-finserv-website`)

4. **Configure Project:**
   - **Framework Preset:** Other
   - **Root Directory:** Leave as `.` (root)
   - **Build Command:** Leave empty (or `npm run vercel-build`)
   - **Output Directory:** Leave empty
   - **Install Command:** `npm install`

5. **Add Environment Variables** (Click "Environment Variables"):
   
   **Option 1: Using DATABASE_URL (Recommended)**
   ```
   DATABASE_URL=mysql://username:password@host:port/database_name
   ```
   Example:
   ```
   DATABASE_URL=mysql://admin:mypassword@mysql.example.com:3306/yashaswi_finserv
   ```
   
   **Option 2: Using Individual Variables**
   ```
   DB_HOST=your-mysql-host.com
   DB_USER=your-username
   DB_PASSWORD=your-password
   DB_NAME=yashaswi_finserv
   DB_PORT=3306
   ```
   
   **If your MySQL requires SSL:**
   ```
   DB_SSL=true
   ```

6. **Click "Deploy"**

7. **Wait for deployment** (usually 1-2 minutes)

8. **Your site will be live!** You'll get a URL like: `https://your-project.vercel.app`

---

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No** (first time)
   - Project name? **yashaswi-finserv** (or your choice)
   - Directory? **./** (current directory)

5. **Set environment variables:**
   ```bash
   vercel env add DATABASE_URL
   # Paste your DATABASE_URL when prompted
   ```

6. **Deploy to production:**
   ```bash
   vercel --prod
   ```

---

### Step 4: Verify Deployment

1. **Visit your Vercel URL** (e.g., `https://your-project.vercel.app`)

2. **Test the contact form:**
   - Go to `/contact`
   - Fill out and submit the form
   - Check your database to confirm the entry was saved

3. **Check Vercel logs:**
   - Go to Vercel Dashboard → Your Project → Functions → View Logs
   - Look for "MySQL Database connected successfully"

---

## 🔧 Environment Variables Required in Vercel

### Required Variables:

**Option 1: Single DATABASE_URL (Recommended)**
```
DATABASE_URL=mysql://username:password@host:port/database_name
```

**Option 2: Individual Variables**
```
DB_HOST=your-mysql-host.com
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=yashaswi_finserv
```

### Optional Variables:
```
DB_PORT=3306          (default: 3306)
DB_SSL=true           (if your MySQL requires SSL)
```

---

## 📝 How to Get DATABASE_URL

### From PlanetScale:
1. Go to your database dashboard
2. Click "Connect"
3. Select "Connect with: General"
4. Copy the connection string
5. Format: `mysql://username:password@host:port/database`

### From AWS RDS:
1. Go to RDS Console
2. Select your database instance
3. Copy the endpoint
4. Format: `mysql://username:password@endpoint:3306/database`

### From Other Providers:
Check your provider's documentation for the connection string format.

---

## 🔍 Troubleshooting

### Issue: "Database connection error"
**Solution:**
- Verify DATABASE_URL format is correct
- Check if your MySQL host allows connections from Vercel IPs
- Ensure database credentials are correct
- Check if SSL is required (set `DB_SSL=true`)

### Issue: "Function timeout"
**Solution:**
- Vercel free tier has 10-second timeout for serverless functions
- Ensure your database queries complete quickly
- Consider upgrading to Vercel Pro for longer timeouts

### Issue: "Cannot find module"
**Solution:**
- Ensure all dependencies are in `package.json`
- Check that `node_modules` is not in `.vercelignore`

### Issue: Static files not loading
**Solution:**
- Verify `vercel.json` routing is correct
- Check that frontend files are in the `frontend/` directory
- Ensure image paths are relative (e.g., `logo.png` not `/logo.png`)

---

## 🔄 Updating Your Deployment

### After making code changes:

1. **Commit and push to Git:**
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```

2. **Vercel will automatically redeploy** (if connected to Git)

   OR manually deploy:
   ```bash
   vercel --prod
   ```

---

## 📊 Local Development vs Production

### Local Development:
- Uses `backend/server.js`
- Runs on `localhost:3000`
- Uses `.env` file for environment variables

### Production (Vercel):
- Uses `api/index.js` (serverless function)
- Uses Vercel environment variables
- Automatically scales

**Both use the same MySQL database connection logic!**

---

## ✅ Checklist Before Deployment

- [ ] Code pushed to GitHub/GitLab
- [ ] MySQL database hosted in the cloud
- [ ] DATABASE_URL or DB credentials ready
- [ ] All environment variables set in Vercel
- [ ] Tested locally with production database
- [ ] Static files (images) are in `frontend/` folder
- [ ] No hardcoded localhost URLs in code

---

## 🎉 You're Done!

Your website is now live on Vercel with MySQL database support!

**Remember:**
- Keep your MySQL database running
- Monitor Vercel function logs for errors
- Update environment variables in Vercel dashboard if database changes

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- MySQL Connection: Check your database provider's documentation
- Function Logs: Vercel Dashboard → Your Project → Functions
