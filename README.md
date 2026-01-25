# Yashaswi Finserv Website

A clean, modern, and responsive website for Yashaswi Finserv - an AMFI Registered Mutual Fund Distributor.

## 🚀 Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, futuristic design with smooth animations
- **Four Main Pages**: Home, About Us, Our Services, and Contact Us
- **Contact Form**: Backend integration with MySQL database
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Smooth Animations**: Scroll-triggered animations and hover effects

## 📁 Project Structure

```
yashaswi-finserv-website/
├── frontend/
│   ├── index.html          # Home page
│   ├── about.html          # About Us page
│   ├── services.html       # Our Services page
│   ├── contact.html        # Contact Us page
│   ├── styles.css          # Custom CSS styles
│   └── script.js           # JavaScript functionality
├── backend/
│   ├── server.js           # Express server
│   └── database.sql        # MySQL database schema
├── package.json            # Node.js dependencies
├── .env.example           # Environment variables template
└── README.md              # Project documentation
```

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS (via CDN)
- **Backend**: Node.js + Express
- **Database**: MySQL
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

### Step 1: Clone/Download the Project

```bash
cd yashaswi-finserv-website
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Database Setup

1. Create a MySQL database:
```sql
CREATE DATABASE yashaswi_finserv;
```

2. Run the database schema:
```bash
mysql -u root -p yashaswi_finserv < backend/database.sql
```

Or manually execute the SQL file in your MySQL client.

### Step 4: Environment Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update `.env` with your database credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=yashaswi_finserv
PORT=3000
```

### Step 5: Start the Server

```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

## 📄 Pages Overview

### 1. Home Page (`index.html`)
- Hero section with company branding
- Introduction section
- Trust factors (4 key points)
- Call-to-action sections

### 2. About Us (`about.html`)
- Profile section for Pavan Tavargeri
- Investment quote
- Mission, Vision, and Philosophy
- Client testimonials

### 3. Our Services (`services.html`)
- Service cards grid layout
- Four main services:
  - Mutual Funds
  - Tax Saving Investments
  - Retirement Planning
  - Wealth Creation

### 4. Contact Us (`contact.html`)
- Contact form with validation
- Contact information display
- Google Maps integration
- Form submission to MySQL database

## 🗄️ Database Schema

The contact form submissions are stored in the `contact_submissions` table:

```sql
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- name (VARCHAR(100), NOT NULL)
- phone (VARCHAR(20), NOT NULL)
- email (VARCHAR(100), NULLABLE)
- interest_type (VARCHAR(50), NOT NULL)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
```

## 🔧 API Endpoints

### POST `/api/contact`
Submit contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "email": "john@example.com",
  "interest_type": "Mutual Funds"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon."
}
```

## 🎨 Customization

### Colors
The website uses a blue color scheme matching the Yashaswi Finserv branding:
- Primary Blue: `#2563eb` (blue-600)
- Dark Blue: `#1d4ed8` (blue-700)
- Light Blue: `#3b82f6` (blue-500)

### Fonts
- Primary: Inter
- Secondary: Poppins

### Google Maps
Update the Google Maps embed URL in `contact.html` with your actual office location coordinates.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 Security Notes

- Form validation on both client and server side
- SQL injection protection using parameterized queries
- CORS enabled for API endpoints
- Input sanitization recommended for production

## 📝 Notes

- Replace placeholder images with actual photos
- Update Google Maps embed with correct location
- Add actual AMFI ARN number in footer
- Replace placeholder profile image in About Us page
- Update business hours if different

## 🐛 Troubleshooting

### Database Connection Issues
- Verify MySQL is running
- Check database credentials in `.env`
- Ensure database exists

### Port Already in Use
- Change PORT in `.env` file
- Or kill the process using port 3000

### Form Submission Errors
- Check browser console for errors
- Verify backend server is running
- Check database connection

## 📄 License

This project is proprietary and confidential.

## 👤 Contact

**Yashaswi Finserv**
- Address: No. 21, 2nd Floor, Sattelite Complex, Koppikar Road, Hubli
- Phone: 98865 91050
- Email: yashaswi.finserv@gmail.com

---

**Disclaimer**: Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not indicative of future returns.
