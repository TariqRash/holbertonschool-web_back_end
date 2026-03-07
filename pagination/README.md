# Pagination

This project implements three pagination strategies in Python using a CSV dataset of popular baby names:

- simple index range calculation
- basic page/page size pagination
- hypermedia pagination metadata
- deletion-resilient pagination based on indexed rows

## Files

- `0-simple_helper_function.py`: helper that computes start and end indexes.
- `1-simple_pagination.py`: paginates the dataset with `page` and `page_size`.
- `2-hypermedia_pagination.py`: returns page data plus hypermedia metadata.
- `3-hypermedia_del_pagination.py`: provides deletion-resilient pagination.
- `Popular_Baby_Names.csv`: dataset used by the server classes.

## Requirements

- Python 3.9
- Ubuntu 20.04 LTS compatibility
- `pycodestyle` 2.5 style
- type annotations on all functions
- complete module, class, and function documentation

## Dataset setup

Place `Popular_Baby_Names.csv` inside the `pagination/` directory.
The code expects the file name to be exactly `Popular_Baby_Names.csv`.

## Notes

The pagination modules read the CSV file relative to the working directory expected by the Holberton tasks. Running scripts from inside `pagination/` matches the project examples.
