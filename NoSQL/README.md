# NoSQL

A collection of MongoDB shell scripts and Python PyMongo functions for working with NoSQL databases.

## Resources

- [NoSQL Databases Explained](https://riak.com/resources/nosql-databases/)
- [What is NoSQL?](https://www.mongodb.com/nosql-explained)
- [MongoDB with Python Crash Course](https://www.youtube.com/watch?v=E-1xI85Zog8)

## Requirements

### MongoDB Command Files
- All files interpreted/compiled on Ubuntu 20.04 LTS using MongoDB (version 4.4)
- All files should end with a new line
- The first line of all files should be a comment: `// my comment`

### Python Scripts
- All files interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.9) and PyMongo (version 4.8.0)
- All files should end with a new line
- The first line of all files should be `#!/usr/bin/env python3`
- Code should use pycodestyle style (version 2.5.*)
- All modules and functions should have documentation

## Tasks

| # | File | Description |
|---|------|-------------|
| 0 | `0-list_databases` | List all databases |
| 1 | `1-use_or_create_database` | Create or use database `my_db` |
| 2 | `2-insert` | Insert document in collection `school` |
| 3 | `3-all` | List all documents in collection `school` |
| 4 | `4-match` | List all documents with name="Holberton school" |
| 5 | `5-count` | Display number of documents in collection `school` |
| 6 | `6-update` | Add attribute `address` to documents with name="Holberton school" |
| 7 | `7-delete` | Delete all documents with name="Holberton school" |
| 8 | `8-all.py` | Python function to list all documents |
| 9 | `9-insert_school.py` | Python function to insert a document |
| 10 | `10-update_topics.py` | Python function to update school topics |
| 11 | `11-schools_by_topic.py` | Python function to find schools by topic |
| 12 | `12-log_stats.py` | Python script for Nginx log stats |
| 13 | `100-find` | List documents with name starting by Holberton |
| 14 | `101-students.py` | Python function returning students sorted by average score |
| 15 | `102-log_stats.py` | Improved log stats with top 10 IPs |
