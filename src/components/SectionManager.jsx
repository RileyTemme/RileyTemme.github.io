
import { useReducer } from "react"


const initialState = {
    showAbout: true,
    showFavorites: true,
    showContact: true
}

const sectionReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_ABOUT':
            return { ...state, showAbout: !state.showAbout }
        case 'TOGGLE_FAVORITES':
            return { ...state, showFavorites: !state.showFavorites }
        case 'TOGGLE_CONTACT':
            return { ...state, showContact: !state.showContact }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

export const useSectionManager = () => useReducer(sectionReducer, initialState)

const SectionManager = ({ dispatch }) => {
    return (
        <div className="section-manager">
            <button
                onClick={() => dispatch({ type: 'TOGGLE_ABOUT'})}>
                Toggle About    
            </button>
            <button 
                onClick={() => dispatch({ type: 'TOGGLE_FAVORITES'})}>
                Toggle Favorites    
            </button>
            <button 
                onClick={() => dispatch({ type: 'TOGGLE_CONTACT'})}>
                Toggle Contact    
            </button>
            <button 
                onClick={() => dispatch({ type: 'RESET'})}>
                Reset    
            </button>
        </div>
    )
}

export default SectionManager