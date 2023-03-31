import React, { useState, useEffect } from "react";

const InstallPrompt = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered");
      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transmissionend", handler);
  }, []);

  const onClick = (e) => {
    e.preventdefault();
    if (!promptInstall) return;
    promptInstall.prompt();
  };
  if (!supportsPWA) return null;

  return (
    <button onClick={onClick} aria-label="Install App" title="install app">
      Install
    </button>
  );
};

export default InstallPrompt