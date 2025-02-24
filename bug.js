```javascript
//In your main app.js file
import './style.css';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="bg-red-500 p-4">
      <p>Hello, Tailwind!</p>
    </div>
  );
}
export default App;
```
```javascript
//In your style.css file
@tailwind base;
@tailwind components;
@tailwind utilities;
```