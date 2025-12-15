
import './style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <main class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-xl mx-auto p-8 bg-red rounded-lg shadow">
      <h1 class="text-2xl font-semibold mb-2">DocsBuddy</h1>
      <p class="text-red-600 mb-4">Welcome — Vite + Tailwind is ready.</p>
      <button id="time" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Show time</button>
      <pre id="out" class="mt-4 bg-gray-100 p-3 rounded text-sm"></pre>
    </div>
  </main>
`;

document.getElementById('time').addEventListener('click', () => {
  document.getElementById('out').textContent = new Date().toString();
});

console.log('DocsBuddy app started (Vite + Tailwind via CDN)');
