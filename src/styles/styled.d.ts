import 'styled-components';
import { globalTheme } from 'styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: typeof globalTheme.font;
    pokemon: typeof globalTheme.pokemon;
    colors: typeof globalTheme.colors;
  }
}
