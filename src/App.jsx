import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [insuranceActive, setInsuranceActive] = useState(true);
  const [premiumCost, setPremiumCost] = useState(30);
  const [weatherCondition, setWeatherCondition] = useState('Clear Sky');
  const [location] = useState('Vijayawada');
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [claimStatus, setClaimStatus] = useState('');
  const [balance, setBalance] = useState(1250);

  // When weather changes to dangerous condition, trigger claim
  useEffect(() => {
    if (insuranceActive && ['Heavy Rain', 'Floods', 'Extreme Heat', 'Pollution', 'Curfew', 'Strike'].includes(weatherCondition)) {
      triggerClaim(weatherCondition);
    }
  }, [weatherCondition, insuranceActive]);

  const toggleInsurance = () => {
    setInsuranceActive(!insuranceActive);
  };

  const triggerClaim = async (reason) => {
    setShowClaimModal(true);
    setClaimStatus('Processing claim based on weather API data...');

    try {
      // Simulating an API verification call using fetch
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          workerId: 'DLV-4921',
          location: location,
          reason: reason,
          timestamp: new Date().toISOString()
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      
      setTimeout(() => {
        setClaimStatus('Claim Approved! ₹500 has been credited to your account for lost income.');
        setBalance(prev => prev + 500);
      }, 2000);

    } catch (error) {
      setClaimStatus('Error processing claim. Please contact support.');
    }
  };

  const resetWeather = () => {
    setWeatherCondition('Clear Sky');
    setShowClaimModal(false);
    setClaimStatus('');
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo">
          ShieldDelivery
        </div>
        <div className="user-profile">
          <span>Worker ID: DLV-4921</span>
          <div className="avatar">RS</div>
        </div>
      </header>

      <main className="main-content">
        <div className="greeting">
          <h1>Hello, Raju!</h1>
          <p>Assigned Location: <span className="highlight-text">{location}</span></p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Earnings</h3>
            <div className="value">₹{balance}</div>
            <div className="sub-text">This week</div>
          </div>

          <div className={`stat-card insurance-card ${insuranceActive ? 'active' : 'inactive'}`}>
            <div className="card-header">
              <h3>Income Protection</h3>
              <span className={`status-badge ${insuranceActive ? 'success' : 'danger'}`}>
                {insuranceActive ? 'Active' : 'Inactive'}
              </span>
            </div>
            <div className="insurance-details">
              <p>Weekly Premium: <strong>₹{premiumCost}</strong></p>
              <button 
                className={`toggle-btn ${insuranceActive ? 'btn-danger' : 'btn-success'}`}
                onClick={toggleInsurance}
              >
                {insuranceActive ? 'Cancel Plan' : 'Buy Plan'}
              </button>
            </div>
          </div>
        </div>

        <div className="weather-section card">
          <div className="weather-header">
            <h2>Current Conditions</h2>
            <div className={`weather-badge condition-${weatherCondition.replace(' ', '-').toLowerCase()}`}>
              {weatherCondition === 'Clear Sky' ? '☀️ ' : ''}
              {weatherCondition === 'Heavy Rain' ? '🌧️ ' : ''}
              {weatherCondition === 'Floods' ? '🌊 ' : ''}
              {weatherCondition === 'Extreme Heat' ? '🔥 ' : ''}
              {weatherCondition === 'Pollution' ? '🌫️ ' : ''}
              {weatherCondition === 'Curfew' ? '🚨 ' : ''}
              {weatherCondition === 'Strike' ? '⚠️ ' : ''}
              {weatherCondition}
            </div>
          </div>
          
          <p className="weather-desc">
            We actively monitor external APIs. If disruptions force you to stop working in {location}, a claim is automatically triggered for your lost income.
          </p>

          <div className="simulation-controls">
            <h3>Simulator (Demo Mode): Trigger Disruption</h3>
            <div className="button-group">
              <button onClick={() => setWeatherCondition('Clear Sky')} className={weatherCondition === 'Clear Sky' ? 'active-sim' : ''}>☀️ Normal</button>
              <button onClick={() => setWeatherCondition('Heavy Rain')} className={weatherCondition === 'Heavy Rain' ? 'active-sim' : ''}>🌧️ Heavy Rain</button>
              <button onClick={() => setWeatherCondition('Floods')} className={weatherCondition === 'Floods' ? 'active-sim' : ''}>🌊 Floods</button>
              <button onClick={() => setWeatherCondition('Extreme Heat')} className={weatherCondition === 'Extreme Heat' ? 'active-sim' : ''}>🔥 Extreme Heat</button>
              <button onClick={() => setWeatherCondition('Pollution')} className={weatherCondition === 'Pollution' ? 'active-sim' : ''}>🌫️ Pollution</button>
              <button onClick={() => setWeatherCondition('Curfew')} className={weatherCondition === 'Curfew' ? 'active-sim' : ''}>🚨 Curfew</button>
              <button onClick={() => setWeatherCondition('Strike')} className={weatherCondition === 'Strike' ? 'active-sim' : ''}>⚠️ Strike</button>
            </div>
          </div>
        </div>

      </main>

      {showClaimModal && (
        <div className="modal-overlay">
          <div className="modal-content glass-effect">
            <h2>Disruption Detected!</h2>
            <p className="reason-text">Our systemic APIs detected <strong>{weatherCondition}</strong> in {location}. Deliveries are suspended.</p>
            
            <div className="claim-status-box">
              <div className="spinner-container">
                {claimStatus.includes('Processing') ? <div className="spinner"></div> : <div className="success-icon">✓</div>}
              </div>
              <p>{claimStatus}</p>
            </div>

            <button className="btn-primary full-width" onClick={resetWeather} disabled={claimStatus.includes('Processing')}>
              Acknowledge & Return to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
