import React, { useEffect } from 'react';

const ElfsightChatbot: React.FC = () => {
  useEffect(() => {
    // Ensure the Elfsight script is loaded
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      document.head.appendChild(script);
    }

    // Clean up function
    return () => {
      // Don't remove the script as it might be needed for other Elfsight widgets
    };
  }, []);

  return (
    <div
      className="elfsight-app-413fafd4-9386-4c74-99f9-215726a390e5 fixed z-[1000]"
      data-elfsight-app-lazy
    />
  );
};

export default ElfsightChatbot;
