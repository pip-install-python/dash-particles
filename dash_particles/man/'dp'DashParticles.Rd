% Auto-generated: do not edit by hand
\name{'dp'DashParticles}

\alias{'dp'DashParticles}

\title{DashParticles component}

\description{
DashParticles is a Dash component that renders interactive particle animations. This implementation uses vanilla tsParticles for better compatibility with Dash.
}

\usage{
'dp'DashParticles(id=NULL, className=NULL, height=NULL, options=NULL,
particlesLoaded=NULL, style=NULL, width=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{className}{Character. Additional CSS class for the container div.}

\item{height}{Character. Height of the particles container. Can be any valid CSS dimension value.}

\item{options}{Named list. Configuration options for the particles.
See https://particles.js.org for documentation on available options.}

\item{particlesLoaded}{Logical. Boolean flag indicating if particles have been loaded.
This is a read-only prop updated by the component.}

\item{style}{Named list. Additional inline styles for the container div.}

\item{width}{Character. Width of the particles container. Can be any valid CSS dimension value.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

