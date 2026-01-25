-- MySQL Database Schema for Yashaswi Finserv Website

CREATE DATABASE IF NOT EXISTS yashaswi_finserv;
USE yashaswi_finserv;

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    interest_type VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster queries
CREATE INDEX idx_created_at ON contact_submissions(created_at);
CREATE INDEX idx_interest_type ON contact_submissions(interest_type);
