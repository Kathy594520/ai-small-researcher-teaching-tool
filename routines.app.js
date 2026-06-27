function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["size", "className", "style"];
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;
var createRoot = ReactDOM.createRoot;
var makeIcon = function makeIcon(glyph) {
  return function (_ref) {
    var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/React.createElement("span", _objectSpread(_objectSpread({}, props), {}, {
      "aria-hidden": "true",
      className: "inline-flex items-center justify-center leading-none select-none " + className,
      style: _objectSpread({
        width: size,
        height: size,
        fontSize: Math.max(10, size * 0.8),
        lineHeight: 1
      }, style)
    }), glyph);
  };
};
var Users = makeIcon('👥');
var AlertCircle = makeIcon('!');
var Settings = makeIcon('⚙');
var RotateCcw = makeIcon('↻');
var FileSpreadsheet = makeIcon('▦');
var Star = makeIcon('★');
var Heart = makeIcon('♥');
var Plus = makeIcon('+');
var Minus = makeIcon('−');
var ChevronLeft = makeIcon('‹');
var ChevronRight = makeIcon('›');
var Check = makeIcon('✓');
var Edit3 = makeIcon('✎');
var Trash2 = makeIcon('🗑');
var Sparkles = makeIcon('✦');
var Utensils = makeIcon('🍽');
var Award = makeIcon('🏅');
var Eraser = makeIcon('⌫');
var ClipboardList = makeIcon('☰');
var X = makeIcon('×');
var Save = makeIcon('💾');
var AlignVerticalJustifyStart = makeIcon('↕');
var AlignHorizontalJustifyStart = makeIcon('↔');
var AlertTriangle = makeIcon('⚠');
var BookOpen = makeIcon('📖');
var Clock = makeIcon('🕒');
var Calendar = makeIcon('📅');
var PenTool = makeIcon('✒');
var ExternalLink = makeIcon('↗');
var ImageIcon = makeIcon('🖼');
var Paperclip = makeIcon('📎');
var Upload = makeIcon('⤴');
var Maximize = makeIcon('▢');
var ZoomIn = makeIcon('＋');
var ZoomOut = makeIcon('－');

