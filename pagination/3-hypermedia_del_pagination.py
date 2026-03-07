#!/usr/bin/env python3
"""Module for deletion-resilient hypermedia pagination."""

import csv
from typing import Dict, List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: truncated_dataset[i] for i in range(len(truncated_dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None,
                        page_size: int = 10) -> Dict:
        """Return deletion-resilient hypermedia pagination metadata.

        Args:
            index: the starting index of the page.
            page_size: the number of available rows to return.

        Returns:
            A dict with index, next_index, page_size, and data.
        """
        index_data = self.indexed_dataset()
        data_len = len(self.dataset())
        assert index is not None
        assert index >= 0 and index < data_len

        next_indices = []
        current = index
        while current < data_len and len(next_indices) < page_size:
            if current in index_data:
                next_indices.append(current)
            current += 1

        data = [index_data[i] for i in next_indices]

        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': current
        }
