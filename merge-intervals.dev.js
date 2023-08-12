"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var merge = function merge(intervals) {
  if (intervals.length = 1) return intervals;
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  var curr = intervals[0];
  var result = [curr];

  for (var i = 1; i < intervals.length; i++) {
    var currentRight = curr[1];

    var _intervals$i = _slicedToArray(intervals[i], 2),
        nextLeft = _intervals$i[0],
        nextRight = _intervals$i[1];

    if (currentRight >= nextLeft) current[1] = Math.max(currentRight, nextRight);else {
      result.push(intervals[i]);
      curr = intervals[i];
    }
  }

  return result;
};

merge();