# 🚀 How to Start Yashaswi Finserv Website

## Step-by-Step Instructions

### Step 1: Install Node.js Dependencies
Open terminal/command prompt in the project folder and run:
```bash
npm install
```

This will install all required packages (Express, MySQL2, CORS, dotenv).

---

### Step 2: Set Up MySQL Database

**Option A: Using MySQL Command Line**
1. Open MySQL command line or MySQL Workbench
2. Create the database:
```sql
CREATE DATABASE yashaswi_finserv;
```
3. Import the schema:
```bash
mysql -u root -p yashaswi_finserv < backend/database.sql
```

**Option B: Using MySQL Workbench (GUI)**
1. Open MySQL Workbench
2. Create new database: `yashaswi_finserv`
3. Open `backend/database.sql` file
4. Copy and paste the SQL code into a query tab
5. Execute the query

---

### Step 3: Create Environment File

Create a file named `.env` in the root folder (same level as `package.json`) with this content:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password_here
DB_NAME=yashaswi_finserv
PORT=3000
```

**Important:** Replace `your_mysql_password_here` with your actual MySQL password. If you don't have a password, leave it empty: `DB_PASSWORD=`

---

### Step 4: Start the Server

Run this command:
```bash
npm start
```

You should see:
```
MySQL Database connected successfully
Server running on http://localhost:3000
```

---

### Step 5: Open in Browser

Visit: **http://localhost:3000**

---

## 🎉 That's It!

Your website is now running! You can:
- Browse all pages (Home, About Us, Services, Contact Us)
- Test the contact form (submissions will be saved to database)

---

## 🔧 Troubleshooting

### Problem: "Cannot find module 'express'"
**Solution:** Run `npm install` again

### Problem: "Database connection error"
**Solution:** 
- Check MySQL is running
- Verify `.env` file has correct credentials
- Make sure database `yashaswi_finserv` exists

### Problem: "Port 3000 already in use"
**Solution:** 
- Change PORT in `.env` to another number (e.g., `PORT=3001`)
- Or stop the process using port 3000

### Problem: Form submission doesn't work
**Solution:**
- Check browser console (F12) for errors
- Verify backend server is running
- Check database connection

---

## 📝 Quick Commands Reference

```bash
# Install dependencies
npm install

# Start server
npm start

# Start with auto-reload (development)
npm run dev

# Check if port is in use (Windows)
netstat -ano | findstr :3000

# Check if port is in use (Mac/Linux)
lsof -i :3000
```

---

## 🎯 Next Steps After Starting

1. **Test the contact form** at http://localhost:3000/contact
2. **Check database** to see submissions:
   ```sql
   SELECT * FROM contact_submissions;
   ```
3. **Update Google Maps** in `contact.html` with your actual location
4. **Replace placeholder images** with real photos
5. **Add AMFI ARN number** in footer sections

---

Need help? Check `README.md` for detailed documentation!
