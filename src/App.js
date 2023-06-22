import logo from './logo.svg';
import Button from '@mui/material/Button';
import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant='h1'>こんにちは</Typography>
    </div>
  );
}

export default App;