// ---------------------------------------------------------------------------
// 使用者設定區：直接鎖定注音字體網址 (.ttf/.woff)
// ---------------------------------------------------------------------------
var DEFAULT_ZHUYIN_FONT_URL = null;
var App = function App() {
  // ---------------------------------------------------------------------------
  // 狀態設定
  // ---------------------------------------------------------------------------
  var DEFAULT_LATE_TIME = "07:50";
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    students = _useState2[0],
    setStudents = _useState2[1];
  var _useState3 = useState(new Date()),
    _useState4 = _slicedToArray(_useState3, 2),
    currentTime = _useState4[0],
    setCurrentTime = _useState4[1];
  var _useState5 = useState(DEFAULT_LATE_TIME),
    _useState6 = _slicedToArray(_useState5, 2),
    lateThreshold = _useState6[0],
    setLateThreshold = _useState6[1];
  var _useState7 = useState(function () {
      return localStorage.getItem('class_title') || "班級自治小黑板";
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    classNameTitle = _useState8[0],
    setClassNameTitle = _useState8[1];

  // UI 狀態
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    showSettings = _useState0[0],
    setShowSettings = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    showBatchEdit = _useState10[0],
    setShowBatchEdit = _useState10[1];
  var _useState11 = useState(""),
    _useState12 = _slicedToArray(_useState11, 2),
    batchInput = _useState12[0],
    setBatchInput = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isEditingNote = _useState14[0],
    setIsEditingNote = _useState14[1];

  // 進階功能狀態：剪貼簿與拖曳
  var _useState15 = useState('students'),
    _useState16 = _slicedToArray(_useState15, 2),
    leftPanelMode = _useState16[0],
    setLeftPanelMode = _useState16[1]; // 'students' | 'scrapbook' | 'homework'
  var _useState17 = useState(function () {
      try {
        var saved = localStorage.getItem('class_homework_data');
        if (saved) {
          var parsed = JSON.parse(saved);
          if (parsed && Array.isArray(parsed.assignments)) {
            var _ref2, _parsed$activeId, _parsed$assignments$;
            return {
              assignments: parsed.assignments,
              activeId: (_ref2 = (_parsed$activeId = parsed.activeId) !== null && _parsed$activeId !== void 0 ? _parsed$activeId : (_parsed$assignments$ = parsed.assignments[0]) === null || _parsed$assignments$ === void 0 ? void 0 : _parsed$assignments$.id) !== null && _ref2 !== void 0 ? _ref2 : null
            };
          }
        }
      } catch (e) {
        console.error("Failed to load homework data", e);
      }
      return {
        assignments: [],
        activeId: null
      };
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    homeworkData = _useState18[0],
    setHomeworkData = _useState18[1];
  var _useState19 = useState({
      title: "",
      dueDate: "",
      description: ""
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    homeworkForm = _useState20[0],
    setHomeworkForm = _useState20[1];
  var _useState21 = useState(function () {
      try {
        var saved = localStorage.getItem('class_scrapbook_images');
        var images = saved ? JSON.parse(saved) : [];
        // 資料遷移：確保所有舊圖片都有 x, y, scale 座標
        return images.map(function (img) {
          var _img$x, _img$y, _img$scale;
          return _objectSpread(_objectSpread({}, img), {}, {
            x: (_img$x = img.x) !== null && _img$x !== void 0 ? _img$x : Math.random() * 100,
            // 預設隨機位置
            y: (_img$y = img.y) !== null && _img$y !== void 0 ? _img$y : Math.random() * 100,
            scale: (_img$scale = img.scale) !== null && _img$scale !== void 0 ? _img$scale : 1 // 預設比例 1
          });
        });
      } catch (e) {
        console.error("Failed to load images", e);
        return [];
      }
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    scrapbookImages = _useState22[0],
    setScrapbookImages = _useState22[1];
  // 固定使用預設注音字體連結
  var customFontUrl = DEFAULT_ZHUYIN_FONT_URL;

  // 拖曳與互動狀態
  var _useState23 = useState({
      mode: null,
      // 'move' | 'resize' | null
      id: null
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    interactionState = _useState24[0],
    setInteractionState = _useState24[1];
  var dragOffset = useRef({
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
    initialScale: 1
  });
  var scrapbookRef = useRef(null);

  // 確認視窗狀態
  var _useState25 = useState({
      show: false,
      title: "",
      message: "",
      action: null,
      type: "danger"
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    confirmConfig = _useState26[0],
    setConfirmConfig = _useState26[1];

  // 模式與視圖
  var _useState27 = useState('attendance'),
    _useState28 = _slicedToArray(_useState27, 2),
    checkInMode = _useState28[0],
    setCheckInMode = _useState28[1];
  var _useState29 = useState('split'),
    _useState30 = _slicedToArray(_useState29, 2),
    viewMode = _useState30[0],
    setViewMode = _useState30[1];

  // 持久化設定
  var _useState31 = useState(function () {
      return localStorage.getItem('class_note_writing_mode') || 'horizontal';
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    writingMode = _useState32[0],
    setWritingMode = _useState32[1];
  var _useState33 = useState(function () {
      return parseInt(localStorage.getItem('class_clock_style') || '0', 10);
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    clockStyleIndex = _useState34[0],
    setClockStyleIndex = _useState34[1];
  var _useState35 = useState(function () {
      return parseFloat(localStorage.getItem('class_split_ratio') || '50');
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    splitRatio = _useState36[0],
    setSplitRatio = _useState36[1];
  var _useState37 = useState(function () {
      return parseInt(localStorage.getItem('class_notebook_font_size') || '32', 10);
    }),
    _useState38 = _slicedToArray(_useState37, 2),
    notebookFontSize = _useState38[0],
    setNotebookFontSize = _useState38[1];
  var _useState39 = useState(function () {
      return localStorage.getItem('class_font_type') || 'sans';
    }),
    _useState40 = _slicedToArray(_useState39, 2),
    fontType = _useState40[0],
    setFontType = _useState40[1];

  // 聯絡簿資料
  var _useState41 = useState(function () {
      var saved = localStorage.getItem('class_notes_data');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
      var todayKey = new Date().toISOString().split('T')[0];
      return _defineProperty({}, todayKey, "\n\n\n\n\n");
    }),
    _useState42 = _slicedToArray(_useState41, 2),
    notesData = _useState42[0],
    setNotesData = _useState42[1];
  var _useState43 = useState(new Date()),
    _useState44 = _slicedToArray(_useState43, 2),
    notebookDate = _useState44[0],
    setNotebookDate = _useState44[1];
  var splitContainerRef = useRef(null);
  var fileInputRef = useRef(null);

  // ---------------------------------------------------------------------------
  // 字體與樣式系統
  // ---------------------------------------------------------------------------

  // 動態注入注音字體
  useEffect(function () {
    if (customFontUrl) {
      var styleId = 'custom-zhuyin-font-style';
      var styleTag = document.getElementById(styleId);
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        document.head.appendChild(styleTag);
      }
      styleTag.textContent = "\n                        @font-face {\n                            font-family: 'ZhuyinCustom';\n                            src: url('".concat(customFontUrl, "') format('truetype');\n                            font-display: swap;\n                        }\n                    ");
    }
  }, [customFontUrl]);
  var getFontFamily = function getFontFamily(type) {
    switch (type) {
      case 'zhuyin':
        return "'Noto Serif TC', serif";
      // 離線回退字體
      case 'kai':
        return "'標楷體', 'DFKai-SB', 'KaiTi', 'BiauKai', serif";
      case 'rounded':
        return "'Varela Round', 'M PLUS Rounded 1c', 'Microsoft JhengHei', '微軟正黑體', sans-serif";
      case 'sans':
      default:
        return "'Noto Sans TC', sans-serif";
    }
  };
  var currentFontFamily = getFontFamily(fontType);

  // 標準時鐘樣式
  var CLOCK_STYLES = [{
    id: 'simple',
    name: '簡約白',
    text: 'text-retro-ink'
  }, {
    id: 'orange',
    name: '活力橘',
    text: 'text-retro-red'
  }, {
    id: 'blue',
    name: '天空藍',
    text: 'text-retro-blue'
  }, {
    id: 'purple',
    name: '優雅紫',
    text: 'text-retro-wood'
  }, {
    id: 'dark',
    name: '科技黑',
    text: 'text-retro-green'
  }];
  var currentClockStyle = CLOCK_STYLES[clockStyleIndex % CLOCK_STYLES.length];

  // ---------------------------------------------------------------------------
  // 邏輯處理
  // ---------------------------------------------------------------------------

  useEffect(function () {
    var savedStudents = localStorage.getItem('class_students_v2');
    if (savedStudents) {
      try {
        var parsed = JSON.parse(savedStudents);
        if (Array.isArray(parsed)) {
          var uniqueStudents = Array.from(new Map(parsed.map(function (item) {
            return [item.id, item];
          })).values());
          uniqueStudents.sort(function (a, b) {
            return a.id - b.id;
          });
          setStudents(uniqueStudents);
        } else {
          setStudents([]);
        }
      } catch (e) {
        setStudents([]);
      }
    } else {
      setStudents([]);
    }
  }, []);
  useEffect(function () {
    localStorage.setItem('class_students_v2', JSON.stringify(students));
  }, [students]);
  useEffect(function () {
    localStorage.setItem('class_title', classNameTitle);
  }, [classNameTitle]);
  useEffect(function () {
    localStorage.setItem('class_notes_data', JSON.stringify(notesData));
  }, [notesData]);
  useEffect(function () {
    localStorage.setItem('class_note_writing_mode', writingMode);
  }, [writingMode]);
  useEffect(function () {
    localStorage.setItem('class_split_ratio', splitRatio);
  }, [splitRatio]);
  useEffect(function () {
    localStorage.setItem('class_notebook_font_size', notebookFontSize);
  }, [notebookFontSize]);
  useEffect(function () {
    localStorage.setItem('class_font_type', fontType);
  }, [fontType]);
  useEffect(function () {
    localStorage.setItem('class_clock_style', clockStyleIndex);
  }, [clockStyleIndex]);
  useEffect(function () {
    localStorage.setItem('class_homework_data', JSON.stringify(homeworkData));
  }, [homeworkData]);
  // 移除 font URL 的 local storage 寫入，因為已寫死

  // 剪貼簿存儲
  useEffect(function () {
    try {
      localStorage.setItem('class_scrapbook_images', JSON.stringify(scrapbookImages));
    } catch (e) {
      console.warn("Storage full, images not saved to disk.");
    }
  }, [scrapbookImages]);

  // 全局貼上監聽
  useEffect(function () {
    var handlePaste = function handlePaste(e) {
      if (leftPanelMode !== 'scrapbook') return;
      var items = e.clipboardData.items;
      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          var blob = items[i].getAsFile();
          processImageFile(blob);
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return function () {
      return window.removeEventListener('paste', handlePaste);
    };
  }, [leftPanelMode]);
  useEffect(function () {
    var timer = setInterval(function () {
      var now = new Date();
      setCurrentTime(now);
      checkLateStatus(now);
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, [lateThreshold]);
  var checkLateStatus = function checkLateStatus(now) {
    var _lateThreshold$split$ = lateThreshold.split(':').map(Number),
      _lateThreshold$split$2 = _slicedToArray(_lateThreshold$split$, 2),
      h = _lateThreshold$split$2[0],
      m = _lateThreshold$split$2[1];
    var thresholdDate = new Date(now);
    thresholdDate.setHours(h, m, 0, 0);
    var resetDate = new Date(now);
    resetDate.setHours(17, 0, 0, 0);
    var isLateAlertPeriod = now >= thresholdDate && now < resetDate;
    setStudents(function (prev) {
      return prev.map(function (s) {
        if (s.status === 'idle' && isLateAlertPeriod) return _objectSpread(_objectSpread({}, s), {}, {
          status: 'late_absent'
        });
        if (s.status === 'late_absent' && !isLateAlertPeriod) return _objectSpread(_objectSpread({}, s), {}, {
          status: 'idle'
        });
        return s;
      });
    });
  };
  var handleStudentClick = function handleStudentClick(id) {
    setStudents(function (prev) {
      return prev.map(function (s) {
        if (s.id !== id) return s;
        switch (checkInMode) {
          case 'attendance':
            {
              var now = new Date();
              var timeString = now.toTimeString().slice(0, 5);
              var _lateThreshold$split$3 = lateThreshold.split(':').map(Number),
                _lateThreshold$split$4 = _slicedToArray(_lateThreshold$split$3, 2),
                h = _lateThreshold$split$4[0],
                m = _lateThreshold$split$4[1];
              var thresholdDate = new Date(now);
              thresholdDate.setHours(h, m, 0, 0);
              var isLate = now >= thresholdDate;
              var resetDate = new Date(now);
              resetDate.setHours(17, 0, 0, 0);
              var isLateAlertPeriod = now >= thresholdDate && now < resetDate;
              if (s.status === 'present' || s.status === 'late_arrived') {
                return _objectSpread(_objectSpread({}, s), {}, {
                  status: isLateAlertPeriod ? 'late_absent' : 'idle',
                  arrivalTime: null
                });
              }
              return _objectSpread(_objectSpread({}, s), {}, {
                status: isLate ? 'late_arrived' : 'present',
                arrivalTime: timeString
              });
            }
          case 'brushing':
            return _objectSpread(_objectSpread({}, s), {}, {
              brushing: !s.brushing
            });
          case 'lunch':
            return _objectSpread(_objectSpread({}, s), {}, {
              lunch: !s.lunch
            });
          case 'duty':
            return _objectSpread(_objectSpread({}, s), {}, {
              isDuty: !s.isDuty
            });
          case 'correction':
            return _objectSpread(_objectSpread({}, s), {}, {
              correction: !s.correction
            });
          default:
            return s;
        }
      });
    });
  };
  var updateStudentData = function updateStudentData(originalId, field, value) {
    setStudents(function (prev) {
      var newList = prev.map(function (s) {
        if (s.id !== originalId) return s;
        if (field === 'name') return _objectSpread(_objectSpread({}, s), {}, {
          name: value
        });
        if (field === 'id') {
          var newId = parseInt(value, 10);
          if (!isNaN(newId) && newId > 0) return _objectSpread(_objectSpread({}, s), {}, {
            id: newId
          });
        }
        return s;
      });
      return newList.sort(function (a, b) {
        return a.id - b.id;
      });
    });
  };
  var homeworkAssignments = homeworkData.assignments || [];
  var currentHomework = homeworkAssignments.find(function (item) {
    return item.id === homeworkData.activeId;
  }) || homeworkAssignments[0] || null;
  var submittedCount = currentHomework ? students.filter(function (student) {
    var _currentHomework$subm;
    return (_currentHomework$subm = currentHomework.submissions) === null || _currentHomework$subm === void 0 ? void 0 : _currentHomework$subm[student.id];
  }).length : 0;
  var createHomeworkAssignment = function createHomeworkAssignment() {
    var title = homeworkForm.title.trim();
    if (!title) return;
    var id = Date.now();
    var nextItem = {
      id: id,
      title: title,
      dueDate: homeworkForm.dueDate,
      description: homeworkForm.description.trim(),
      submissions: {},
      createdAt: new Date().toISOString()
    };
    setHomeworkData(function (prev) {
      return {
        assignments: [nextItem].concat(_toConsumableArray(prev.assignments)),
        activeId: id
      };
    });
    setHomeworkForm({
      title: "",
      dueDate: "",
      description: ""
    });
  };
  var removeHomeworkAssignment = function removeHomeworkAssignment(id) {
    setHomeworkData(function (prev) {
      var _assignments$0$id, _assignments$;
      var assignments = prev.assignments.filter(function (item) {
        return item.id !== id;
      });
      var nextActiveId = prev.activeId === id ? (_assignments$0$id = (_assignments$ = assignments[0]) === null || _assignments$ === void 0 ? void 0 : _assignments$.id) !== null && _assignments$0$id !== void 0 ? _assignments$0$id : null : prev.activeId;
      return {
        assignments: assignments,
        activeId: nextActiveId
      };
    });
  };
  var toggleHomeworkSubmission = function toggleHomeworkSubmission(studentId) {
    if (!currentHomework) return;
    setHomeworkData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        assignments: prev.assignments.map(function (item) {
          if (item.id !== currentHomework.id) return item;
          var submissions = _objectSpread({}, item.submissions || {});
          submissions[studentId] = !submissions[studentId];
          return _objectSpread(_objectSpread({}, item), {}, {
            submissions: submissions
          });
        })
      });
    });
  };
  var clearHomeworkSubmissions = function clearHomeworkSubmissions() {
    if (!currentHomework) return;
    setHomeworkData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        assignments: prev.assignments.map(function (item) {
          return item.id === currentHomework.id ? _objectSpread(_objectSpread({}, item), {}, {
            submissions: {}
          }) : item;
        })
      });
    });
  };

  // ---------------------------------------------------------------------------
  // 剪貼簿邏輯
  // ---------------------------------------------------------------------------

  var processImageFile = function processImageFile(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var randomX = 20 + Math.random() * 200;
      var randomY = 20 + Math.random() * 200;
      var newImage = {
        id: Date.now(),
        src: e.target.result,
        rotation: Math.random() * 10 - 5,
        timestamp: new Date().toLocaleString(),
        x: randomX,
        y: randomY,
        scale: 1
      };
      setScrapbookImages(function (prev) {
        return [].concat(_toConsumableArray(prev), [newImage]);
      });
    };
    reader.readAsDataURL(file);
  };
  var handleImageUpload = function handleImageUpload(e) {
    var file = e.target.files[0];
    if (file) processImageFile(file);
    e.target.value = null; // 重置 input
  };
  var removeImage = function removeImage(id) {
    setScrapbookImages(function (prev) {
      return prev.filter(function (img) {
        return img.id !== id;
      });
    });
  };
  var updateImageScale = function updateImageScale(id, delta) {
    setScrapbookImages(function (prev) {
      return prev.map(function (img) {
        if (img.id === id) {
          var newScale = Math.max(0.5, Math.min(3.0, (img.scale || 1) + delta));
          return _objectSpread(_objectSpread({}, img), {}, {
            scale: newScale
          });
        }
        return img;
      });
    });
  };

  // 拖曳處理邏輯 (移動)
  var onMouseDownMove = function onMouseDownMove(e, id, currentX, currentY) {
    e.stopPropagation();
    if (leftPanelMode !== 'scrapbook') return;
    dragOffset.current = {
      x: e.clientX - currentX,
      y: e.clientY - currentY
    };
    setInteractionState({
      mode: 'move',
      id: id
    });
  };

  // 拖曳處理邏輯 (縮放)
  var onMouseDownResize = function onMouseDownResize(e, id, currentScale) {
    e.stopPropagation();
    e.preventDefault();
    if (leftPanelMode !== 'scrapbook') return;
    dragOffset.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialScale: currentScale
    };
    setInteractionState({
      mode: 'resize',
      id: id
    });
  };
  var onMouseMoveScrapbook = function onMouseMoveScrapbook(e) {
    if (!interactionState.mode) return;
    if (interactionState.mode === 'move') {
      // 計算新位置
      var newX = e.clientX - dragOffset.current.x;
      var newY = e.clientY - dragOffset.current.y;
      setScrapbookImages(function (prev) {
        return prev.map(function (img) {
          return img.id === interactionState.id ? _objectSpread(_objectSpread({}, img), {}, {
            x: newX,
            y: newY
          }) : img;
        });
      });
    } else if (interactionState.mode === 'resize') {
      // 計算新比例
      var deltaX = e.clientX - dragOffset.current.startX;
      var scaleChange = deltaX * 0.005; // 調整靈敏度
      var newScale = Math.max(0.5, Math.min(3.0, dragOffset.current.initialScale + scaleChange));
      setScrapbookImages(function (prev) {
        return prev.map(function (img) {
          return img.id === interactionState.id ? _objectSpread(_objectSpread({}, img), {}, {
            scale: newScale
          }) : img;
        });
      });
    }
  };
  var onMouseUpScrapbook = function onMouseUpScrapbook() {
    setInteractionState({
      mode: null,
      id: null
    });
  };
  var executeConfirmAction = function executeConfirmAction() {
    if (confirmConfig.action) {
      confirmConfig.action();
    }
    setConfirmConfig(_objectSpread(_objectSpread({}, confirmConfig), {}, {
      show: false
    }));
  };
  var cancelConfirmAction = function cancelConfirmAction() {
    setConfirmConfig(_objectSpread(_objectSpread({}, confirmConfig), {}, {
      show: false
    }));
  };
  var confirmRemoveStudent = function confirmRemoveStudent(e, id) {
    e.stopPropagation();
    setConfirmConfig({
      show: true,
      title: "移除學生",
      message: "\u78BA\u5B9A\u8981\u5C07\u5EA7\u865F ".concat(id, " \u5F9E\u540D\u518A\u4E2D\u79FB\u9664\u55CE\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u9006\u3002"),
      type: "danger",
      action: function action() {
        setStudents(function (prev) {
          return prev.filter(function (s) {
            return s.id !== id;
          });
        });
      }
    });
  };
  var confirmClearNote = function confirmClearNote() {
    setConfirmConfig({
      show: true,
      title: "黑板擦",
      message: "確定要擦掉所有板書嗎？",
      type: "warning",
      action: function action() {
        updateCurrentNote("\n\n\n\n\n");
      }
    });
  };
  var confirmResetMode = function confirmResetMode() {
    setConfirmConfig({
      show: true,
      title: "\u91CD\u7F6E".concat(getModeName(checkInMode)),
      message: "\u78BA\u5B9A\u8981\u91CD\u7F6E\u6240\u6709\u5B78\u751F\u7684\u300C".concat(getModeName(checkInMode), "\u300D\u7D00\u9304\u55CE\uFF1F"),
      type: "warning",
      action: function action() {
        setStudents(function (prev) {
          return prev.map(function (s) {
            switch (checkInMode) {
              case 'attendance':
                return _objectSpread(_objectSpread({}, s), {}, {
                  status: s.status === 'empty' ? 'empty' : 'idle',
                  arrivalTime: null
                });
              case 'brushing':
                return _objectSpread(_objectSpread({}, s), {}, {
                  brushing: false
                });
              case 'lunch':
                return _objectSpread(_objectSpread({}, s), {}, {
                  lunch: false
                });
              case 'duty':
                return _objectSpread(_objectSpread({}, s), {}, {
                  isDuty: false
                });
              case 'correction':
                return _objectSpread(_objectSpread({}, s), {}, {
                  correction: false
                });
              default:
                return s;
            }
          });
        });
      }
    });
  };
  var openBatchEdit = function openBatchEdit() {
    var textList = students.map(function (s) {
      return "".concat(s.id, " ").concat(s.name);
    }).join('\n');
    setBatchInput(textList);
    setShowBatchEdit(true);
  };
  var saveBatchEdit = function saveBatchEdit() {
    var lines = batchInput.split(/\r\n|\n|\r/).filter(function (line) {
      return line.trim() !== '';
    });
    var newStudents = [];
    var usedIds = new Set();
    lines.forEach(function (line) {
      var match = line.trim().match(/^(\d+)[\s,，.]+(.*)$/);
      var id, name;
      if (match) {
        id = parseInt(match[1], 10);
        name = match[2].trim();
      } else {
        return;
      }
      if (!isNaN(id) && id > 0 && name) {
        if (usedIds.has(id)) {
          var index = newStudents.findIndex(function (s) {
            return s.id === id;
          });
          if (index !== -1) newStudents[index].name = name;
        } else {
          newStudents.push({
            id: id,
            name: name,
            status: 'idle',
            arrivalTime: null,
            brushing: false,
            lunch: false,
            isDuty: false,
            correction: false
          });
          usedIds.add(id);
        }
      }
    });
    if (newStudents.length > 0) {
      newStudents.sort(function (a, b) {
        return a.id - b.id;
      });
      setStudents(function (prev) {
        var prevMap = new Map(prev.map(function (s) {
          return [s.id, s];
        }));
        return newStudents.map(function (newS) {
          var oldS = prevMap.get(newS.id);
          if (oldS) return _objectSpread(_objectSpread({}, oldS), {}, {
            name: newS.name
          });
          return newS;
        });
      });
      setShowBatchEdit(false);
    } else {
      alert("名冊格式錯誤。\n請使用：[座號] [姓名]\n例如：1 王小明");
    }
  };
  var addStudent = function addStudent() {
    setStudents(function (prev) {
      var maxId = prev.length > 0 ? Math.max.apply(Math, _toConsumableArray(prev.map(function (s) {
        return s.id;
      }))) : 0;
      return [].concat(_toConsumableArray(prev), [{
        id: maxId + 1,
        name: "",
        status: 'idle',
        arrivalTime: null,
        brushing: false,
        lunch: false,
        isDuty: false,
        correction: false
      }]).sort(function (a, b) {
        return a.id - b.id;
      });
    });
  };
  var getModeName = function getModeName(mode) {
    var map = {
      attendance: '出勤點名',
      brushing: '潔牙檢查',
      lunch: '午餐整潔',
      duty: '值日輪值',
      correction: '作業訂正'
    };
    return map[mode];
  };
  var handleExportCSV = function handleExportCSV() {
    var dateStr = currentTime.toLocaleDateString('zh-TW');
    var csvContent = "\uFEFF\u65E5\u671F,\u5EA7\u865F,\u59D3\u540D,\u6253\u5361\u72C0\u614B,\u5230\u6821\u6642\u9593,\u6F54\u7259,\u5348\u9910\u6574\u7406,\u503C\u65E5\u751F,\u4F5C\u696D\u8A02\u6B63\n";
    var statusMap = {
      'idle': '未到',
      'present': '準時',
      'late_absent': '遲到未到',
      'late_arrived': '遲到已到'
    };
    var sortedStudents = _toConsumableArray(students).sort(function (a, b) {
      return a.id - b.id;
    });
    sortedStudents.forEach(function (s) {
      csvContent += "".concat(dateStr, ",").concat(s.id, ",").concat(s.name, ",").concat(statusMap[s.status] || '未到', ",").concat(s.arrivalTime || '--', ",").concat(s.brushing ? 'V' : '', ",").concat(s.lunch ? 'V' : '', ",").concat(s.isDuty ? 'V' : '', ",").concat(s.correction ? 'V' : '', "\n");
    });
    var blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;'
    });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "\u73ED\u7D1A\u7D00\u9304_".concat(dateStr.replace(/\//g, '-'), ".csv");
    link.click();
  };
  var getNoteDateKey = function getNoteDateKey(date) {
    return "".concat(date.getFullYear(), "-").concat(String(date.getMonth() + 1).padStart(2, '0'), "-").concat(String(date.getDate()).padStart(2, '0'));
  };
  var currentNoteKey = getNoteDateKey(notebookDate);
  var currentNoteContent = notesData[currentNoteKey] || "";
  var updateCurrentNote = function updateCurrentNote(content) {
    return setNotesData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, currentNoteKey, content));
    });
  };
  var noteLines = currentNoteContent.split('\n');
  var toggleClockStyle = function toggleClockStyle() {
    return setClockStyleIndex(function (prev) {
      return (prev + 1) % CLOCK_STYLES.length;
    });
  };

  // 修正Grid邏輯：復古風格稍微寬一點
  var getGridColsClass = function getGridColsClass() {
    var n = students.length;
    if (n === 0) return "grid-cols-1";
    if (n <= 30) return "grid-cols-5";
    if (n <= 42) return "grid-cols-6";
    if (n <= 56) return "grid-cols-8";
    return "grid-cols-10";
  };
  var handleDragStart = function handleDragStart(e) {
    e.preventDefault();
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', _handleDragEnd);
  };
  var handleDragMove = function handleDragMove(e) {
    if (splitContainerRef.current) {
      var rect = splitContainerRef.current.getBoundingClientRect();
      var newRatio = Math.max(20, Math.min((e.clientX - rect.left) / rect.width * 100, 80));
      setSplitRatio(newRatio);
    }
  };
  var _handleDragEnd = function handleDragEnd() {
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', _handleDragEnd);
  };

  // 修正：處理直書時的數字(Tate-chu-yoko)與連字號旋轉
  var formatVerticalContent = function formatVerticalContent(text) {
    if (writingMode !== 'vertical') return text;

    // 分割：數字(Capture Group 1)
    var parts = text.split(/(\d+)/);
    return parts.map(function (part, index) {
      // 1. 數字：橫向壓縮 - 強制使用標準黑體以確保正常顯示
      if (/\d+/.test(part)) {
        return /*#__PURE__*/React.createElement("span", {
          key: "num-".concat(index),
          style: {
            textCombineUpright: 'all',
            WebkitTextCombine: 'horizontal',
            margin: '2px 0',
            fontFamily: '"Noto Sans TC", sans-serif' // 強制回退到標準字體
          }
        }, part);
      }
      // 2. 非數字：檢查是否有連字號 (-) 需要旋轉
      // 這裡檢查常見的連字號：半形減號(-)、全形減號(－)、En dash(–)、Em dash(—)
      if (/[-－–—]/.test(part)) {
        return part.split('').map(function (_char, cIdx) {
          if (['-', '－', '–', '—'].includes(_char)) {
            return /*#__PURE__*/React.createElement("span", {
              key: "dash-".concat(index, "-").concat(cIdx),
              style: {
                display: 'inline-block',
                transform: 'rotate(90deg)',
                verticalAlign: 'middle',
                // 微調位置，確保旋轉後在直行中央
                position: 'relative',
                left: '1px',
                fontFamily: '"Noto Sans TC", sans-serif' // 強制回退到標準字體
              }
            }, _char);
          }
          return _char;
        });
      }

      // 3. 其他文字直接回傳
      return part;
    });
  };

  // ---------------------------------------------------------------------------
  // 復古 UI 元件
  // ---------------------------------------------------------------------------

  return /*#__PURE__*/React.createElement("div", {
    className: "h-screen flex flex-col overflow-hidden relative selection:bg-retro-red selection:text-white font-serif",
    onMouseMove: onMouseMoveScrapbook,
    onMouseUp: onMouseUpScrapbook
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(44,44,44,0.15)] z-40"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-white border-b-2 border-retro-ink shadow-hard px-4 py-3 flex justify-between items-center z-20 shrink-0 mx-4 mt-4 mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 relative group min-w-[200px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[#f1c40f] opacity-20 rotate-[-1deg] transform scale-105 -z-10 skew-x-12"
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-1 border-2 border-retro-ink bg-white flex items-center justify-center shrink-0"
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-5 h-5 text-retro-ink",
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: classNameTitle,
    onChange: function onChange(e) {
      return setClassNameTitle(e.target.value);
    },
    placeholder: "\u8F38\u5165\u73ED\u7D1A...",
    className: "text-2xl font-black text-retro-ink bg-transparent outline-none w-full placeholder-gray-400 font-serif tracking-widest",
    style: {
      fontFamily: '"Noto Serif TC", serif'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex bg-white border-2 border-retro-ink rounded-sm shadow-sm overflow-hidden ml-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setLeftPanelMode('students');
    },
    className: "px-3 py-1 text-xs font-bold font-mono transition-colors flex items-center gap-1 ".concat(leftPanelMode === 'students' ? 'bg-retro-ink text-white' : 'text-retro-ink hover:bg-gray-100')
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-3 h-3"
  }), " \u540D\u518A"), /*#__PURE__*/React.createElement("div", {
    className: "w-[1px] bg-retro-ink"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setLeftPanelMode('scrapbook');
    },
    className: "px-3 py-1 text-xs font-bold font-mono transition-colors flex items-center gap-1 ".concat(leftPanelMode === 'scrapbook' ? 'bg-retro-ink text-white' : 'text-retro-ink hover:bg-gray-100')
  }, /*#__PURE__*/React.createElement(ImageIcon, {
    className: "w-3 h-3"
  }), " \u526A\u8CBC"), /*#__PURE__*/React.createElement("div", {
    className: "w-[1px] bg-retro-ink"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setLeftPanelMode('homework');
    },
    className: "px-3 py-1 text-xs font-bold font-mono transition-colors flex items-center gap-1 ".concat(leftPanelMode === 'homework' ? 'bg-retro-ink text-white' : 'text-retro-ink hover:bg-gray-100')
  }, /*#__PURE__*/React.createElement(ClipboardList, {
    className: "w-3 h-3"
  }), " \u4F5C\u696D\u7E73\u4EA4"))), leftPanelMode === 'students' && /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 overflow-x-auto no-scrollbar mx-4"
  }, /*#__PURE__*/React.createElement(ModeButton, {
    active: checkInMode === 'attendance',
    onClick: function onClick() {
      return setCheckInMode('attendance');
    },
    icon: /*#__PURE__*/React.createElement(Users, {
      className: "w-4 h-4"
    }),
    label: "\u9EDE\u540D\u7C3F",
    color: "border-retro-ink bg-retro-paper"
  }), /*#__PURE__*/React.createElement(ModeButton, {
    active: checkInMode === 'brushing',
    onClick: function onClick() {
      return setCheckInMode('brushing');
    },
    icon: /*#__PURE__*/React.createElement(Sparkles, {
      className: "w-4 h-4"
    }),
    label: "\u6F54\u7259\u5361",
    color: "border-retro-green bg-green-50"
  }), /*#__PURE__*/React.createElement(ModeButton, {
    active: checkInMode === 'lunch',
    onClick: function onClick() {
      return setCheckInMode('lunch');
    },
    icon: /*#__PURE__*/React.createElement(Utensils, {
      className: "w-4 h-4"
    }),
    label: "\u5348\u9910\u503C\u65E5",
    color: "border-retro-red bg-red-50"
  }), /*#__PURE__*/React.createElement(ModeButton, {
    active: checkInMode === 'duty',
    onClick: function onClick() {
      return setCheckInMode('duty');
    },
    icon: /*#__PURE__*/React.createElement(Award, {
      className: "w-4 h-4"
    }),
    label: "\u503C\u65E5\u751F",
    color: "border-retro-wood bg-purple-50"
  }), /*#__PURE__*/React.createElement(ModeButton, {
    active: checkInMode === 'correction',
    onClick: function onClick() {
      return setCheckInMode('correction');
    },
    icon: /*#__PURE__*/React.createElement(BookOpen, {
      className: "w-4 h-4"
    }),
    label: "\u8A02\u6B63\u6B04",
    color: "border-retro-blue bg-blue-50"
  })), leftPanelMode === 'scrapbook' && /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex justify-center items-center text-retro-ink/50 font-serif font-bold italic"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-white px-4 py-1 border-b-2 border-retro-ink/20"
  }, "SCRAPBOOK - \u652F\u6301\u8CBC\u4E0A(Ctrl+V)\u8207\u62D6\u62C9\u7E2E\u653E")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center bg-retro-ink p-1 gap-1 border-2 border-retro-ink hidden md:flex"
  }, ['split', 'checkin', 'notebook'].map(function (m) {
    return /*#__PURE__*/React.createElement("button", {
      key: m,
      onClick: function onClick() {
        return setViewMode(m);
      },
      className: "px-3 py-1 text-xs font-bold font-mono transition-all ".concat(viewMode === m ? 'bg-[#f1c40f] text-retro-ink border border-black shadow-[2px_2px_0_0_white]' : 'text-white hover:text-[#f1c40f]')
    }, m === 'split' ? '分屏' : m === 'checkin' ? '左屏' : '黑板');
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-0.5 h-8 bg-retro-ink/20 mx-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(ToolButton, {
    onClick: function onClick() {
      return setShowSettings(!showSettings);
    },
    icon: /*#__PURE__*/React.createElement(Settings, {
      className: "w-5 h-5"
    }),
    title: "\u8A2D\u5B9A"
  }), /*#__PURE__*/React.createElement(ToolButton, {
    onClick: handleExportCSV,
    icon: /*#__PURE__*/React.createElement(FileSpreadsheet, {
      className: "w-5 h-5"
    }),
    title: "\u532F\u51FA\u5831\u8868"
  }), /*#__PURE__*/React.createElement(ToolButton, {
    onClick: confirmResetMode,
    icon: /*#__PURE__*/React.createElement(RotateCcw, {
      className: "w-5 h-5"
    }),
    title: "\u91CD\u7F6E\u72C0\u614B",
    danger: true
  })))), /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-y-0 right-0 w-96 bg-retro-paper border-l-4 border-retro-ink transform transition-transform duration-300 z-50 flex flex-col shadow-[-10px_0_20px_rgba(0,0,0,0.1)] ".concat(showSettings ? 'translate-x-0' : 'translate-x-full')
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-5 border-b-2 border-retro-ink flex justify-between items-center bg-[#e0d0b0]"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-xl text-retro-ink flex items-center gap-2 font-serif"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-retro-ink text-white px-2 py-1 text-sm font-mono"
  }, "CONFIG"), "\u7CFB\u7D71\u8A2D\u5B9A"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowSettings(false);
    },
    className: "w-8 h-8 flex items-center justify-center border-2 border-retro-ink bg-white hover:bg-retro-red hover:text-white transition-colors"
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-6 space-y-8 retro-scrollbar bg-[#f7f1e3]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 border-2 border-retro-ink shadow-hard relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3 left-3 bg-retro-ink text-white px-2 text-xs font-mono"
  }, "TIME & FONT"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-bold text-retro-ink mb-1 font-serif"
  }, "\u9072\u5230\u754C\u7DDA"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    value: lateThreshold,
    onChange: function onChange(e) {
      return setLateThreshold(e.target.value);
    },
    className: "w-full px-2 py-2 bg-retro-bg border-b-2 border-retro-ink outline-none font-mono text-lg focus:bg-white transition-colors"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-bold text-retro-ink mb-1 font-serif"
  }, "\u9ED1\u677F\u5B57\u9AD4\u98A8\u683C"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, ['sans', 'kai', 'rounded', 'zhuyin'].map(function (ft) {
    return /*#__PURE__*/React.createElement("button", {
      key: ft,
      onClick: function onClick() {
        return setFontType(ft);
      },
      className: "py-1 text-xs font-bold border-2 transition-all ".concat(fontType === ft ? 'bg-retro-ink text-white border-retro-ink' : 'bg-white text-retro-ink border-retro-ink hover:bg-gray-100')
    }, ft === 'sans' ? '黑體' : ft === 'kai' ? '楷體' : ft === 'rounded' ? '圓體' : '注音體');
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 border-2 border-retro-ink shadow-hard relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3 left-3 bg-retro-red text-white px-2 text-xs font-mono"
  }, "STUDENTS"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end gap-2 mb-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: openBatchEdit,
    className: "text-xs bg-white text-retro-ink border-2 border-retro-ink px-2 py-1 hover:bg-retro-ink hover:text-white transition-colors font-bold shadow-hard-sm"
  }, "\u6279\u6B21\u8CBC\u4E0A"), /*#__PURE__*/React.createElement("button", {
    onClick: addStudent,
    className: "text-xs bg-retro-ink text-white border-2 border-retro-ink px-2 py-1 hover:bg-gray-800 transition-colors font-bold shadow-hard-sm flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-3 h-3"
  }), " \u65B0\u589E")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 max-h-[400px] overflow-y-auto retro-scrollbar pr-2"
  }, students.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center text-gray-400 py-6 text-sm border-2 border-dashed border-gray-300 font-serif"
  }, "\u540D\u518A\u7A7A\u767D") : students.map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "flex items-center gap-2 group"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: s.id,
      onChange: function onChange(e) {
        return updateStudentData(s.id, 'id', e.target.value);
      },
      className: "w-12 h-8 px-1 text-sm border-b-2 border-gray-300 text-center font-mono font-bold bg-transparent focus:border-retro-ink outline-none",
      title: "\u5EA7\u865F"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: s.name,
      onChange: function onChange(e) {
        return updateStudentData(s.id, 'name', e.target.value);
      },
      className: "flex-1 h-8 px-2 text-sm border-b-2 border-gray-300 focus:border-retro-ink outline-none bg-transparent font-serif",
      placeholder: "\u59D3\u540D"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        return confirmRemoveStudent(e, s.id);
      },
      className: "p-1.5 text-gray-400 hover:text-retro-red transition-colors",
      title: "\u79FB\u9664"
    }, /*#__PURE__*/React.createElement(Trash2, {
      className: "w-4 h-4"
    })));
  })))))), showBatchEdit && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-[60] bg-retro-ink/80 flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#f39c12] p-1 rounded-sm shadow-2xl w-full max-w-lg transform rotate-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-retro-paper border-2 border-retro-ink p-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border border-retro-ink border-dashed p-4 flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center border-b-2 border-retro-ink pb-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-black text-retro-ink font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(ClipboardList, {
    className: "w-5 h-5"
  }), " \u532F\u5165\u540D\u55AE"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowBatchEdit(false);
    }
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-6 h-6 hover:scale-110 transition-transform"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white border-2 border-retro-ink p-3 shadow-inner-hard"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-mono text-gray-500 mb-2"
  }, "FORMAT: ID [SPACE] NAME"), /*#__PURE__*/React.createElement("textarea", {
    value: batchInput,
    onChange: function onChange(e) {
      return setBatchInput(e.target.value);
    },
    className: "w-full h-64 outline-none font-mono text-sm resize-none leading-relaxed bg-transparent",
    placeholder: "1 \u738B\u5C0F\u660E\n2 \u9673\u5927\u6587"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowBatchEdit(false);
    },
    className: "px-4 py-2 border-2 border-retro-ink text-retro-ink font-bold hover:bg-gray-100 shadow-hard-sm"
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: saveBatchEdit,
    className: "px-4 py-2 bg-retro-ink text-white border-2 border-retro-ink font-bold hover:bg-black shadow-hard-sm flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Save, {
    className: "w-4 h-4"
  }), " \u5BEB\u5165")))))), confirmConfig.show && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-[70] bg-retro-ink/50 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#fff176] border-4 border-retro-ink p-6 w-full max-w-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-retro-ink text-[#fff176] px-3 py-1 font-black font-mono tracking-widest border-2 border-white"
  }, "WARNING"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center text-center gap-4 mt-2"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "w-12 h-12 ".concat(confirmConfig.type === 'danger' ? 'text-retro-red' : 'text-orange-500'),
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-black font-serif text-retro-ink"
  }, confirmConfig.title), /*#__PURE__*/React.createElement("p", {
    className: "text-retro-ink font-medium leading-relaxed font-serif"
  }, confirmConfig.message)), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex justify-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: cancelConfirmAction,
    className: "px-6 py-2 border-2 border-retro-ink font-bold hover:bg-white transition-colors"
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: executeConfirmAction,
    className: "px-6 py-2 border-2 border-retro-ink text-white font-bold shadow-hard-sm active:translate-y-1 active:shadow-none transition-all ".concat(confirmConfig.type === 'danger' ? 'bg-retro-red' : 'bg-orange-500')
  }, "\u78BA\u8A8D\u57F7\u884C")))), /*#__PURE__*/React.createElement("div", {
    ref: splitContainerRef,
    className: "flex-1 flex flex-col lg:flex-row overflow-hidden p-4 gap-4 z-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col bg-[#8d6e63] border-4 border-[#5d4037] shadow-2xl relative transition-all duration-300 ".concat(viewMode === 'notebook' ? 'hidden' : ''),
    style: viewMode === 'split' && typeof window !== 'undefined' && window.innerWidth >= 1024 ? {
      width: "calc(".concat(splitRatio, "% - 1rem)"),
      flex: 'none'
    } : {
      flex: 1
    },
    ref: scrapbookRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[#b08968] opacity-35 pointer-events-none"
  }), leftPanelMode === 'students' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex-none flex flex-col items-center justify-center py-6 border-b-4 border-[#5d4037] shadow-lg bg-[#fcfbf9] relative z-10 cursor-pointer group",
    onClick: toggleClockStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-black text-6xl tracking-tighter ".concat(currentClockStyle.text),
    style: {
      textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
    }
  }, currentTime.toLocaleTimeString('zh-TW', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold text-gray-400 font-mono animate-pulse"
  }, currentTime.getSeconds())), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-4 mt-2 w-full px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-sm font-bold text-retro-ink border border-retro-ink px-3 py-1 bg-white shadow-sm rotate-1"
  }, /*#__PURE__*/React.createElement(Clock, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-mono"
  }, "\u9072\u5230\u7DDA: ", lateThreshold)), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-black px-4 py-1 border-2 border-retro-ink shadow-hard-sm -rotate-1 ".concat(checkInMode === 'attendance' ? 'bg-retro-paper text-retro-ink' : checkInMode === 'brushing' ? 'bg-green-100 text-retro-green' : checkInMode === 'lunch' ? 'bg-orange-100 text-retro-red' : checkInMode === 'correction' ? 'bg-blue-100 text-retro-blue' : 'bg-purple-100 text-purple-700')
  }, getModeName(checkInMode)))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 p-4 overflow-hidden z-10 h-full relative"
  }, students.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center h-full text-[#5d4037]/50 gap-4",
    onClick: function onClick() {
      return setShowSettings(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-4 border-dashed border-[#5d4037]/30 p-8 rounded-full"
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-16 h-16"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-bold font-serif"
  }, "\u5C1A\u672A\u5EFA\u7ACB\u540D\u518A")) : /*#__PURE__*/React.createElement("div", {
    className: "grid ".concat(getGridColsClass(), " gap-3 h-full"),
    style: {
      fontFamily: currentFontFamily,
      gridAutoRows: 'minmax(0, 1fr)'
    }
  }, students.map(function (student) {
    return /*#__PURE__*/React.createElement(StudentCard, {
      key: student.id,
      student: student,
      mode: checkInMode,
      fontFamily: currentFontFamily,
      onClick: function onClick() {
        return handleStudentClick(student.id);
      }
    });
  })))), leftPanelMode === 'scrapbook' && /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col relative z-10 h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center px-4 py-2 border-b-4 border-[#5d4037] bg-[#fcfbf9]/80 backdrop-blur-sm shadow-md z-30"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-retro-ink flex items-center gap-2 font-serif"
  }, /*#__PURE__*/React.createElement(Paperclip, {
    className: "w-4 h-4"
  }), " \u73ED\u7D1A\u526A\u8CBC\u7C3F"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    ref: fileInputRef,
    onChange: handleImageUpload,
    accept: "image/*",
    className: "hidden"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return fileInputRef.current.click();
    },
    className: "flex items-center gap-1 bg-white border-2 border-retro-ink px-2 py-1 text-xs font-bold shadow-hard-sm hover:translate-y-1 hover:shadow-none transition-all"
  }, /*#__PURE__*/React.createElement(Upload, {
    className: "w-3 h-3"
  }), " \u4E0A\u50B3\u7167\u7247"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setScrapbookImages([]);
    },
    className: "flex items-center gap-1 bg-retro-red text-white border-2 border-retro-ink px-2 py-1 text-xs font-bold shadow-hard-sm hover:translate-y-1 hover:shadow-none transition-all"
  }, /*#__PURE__*/React.createElement(Trash2, {
    className: "w-3 h-3"
  }), " \u6E05\u7A7A"))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 relative overflow-hidden"
  }, scrapbookImages.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex flex-col items-center justify-center text-[#5d4037]/40 gap-4 pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-24 border-4 border-dashed border-[#5d4037]/30 flex items-center justify-center rounded-lg rotate-3"
  }, /*#__PURE__*/React.createElement(ImageIcon, {
    className: "w-10 h-10"
  })), /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-lg font-bold"
  }, "\u9019\u88E1\u7A7A\u7A7A\u7684..."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-mono"
  }, "\u6309 Ctrl+V \u8CBC\u4E0A\u5716\u7247\u6216\u9EDE\u64CA\u4E0A\u50B3")) : scrapbookImages.map(function (img) {
    return /*#__PURE__*/React.createElement("div", {
      key: img.id,
      className: "polaroid absolute group cursor-move",
      style: {
        left: img.x,
        top: img.y,
        width: "".concat(200 * (img.scale || 1), "px"),
        // 應用縮放比例
        transform: "rotate(".concat(img.rotation, "deg)"),
        zIndex: interactionState.id === img.id ? 100 : 10
      },
      onMouseDown: function onMouseDown(e) {
        return onMouseDownMove(e, img.id, img.x, img.y);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img.src,
      alt: "scrapbook",
      className: "w-full h-auto grayscale-[20%] contrast-125 sepia-[30%] pointer-events-none select-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-2 text-center font-mono text-[10px] text-gray-400 truncate select-none"
    }, img.timestamp), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        removeImage(img.id);
      },
      className: "absolute -top-2 -right-2 bg-retro-red text-white w-6 h-6 rounded-full border-2 border-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-50 cursor-pointer"
    }, /*#__PURE__*/React.createElement(X, {
      className: "w-3 h-3"
    })), /*#__PURE__*/React.createElement("div", {
      className: "absolute -top-8 right-8 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-50"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        updateImageScale(img.id, 0.1);
      },
      className: "bg-white border-2 border-retro-ink w-6 h-6 flex items-center justify-center shadow-sm hover:bg-gray-100",
      title: "\u653E\u5927"
    }, /*#__PURE__*/React.createElement(Plus, {
      className: "w-3 h-3"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        updateImageScale(img.id, -0.1);
      },
      className: "bg-white border-2 border-retro-ink w-6 h-6 flex items-center justify-center shadow-sm hover:bg-gray-100",
      title: "\u7E2E\u5C0F"
    }, /*#__PURE__*/React.createElement(Minus, {
      className: "w-3 h-3"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "absolute bottom-0 right-0 w-6 h-6 cursor-nwse-resize z-50 opacity-0 group-hover:opacity-100",
      onMouseDown: function onMouseDown(e) {
        return onMouseDownResize(e, img.id, img.scale || 1);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute bottom-1 right-1 w-0 h-0 border-b-[8px] border-r-[8px] border-l-[8px] border-l-transparent border-t-transparent border-b-retro-red border-r-retro-red rotate-0"
    })), /*#__PURE__*/React.createElement("div", {
      className: "absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-12 bg-[#f1c40f]/50 rotate-45 backdrop-blur-sm shadow-sm pointer-events-none"
    }), " ");
  }))), leftPanelMode === 'homework' && /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col relative z-10 h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center px-4 py-2 border-b-4 border-[#5d4037] bg-[#fcfbf9]/80 backdrop-blur-sm shadow-md z-30"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-retro-ink flex items-center gap-2 font-serif"
  }, /*#__PURE__*/React.createElement(ClipboardList, {
    className: "w-4 h-4"
  }), " \u4F5C\u696D\u7E73\u4EA4"), /*#__PURE__*/React.createElement("button", {
    onClick: clearHomeworkSubmissions,
    className: "flex items-center gap-1 bg-white border-2 border-retro-ink px-2 py-1 text-xs font-bold shadow-hard-sm hover:translate-y-1 hover:shadow-none transition-all",
    disabled: !currentHomework
  }, /*#__PURE__*/React.createElement(Check, {
    className: "w-3 h-3"
  }), " \u6E05\u7A7A\u52FE\u9078")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-4 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white border-2 border-retro-ink shadow-hard p-4 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-black text-retro-ink flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(ClipboardList, {
    className: "w-4 h-4"
  }), " \u65B0\u589E\u4F5C\u696D"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: homeworkForm.title,
    onChange: function onChange(e) {
      return setHomeworkForm(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          title: e.target.value
        });
      });
    },
    placeholder: "\u4F5C\u696D\u540D\u7A31",
    className: "w-full px-3 py-2 border-2 border-retro-ink bg-retro-paper outline-none font-bold"
  }), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: homeworkForm.dueDate,
    onChange: function onChange(e) {
      return setHomeworkForm(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          dueDate: e.target.value
        });
      });
    },
    className: "w-full px-3 py-2 border-2 border-retro-ink bg-retro-paper outline-none font-mono"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: homeworkForm.description,
    onChange: function onChange(e) {
      return setHomeworkForm(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          description: e.target.value
        });
      });
    },
    placeholder: "\u4F5C\u696D\u8AAA\u660E",
    className: "w-full min-h-24 px-3 py-2 border-2 border-retro-ink bg-retro-paper outline-none resize-none font-serif"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: createHomeworkAssignment,
    className: "w-full py-2 bg-retro-ink text-white border-2 border-retro-ink font-bold shadow-hard-sm hover:bg-black transition-colors"
  }, "\u65B0\u589E\u4F5C\u696D")), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#fcfbf9] border-2 border-retro-ink shadow-hard p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-black text-retro-ink mb-3 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(BookOpen, {
    className: "w-4 h-4"
  }), " \u4F5C\u696D\u5217\u8868"), homeworkAssignments.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center text-gray-400 py-6 text-sm border-2 border-dashed border-gray-300 font-serif"
  }, "\u5C1A\u672A\u5EFA\u7ACB\u4F5C\u696D") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, homeworkAssignments.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      role: "button",
      tabIndex: 0,
      onClick: function onClick() {
        return setHomeworkData(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            activeId: item.id
          });
        });
      },
      onKeyDown: function onKeyDown(e) {
        if (e.key === 'Enter' || e.key === ' ') setHomeworkData(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            activeId: item.id
          });
        });
      },
      className: "w-full text-left p-3 border-2 transition-all cursor-pointer ".concat((currentHomework === null || currentHomework === void 0 ? void 0 : currentHomework.id) === item.id ? 'border-retro-ink bg-yellow-50 shadow-hard-sm' : 'border-gray-300 bg-white hover:border-retro-ink')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between gap-2"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-retro-ink"
    }, item.title), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-500 font-mono"
    }, item.dueDate ? "\u622A\u6B62 ".concat(item.dueDate) : '未設定截止日')), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        removeHomeworkAssignment(item.id);
      },
      className: "text-retro-red hover:scale-110 transition-transform",
      title: "\u522A\u9664"
    }, /*#__PURE__*/React.createElement(Trash2, {
      className: "w-4 h-4"
    }))), item.description ? /*#__PURE__*/React.createElement("div", {
      className: "mt-2 text-sm text-gray-700 line-clamp-2"
    }, item.description) : null);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white border-2 border-retro-ink shadow-hard p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2 mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-black text-retro-ink flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-4 h-4"
  }), " \u7E73\u4EA4\u72C0\u614B"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono text-gray-500"
  }, currentHomework ? "".concat(submittedCount, "/").concat(students.length) : '0/0')), currentHomework ? students.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center text-gray-400 py-6 text-sm border-2 border-dashed border-gray-300 font-serif"
  }, "\u5148\u5EFA\u7ACB\u540D\u518A\u518D\u52FE\u9078") : /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 max-h-[320px] overflow-y-auto retro-scrollbar pr-1"
  }, students.map(function (student) {
    var _currentHomework$subm2;
    var done = !!((_currentHomework$subm2 = currentHomework.submissions) !== null && _currentHomework$subm2 !== void 0 && _currentHomework$subm2[student.id]);
    return /*#__PURE__*/React.createElement("button", {
      key: student.id,
      onClick: function onClick() {
        return toggleHomeworkSubmission(student.id);
      },
      className: "text-left p-2 border-2 transition-all ".concat(done ? 'bg-green-50 border-retro-green text-retro-green' : 'bg-white border-gray-300 hover:border-retro-ink text-retro-ink')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-bold truncate"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-xs opacity-60 mr-1"
    }, student.id), student.name || '未命名'), /*#__PURE__*/React.createElement("div", {
      className: "w-5 h-5 border-2 flex items-center justify-center ".concat(done ? 'bg-retro-green border-retro-green text-white' : 'border-gray-300')
    }, done ? /*#__PURE__*/React.createElement(Check, {
      className: "w-3 h-3"
    }) : null)));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "text-center text-gray-400 py-6 text-sm border-2 border-dashed border-gray-300 font-serif"
  }, "\u5148\u65B0\u589E\u4E00\u4EFD\u4F5C\u696D"))))), viewMode === 'split' && /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex w-4 cursor-col-resize items-center justify-center z-30 -ml-2 -mr-2 group",
    onMouseDown: handleDragStart
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-1.5 h-16 bg-[#5d4037] border border-[#3e2723] rounded-full group-hover:bg-[#8d6e63] transition-colors shadow-lg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col relative rounded-sm shadow-2xl overflow-hidden transition-all duration-300 ".concat(viewMode === 'checkin' ? 'hidden' : ''),
    style: viewMode === 'split' && typeof window !== 'undefined' && window.innerWidth >= 1024 ? {
      width: "calc(".concat(100 - splitRatio, "% - 1rem)"),
      flex: 'none'
    } : {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 border-[16px] border-[#3e2723] pointer-events-none z-20 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[#263238] z-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-white/5 opacity-30"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex justify-between items-center p-6 text-gray-200 mt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-red-600/20 p-2 rounded-full border border-red-500/50"
  }, /*#__PURE__*/React.createElement(Star, {
    className: "w-6 h-6 text-red-400 fill-red-400/50 animate-pulse"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-black font-serif tracking-widest text-[#eceff1] opacity-90",
    style: {
      textShadow: '1px 1px 2px black'
    }
  }, "\u806F\u7D61\u4E8B\u9805")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 font-mono text-lg text-[#eceff1]"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNotebookDate(function (d) {
        var n = new Date(d);
        n.setDate(n.getDate() - 1);
        return n;
      });
    },
    className: "hover:text-white hover:scale-125 transition-transform"
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)), /*#__PURE__*/React.createElement("span", {
    className: "border-b-2 border-white/20 px-2"
  }, getNoteDateKey(notebookDate)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNotebookDate(function (d) {
        var n = new Date(d);
        n.setDate(n.getDate() + 1);
        return n;
      });
    },
    className: "hover:text-white hover:scale-125 transition-transform"
  }, /*#__PURE__*/React.createElement(ChevronRight, null)))), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex justify-end gap-3 px-6 pb-2 mr-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center bg-white/10 rounded-sm border border-white/20"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNotebookFontSize(function (p) {
        return Math.max(16, p - 2);
      });
    },
    className: "p-1.5 hover:bg-white/10 text-white"
  }, /*#__PURE__*/React.createElement(Minus, {
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono w-8 text-center text-white/80"
  }, notebookFontSize), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setNotebookFontSize(function (p) {
        return Math.min(72, p + 2);
      });
    },
    className: "p-1.5 hover:bg-white/10 text-white"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setWritingMode(function (prev) {
        return prev === 'horizontal' ? 'vertical' : 'horizontal';
      });
    },
    className: "p-1.5 text-white/80 hover:text-white border border-white/20 bg-white/5"
  }, writingMode === 'horizontal' ? /*#__PURE__*/React.createElement(AlignVerticalJustifyStart, {
    className: "w-4 h-4"
  }) : /*#__PURE__*/React.createElement(AlignHorizontalJustifyStart, {
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: confirmClearNote,
    className: "p-1.5 text-rose-300 hover:text-rose-100 border border-rose-500/30 bg-rose-500/10"
  }, /*#__PURE__*/React.createElement(Eraser, {
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setIsEditingNote(!isEditingNote);
    },
    className: "p-1.5 border transition-all ".concat(isEditingNote ? 'bg-green-600/50 border-green-400 text-green-100' : 'bg-white/5 border-white/20 text-white/80')
  }, isEditingNote ? /*#__PURE__*/React.createElement(Check, {
    className: "w-4 h-4"
  }) : /*#__PURE__*/React.createElement(Edit3, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 p-8 relative overflow-hidden z-10 mb-8 mx-4"
  }, isEditingNote ? /*#__PURE__*/React.createElement("textarea", {
    value: currentNoteContent,
    onChange: function onChange(e) {
      return updateCurrentNote(e.target.value);
    },
    className: "w-full h-full bg-transparent text-white/90 font-serif outline-none resize-none p-4 leading-relaxed tracking-wider border border-white/10 ".concat(writingMode === 'vertical' ? 'writing-vertical' : ''),
    style: {
      fontFamily: currentFontFamily,
      fontSize: fontType === 'zhuyin' ? "".concat(notebookFontSize * 1.5, "px") : "".concat(notebookFontSize, "px")
    },
    placeholder: "\u4ECA\u65E5\u4E8B\u9805..."
  }) : /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full content-start gap-x-12 gap-y-4 ".concat(writingMode === 'vertical' ? 'flex flex-col flex-wrap writing-vertical items-start content-start' : 'flex flex-col'),
    style: {
      fontFamily: currentFontFamily,
      fontSize: "".concat(notebookFontSize, "px")
    }
  }, noteLines.map(function (line, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "flex ".concat(writingMode === 'vertical' ? 'flex-row items-center gap-2 py-2 min-h-[1em]' : 'flex-row items-baseline gap-3 my-1', " text-white/95 font-medium"),
      style: {
        textShadow: '1px 1px 0px rgba(0,0,0,0.5)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[#f1c40f] font-black font-mono select-none opacity-80 ".concat(writingMode === 'vertical' ? 'mb-2' : ''),
      style: writingMode === 'vertical' ? {
        writingMode: 'horizontal-tb'
      } : {}
    }, idx + 1, "."), /*#__PURE__*/React.createElement("span", {
      className: "whitespace-pre-wrap leading-relaxed tracking-wide ".concat(writingMode === 'vertical' ? 'rotate-0' : ''),
      style: {
        fontSize: fontType === 'zhuyin' ? '1.5em' : '1em',
        lineHeight: fontType === 'zhuyin' ? '1.2' : 'relaxed'
      }
    }, formatVerticalContent(line)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-4 left-0 right-0 h-4 bg-transparent z-20 px-12 flex items-end gap-8 opacity-80 pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-2 bg-white rounded-full shadow-sm transform rotate-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-2 bg-red-300 rounded-full shadow-sm transform -rotate-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-4 bg-[#5d4037] ml-auto rounded-sm border-t border-[#8d6e63]"
  }), " "))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#5d4037] py-1 text-center text-[10px] text-[#d7ccc8] font-mono shrink-0 border-t border-[#3e2723] z-50 relative"
  }, "Classroom routines Created with Google Apps Script & Tailwind CSS \u8CC7\u6599\u53EA\u5B58\u5728\u60A8\u7684\u700F\u89BD\u5668\u4E2D\uFF0C\u4E0D\u6703\u4E0A\u50B3\u5230\u96F2\u7AEF\u3002"));
};

