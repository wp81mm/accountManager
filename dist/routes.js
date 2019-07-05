"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Global
var HOME = "/";
var JOIN = "/join";
var LOGIN = "/login";
var LOGOUT = "/logout";
var SEARCH = "/search"; // Users

var USERS = "/users";
var EDIT_PROFILE = "/edit-profile";
var USER_DETAIL = "/:id"; // 익스프레스는 ":id"를 파라매터(매개변수)로 인식..

var CHANGE_PASSWORD = "/change-password";
var ME = "/me"; //Members
// Videos

var VIDEOS = "/videos";
var UPLOAD = "/upload";
var VIDEO_DETAIL = "/:id";
var EDIT_VIDEO = "/:id/edit";
var DELETE_VIDEO = "/:id/delete"; // API : 사용자는 이 URL들을 사용할 수 없다. 그리고 이 URL들은 어떠한 페이지도 렌더링하지 않는다.

var API = "/api";
var REGISTER_VIEW = "/:id/view";
var ADD_COMMENT = "/:id/comment";
var DELETE_COMMENT = "/:id/delete";
var routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: function userDetail(id) {
    if (id) {
      return "/users/".concat(id);
    }

    return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: function videoDetail(id) {
    // URI 스트링을 만들어 주는 것일 뿐이다.
    if (id) {
      return "/videos/".concat(id);
    }

    return VIDEO_DETAIL;
  },
  editVideo: function editVideo(id) {
    if (id) {
      return "/videos/".concat(id, "/edit");
    }

    return EDIT_VIDEO;
  },
  deleteVideo: function deleteVideo(id) {
    if (id) {
      return "/videos/".concat(id, "/delete");
    }

    return DELETE_VIDEO;
  },
  me: ME,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
  deleteComment: function deleteComment(id) {
    if (id) {
      return "/api/".concat(id, "/delete");
    }

    return DELETE_COMMENT;
  }
};
var _default = routes;
exports["default"] = _default;