#!/usr/bin/env python3
"""
Module that provides a helper function for calculating page ranges.
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return the start and end indexes for a given pagination request.

    Page numbering starts at 1, so page 1 with a page size of 10 maps
    to the range `(0, 10)`.
    """
    start_index: int = (page - 1) * page_size
    end_index: int = start_index + page_size
    return (start_index, end_index)
