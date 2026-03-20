# ShieldDelivery: Income Protection for Delivery Workers

## 1. Project Requirement Explanation
Delivery partners are the backbone of the quick-commerce and food delivery ecosystem. However, their income is directly tied to their active working hours. When unexpected, exogenous, and uncontrollable disruptions occur—such as extreme weather, natural disasters, or civic issues—they are unable to work. Consequently, they lose a significant portion of their daily or weekly income. 
This project serves as a parametric insurance platform that automatically detects these widespread disruptions and instantly compensates delivery partners for their lost income, providing a critical financial safety net.

## 2. Persona-Based Scenarios
**Persona:** Raju, a 28-year-old delivery partner in Vijayawada.
- **Scenario:** Raju buys the ShieldDelivery weekly premium plan for ₹30. On a Tuesday afternoon, a severe cyclone causes intense flooding in Vijayawada. The delivery platforms halt operations for the safety of their fleet. 
- **Action:** Raju cannot work and stands to lose his daily earnings. 
- **Resolution:** Our platform's API detects the "Floods" condition in Vijayawada. Since Raju's plan is active, the system automatically triggers a claim and deposits ₹500 into his wallet to compensate for the lost day, without him having to make a single phone call or file complex paperwork.

## 3. Application Workflow
1. **Enrollment**: The delivery partner logs into the app and subscribes to the Weekly Premium Plan.
2. **Monitoring**: The platform passively monitors third-party data oracles (e.g., meteorological APIs, local news APIs) for the worker's assigned location.
3. **Trigger Event**: A severe disruption (e.g., Heavy Rain) matches our predefined parametric conditions.
4. **Verification**: The system cross-references the worker's location and active plan status.
5. **Payout**: An automated claim is processed, and the compensation amount is instantly credited to the partner's account.

## 4. How the Weekly Premium Model Works
Delivery partners operate on weekly payout cycles. To ensure affordability and flexibility:
- **Micro-premiums**: Partners pay a small amount (e.g., ₹30 to ₹50) at the start of the week.
- **Auto-deduction**: The premium can be seamlessly integrated to auto-deduct from their weekly earnings ledger.
- **Coverage Window**: The coverage lasts for exactly 7 days, allowing partners to opt-in or out based on the season (e.g., buying more coverage during the monsoon).

## 5. Parametric Triggers
This insurance relies on objective, data-driven triggers rather than subjective damage assessment. We trigger payouts when APIs report:
- **Heavy Rain & Floods**: Sourced from meteorological APIs (e.g., OpenWeatherMap, IMD).
- **Extreme Heat**: Triggered when temperatures exceed hazardous thresholds (e.g., > 45°C).
- **Pollution**: Triggered based on severe/hazardous Air Quality Index (AQI) levels.
- **Curfews & Strikes**: Sourced from verified local news aggregators or direct API feeds from local authorities indicating restricted movement.

## 6. Why Web/Mobile?
- **Mobile-First Approach**: Since delivery partners spend 100% of their working hours on their mobile devices, a responsive web app or a dedicated mobile app ensures they have instant access to their policies and real-time alerts. 
- **PWA (Progressive Web App)**: This React prototype is built as a web interface that can easily be bundled into a PWA to save storage space on low-end Android devices while providing a native app-like experience.

## 7. AI/ML Utilization
- **Dynamic Risk Assessment**: Machine Learning algorithms can analyze historical weather patterns and past disruption frequencies in specific pin codes to dynamically adjust the premium.
- **Hyper-local Forecasting**: AI models can predict the likelihood of localized flooding, allowing the platform to send early warnings to workers to move to safer zones.
- **Anomaly Detection**: NLP models scanning news for early indicators of strikes or route closures.

## 8. Premium Calculation
The premium is calculated using an actuarial backend algorithm taking into account:
- **Geolocation Risk Factor**: Areas prone to frequent flooding (e.g., coastal cities) might have a slightly adjusted premium.
- **Seasonality**: Premiums scale dynamically (e.g., slightly higher during peak monsoon season, lower during stable winter months).
- **Vehicle Type**: Two-wheelers might face higher risks from waterlogging than delivery trucks.

## 9. Fraud Detection
Parametric insurance naturally reduces fraud because claims are triggered by objective, external data rather than human claims. However, we ensure integrity by:
- **Location Verification**: Re-verifying the worker's GPS ping against the claimed affected zone.
- **Platform Sync**: Ensuring the delivery platform (e.g., Zomato/Swiggy) also confirms zero active deliveries for that specific user during the downtime window.

## 10. Tech Stack
- **Frontend Framework**: React.js (via Vite)
- **Styling**: Modern, premium plain CSS featuring Glassmorphism, tailored color palettes, and responsive design.
- **Logic Handling**: React Hooks (`useState`, `useEffect`)
- **API Simulation**: Mocked validation via `fetch()` interacting with JSON APIs.

## 11. Development Plan (Roadmap)
- **Phase 1 (MVP)**: React frontend simulating the premium subscription and disruption trigger (Current Phase).
- **Phase 2 (Backend Integration)**: Node.js/Express backend connecting to real-time weather APIs (OpenWeather).
- **Phase 3 (Ledger/Wallet)**: Integrate a payment gateway for actual premium collection and payout disbursement.
- **Phase 4 (Mobile Native)**: Port the application to React Native for Google Play Store and Apple App Store deployment.

## 12. Setup and Execution
To run this prototype locally:

```bash
# Make sure you are in the project folder
cd delivery-insurance-platform

# Install dependencies
npm install

# Run the development server
npm run dev
```

Navigate to `http://localhost:5173/` in your browser. Use the provided "**Demo Mode Simulator**" to trigger disruptions and watch the automated claim processing happen in real-time.
