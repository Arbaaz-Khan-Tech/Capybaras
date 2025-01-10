# test_main.py

from main import add, subtract

def test_add():
    assert add(3, 2) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

def test_subtract():
    assert subtract(3, 2) == 1
    assert subtract(-1, -1) == 0
    assert subtract(0, 5) == -5