// 元件：模式切換按鈕
var ModeButton = function ModeButton(_ref4) {
  var active = _ref4.active,
    onClick = _ref4.onClick,
    icon = _ref4.icon,
    label = _ref4.label,
    color = _ref4.color;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: "flex items-center gap-2 px-3 py-1.5 border-2 transition-all shrink-0 font-serif relative overflow-hidden group ".concat(active ? "".concat(color, " shadow-hard-sm -translate-y-1") : 'bg-white border-gray-300 text-gray-400 hover:border-retro-ink hover:text-retro-ink')
  }, active && /*#__PURE__*/React.createElement("div", {
    className: "absolute -right-2 -top-2 w-6 h-6 bg-white rotate-45 border border-retro-ink"
  }), icon, /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold tracking-wider"
  }, label));
};

// 元件：工具列按鈕
var ToolButton = function ToolButton(_ref5) {
  var onClick = _ref5.onClick,
    icon = _ref5.icon,
    title = _ref5.title,
    danger = _ref5.danger;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: "p-2 border-2 shadow-hard-sm transition-transform active:translate-y-[2px] active:shadow-none bg-white ".concat(danger ? 'text-retro-red border-retro-red hover:bg-red-50' : 'text-retro-ink border-retro-ink hover:bg-yellow-50'),
    title: title
  }, icon);
};

