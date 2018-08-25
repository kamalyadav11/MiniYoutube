"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _VideoListItem = require("./VideoListItem");

var _VideoListItem2 = _interopRequireDefault(_VideoListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoList = function VideoList(props) {
  var videoItems = props.videos.map(function (video) {
    return _react2.default.createElement(_VideoListItem2.default, {
      onVideoSelect: props.onVideoSelect //firstly we brougth the prop from index.js and now passing it as a prop to VideoListItem
      , key: video.etag,
      video: video
    });
  });

  return _react2.default.createElement(
    "ul",
    { className: "col-md-4 list-group" },
    videoItems
  );
};

exports.default = VideoList;