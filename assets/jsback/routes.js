// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// Users
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const USER_DETAIL = "/:id"; // 익스프레스는 ":id"를 파라매터(매개변수)로 인식..
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

//Members

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// API : 사용자는 이 URL들을 사용할 수 없다. 그리고 이 URL들은 어떠한 페이지도 렌더링하지 않는다.
const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = `/:id/comment`;
const DELETE_COMMENT = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    }
    return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    // URI 스트링을 만들어 주는 것일 뿐이다.
    if (id) {
      return `/videos/${id}`;
    }
    return VIDEO_DETAIL;
  },
  editVideo: id => {
    if (id) {
      return `/videos/${id}/edit`;
    }
    return EDIT_VIDEO;
  },
  deleteVideo: id => {
    if (id) {
      return `/videos/${id}/delete`;
    }
    return DELETE_VIDEO;
  },
  me: ME,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
  deleteComment: id => {
    if (id) {
      return `/api/${id}/delete`;
    }
    return DELETE_COMMENT;
  }
};

export default routes;
