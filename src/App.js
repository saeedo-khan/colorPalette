import { PaletteProvider } from './context/PaletteContext';
import Palette from './pages/Palette';
import PaletteList from './pages/PaletteList';
import {Switch, Route} from 'react-router-dom'
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
function App() {
  // Find palette id
  const findPalette = id => seedColors.find(palette => palette.id === id)
  document.title = 'Color Palette'
  return (
      <PaletteProvider>
        <Switch>
          <Route exact path='/' render={routeProps => <PaletteList palettes={seedColors} {...routeProps} />} />
          <Route exact path='/palette/:id' render={routeProps => <Palette {...routeProps} paletteColor={generatePalette(findPalette(routeProps.match.params.id))}/>}   />
        </Switch>
      </PaletteProvider>
  );
}

export default App;
