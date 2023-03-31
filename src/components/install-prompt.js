import React, { useState, useEffect } from "react";
import '../stylesheets/button.css'

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

    window.addEventListener("beforeinstallprompt",(e) => handler(e));

    return () => window.removeEventListener("transmissionend", (e) => handler(e));
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