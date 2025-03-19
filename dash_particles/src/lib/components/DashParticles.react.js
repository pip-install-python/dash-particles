import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// Import the vanilla tsParticles
import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

/**
 * DashParticles is a Dash component that renders interactive particle animations.
 * This implementation uses vanilla tsParticles for better compatibility with Dash.
 */
const DashParticles = ({
    id,
    options,
    height = '400px',
    width = '100%',
    className,
    style = {},
    particlesLoaded = false,
    setProps
}) => {
    const containerRef = useRef(null);
    const initialized = useRef(false);
    const particlesInstance = useRef(null);

    useEffect(() => {
        // Initialize tsParticles only once
        if (!initialized.current) {
            const initParticles = async () => {
                try {
                    // Initialize the engine
                    await loadSlim(tsParticles);
                    initialized.current = true;
                    
                    // Load the particles
                    if (containerRef.current) {
                        particlesInstance.current = await tsParticles.load({
                            id: `${id}-particles`,
                            element: containerRef.current,
                            options: options || defaultOptions
                        });
                        
                        if (setProps) {
                            setProps({ particlesLoaded: true });
                        }
                    }
                } catch (error) {
                    console.error("Error initializing particles:", error);
                }
            };
            
            initParticles();
        }
        
        // Cleanup function
        // return () => {
        //     if (initialized.current) {
        //         try {
        //             // Use the tsParticles.destroy method with the container ID
        //             // tsParticles.destroy(`${id}-particles`);
        //             particlesInstance.current = null;
        //         } catch (error) {
        //             console.error("Error destroying particles:", error);
        //         }
        //     }
        // };
    }, [id, options, setProps]);

    // Update particles if options change
    useEffect(() => {
        if (initialized.current && particlesInstance.current) {
            particlesInstance.current.options.load(options || defaultOptions);
        }
    }, [options]);

    const containerStyle = {
        height,
        width,
        position: 'relative',
        ...style
    };

    return (
        <div 
            id={id} 
            ref={containerRef}
            className={className} 
            style={containerStyle}
        />
    );
};

// Default options that work well with Dash
const defaultOptions = {
    background: {
        color: {
            value: "transparent",
        },
    },
    fpsLimit: 60,
    particles: {
        color: {
            value: "#0075FF",
        },
        links: {
            color: "#0075FF",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};

DashParticles.defaultProps = {
    options: defaultOptions,
    height: '400px',
    width: '100%',
    style: {},
    particlesLoaded: false
};

DashParticles.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Configuration options for the particles.
     * See https://particles.js.org for documentation on available options.
     */
    options: PropTypes.object,

    /**
     * Height of the particles container. Can be any valid CSS dimension value.
     */
    height: PropTypes.string,

    /**
     * Width of the particles container. Can be any valid CSS dimension value.
     */
    width: PropTypes.string,

    /**
     * Additional CSS class for the container div.
     */
    className: PropTypes.string,

    /**
     * Additional inline styles for the container div.
     */
    style: PropTypes.object,

    /**
     * Boolean flag indicating if particles have been loaded.
     * This is a read-only prop updated by the component.
     */
    particlesLoaded: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default DashParticles;