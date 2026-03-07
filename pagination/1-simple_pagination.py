#!/usr/bin/env python3
"""
Module that implements simple pagination over a CSV dataset.
"""

import csv
from typing import List

index_range = __import__("0-simple_helper_function").index_range


class Server:
    """
    Server class to paginate a database of popular baby names.
    """

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self) -> None:
        """
        Initialize the pagination server with an empty dataset cache.
        """
        self.__dataset: List[List[str]] = None

    def dataset(self) -> List[List[str]]:
        """
        Load and cache the CSV dataset without the header row.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as file:
                reader = csv.reader(file)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List[str]]:
        """
        Return a page of the dataset for the given page number and size.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start_index, end_index = index_range(page, page_size)
        dataset: List[List[str]] = self.dataset()

        if start_index >= len(dataset):
            return []
        return dataset[start_index:end_index]
