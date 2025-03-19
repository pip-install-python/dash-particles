# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class DashParticles(Component):
    """A DashParticles component.
DashParticles is a Dash component that renders interactive particle animations.
This implementation uses vanilla tsParticles for better compatibility with Dash.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Additional CSS class for the container div.

- height (string; default '400px'):
    Height of the particles container. Can be any valid CSS dimension
    value.

- options (dict; default {    background: {        color: {            value: "transparent",        },    },    fpsLimit: 60,    particles: {        color: {            value: "#0075FF",        },        links: {            color: "#0075FF",            distance: 150,            enable: True,            opacity: 0.5,            width: 1,        },        move: {            direction: "none",            enable: True,            outModes: {                default: "bounce",            },            random: False,            speed: 3,            straight: False,        },        number: {            density: {                enable: True,                area: 800,            },            value: 80,        },        opacity: {            value: 0.5,        },        shape: {            type: "circle",        },        size: {            value: { min: 1, max: 5 },        },    },    detectRetina: True,}):
    Configuration options for the particles.  See
    https://particles.js.org for documentation on available options.

- particlesLoaded (boolean; default False):
    Boolean flag indicating if particles have been loaded.  This is a
    read-only prop updated by the component.

- width (string; default '100%'):
    Width of the particles container. Can be any valid CSS dimension
    value."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_particles'
    _type = 'DashParticles'

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        options: typing.Optional[dict] = None,
        height: typing.Optional[str] = None,
        width: typing.Optional[str] = None,
        className: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        particlesLoaded: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'className', 'height', 'options', 'particlesLoaded', 'style', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'height', 'options', 'particlesLoaded', 'style', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashParticles, self).__init__(**args)
