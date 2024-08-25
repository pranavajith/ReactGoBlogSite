import '../styles/bodyComponents.css';

// ScrollableComponent.js
const ScrollableComponent = ({content}) => {
    return (
      <div className="scrollable-content">
        <div className="text-in-scroll">
        {content.data}
        </div>
        
      </div>
    );
  };
  
  // FixedComponent.js
  const FixedComponent = ({content}) => {
    return (
      <div className="fixed-content">
        <div className="text-in-fixed">
        {content.data}
        </div>
      </div>
    );
  };
  
  export { ScrollableComponent, FixedComponent };
  