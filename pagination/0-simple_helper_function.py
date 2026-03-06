#!/usr/bin/env python3
"""Module for simple pagination helper function."""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return a tuple of start and end index for pagination.

    Args:
        page: the current page number (1-indexed).
        page_size: the number of items per page.

    Returns:
        A tuple containing the start index and end index.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
