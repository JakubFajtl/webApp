import NavigationPanel from './NavigationPanel.jsx';
import GradientOverlay from './GradientOverlay.jsx';



const panelStyle = {
    position: 'fixed', // Add sticky positioning
    top: 0, // Stick to the top of the viewport
    display: 'flex',
    flexDirection: 'column',
    width: '100%',  
    height: 'auto',  
    left: '50%', // Move the container to the center horizontally
    transform: 'translateX(-50%)', // Adjust to truly center the container 
}

const PanelWithOverlay = ({onNavigate}) => {
    return (
      <div style={panelStyle}>
        <NavigationPanel onNavigate={onNavigate} />
        <GradientOverlay/>
      </div>
    );
  };
  
  export default PanelWithOverlay;