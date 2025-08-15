import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);

  // Install button state
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(
    localStorage.getItem("pwaInstalled") === "true"
  );

  useEffect(() => {
    const beforeInstallHandler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const installedHandler = () => {
      setIsInstalled(true);
      localStorage.setItem("pwaInstalled", "true");
    };

    window.addEventListener("beforeinstallprompt", beforeInstallHandler);
    window.addEventListener("appinstalled", installedHandler);

    return () => {
      window.removeEventListener("beforeinstallprompt", beforeInstallHandler);
      window.removeEventListener("appinstalled", installedHandler);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.finally(() => {
        setDeferredPrompt(null);
      });
    }
  };

  function resetValues() {
    setBill(0);
    setService1(0);
    setService2(0);
  }

  return (
    <div className="calculator">
      <div>
        <BillAmount bill={bill} setBill={setBill} />
      </div>
      <div>
        <Service service={service1} setService={setService1}>
          How did you like the service?
        </Service>
      </div>
      <div>
        <Service service={service2} setService={setService2}>
          How did your friends like the service?
        </Service>
      </div>
      <div>
        <TotalAmount bill={bill} service1={service1} service2={service2} />
      </div>
      <div>
        <ResetButton onResetValues={resetValues}>Reset</ResetButton>
      </div>

      {/* Install button */}
      {!isInstalled && deferredPrompt && (
        <button onClick={handleInstallClick} className="install-btn">
          Install App
        </button>
      )}
    </div>
  );
}

function BillAmount({ bill, setBill }) {
  return (
    <div>
      <h3>How much was the bill?</h3>
      <form>
        <input
          type="number"
          min="0"
          step="any"
          value={bill === 0 ? "" : bill}
          placeholder="Enter the bill amount"
          onChange={(e) => setBill(Number(e.target.value) || 0)}
        />
      </form>
    </div>
  );
}

function Service({ service, setService, children }) {
  return (
    <div>
      <h3>{children}</h3>
      <select
        value={service}
        onChange={(e) => setService(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function TotalAmount({ bill, service1, service2 }) {
  const tips = [service1, service2].filter((val) => val > 0);
  const avgTip =
    tips.length > 0 ? tips.reduce((a, b) => a + b, 0) / tips.length : 0;
  const tip = (bill * avgTip) / 100;
  const totalAmount = bill + tip;

  return (
    <h2>
      You pay ${totalAmount.toFixed(2)} (${bill} + ${tip.toFixed(2)})
    </h2>
  );
}

function ResetButton({ onResetValues, children }) {
  return <button onClick={onResetValues}>{children}</button>;
}
