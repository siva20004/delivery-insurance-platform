# Delivery Worker Income Protection Platform

This project is a React-based prototype demonstrating a delivery worker income protection platform. Delivery workers often lose 20–30% of their monthly income due to external disruptions (like heavy rain, floods, extreme heat, or curfews). This platform allows workers to purchase a weekly insurance plan that automatically triggers claims and payouts based on real-time disruption data.

## Features Included

- **Worker Dashboard**: Beautiful premium UI showing the worker's current earnings, location, and assigned profile.
- **Income Protection Module**: Displays insurance activity status (Active/Inactive), the premium cost (e.g., ₹30 weekly), and allows toggling the plan.
- **Weather / Disruption Simulation**: A widget displaying the current weather condition for the location. It includes a "Demo Mode" simulator to trigger different disruption events.
- **Automated Claims via fetch()**: When an extreme condition is simulated (e.g., "Heavy Rain", "Floods") and insurance is active, the app simulates calling an external weather/claim API using `fetch()`. Wait 2 seconds, and it approves the claim, automatically adding a payout to the worker's earnings.
- **Responsive & Modern Design**: Employs glassmorphism, smooth animations, and a polished dark-mode color scheme.

## Tech Stack
- Frontend: React (via Vite)
- Styling: Plain CSS with interactive hover states and modern UI variables.
- Logic: React Hooks (`useState`, `useEffect`) and `fetch()` for API simulation.

## How to Run It

1. **Prerequisites**: Make sure you have Node.js installed.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
4. **View the Application**: Open your browser and navigate to `http://localhost:5173/`. 

## Instructions for Submission
Since this is an automated output, below is the repository structure along with the video recording of the working prototype. You can upload this entire folder and the linked video to your submission portal!
