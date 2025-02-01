const GradientOverlay = () => {

    /* Gradient Overlay */
    return (
        <div
            style={{
                position: 'relative',
                top: 0,
                left: 0,
                width: '100%',
                height: '50px',
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0px, rgba(0, 0, 0, 0) 100%)',
                pointerEvents: 'none', // Ensure the overlay doesn't block interactions
            }}
        ></div>
    )

};

export default GradientOverlay;