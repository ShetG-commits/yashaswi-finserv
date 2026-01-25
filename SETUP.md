# Quick Setup Guide

## Prerequisites Checklist
- [ ] Node.js installed (v14+)
- [ ] MySQL installed and running
- [ ] npm or yarn package manager

## Quick Start (5 Steps)

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Database
Open MySQL and run:
```sql
CREATE DATABASE yashaswi_finserv;
```

### 3. Import Database Schema
```bash
mysql -u root -p yashaswi_finserv < backend/database.sql
```

### 4. Configure Environment
Create a `.env` file in the root directory:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=yashaswi_finserv
PORT=3000
```

### 5. Start Server
```bash
npm start
```

Visit: `http://localhost:3000`

## Testing the Contact Form

1. Navigate to `http://localhost:3000/contact`
2. Fill in the form:
   - Name: Your name
   - Phone: 10-digit number
   - Email: (optional)
   - Interest Type: Select from dropdown
3. Submit and check database:
```sql
SELECT * FROM contact_submissions;
```

## Common Issues

**Issue**: Cannot connect to database
- **Solution**: Check MySQL is running and credentials in `.env` are correct

**Issue**: Port 3000 already in use
- **Solution**: Change PORT in `.env` or kill process: `netstat -ano | findstr :3000`

**Issue**: Form submission fails
- **Solution**: Check browser console and server logs for errors

## Next Steps

1. Update Google Maps embed URL in `contact.html` with actual coordinates
2. Replace placeholder images with real photos
3. Add actual AMFI ARN number in footer
4. Update business hours if different
5. Replace profile placeholder in About Us page
