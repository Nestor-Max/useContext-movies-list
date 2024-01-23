import React, { createContext } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme:true,
        light: { syntax: '#555', ui: '#ddd', bg:'#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg:'#555' }
    }
    render() {
        return(
            <div className='book-list'>
                
                <ul>
                    <li>The Way of Kings</li>
                    <li>The yellow Sun</li>
                    <li>Romanjago</li>
                </ul>
            </div>

        )
            
        
    }
}

export default ThemeContextProvider;