# AUTO GENERATED FILE - DO NOT EDIT

export 'dp'_dashparticles

"""
    'dp'_dashparticles(;kwargs...)

A DashParticles component.
DashParticles is a Dash component that renders interactive particle animations.
This implementation uses vanilla tsParticles for better compatibility with Dash.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional): Additional CSS class for the container div.
- `height` (String; optional): Height of the particles container. Can be any valid CSS dimension value.
- `options` (Dict; optional): Configuration options for the particles.
See https://particles.js.org for documentation on available options.
- `particlesLoaded` (Bool; optional): Boolean flag indicating if particles have been loaded.
This is a read-only prop updated by the component.
- `style` (Dict; optional): Additional inline styles for the container div.
- `width` (String; optional): Width of the particles container. Can be any valid CSS dimension value.
"""
function 'dp'_dashparticles(; kwargs...)
        available_props = Symbol[:id, :className, :height, :options, :particlesLoaded, :style, :width]
        wild_props = Symbol[]
        return Component("'dp'_dashparticles", "DashParticles", "dash_particles", available_props, wild_props; kwargs...)
end

