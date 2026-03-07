#!/usr/bin/env python3
"""Module that returns all students sorted by average score."""


def top_students(mongo_collection):
    """Return all students sorted by average score.

    Args:
        mongo_collection: pymongo collection object.

    Returns:
        List of students sorted by averageScore descending,
        each with an added averageScore field.
    """
    return list(mongo_collection.aggregate([
        {
            "$project": {
                "name": 1,
                "topics": 1,
                "averageScore": {"$avg": "$topics.score"}
            }
        },
        {"$sort": {"averageScore": -1}}
    ]))