// 元件：學生卡片
var StudentCard = function StudentCard(_ref6) {
  var student = _ref6.student,
    onClick = _ref6.onClick,
    fontFamily = _ref6.fontFamily,
    mode = _ref6.mode;
  var bgStyle = "bg-[#fffbf0]",
    borderStyle = "border-gray-300",
    textStyle = "text-gray-700",
    stamp = null;
  if (mode === 'attendance') {
    switch (student.status) {
      case 'idle':
        bgStyle = "bg-[#fffbf0]";
        borderStyle = "border-gray-300 group-hover:border-retro-ink";
        textStyle = "text-retro-ink";
        break;
      case 'present':
        bgStyle = "bg-[#fffbf0]";
        borderStyle = "border-retro-blue";
        textStyle = "text-retro-blue";
        stamp = /*#__PURE__*/React.createElement("div", {
          className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-4 border-retro-blue rounded-full opacity-30 animate-stamp flex items-center justify-center"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-[10px] font-black -rotate-12 bg-white px-1"
        }, student.arrivalTime));
        break;
      case 'late_absent':
        bgStyle = "bg-red-50";
        borderStyle = "border-retro-red border-dashed";
        textStyle = "text-retro-red";
        stamp = /*#__PURE__*/React.createElement("div", {
          className: "absolute top-1 right-1 text-retro-red opacity-80 animate-bounce"
        }, /*#__PURE__*/React.createElement(AlertCircle, {
          size: 16
        }));
        break;
      case 'late_arrived':
        bgStyle = "bg-orange-50";
        borderStyle = "border-retro-red";
        textStyle = "text-retro-ink";
        stamp = /*#__PURE__*/React.createElement("div", {
          className: "absolute top-1 right-1 border-2 border-retro-red px-1 py-0.5 text-[10px] font-black text-retro-red rotate-12 animate-stamp"
        }, "LATE ", student.arrivalTime);
        break;
    }
  } else if (mode === 'brushing' && student.brushing) {
    bgStyle = "bg-green-50";
    borderStyle = "border-retro-green";
    textStyle = "text-retro-green";
    stamp = /*#__PURE__*/React.createElement("div", {
      className: "absolute bottom-1 right-1 text-retro-green opacity-50"
    }, /*#__PURE__*/React.createElement(Sparkles, {
      size: 24
    }));
  } else if (mode === 'lunch' && student.lunch) {
    bgStyle = "bg-orange-50";
    borderStyle = "border-orange-400";
    textStyle = "text-orange-600";
    stamp = /*#__PURE__*/React.createElement("div", {
      className: "absolute bottom-1 right-1 text-orange-400 opacity-50 rotate-12"
    }, /*#__PURE__*/React.createElement(Utensils, {
      size: 24
    }));
  } else if (mode === 'duty' && student.isDuty) {
    bgStyle = "bg-purple-50";
    borderStyle = "border-purple-400 double-4";
    textStyle = "text-purple-700";
    stamp = /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-2 bg-purple-600 text-white text-[10px] px-1 shadow-sm"
    }, "\u503C\u65E5");
  } else if (mode === 'correction' && student.correction) {
    bgStyle = "bg-blue-50";
    borderStyle = "border-retro-blue";
    textStyle = "text-retro-blue";
    stamp = /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 border-2 border-retro-blue rounded-full scale-75 opacity-20"
    });
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      containerType: 'size'
    },
    className: "relative w-full h-full min-h-0 flex flex-col items-center justify-center transition-all duration-100 cursor-pointer select-none border-2 p-1 overflow-hidden group shadow-sm active:scale-95 active:shadow-inner ".concat(bgStyle, " ").concat(borderStyle, " ").concat(textStyle)
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/2 left-1 w-2 h-2 bg-retro-bg rounded-full shadow-inner opacity-40"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/2 right-1 w-2 h-2 bg-retro-bg rounded-full shadow-inner opacity-40"
  }), stamp, /*#__PURE__*/React.createElement("span", {
    className: "font-bold leading-tight w-full text-center whitespace-nowrap z-10 font-serif",
    style: {
      fontFamily: fontFamily,
      fontSize: 'clamp(1rem, min(18cqw, 35cqh), 4rem)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mr-[0.3em] font-mono text-[0.7em] align-middle opacity-50"
  }, student.id), student.name), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-2 w-3/4 h-[1px] bg-current opacity-10"
  }));
};
var root = createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));