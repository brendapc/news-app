import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDB() {
  return open({
    filename: './data.db',
    driver: sqlite3.Database,
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getAllNews() {
  const db = await openDB();
  const news = await db.all('SELECT * FROM news');
  await delay(1500); // Adding a 1.5 second delay
  return news;
}

export async function getNewsItem(slug) {
  const db = await openDB();
  const newsItem = await db.get('SELECT * FROM news WHERE slug = ?', slug);
  await delay(2000); // Adding a 2 second delay
  return newsItem;
}

export async function getLatestNews() {
  const db = await openDB();
  const news = await db.all('SELECT * FROM news ORDER BY date DESC LIMIT 3');
  await delay(1500); // Adding a 1.5 second delay
  return news;
}

export async function getAvailableNewsYears() {
  const db = await openDB();
  const years = await db.all('SELECT DISTINCT strftime("%Y", date) as year FROM news');
  await delay(1500); // Adding a 1.5 second delay
  return years.map(row => parseInt(row.year)).sort((a, b) => b - a);
}

export async function getAvailableNewsMonths(year) {
  const db = await openDB();
  const months = await db.all('SELECT DISTINCT strftime("%m", date) as month FROM news WHERE strftime("%Y", date) = ?', [year]);
  await delay(1500); // Adding a 1.5 second delay
  return months.map(row => parseInt(row.month)).sort((a, b) => b - a);
}

export async function getNewsForYear(year) {
  const db = await openDB();
  const news = await db.all('SELECT * FROM news WHERE strftime("%Y", date) = ?', [year]);
  await delay(1500); // Adding a 1.5 second delay
  return news;
}

export async function getNewsForYearAndMonth(year, month) {
  const db = await openDB();
  const news = await db.all('SELECT * FROM news WHERE strftime("%Y", date) = ? AND strftime("%m", date) = ?', [year, month]);
  await delay(1500); // Adding a 1.5 second delay
  return news;
}
