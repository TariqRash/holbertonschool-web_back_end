# Pagination

> **Python 3.9 · Ubuntu 20.04 LTS · pycodestyle 2.5**

A progressive implementation of pagination strategies in Python, built on top of a CSV dataset of popular baby names.

---

## 📁 Project Structure

| File | Task | Description |
|------|------|-------------|
| `0-simple_helper_function.py` | 0 | `index_range()` — computes start/end indexes for a page |
| `1-simple_pagination.py` | 1 | `Server.get_page()` — basic page + page_size pagination |
| `2-hypermedia_pagination.py` | 2 | `Server.get_hyper()` — pagination with hypermedia metadata |
| `3-hypermedia_del_pagination.py` | 3 | `Server.get_hyper_index()` — deletion-resilient pagination |
| `Popular_Baby_Names.csv` | — | Dataset (19,418 rows of NYC baby name data) |

---

## 🚀 Pagination Strategies

### Task 0 — Simple Helper
`index_range(page, page_size)` returns a `(start, end)` tuple for slicing.  
Pages are **1-indexed**: page 1 → `(0, page_size)`.

### Task 1 — Simple Pagination
`get_page(page, page_size)` returns the correct slice of the dataset.  
Uses `assert` to validate both arguments are positive integers.

### Task 2 — Hypermedia Pagination
`get_hyper(page, page_size)` returns a dictionary with:
- `page_size`, `page`, `data`
- `next_page`, `prev_page`, `total_pages`

### Task 3 — Deletion-Resilient Pagination
`get_hyper_index(index, page_size)` returns a dictionary with:
- `index`, `data`, `page_size`, `next_index`

Guarantees no rows are skipped even if rows are deleted between requests.

---

## ⚙️ Requirements

- Python **3.9**
- `pycodestyle` **2.5.x**
- Type annotations on all functions
- Module, class, and function docstrings required
- `Popular_Baby_Names.csv` must be in the same directory as the scripts

---

## 📦 Dataset

```
wc -l Popular_Baby_Names.csv
19419 Popular_Baby_Names.csv
```

Place the CSV file inside the `pagination/` directory before running any script.
