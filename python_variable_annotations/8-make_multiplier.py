#!/usr/bin/env python3
"""Module for type-annotated make_multiplier function."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by the given multiplier."""
    def multiply(value: float) -> float:
        """Multiply value by the captured multiplier."""
        return value * multiplier
    return multiply
