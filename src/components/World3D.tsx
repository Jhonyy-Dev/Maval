import { useEffect } from 'react';
import '../styles/world3d.css';

const World3D = () => {
  useEffect(() => {
    // Load dependencies dynamically
    const loadDependencies = async () => {
      // Load jQuery
      const jqueryScript = document.createElement('script');
      jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js';
      await new Promise((resolve) => {
        jqueryScript.onload = resolve;
        document.body.appendChild(jqueryScript);
      });

      // Load Three.js
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.js';
      await new Promise((resolve) => {
        threeScript.onload = resolve;
        document.body.appendChild(threeScript);
      });

      // Load your custom script
      const customScript = document.createElement('script');
      customScript.src = './script.js';
      document.body.appendChild(customScript);
    };

    loadDependencies();

    // Cleanup function
    return () => {
      // Remove scripts when component unmounts
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        if (
          script.src.includes('jquery') ||
          script.src.includes('three') ||
          script.src.includes('script.js')
        ) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <div className="world-container">
      <div id="world" />
    </div>
  );
};

export default World3D;
