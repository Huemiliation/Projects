import React from 'react';

export function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0b0e06]">
      <iframe
        src="/bombs-presentation.html"
        title="بمب‌ها: از باروت سیاه تا مادر بمب‌ها"
        className="w-full h-full border-0 block"
        allow="fullscreen; clipboard-read; clipboard-write"
      />
    </div>
  );
}

export default App;
