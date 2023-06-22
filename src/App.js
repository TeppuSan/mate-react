import logo from './logo.svg';
import Button from '@mui/material/Button';
import './App.css';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { AllInbox } from '@mui/icons-material';
import BuildIcon from '@mui/icons-material/Build';

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant='h1'>こんにちは</Typography>
      <HomeIcon />
      入力保管でimportできる
      <AllInbox />
      <BuildIcon />
    </div>
  );
}

export default App;
