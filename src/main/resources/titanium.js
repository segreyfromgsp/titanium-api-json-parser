Callback = function(){};

AcceptDict = {
 error : new Callback(),
 timeout : 0

};
AcceptedCallbackArgs = {
 inbound : new Ti.Network.Socket.TCP(),
 socket : new Ti.Network.Socket.TCP()

};
BarItemType = {
 enabled : false,
 image : null /* Ti.Blob, String, Ti.Filesystem.File */ ,
 title : '',
 width : 0

};
CameraMediaItemType = {
 cropRect : new CropRectType(),
 media : new Ti.Blob(),
 mediaType : ''

};
CameraOptionsType = {
 allowEditing : false,
 animated : false,
 autohide : false,
 cancel : new Callback(),
 error : new Callback(),
 mediaTypes : [],
 overlay : new Ti.UI.View(),
 saveToPhotoGallery : false,
 showControls : false,
 success : new Callback(),
 transform : new Ti.UI_(),
 videoMaximumDuration : 0,
 videoQuality : 0

};
ConnectedCallbackArgs = {
 socket : new Ti.Network.Socket.TCP()

};
CoverFlowImageType = {
 height : 0,
 image : null /* Ti.Blob, String, Ti.Filesystem.File */ ,
 width : 0

};
CreateBufferArgs = {
 byteOrder : 0,
 length : 0,
 type : '',
 value : null /* Number, String */ 

};
CreateStreamArgs = {
 mode : 0,
 source : null /* Ti.Buffer, Ti.Blob */ 

};
CropRectType = {
 height : 0,
 width : 0,
 x : 0,
 y : 0

};
DecodeNumberDict = {
 byteOrder : 0,
 position : 0,
 source : new Ti.Buffer(),
 type : ''

};
DecodeStringDict = {
 charset : '',
 length : 0,
 position : 0,
 source : new Ti.Buffer()

};
EncodeNumberDict = {
 byteOrder : 0,
 dest : new Ti.Buffer(),
 position : 0,
 source : 0,
 type : ''

};
EncodeStringDict = {
 charset : '',
 dest : new Ti.Buffer(),
 destPosition : 0,
 source : '',
 sourceLength : 0,
 sourcePosition : 0

};
ErrorCallbackArgs = {
 error : '',
 errorCode : 0,
 socket : new Ti.Network.Socket.TCP()

};
Font = {
 fontFamily : '',
 fontSize : null /* String, Number */ ,
 fontStyle : '',
 fontWeight : ''

};
Global = {
 String : {
  format : function(formatString, value) {
   return '';
  },
  formatCurrency : function(value) {
   return '';
  },
  formatDate : function(date, format) {
   return '';
  },
  formatDecimal : function(value) {
   return '';
  },
  formatTime : function(date) {
   return '';
  }

 },
 L : function(key, hint) {
  return '';
 },
 alert : function(message) {},
 clearInterval : function(timerId) {},
 clearTimeout : function(timerId) {},
 decodeURIComponent : function(encodedURI) {
  return '';
 },
 encodeURIComponent : function(string) {
  return '';
 },
 require : function(moduleId) {
  return {};
 },
 setInterval : function(func, delay) {
  return 0;
 },
 setTimeout : function(func, delay) {
  return 0;
 }

};
Gradient = {
 backfillEnd : false,
 backfillStart : false,
 colors : [],
 endPoint : new Point(),
 endRadius : 0,
 startPoint : new Point(),
 startRadius : 0,
 type : ''

};
GradientColorRef = {
 color : '',
 offset : 0

};
ImageAsCroppedDict = {
 height : 0,
 width : 0,
 x : 0,
 y : 0

};
MatrixCreationDict = {
 rotate : 0,
 scale : 0

};
MediaItemType = {
 albumArtist : '',
 albumTitle : '',
 albumTrackCount : 0,
 albumTrackNumber : 0,
 artist : '',
 composer : '',
 discCount : 0,
 discNumber : 0,
 genre : '',
 isCompilation : false,
 lyrics : '',
 mediaType : 0,
 playCount : 0,
 playbackDuration : 0,
 podcastTitle : '',
 rating : 0,
 skipCount : 0,
 title : ''

};
MediaQueryInfoType = {
 exact : false,
 value : null /* String, Number, Boolean */ 

};
MediaQueryType = {
 albumArtist : null /* String, MediaQueryInfoType */ ,
 albumTitle : null /* String, MediaQueryInfoType */ ,
 artist : null /* String, MediaQueryInfoType */ ,
 composer : null /* String, MediaQueryInfoType */ ,
 genre : null /* String, MediaQueryInfoType */ ,
 grouping : 0,
 isCompilation : null /* MediaQueryInfoType, Boolean */ ,
 mediaType : null /* Number, MediaQueryInfoType */ ,
 title : null /* String, MediaQueryInfoType */ 

};
MusicLibraryOptionsType = {
 allowMultipleSelections : false,
 animated : false,
 autohide : false,
 cancel : new Callback(),
 error : new Callback(),
 mediaTypes : null /* Number, Array<Number> */ ,
 success : new Callback()

};
PhotoGalleryOptionsType = {
 allowEditing : false,
 animated : false,
 autohide : false,
 cancel : new Callback(),
 error : new Callback(),
 mediaTypes : [],
 success : new Callback()

};
Point = {
 x : 0,
 y : 0

};
PumpCallbackArgs = {
 buffer : new Ti.Buffer(),
 bytesProcessed : 0,
 errorDescription : '',
 errorState : '',
 source : new Ti.IOStream(),
 totalBytesProcessed : 0

};
PushNotificationConfig = {
 callback : new Callback(),
 error : new Callback(),
 success : new Callback(),
 types : []

};
PushNotificationData = {
 data : {}

};
PushNotificationErrorArg = {
 error : '',
 type : ''

};
PushNotificationSuccessArg = {
 deviceToken : '',
 type : ''

};
ReadCallbackArgs = {
 bytesProcessed : 0,
 errorDescription : '',
 errorState : '',
 source : new Ti.IOStream()

};
ScreenshotResult = {
 media : new Ti.Blob()

};
TableViewAnimationProperties = {
 animated : false,
 animationStyle : 0,
 position : 0

};
TableViewIndexEntry = {
 index : 0,
 title : ''

};
Ti = {
 API : {
  addEventListener : function(name, callback) {},
  debug : function(message) {},
  error : function(message) {},
  fireEvent : function(name, event) {},
  info : function(message) {},
  log : function(level, message) {},
  removeEventListener : function(name, callback) {},
  warn : function(message) {}

 },
 Accelerometer : {
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  removeEventListener : function(name, callback) {}

 },
 Analytics : {
  addEvent : function(type, name, data) {},
  addEventListener : function(name, callback) {},
  featureEvent : function(name, data) {},
  fireEvent : function(name, event) {},
  navEvent : function(from, to, name, data) {},
  removeEventListener : function(name, callback) {},
  settingsEvent : function(name, data) {},
  timedEvent : function(name, start, stop, duration, data) {},
  userEvent : function(name, data) {}

 },
 App : {
  Properties : {
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getBool : function(property, defval) {
    return false;
   },
   getDouble : function(property, defval) {
    return 0;
   },
   getInt : function(property, defval) {
    return 0;
   },
   getList : function(property, defval) {
    return [];
   },
   getString : function(property, defval) {
    return '';
   },
   hasProperty : function(property) {
    return false;
   },
   listProperties : function() {
    return [];
   },
   removeEventListener : function(name, callback) {},
   removeProperty : function(property) {},
   setBool : function(property, value) {},
   setDouble : function(property, value) {},
   setInt : function(property, value) {},
   setList : function(property, value) {},
   setString : function(property, value) {}

  },
  iOS : {
   BackgroundService : {
    url : '',
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    getUrl : function() {
     return '';
    },
    removeEventListener : function(name, callback) {},
    stop : function() {},
    unregister : function() {}

   },
   LocalNotification : {
    addEventListener : function(name, callback) {},
    cancel : function() {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   addEventListener : function(name, callback) {},
   cancelAllLocalNotifications : function() {},
   cancelLocalNotification : function() {},
   createLocalNotification : function(parameters) {
    return new Ti.App.iOS.LocalNotification();
   },
   fireEvent : function(name, event) {},
   registerBackgroundService : function(params) {
    return {};
   },
   removeEventListener : function(name, callback) {},
   scheduleLocalNotification : function(params) {
    return {};
   }

  },
  copyright : '',
  description : '',
  guid : '',
  id : '',
  idleTimerDisabled : false,
  name : '',
  proximityDetection : false,
  proximityState : false,
  publisher : '',
  url : '',
  version : '',
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  getArguments : function() {
   return {};
  },
  getCopyright : function() {
   return '';
  },
  getDescription : function() {
   return '';
  },
  getGuid : function() {
   return '';
  },
  getId : function() {
   return '';
  },
  getIdleTimerDisabled : function() {
   return false;
  },
  getName : function() {
   return '';
  },
  getProximityDetection : function() {
   return false;
  },
  getProximityState : function() {
   return false;
  },
  getPublisher : function() {
   return '';
  },
  getUrl : function() {
   return '';
  },
  getVersion : function() {
   return '';
  },
  removeEventListener : function(name, callback) {},
  setIdleTimerDisabled : function(idleTimerDisabled) {},
  setProximityDetection : function(proximityDetection) {}

 },
 Blob : {
  height : 0,
  length : 0,
  mimeType : '',
  nativePath : '',
  size : 0,
  text : '',
  width : 0,
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  getHeight : function() {
   return 0;
  },
  getLength : function() {
   return 0;
  },
  getMimeType : function() {
   return '';
  },
  getNativePath : function() {
   return '';
  },
  getSize : function() {
   return 0;
  },
  getText : function() {
   return '';
  },
  getWidth : function() {
   return 0;
  },
  imageAsCropped : function(options) {
   return new Ti.Blob();
  },
  imageAsResized : function(width, height) {
   return new Ti.Blob();
  },
  imageAsThumbnail : function(size, borderSize, cornerRadius) {
   return new Ti.Blob();
  },
  imageWithAlpha : function() {
   return new Ti.Blob();
  },
  imageWithRoundedCorner : function(cornerSize, borderSize) {
   return new Ti.Blob();
  },
  imageWithTransparentBorder : function(size) {
   return new Ti.Blob();
  },
  removeEventListener : function(name, callback) {},
  toString : function() {
   return '';
  }

 },
 BlobStream : {
  addEventListener : function(name, callback) {},
  close : function() {},
  fireEvent : function(name, event) {},
  isReadable : function() {
   return false;
  },
  isWriteable : function() {
   return false;
  },
  read : function(buffer) {
   return 0;
  },
  removeEventListener : function(name, callback) {},
  write : function(buffer) {
   return 0;
  }

 },
 Buffer : {
  byteOrder : 0,
  length : 0,
  type : '',
  value : null /* String, Number */ ,
  addEventListener : function(name, callback) {},
  append : function(sourceBuffer) {
   return 0;
  },
  append : function(sourceBuffer, sourceOffset, sourceLength) {
   return 0;
  },
  clear : function() {},
  clone : function() {
   return new Ti.Buffer();
  },
  clone : function(offset, length) {
   return new Ti.Buffer();
  },
  copy : function(sourceBuffer, offset) {
   return 0;
  },
  copy : function(sourceBuffer, offset, sourceOffset, sourceLength) {
   return 0;
  },
  fill : function(fillByte) {},
  fill : function(fillByte, offset, length) {},
  fireEvent : function(name, event) {},
  getByteOrder : function() {
   return 0;
  },
  getLength : function() {
   return 0;
  },
  getType : function() {
   return '';
  },
  getValue : function() {
   return null /* String, Number */ ;
  },
  insert : function(sourceBuffer, offset) {
   return 0;
  },
  insert : function(sourceBuffer, offset, sourceOffset, sourceLength) {
   return 0;
  },
  release : function() {},
  removeEventListener : function(name, callback) {},
  setLength : function(length) {},
  toBlob : function() {
   return new Ti.Blob();
  },
  toString : function() {
   return '';
  }

 },
 BufferStream : {
  addEventListener : function(name, callback) {},
  close : function() {},
  fireEvent : function(name, event) {},
  isReadable : function() {
   return false;
  },
  isWriteable : function() {
   return false;
  },
  read : function(buffer) {
   return 0;
  },
  removeEventListener : function(name, callback) {},
  write : function(buffer) {
   return 0;
  }

 },
 Codec : {
  BIG_ENDIAN : 0,
  CHARSET_ASCII : '',
  CHARSET_ISO_LATIN_1 : '',
  CHARSET_UTF16 : '',
  CHARSET_UTF16BE : '',
  CHARSET_UTF16LE : '',
  CHARSET_UTF8 : '',
  LITTLE_ENDIAN : 0,
  TYPE_BYTE : '',
  TYPE_DOUBLE : '',
  TYPE_FLOAT : '',
  TYPE_INT : '',
  TYPE_LONG : '',
  TYPE_SHORT : '',
  addEventListener : function(name, callback) {},
  decodeNumber : function(options) {
   return 0;
  },
  decodeString : function(options) {
   return '';
  },
  encodeNumber : function(options) {
   return 0;
  },
  encodeString : function(options) {
   return 0;
  },
  fireEvent : function(name, event) {},
  getNativeByteOrder : function() {
   return 0;
  },
  removeEventListener : function(name, callback) {}

 },
 Contacts : {
  Group : {
   name : '',
   add : function(person) {},
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getName : function() {
    return '';
   },
   members : function() {},
   remove : function(person) {},
   removeEventListener : function(name, callback) {},
   setName : function(name) {},
   sortedMembers : function(sortBy) {}

  },
  Person : {
   address : {},
   birthday : '',
   created : '',
   date : {},
   department : '',
   email : {},
   firstName : '',
   firstPhonetic : '',
   fullName : '',
   image : {},
   instantMessage : {},
   jobTitle : '',
   kind : 0,
   lastName : '',
   lastPhonetic : '',
   middleName : '',
   middlePhonetic : '',
   modified : '',
   nickname : '',
   note : '',
   organization : '',
   phone : {},
   prefix : '',
   relatedNames : {},
   suffix : '',
   url : {},
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getAddress : function() {
    return {};
   },
   getBirthday : function() {
    return '';
   },
   getCreated : function() {
    return '';
   },
   getDate : function() {
    return {};
   },
   getDepartment : function() {
    return '';
   },
   getEmail : function() {
    return {};
   },
   getFirstName : function() {
    return '';
   },
   getFirstPhonetic : function() {
    return '';
   },
   getFullName : function() {
    return '';
   },
   getImage : function() {
    return {};
   },
   getInstantMessage : function() {
    return {};
   },
   getJobTitle : function() {
    return '';
   },
   getKind : function() {
    return 0;
   },
   getLastName : function() {
    return '';
   },
   getLastPhonetic : function() {
    return '';
   },
   getMiddleName : function() {
    return '';
   },
   getMiddlePhonetic : function() {
    return '';
   },
   getModified : function() {
    return '';
   },
   getNickname : function() {
    return '';
   },
   getNote : function() {
    return '';
   },
   getOrganization : function() {
    return '';
   },
   getPhone : function() {
    return {};
   },
   getPrefix : function() {
    return '';
   },
   getRelatedNames : function() {
    return {};
   },
   getSuffix : function() {
    return '';
   },
   getUrl : function() {
    return {};
   },
   removeEventListener : function(name, callback) {},
   setAddress : function(address) {},
   setBirthday : function(birthday) {},
   setCreated : function(created) {},
   setDate : function(date) {},
   setDepartment : function(department) {},
   setEmail : function(email) {},
   setFirstName : function(firstName) {},
   setFirstPhonetic : function(firstPhonetic) {},
   setFullName : function(fullName) {},
   setImage : function(image) {},
   setInstantMessage : function(instantMessage) {},
   setJobTitle : function(jobTitle) {},
   setKind : function(kind) {},
   setLastName : function(lastName) {},
   setLastPhonetic : function(lastPhonetic) {},
   setMiddleName : function(middleName) {},
   setMiddlePhonetic : function(middlePhonetic) {},
   setModified : function(modified) {},
   setNickname : function(nickname) {},
   setNote : function(note) {},
   setOrganization : function(organization) {},
   setPhone : function(phone) {},
   setPrefix : function(prefix) {},
   setRelatedNames : function(relatedNames) {},
   setSuffix : function(suffix) {},
   setUrl : function(url) {}

  },
  CONTACTS_KIND_ORGANIZATION : 0,
  CONTACTS_KIND_PERSON : 0,
  CONTACTS_SORT_FIRST_NAME : 0,
  CONTACTS_SORT_LAST_NAME : 0,
  addEventListener : function(name, callback) {},
  createGroup : function(parameters) {
   return new Ti.Contacts.Group();
  },
  createPerson : function(parameters) {
   return new Ti.Contacts.Person();
  },
  fireEvent : function(name, event) {},
  getAllGroups : function() {},
  getAllPeople : function() {},
  getGroupByID : function(id) {
   return new Ti.Contacts.Group();
  },
  getPeopleWithName : function(name) {
   return [];
  },
  getPersonByID : function(id) {
   return new Ti.Contacts.Person();
  },
  removeEventListener : function(name, callback) {},
  removeGroup : function(group) {},
  removePerson : function(person) {},
  revert : function() {},
  save : function() {},
  showContacts : function(cancel, selectedPerson, selectedProperty, animated, fields) {}

 },
 Database : {
  DB : {
   file : new Ti.Filesystem.File(),
   lastInsertRowId : 0,
   name : '',
   rowsAffected : 0,
   addEventListener : function(name, callback) {},
   close : function() {},
   execute : function(sql, vararg) {
    return new Ti.Database.ResultSet();
   },
   fireEvent : function(name, event) {},
   getFile : function() {
    return new Ti.Filesystem.File();
   },
   getLastInsertRowId : function() {
    return 0;
   },
   getName : function() {
    return '';
   },
   getRowsAffected : function() {
    return 0;
   },
   removeEventListener : function(name, callback) {},
   setLastInsertRowId : function(lastInsertRowId) {},
   setName : function(name) {},
   setRowsAffected : function(rowsAffected) {}

  },
  ResultSet : {
   rowCount : 0,
   validRow : false,
   addEventListener : function(name, callback) {},
   close : function() {},
   field : function(index, type) {
    return null /* Ti.Blob, Number, String */ ;
   },
   fieldByName : function(name, type) {
    return null /* Ti.Blob, Number, String */ ;
   },
   fieldCount : function() {
    return 0;
   },
   fieldName : function(index) {
    return '';
   },
   fireEvent : function(name, event) {},
   getRowCount : function() {
    return 0;
   },
   getValidRow : function() {
    return false;
   },
   isValidRow : function() {
    return false;
   },
   next : function() {
    return false;
   },
   removeEventListener : function(name, callback) {}

  },
  FIELD_TYPE_DOUBLE : 0,
  FIELD_TYPE_FLOAT : 0,
  FIELD_TYPE_INT : 0,
  FIELD_TYPE_STRING : 0,
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  install : function(path, dbName) {
   return new Ti.Database.DB();
  },
  open : function(dbName) {
   return new Ti.Database.DB();
  },
  removeEventListener : function(name, callback) {}

 },
 Event : {
  source : {},
  type : ''

 },
 Facebook : {
  LoginButton : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   style : '',
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getStyle : function() {
    return '';
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setStyle : function(style) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  accessToken : '',
  appid : '',
  expirationDate : new Date(),
  forceDialogAuth : false,
  loggedIn : false,
  permissions : {},
  uid : '',
  addEventListener : function(name, callback) {},
  authorize : function() {},
  createLoginButton : function(parameters) {
   return new Ti.Facebook.LoginButton();
  },
  dialog : function(action, params, callback) {},
  fireEvent : function(name, event) {},
  getAccessToken : function() {
   return '';
  },
  getAppid : function() {
   return '';
  },
  getExpirationDate : function() {
   return new Date();
  },
  getForceDialogAuth : function() {
   return false;
  },
  getLoggedIn : function() {
   return false;
  },
  getPermissions : function() {
   return {};
  },
  getUid : function() {
   return '';
  },
  logout : function() {},
  removeEventListener : function(name, callback) {},
  request : function(method, params, callback) {},
  requestWithGraphPath : function(path, params, httpMethod, callback) {},
  setAccessToken : function(accessToken) {},
  setAppid : function(appid) {},
  setExpirationDate : function(expirationDate) {},
  setForceDialogAuth : function(forceDialogAuth) {},
  setLoggedIn : function(loggedIn) {},
  setPermissions : function(permissions) {},
  setUid : function(uid) {}

 },
 Filesystem : {
  File : {
   executable : false,
   hidden : false,
   name : '',
   nativePath : '',
   remoteBackup : false,
   symbolicLink : false,
   writable : false,
   writeable : false,
   addEventListener : function(name, callback) {},
   append : function(data) {
    return false;
   },
   createDirectory : function() {
    return false;
   },
   createFile : function() {
    return false;
   },
   createTimestamp : function() {
    return 0;
   },
   deleteDirectory : function(recursive) {
    return false;
   },
   deleteFile : function() {
    return false;
   },
   exists : function() {
    return false;
   },
   extension : function() {
    return '';
   },
   fireEvent : function(name, event) {},
   getDirectoryListing : function() {
    return [];
   },
   getExecutable : function() {
    return false;
   },
   getHidden : function() {
    return false;
   },
   getName : function() {
    return '';
   },
   getNativePath : function() {
    return '';
   },
   getParent : function() {
    return null /* String, Ti.Filesystem.File */ ;
   },
   getRemoteBackup : function() {
    return false;
   },
   getSymbolicLink : function() {
    return false;
   },
   getWritable : function() {
    return false;
   },
   getWriteable : function() {
    return false;
   },
   modificationTimestamp : function() {
    return 0;
   },
   move : function(newpath) {
    return false;
   },
   open : function(mode) {
    return new Ti.Filesystem.FileStream();
   },
   read : function() {
    return new Ti.Blob();
   },
   removeEventListener : function(name, callback) {},
   rename : function(newname) {
    return false;
   },
   setHidden : function(hidden) {},
   setRemoteBackup : function(remoteBackup) {},
   spaceAvailable : function() {
    return 0;
   },
   write : function(data, append) {
    return false;
   }

  },
  FileStream : {
   addEventListener : function(name, callback) {},
   close : function() {},
   fireEvent : function(name, event) {},
   isReadable : function() {
    return false;
   },
   isWriteable : function() {
    return false;
   },
   read : function(buffer) {
    return 0;
   },
   removeEventListener : function(name, callback) {},
   write : function(buffer) {
    return 0;
   }

  },
  MODE_APPEND : 0,
  MODE_READ : 0,
  MODE_WRITE : 0,
  applicationDataDirectory : '',
  applicationDirectory : '',
  applicationSupportDirectory : '',
  lineEnding : '',
  resourcesDirectory : '',
  separator : '',
  tempDirectory : '',
  addEventListener : function(name, callback) {},
  createFile : function(parameters) {
   return new Ti.Filesystem.File();
  },
  createTempDirectory : function() {
   return new Ti.Filesystem.File();
  },
  createTempFile : function() {
   return new Ti.Filesystem.File();
  },
  fireEvent : function(name, event) {},
  getApplicationDataDirectory : function() {
   return '';
  },
  getApplicationDirectory : function() {
   return '';
  },
  getApplicationSupportDirectory : function() {
   return '';
  },
  getFile : function(path) {
   return new Ti.Filesystem.File();
  },
  getLineEnding : function() {
   return '';
  },
  getResourcesDirectory : function() {
   return '';
  },
  getSeparator : function() {
   return '';
  },
  getTempDirectory : function() {
   return '';
  },
  isExternalStoragePresent : function() {
   return false;
  },
  removeEventListener : function(name, callback) {}

 },
 Geolocation : {
  ACCURACY_BEST : 0,
  ACCURACY_HUNDRED_METERS : 0,
  ACCURACY_KILOMETER : 0,
  ACCURACY_NEAREST_TEN_METERS : 0,
  ACCURACY_THREE_KILOMETERS : 0,
  AUTHORIZATION_AUTHORIZED : 0,
  AUTHORIZATION_DENIED : 0,
  AUTHORIZATION_RESTRICTED : 0,
  AUTHORIZATION_UNKNOWN : 0,
  ERROR_DENIED : 0,
  ERROR_HEADING_FAILURE : 0,
  ERROR_LOCATION_UNKNOWN : 0,
  ERROR_NETWORK : 0,
  ERROR_REGION_MONITORING_DELAYED : 0,
  ERROR_REGION_MONITORING_DENIED : 0,
  ERROR_REGION_MONITORING_FAILURE : 0,
  distanceFilter : 0,
  headingFilter : 0,
  locationServicesAuthorization : 0,
  locationServicesEnabled : false,
  preferredProvider : '',
  purpose : '',
  showCalibration : false,
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  forwardGeocoder : function(address, callback) {},
  getCurrentHeading : function(callback) {},
  getCurrentPosition : function(callback) {},
  getDistanceFilter : function() {
   return 0;
  },
  getHeadingFilter : function() {
   return 0;
  },
  getLocationServicesAuthorization : function() {
   return 0;
  },
  getLocationServicesEnabled : function() {
   return false;
  },
  getPreferredProvider : function() {
   return '';
  },
  getPurpose : function() {
   return '';
  },
  getShowCalibration : function() {
   return false;
  },
  removeEventListener : function(name, callback) {},
  reverseGeocoder : function(latitude, longitude, callback) {},
  setDistanceFilter : function(distanceFilter) {},
  setHeadingFilter : function(headingFilter) {},
  setLocationServicesAuthorization : function(locationServicesAuthorization) {},
  setPreferredProvider : function(preferredProvider) {},
  setPurpose : function(purpose) {},
  setShowCalibration : function() {}

 },
 Gesture : {
  landscape : false,
  orientation : 0,
  portrait : false,
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  getLandscape : function() {
   return false;
  },
  getOrientation : function() {
   return 0;
  },
  getPortrait : function() {
   return false;
  },
  removeEventListener : function(name, callback) {}

 },
 IOStream : {
  addEventListener : function(name, callback) {},
  close : function() {},
  fireEvent : function(name, event) {},
  isReadable : function() {
   return false;
  },
  isWriteable : function() {
   return false;
  },
  read : function(buffer) {
   return 0;
  },
  read : function(buffer, offset, length) {
   return 0;
  },
  removeEventListener : function(name, callback) {},
  write : function(buffer) {
   return 0;
  },
  write : function(buffer, offset, length) {
   return 0;
  }

 },
 Locale : {
  currentCountry : '',
  currentLanguage : '',
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  formatTelephoneNumber : function(number) {
   return '';
  },
  getCurrentCountry : function() {
   return '';
  },
  getCurrentLanguage : function() {
   return '';
  },
  getString : function(key, hint) {
   return '';
  },
  removeEventListener : function(name, callback) {},
  setCurrentCountry : function(currentCountry) {}

 },
 Map : {
  Annotation : {
   animate : false,
   image : null /* Ti.Blob, String */ ,
   leftButton : null /* String, Number */ ,
   leftView : {},
   pincolor : 0,
   rightButton : null /* String, Number */ ,
   rightView : {},
   subtitle : '',
   subtitleid : '',
   title : '',
   titleid : '',
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getAnimate : function() {
    return false;
   },
   getImage : function() {
    return null /* Ti.Blob, String */ ;
   },
   getLeftButton : function() {
    return null /* String, Number */ ;
   },
   getLeftView : function() {
    return {};
   },
   getPincolor : function() {
    return 0;
   },
   getRightButton : function() {
    return null /* String, Number */ ;
   },
   getRightView : function() {
    return {};
   },
   getSubtitle : function() {
    return '';
   },
   getSubtitleid : function() {
    return '';
   },
   getTitle : function() {
    return '';
   },
   getTitleid : function() {
    return '';
   },
   removeEventListener : function(name, callback) {},
   setAnimate : function(animate) {},
   setImage : function(image) {},
   setLeftButton : function(leftButton) {},
   setLeftView : function(leftView) {},
   setPincolor : function(pincolor) {},
   setRightButton : function(rightButton) {},
   setRightView : function(rightView) {},
   setSubtitle : function(subtitle) {},
   setSubtitleid : function(subtitleid) {},
   setTitle : function(title) {},
   setTitleid : function(titleid) {}

  },
  View : {
   anchorPoint : new Point(),
   animate : false,
   animatedCenterPoint : new Point(),
   annotations : [],
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   height : null /* String, Number */ ,
   latitudeDelta : 0,
   layout : '',
   left : null /* String, Number */ ,
   longitudeDelta : 0,
   mapType : 0,
   opacity : 0,
   region : {},
   regionFit : false,
   right : null /* String, Number */ ,
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   userLocation : false,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addAnnotation : function(annotation) {},
   addAnnotations : function(annotations) {},
   addEventListener : function(name, callback) {},
   addRoute : function(route) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   deselectAnnotation : function(annotation) {},
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimate : function() {
    return false;
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getAnnotations : function() {
    return [];
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLatitudeDelta : function() {
    return 0;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getLongitudeDelta : function() {
    return 0;
   },
   getMapType : function() {
    return 0;
   },
   getOpacity : function() {
    return 0;
   },
   getRegion : function() {
    return {};
   },
   getRegionFit : function() {
    return false;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getUserLocation : function() {
    return false;
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeAllAnnotations : function() {},
   removeAnnotation : function(annotation) {},
   removeAnnotations : function(annotation) {},
   removeEventListener : function(name, callback) {},
   removeRoute : function(route) {},
   selectAnnotation : function(annotation) {},
   setAnchorPoint : function(anchorPoint) {},
   setAnimate : function(animate) {},
   setAnnotations : function(annotations) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setLocation : function(location) {},
   setMapType : function(mapType) {},
   setOpacity : function(opacity) {},
   setRegion : function(region) {},
   setRegionFit : function(regionFit) {},
   setRight : function(right) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setUserLocation : function(userLocation) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   },
   zoom : function(level) {}

  },
  HYBRID_TYPE : 0,
  SATELLITE_TYPE : 0,
  STANDARD_TYPE : 0,
  addEventListener : function(name, callback) {},
  createAnnotation : function(parameters) {
   return new Ti.Map.Annotation();
  },
  createView : function(parameters) {
   return new Ti.Map.View();
  },
  fireEvent : function(name, event) {},
  removeEventListener : function(name, callback) {}

 },
 Media : {
  AudioPlayer : {
   STATE_BUFFERING : 0,
   STATE_INITIALIZED : 0,
   STATE_PAUSED : 0,
   STATE_PLAYING : 0,
   STATE_STARTING : 0,
   STATE_STOPPED : 0,
   STATE_STOPPING : 0,
   STATE_WAITING_FOR_DATA : 0,
   STATE_WAITING_FOR_QUEUE : 0,
   bitRate : 0,
   bufferSize : 0,
   idle : false,
   paused : false,
   playing : false,
   progress : 0,
   state : 0,
   url : '',
   waiting : false,
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getBitRate : function() {
    return 0;
   },
   getBufferSize : function() {
    return 0;
   },
   getIdle : function() {
    return false;
   },
   getPaused : function() {
    return false;
   },
   getPlaying : function() {
    return false;
   },
   getProgress : function() {
    return 0;
   },
   getState : function() {
    return 0;
   },
   getUrl : function() {
    return '';
   },
   getWaiting : function() {
    return false;
   },
   pause : function() {},
   removeEventListener : function(name, callback) {},
   setBitRate : function(bitRate) {},
   setBufferSize : function(bufferSize) {},
   setPaused : function(paused) {},
   setUrl : function(url) {},
   start : function() {},
   stateDescription : function(state) {
    return '';
   },
   stop : function() {}

  },
  AudioRecorder : {
   compression : 0,
   format : 0,
   paused : false,
   recording : false,
   stopped : false,
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getCompression : function() {
    return 0;
   },
   getFormat : function() {
    return 0;
   },
   getPaused : function() {
    return false;
   },
   getRecording : function() {
    return false;
   },
   getStopped : function() {
    return false;
   },
   pause : function() {},
   removeEventListener : function(name, callback) {},
   resume : function() {},
   setCompression : function(compression) {},
   setFormat : function(format) {},
   setPaused : function(paused) {},
   setRecording : function(recording) {},
   setStopped : function(stopped) {},
   start : function() {},
   stop : function() {}

  },
  Item : {
   albumArtist : '',
   albumTitle : '',
   albumTrackCount : 0,
   albumTrackNumber : 0,
   artist : '',
   artwork : {},
   composer : '',
   discCount : 0,
   discNumber : 0,
   genre : '',
   isCompilation : false,
   lyrics : '',
   mediaType : 0,
   playCount : 0,
   playbackDuration : 0,
   podcastTitle : '',
   rating : 0,
   skipCount : 0,
   title : '',
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getAlbumArtist : function() {
    return '';
   },
   getAlbumTitle : function() {
    return '';
   },
   getAlbumTrackCount : function() {
    return 0;
   },
   getAlbumTrackNumber : function() {
    return 0;
   },
   getArtist : function() {
    return '';
   },
   getArtwork : function() {
    return {};
   },
   getComposer : function() {
    return '';
   },
   getDiscCount : function() {
    return 0;
   },
   getDiscNumber : function() {
    return 0;
   },
   getGenre : function() {
    return '';
   },
   getIsCompilation : function() {
    return false;
   },
   getLyrics : function() {
    return '';
   },
   getMediaType : function() {
    return 0;
   },
   getPlayCount : function() {
    return 0;
   },
   getPlaybackDuration : function() {
    return 0;
   },
   getPodcastTitle : function() {
    return '';
   },
   getRating : function() {
    return 0;
   },
   getSkipCount : function() {
    return 0;
   },
   getTitle : function() {
    return '';
   },
   removeEventListener : function(name, callback) {},
   setAlbumArtist : function(albumArtist) {},
   setAlbumTitle : function(albumTitle) {},
   setAlbumTrackCount : function(albumTrackCount) {},
   setAlbumTrackNumber : function(albumTrackNumber) {},
   setArtist : function(artist) {},
   setArtwork : function(artwork) {},
   setComposer : function(composer) {},
   setDiscCount : function(discCount) {},
   setDiscNumber : function(discNumber) {},
   setGenre : function(genre) {},
   setIsCompilation : function(isCompilation) {},
   setLyrics : function(lyrics) {},
   setMediaType : function(mediaType) {},
   setPlayCount : function(playCount) {},
   setPlaybackDuration : function(playbackDuration) {},
   setPodcastTitle : function(podcastTitle) {},
   setRating : function(rating) {},
   setSkipCount : function(skipCount) {},
   setTitle : function(title) {}

  },
  MusicPlayer : {
   currentPlaybackTime : 0,
   nowPlaying : {},
   playbackState : 0,
   repeatMode : 0,
   shuffleMode : 0,
   volume : 0,
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getCurrentPlaybackTime : function() {
    return 0;
   },
   getNowPlaying : function() {
    return {};
   },
   getPlaybackState : function() {
    return 0;
   },
   getRepeatMode : function() {
    return 0;
   },
   getShuffleMode : function() {
    return 0;
   },
   getVolume : function() {
    return 0;
   },
   pause : function() {},
   play : function() {},
   removeEventListener : function(name, callback) {},
   seekBackward : function() {},
   seekForward : function() {},
   setCurrentPlaybackTime : function(currentPlaybackTime) {},
   setNowPlaying : function(nowPlaying) {},
   setPlaybackState : function(playbackState) {},
   setQueue : function(queue) {},
   setRepeatMode : function(repeatMode) {},
   setShuffleMode : function(shuffleMode) {},
   setVolume : function(volume) {},
   skipToBeginning : function() {},
   skipToNext : function() {},
   skipToPrevious : function() {},
   stop : function() {},
   stopSeeking : function() {}

  },
  Sound : {
   duration : 0,
   looping : false,
   paused : false,
   playing : false,
   time : 0,
   url : '',
   volume : 0,
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getDuration : function() {
    return 0;
   },
   getLooping : function() {
    return false;
   },
   getPaused : function() {
    return false;
   },
   getPlaying : function() {
    return false;
   },
   getTime : function() {
    return 0;
   },
   getUrl : function() {
    return '';
   },
   getVolume : function() {
    return 0;
   },
   isLooping : function() {
    return false;
   },
   isPaused : function() {
    return false;
   },
   isPlaying : function() {
    return false;
   },
   pause : function() {},
   play : function() {},
   release : function() {},
   removeEventListener : function(name, callback) {},
   reset : function() {},
   setDuration : function(duration) {},
   setLooping : function() {},
   setPaused : function() {},
   setPlaying : function(playing) {},
   setTime : function() {},
   setUrl : function(url) {},
   setVolume : function() {},
   stop : function() {}

  },
  VideoPlayer : {
   allowsAirPlay : false,
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   autoplay : false,
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   contentURL : '',
   currentPlaybackTime : 0,
   duration : 0,
   endPlaybackTime : 0,
   fullscreen : false,
   height : null /* String, Number */ ,
   initialPlaybackTime : 0,
   layout : '',
   left : null /* String, Number */ ,
   loadState : 0,
   media : {},
   mediaControlStyle : 0,
   mediaTypes : 0,
   movieControlMode : 0,
   naturalSize : {},
   opacity : 0,
   playableDuration : 0,
   playbackState : 0,
   playing : false,
   repeatMode : 0,
   right : null /* String, Number */ ,
   scalingMode : 0,
   size : {},
   sourceType : 0,
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   url : '',
   useApplicationAudioSession : false,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   cancelAllThumbnailImageRequests : function() {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAllowsAirPlay : function() {
    return false;
   },
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getAutoplay : function() {
    return false;
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getContentURL : function() {
    return '';
   },
   getCurrentPlaybackTime : function() {
    return 0;
   },
   getDuration : function() {
    return 0;
   },
   getEndPlaybackTime : function() {
    return 0;
   },
   getFullscreen : function() {
    return false;
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getInitialPlaybackTime : function() {
    return 0;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getLoadState : function() {
    return 0;
   },
   getMedia : function() {
    return {};
   },
   getMediaControlStyle : function() {
    return 0;
   },
   getMediaTypes : function() {
    return 0;
   },
   getMovieControlMode : function() {
    return 0;
   },
   getNaturalSize : function() {
    return {};
   },
   getOpacity : function() {
    return 0;
   },
   getPlayableDuration : function() {
    return 0;
   },
   getPlaybackState : function() {
    return 0;
   },
   getPlaying : function() {
    return false;
   },
   getRepeatMode : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getScalingMode : function() {
    return 0;
   },
   getSize : function() {
    return {};
   },
   getSourceType : function() {
    return 0;
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getUrl : function() {
    return '';
   },
   getUseApplicationAudioSession : function() {
    return false;
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   pause : function() {},
   play : function() {},
   release : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   requestThumbnailImagesAtTimes : function(times, option) {},
   setAllowsAirPlay : function(allowsAirPlay) {},
   setAnchorPoint : function(anchorPoint) {},
   setAutoplay : function(autoplay) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBackgroundView : function(view) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setContentURL : function(contentURL) {},
   setCurrentPlaybackTime : function(currentPlaybackTime) {},
   setDuration : function(duration) {},
   setEndPlaybackTime : function(endPlaybackTime) {},
   setFullscreen : function(fullscreen) {},
   setHeight : function(height) {},
   setInitialPlaybackTime : function(initialPlaybackTime) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setMedia : function(media) {},
   setMediaControlStyle : function(mediaControlStyle) {},
   setMediaTypes : function(mediaTypes) {},
   setMovieControlMode : function(movieControlMode) {},
   setNaturalSize : function(naturalSize) {},
   setOpacity : function(opacity) {},
   setRepeatMode : function(repeatMode) {},
   setRight : function(right) {},
   setScalingMode : function(scalingMode) {},
   setSourceType : function(sourceType) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setUrl : function(url) {},
   setUseApplicationAudioSession : function(useApplicationAudioSession) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   stop : function() {},
   thumbnailImageAtTime : function(time, option) {
    return {};
   },
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  AUDIO_FILEFORMAT_3GP2 : 0,
  AUDIO_FILEFORMAT_3GPP : 0,
  AUDIO_FILEFORMAT_AIFF : 0,
  AUDIO_FILEFORMAT_AMR : 0,
  AUDIO_FILEFORMAT_CAF : 0,
  AUDIO_FILEFORMAT_MP3 : 0,
  AUDIO_FILEFORMAT_MP4 : 0,
  AUDIO_FILEFORMAT_MP4A : 0,
  AUDIO_FILEFORMAT_WAVE : 0,
  AUDIO_FORMAT_AAC : 0,
  AUDIO_FORMAT_ALAW : 0,
  AUDIO_FORMAT_APPLE_LOSSLESS : 0,
  AUDIO_FORMAT_ILBC : 0,
  AUDIO_FORMAT_IMA4 : 0,
  AUDIO_FORMAT_LINEAR_PCM : 0,
  AUDIO_FORMAT_ULAW : 0,
  AUDIO_HEADPHONES : 0,
  AUDIO_HEADPHONES_AND_MIC : 0,
  AUDIO_HEADSET_INOUT : 0,
  AUDIO_LINEOUT : 0,
  AUDIO_MICROPHONE : 0,
  AUDIO_MUTED : 0,
  AUDIO_RECEIVER_AND_MIC : 0,
  AUDIO_SESSION_MODE_AMBIENT : 0,
  AUDIO_SESSION_MODE_PLAYBACK : 0,
  AUDIO_SESSION_MODE_PLAY_AND_RECORD : 0,
  AUDIO_SESSION_MODE_RECORD : 0,
  AUDIO_SESSION_MODE_SOLO_AMBIENT : 0,
  AUDIO_SPEAKER : 0,
  AUDIO_UNAVAILABLE : 0,
  AUDIO_UNKNOWN : 0,
  DEVICE_BUSY : 0,
  MEDIA_TYPE_PHOTO : '',
  MEDIA_TYPE_VIDEO : '',
  MUSIC_MEDIA_GROUP_ALBUM : 0,
  MUSIC_MEDIA_GROUP_ALBUM_ARTIST : 0,
  MUSIC_MEDIA_GROUP_ARTIST : 0,
  MUSIC_MEDIA_GROUP_COMPOSER : 0,
  MUSIC_MEDIA_GROUP_GENRE : 0,
  MUSIC_MEDIA_GROUP_PLAYLIST : 0,
  MUSIC_MEDIA_GROUP_PODCAST_TITLE : 0,
  MUSIC_MEDIA_GROUP_TITLE : 0,
  MUSIC_MEDIA_TYPE_ALL : 0,
  MUSIC_MEDIA_TYPE_ANY_AUDIO : 0,
  MUSIC_MEDIA_TYPE_AUDIOBOOK : 0,
  MUSIC_MEDIA_TYPE_MUSIC : 0,
  MUSIC_MEDIA_TYPE_PODCAST : 0,
  MUSIC_PLAYER_REPEAT_ALL : 0,
  MUSIC_PLAYER_REPEAT_DEFAULT : 0,
  MUSIC_PLAYER_REPEAT_NONE : 0,
  MUSIC_PLAYER_REPEAT_ONE : 0,
  MUSIC_PLAYER_SHUFFLE_ALBUMS : 0,
  MUSIC_PLAYER_SHUFFLE_DEFAULT : 0,
  MUSIC_PLAYER_SHUFFLE_NONE : 0,
  MUSIC_PLAYER_SHUFFLE_SONGS : 0,
  MUSIC_PLAYER_STATE_INTERRUPTED : 0,
  MUSIC_PLAYER_STATE_PAUSED : 0,
  MUSIC_PLAYER_STATE_PLAYING : 0,
  MUSIC_PLAYER_STATE_SEEK_BACKWARD : 0,
  MUSIC_PLAYER_STATE_SKEEK_FORWARD : 0,
  MUSIC_PLAYER_STATE_STOPPED : 0,
  NO_CAMERA : 0,
  NO_VIDEO : 0,
  QUALITY_HIGH : 0,
  QUALITY_LOW : 0,
  QUALITY_MEDIUM : 0,
  UNKNOWN_ERROR : 0,
  VIDEO_CONTROL_DEFAULT : 0,
  VIDEO_CONTROL_EMBEDDED : 0,
  VIDEO_CONTROL_FULLSCREEN : 0,
  VIDEO_CONTROL_HIDDEN : 0,
  VIDEO_CONTROL_NONE : 0,
  VIDEO_CONTROL_VOLUME_ONLY : 0,
  VIDEO_FINISH_REASON_PLAYBACK_ENDED : 0,
  VIDEO_FINISH_REASON_PLAYBACK_ERROR : 0,
  VIDEO_FINISH_REASON_USER_EXITED : 0,
  VIDEO_LOAD_STATE_PLAYABLE : 0,
  VIDEO_LOAD_STATE_PLAYTHROUGH_OK : 0,
  VIDEO_LOAD_STATE_STALLED : 0,
  VIDEO_LOAD_STATE_UNKNOWN : 0,
  VIDEO_MEDIA_TYPE_AUDIO : 0,
  VIDEO_MEDIA_TYPE_NONE : 0,
  VIDEO_MEDIA_TYPE_VIDEO : 0,
  VIDEO_PLAYBACK_STATE_INTERRUPTED : 0,
  VIDEO_PLAYBACK_STATE_PAUSED : 0,
  VIDEO_PLAYBACK_STATE_PLAYING : 0,
  VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD : 0,
  VIDEO_PLAYBACK_STATE_SEEKING_FORWARD : 0,
  VIDEO_PLAYBACK_STATE_STOPPED : 0,
  VIDEO_REPEAT_MODE_NONE : 0,
  VIDEO_REPEAT_MODE_ONE : 0,
  VIDEO_SCALING_ASPECT_FILL : 0,
  VIDEO_SCALING_ASPECT_FIT : 0,
  VIDEO_SCALING_MODE_FILL : 0,
  VIDEO_SCALING_NONE : 0,
  VIDEO_SOURCE_TYPE_FILE : 0,
  VIDEO_SOURCE_TYPE_STREAMING : 0,
  VIDEO_SOURCE_TYPE_UNKNOWN : 0,
  VIDEO_TIME_OPTION_EXACT : 0,
  VIDEO_TIME_OPTION_NEAREST_KEYFRAME : 0,
  appMusicPlayer : new Ti.Media.MusicPlayer(),
  audioLineType : 0,
  audioPlaying : false,
  audioSessionMode : 0,
  availableCameraMediaTypes : [],
  availablePhotoGalleryMediaTypes : [],
  availablePhotoMediaTypes : [],
  averageMicrophonePower : 0,
  canRecord : false,
  isCameraSupported : false,
  peakMicrophonePower : 0,
  systemMusicPlayer : new Ti.Media.MusicPlayer(),
  volume : 0,
  addEventListener : function(name, callback) {},
  beep : function() {},
  createAudioPlayer : function(parameters) {
   return new Ti.Media.AudioPlayer();
  },
  createAudioRecorder : function(parameters) {
   return new Ti.Media.AudioRecorder();
  },
  createItem : function(parameters) {
   return new Ti.Media.Item();
  },
  createMusicPlayer : function(parameters) {
   return new Ti.Media.MusicPlayer();
  },
  createSound : function(parameters) {
   return new Ti.Media.Sound();
  },
  createVideoPlayer : function(parameters) {
   return new Ti.Media.VideoPlayer();
  },
  fireEvent : function(name, event) {},
  getAppMusicPlayer : function() {
   return new Ti.Media.MusicPlayer();
  },
  getAudioLineType : function() {
   return 0;
  },
  getAudioPlaying : function() {
   return false;
  },
  getAudioSessionMode : function() {
   return 0;
  },
  getAvailableCameraMediaTypes : function() {
   return [];
  },
  getAvailablePhotoGalleryMediaTypes : function() {
   return [];
  },
  getAvailablePhotoMediaTypes : function() {
   return [];
  },
  getAverageMicrophonePower : function() {
   return 0;
  },
  getCanRecord : function() {
   return false;
  },
  getIsCameraSupported : function() {
   return false;
  },
  getPeakMicrophonePower : function() {
   return 0;
  },
  getSystemMusicPlayer : function() {
   return new Ti.Media.MusicPlayer();
  },
  getVolume : function() {
   return 0;
  },
  hideCamera : function() {},
  hideMusicLibrary : function() {},
  isMediaTypeSupported : function(source, type) {
   return false;
  },
  openPhotoGallery : function(options) {},
  queryMusicLibrary : function(query) {
   return [];
  },
  removeEventListener : function(name, callback) {},
  saveToPhotoGallery : function(media, callbacks) {},
  setAudioSessionMode : function(audioSessionMode) {},
  setAvailableCameraMediaTypes : function(availableCameraMediaTypes) {},
  setAvailablePhotoGalleryMediaTypes : function(availablePhotoGalleryMediaTypes) {},
  setAvailablePhotoMediaTypes : function(availablePhotoMediaTypes) {},
  setAverageMicrophonePower : function(averageMicrophonePower) {},
  showCamera : function(options) {},
  showMusicLibrary : function(options) {},
  startMicrophoneMonitor : function() {},
  stopMicrophoneMonitor : function() {},
  takePicture : function() {},
  takeScreenshot : function(callback) {},
  vibrate : function(pattern) {}

 },
 Module : {
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  removeEventListener : function(name, callback) {}

 },
 Network : {
  BonjourBrowser : {
   domain : '',
   isSearching : false,
   serviceType : '',
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getDomain : function() {
    return '';
   },
   getIsSearching : function() {
    return false;
   },
   getServiceType : function() {
    return '';
   },
   removeEventListener : function(name, callback) {},
   search : function() {},
   setDomain : function(domain) {},
   setIsSearching : function(isSearching) {},
   setServiceType : function(serviceType) {},
   stopSearch : function() {}

  },
  BonjourService : {
   domain : '',
   isLocal : false,
   name : '',
   socket : {},
   type : '',
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getDomain : function() {
    return '';
   },
   getIsLocal : function() {
    return false;
   },
   getName : function() {
    return '';
   },
   getSocket : function() {
    return {};
   },
   getType : function() {
    return '';
   },
   publish : function(socket) {},
   removeEventListener : function(name, callback) {},
   resolve : function(timeout) {},
   setDomain : function(domain) {},
   setIsLocal : function(isLocal) {},
   setName : function(name) {},
   setSocket : function(socket) {},
   setType : function(type) {},
   stop : function() {}

  },
  HTTPClient : {
   DONE : 0,
   HEADERS_RECEIVED : 0,
   LOADING : 0,
   OPENED : 0,
   UNSENT : 0,
   autoRedirect : false,
   connected : false,
   connectionType : '',
   enableKeepAlive : false,
   file : '',
   location : '',
   ondatastream : new Callback(),
   onerror : new Callback(),
   onload : new Callback(),
   onreadystatechange : new Callback(),
   onsendstream : new Callback(),
   readyState : 0,
   responseData : new Ti.Blob(),
   responseText : '',
   responseXML : new Ti.XML.Document(),
   status : 0,
   statusText : '',
   timeout : 0,
   tlsVersion : 0,
   validatesSecureCertificate : false,
   abort : function() {},
   addEventListener : function(name, callback) {},
   clearCookies : function() {},
   fireEvent : function(name, event) {},
   getAutoRedirect : function() {
    return false;
   },
   getConnected : function() {
    return false;
   },
   getConnectionType : function() {
    return '';
   },
   getEnableKeepAlive : function() {
    return false;
   },
   getFile : function() {
    return '';
   },
   getLocation : function() {
    return '';
   },
   getOndatastream : function() {
    return new Callback();
   },
   getOnerror : function() {
    return new Callback();
   },
   getOnload : function() {
    return new Callback();
   },
   getOnreadystatechange : function() {
    return new Callback();
   },
   getOnsendstream : function() {
    return new Callback();
   },
   getReadyState : function() {
    return 0;
   },
   getResponseData : function() {
    return new Ti.Blob();
   },
   getResponseHeader : function(name) {
    return '';
   },
   getResponseText : function() {
    return '';
   },
   getResponseXML : function() {
    return new Ti.XML.Document();
   },
   getStatus : function() {
    return 0;
   },
   getStatusText : function() {
    return '';
   },
   getTimeout : function() {
    return 0;
   },
   getTlsVersion : function() {
    return 0;
   },
   getValidatesSecureCertificate : function() {
    return false;
   },
   open : function(method, url, async) {},
   removeEventListener : function(name, callback) {},
   send : function(data) {},
   setAutoRedirect : function(autoRedirect) {},
   setEnableKeepAlive : function(enableKeepAlive) {},
   setFile : function(file) {},
   setOndatastream : function(ondatastream) {},
   setOnerror : function(onerror) {},
   setOnload : function(onload) {},
   setOnreadystatechange : function(onreadystatechange) {},
   setOnsendstream : function(onsendstream) {},
   setRequestHeader : function(name, value) {},
   setTimeout : function(timeout) {},
   setTlsVersion : function(tlsVersion) {},
   setValidatesSecureCertificate : function(validatesSecureCertificate) {}

  },
  Socket : {
   TCP : {
    accepted : new Callback(),
    connected : new Callback(),
    error : new Callback(),
    host : '',
    listenQueueSize : 0,
    port : 0,
    state : 0,
    timeout : 0,
    accept : function(options) {},
    addEventListener : function(name, callback) {},
    close : function() {},
    connect : function() {},
    fireEvent : function(name, event) {},
    getAccepted : function() {
     return new Callback();
    },
    getConnected : function() {
     return new Callback();
    },
    getError : function() {
     return new Callback();
    },
    getHost : function() {
     return '';
    },
    getListenQueueSize : function() {
     return 0;
    },
    getPort : function() {
     return 0;
    },
    getState : function() {
     return 0;
    },
    getTimeout : function() {
     return 0;
    },
    isReadable : function() {
     return false;
    },
    isWriteable : function() {
     return false;
    },
    listen : function() {},
    read : function(buffer) {
     return 0;
    },
    removeEventListener : function(name, callback) {},
    setAccepted : function(accepted) {},
    setConnected : function(connected) {},
    setError : function(error) {},
    setHost : function(host) {},
    setListenQueueSize : function(listenQueueSize) {},
    setPort : function(port) {},
    setTimeout : function(timeout) {},
    write : function(buffer) {
     return 0;
    }

   },
   CLOSED : 0,
   CONNECTED : 0,
   ERROR : 0,
   INITIALIZED : 0,
   LISTENING : 0,
   addEventListener : function(name, callback) {},
   createTCP : function(params) {
    return new Ti.Network.Socket.TCP();
   },
   fireEvent : function(name, event) {},
   removeEventListener : function(name, callback) {}

  },
  TCPSocket : {
   hostName : '',
   isValid : false,
   mode : 0,
   port : 0,
   stripTerminator : false,
   addEventListener : function(name, callback) {},
   close : function() {},
   connect : function() {},
   fireEvent : function(name, event) {},
   getHostName : function() {
    return '';
   },
   getIsValid : function() {
    return false;
   },
   getMode : function() {
    return 0;
   },
   getPort : function() {
    return 0;
   },
   getStripTerminator : function() {
    return false;
   },
   listen : function() {},
   removeEventListener : function(name, callback) {},
   setHostName : function(hostName) {},
   setIsValid : function(isValid) {},
   setMode : function(mode) {},
   setPort : function(port) {},
   setStripTerminator : function(stripTerminator) {},
   write : function(data, sendTo) {}

  },
  INADDR_ANY : '',
  NETWORK_LAN : 0,
  NETWORK_MOBILE : 0,
  NETWORK_NONE : 0,
  NETWORK_UNKNOWN : 0,
  NETWORK_WIFI : 0,
  NOTIFICATION_TYPE_ALERT : 0,
  NOTIFICATION_TYPE_BADGE : 0,
  NOTIFICATION_TYPE_SOUND : 0,
  READ_MODE : 0,
  READ_WRITE_MODE : 0,
  SOCKET_CLOSED : 0,
  SOCKET_CONNECTED : 0,
  SOCKET_ERROR : 0,
  SOCKET_INITIALIZED : 0,
  SOCKET_LISTENING : 0,
  TLS_VERSION_1_0 : 0,
  TLS_VERSION_1_1 : 0,
  TLS_VERSION_1_2 : 0,
  WRITE_MODE : 0,
  address : '',
  networkType : 0,
  networkTypeName : '',
  online : false,
  remoteDeviceUUID : '',
  remoteNotificationTypes : [],
  remoteNotificationsEnabled : false,
  addConnectivityListener : function(callback) {},
  addEventListener : function(name, callback) {},
  createBonjourBrowser : function(serviceType, domain, parameters) {
   return new Ti.Network.BonjourBrowser();
  },
  createBonjourService : function(name, type, domain, parameters) {
   return new Ti.Network.BonjourService();
  },
  createHTTPClient : function(parameters) {
   return new Ti.Network.HTTPClient();
  },
  createTCPSocket : function(hostName, port, mode, parameters) {
   return new Ti.Network.TCPSocket();
  },
  decodeURIComponent : function(value) {
   return '';
  },
  encodeURIComponent : function(value) {
   return '';
  },
  fireEvent : function(name, event) {},
  getAddress : function() {
   return '';
  },
  getNetworkType : function() {
   return 0;
  },
  getNetworkTypeName : function() {
   return '';
  },
  getOnline : function() {
   return false;
  },
  getRemoteDeviceUUID : function() {
   return '';
  },
  getRemoteNotificationTypes : function() {
   return [];
  },
  getRemoteNotificationsEnabled : function() {
   return false;
  },
  registerForPushNotifications : function(config) {},
  removeConnectivityListener : function(callback) {},
  removeEventListener : function(name, callback) {},
  setAddress : function(address) {},
  unregisterForPushNotifications : function() {}

 },
 Platform : {
  DisplayCaps : {
   density : '',
   dpi : 0,
   platformHeight : 0,
   platformWidth : 0,
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getDensity : function() {
    return '';
   },
   getDpi : function() {
    return 0;
   },
   getPlatformHeight : function() {
    return 0;
   },
   getPlatformWidth : function() {
    return 0;
   },
   removeEventListener : function(name, callback) {},
   setDensity : function(density) {},
   setDpi : function(dpi) {},
   setPlatformHeight : function(platformHeight) {},
   setPlatformWidth : function(platformWidth) {}

  },
  BATTERY_STATE_CHARGING : 0,
  BATTERY_STATE_FULL : 0,
  BATTERY_STATE_UNKNOWN : 0,
  BATTERY_STATE_UNPLUGGED : 0,
  address : '',
  architecture : '',
  availableMemory : 0,
  batteryLevel : 0,
  batteryMonitoring : false,
  batteryState : 0,
  displayCaps : new Ti.Platform.DisplayCaps(),
  id : '',
  locale : '',
  macaddress : '',
  model : '',
  name : '',
  netmask : '',
  osname : '',
  ostype : '',
  processorCount : 0,
  runtime : '',
  username : '',
  version : '',
  addEventListener : function(name, callback) {},
  canOpenURL : function(url) {
   return false;
  },
  createUUID : function() {
   return '';
  },
  fireEvent : function(name, event) {},
  getAddress : function() {
   return '';
  },
  getArchitecture : function() {
   return '';
  },
  getAvailableMemory : function() {
   return 0;
  },
  getBatteryLevel : function() {
   return 0;
  },
  getBatteryMonitoring : function() {
   return false;
  },
  getBatteryState : function() {
   return 0;
  },
  getDisplayCaps : function() {
   return new Ti.Platform.DisplayCaps();
  },
  getId : function() {
   return '';
  },
  getLocale : function() {
   return '';
  },
  getMacaddress : function() {
   return '';
  },
  getModel : function() {
   return '';
  },
  getName : function() {
   return '';
  },
  getNetmask : function() {
   return '';
  },
  getOsname : function() {
   return '';
  },
  getOstype : function() {
   return '';
  },
  getProcessorCount : function() {
   return 0;
  },
  getRuntime : function() {
   return '';
  },
  getUsername : function() {
   return '';
  },
  getVersion : function() {
   return '';
  },
  is24HourTimeFormat : function() {
   return false;
  },
  openURL : function(url) {
   return false;
  },
  removeEventListener : function(name, callback) {}

 },
 Proxy : {
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  removeEventListener : function(name, callback) {}

 },
 Stream : {
  MODE_APPEND : 0,
  MODE_READ : 0,
  MODE_WRITE : 0,
  addEventListener : function(name, callback) {},
  createStream : function(params) {
   return new Ti.IOStream();
  },
  fireEvent : function(name, event) {},
  pump : function(inputStream, handler, maxChunkSize) {},
  pump : function(inputStream, handler, maxChunkSize, isAsync) {},
  read : function(sourceStream, buffer, resultsCallback) {},
  read : function(sourceStream, buffer, offset, length, resultsCallback) {},
  readAll : function(sourceStream) {
   return new Ti.Buffer();
  },
  readAll : function(sourceStream, buffer, resultsCallback) {},
  removeEventListener : function(name, callback) {},
  write : function(outputStream, buffer, resultsCallback) {},
  write : function(outputStream, buffer, offset, length, resultsCallback) {},
  writeStream : function(inputStream, outputStream, maxChunkSize) {
   return 0;
  },
  writeStream : function(inputStream, outputStream, maxChunkSize, resultsCallback) {}

 },
 UI : {
  ActivityIndicator : {
   color : '',
   font : new Font(),
   message : '',
   messageid : '',
   style : 0,
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getColor : function() {
    return '';
   },
   getFont : function() {
    return new Font();
   },
   getMessage : function() {
    return '';
   },
   getMessageid : function() {
    return '';
   },
   getStyle : function() {
    return 0;
   },
   hide : function() {},
   removeEventListener : function(name, callback) {},
   setColor : function(color) {},
   setFont : function(font) {},
   setMessage : function(message) {},
   setMessageid : function(messageid) {},
   setStyle : function(style) {},
   show : function() {}

  },
  AlertDialog : {
   androidView : new Ti.UI.View(),
   buttonNames : [],
   cancel : 0,
   message : '',
   messageid : '',
   ok : '',
   okid : '',
   title : '',
   titleid : '',
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getAndroidView : function() {
    return new Ti.UI.View();
   },
   getButtonNames : function() {
    return [];
   },
   getCancel : function() {
    return 0;
   },
   getMessage : function() {
    return '';
   },
   getOk : function() {
    return '';
   },
   getTitle : function() {
    return '';
   },
   hide : function() {},
   removeEventListener : function(name, callback) {},
   setAndroidView : function(androidView) {},
   setButtonNames : function(buttonNames) {},
   setCancel : function(cancel) {},
   setMessage : function(message) {},
   setOk : function(ok) {},
   setTitle : function(title) {},
   show : function() {}

  },
  Animation : {
   autoreverse : false,
   backgroundColor : '',
   bottom : 0,
   center : {},
   color : '',
   curve : 0,
   delay : 0,
   duration : 0,
   height : 0,
   left : 0,
   opacity : 0,
   opaque : false,
   repeat : 0,
   right : 0,
   top : 0,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   transition : 0,
   visible : false,
   width : 0,
   zIndex : 0,
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getAutoreverse : function() {
    return false;
   },
   getBackgroundColor : function() {
    return '';
   },
   getBottom : function() {
    return 0;
   },
   getCenter : function() {
    return {};
   },
   getColor : function() {
    return '';
   },
   getCurve : function() {
    return 0;
   },
   getDelay : function() {
    return 0;
   },
   getDuration : function() {
    return 0;
   },
   getHeight : function() {
    return 0;
   },
   getLeft : function() {
    return 0;
   },
   getOpacity : function() {
    return 0;
   },
   getOpaque : function() {
    return false;
   },
   getRepeat : function() {
    return 0;
   },
   getRight : function() {
    return 0;
   },
   getTop : function() {
    return 0;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getTransition : function() {
    return 0;
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return 0;
   },
   getZIndex : function() {
    return 0;
   },
   removeEventListener : function(name, callback) {},
   setAutoreverse : function(autoreverse) {},
   setBackgroundColor : function(backgroundColor) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setColor : function(color) {},
   setCurve : function(curve) {},
   setDelay : function(delay) {},
   setDuration : function(duration) {},
   setHeight : function(height) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setOpaque : function(opaque) {},
   setRepeat : function(repeat) {},
   setRight : function(right) {},
   setTop : function(top) {},
   setTransform : function(transform) {},
   setTransition : function(transition) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {}

  },
  Button : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundDisabledImage : '',
   backgroundFocusedImage : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundSelectedImage : '',
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   color : '',
   enabled : false,
   font : new Font(),
   height : null /* String, Number */ ,
   image : null /* Ti.Blob, String */ ,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   selectedColor : '',
   size : {},
   style : 0,
   systemButton : 0,
   textAlign : null /* Number, String */ ,
   title : '',
   titleid : '',
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundDisabledImage : function() {
    return '';
   },
   getBackgroundFocusedImage : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundSelectedImage : function() {
    return '';
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getColor : function() {
    return '';
   },
   getEnabled : function() {
    return false;
   },
   getFont : function() {
    return new Font();
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getImage : function() {
    return null /* Ti.Blob, String */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSelectedColor : function() {
    return '';
   },
   getSize : function() {
    return {};
   },
   getStyle : function() {
    return 0;
   },
   getSystemButton : function() {
    return 0;
   },
   getTextAlign : function() {
    return null /* Number, String */ ;
   },
   getTitle : function() {
    return '';
   },
   getTitleid : function() {
    return '';
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundDisabledImage : function(backgroundDisabledImage) {},
   setBackgroundFocusedImage : function(backgroundFocusedImage) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundSelectedImage : function(backgroundSelectedImage) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setColor : function(color) {},
   setEnabled : function(enabled) {},
   setFont : function(font) {},
   setHeight : function(height) {},
   setImage : function(image) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setSelectedColor : function(selectedColor) {},
   setStyle : function(style) {},
   setSystemButton : function(systemButton) {},
   setTextAlign : function(textAlign) {},
   setTitle : function(title) {},
   setTitleid : function(titleid) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  ButtonBar : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   height : null /* String, Number */ ,
   index : 0,
   labels : [],
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   style : 0,
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getIndex : function() {
    return 0;
   },
   getLabels : function() {
    return [];
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getStyle : function() {
    return 0;
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setHeight : function(height) {},
   setIndex : function(index) {},
   setLabels : function(labels) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setStyle : function(style) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  Clipboard : {
   addEventListener : function(name, callback) {},
   clearData : function(type) {},
   clearText : function() {},
   fireEvent : function(name, event) {},
   getData : function(type) {},
   getText : function() {},
   hasData : function(type) {},
   hasText : function() {},
   removeEventListener : function(name, callback) {},
   setData : function(type, data) {},
   setText : function(text) {}

  },
  CoverFlowView : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   height : null /* String, Number */ ,
   images : [],
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   selected : 0,
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getImages : function() {
    return [];
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSelected : function() {
    return 0;
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setHeight : function(height) {},
   setImage : function(index, image) {},
   setImages : function(images) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setSelected : function(selected) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  DashboardItem : {
   badge : 0,
   canDelete : false,
   image : null /* Ti.Blob, String */ ,
   selectedImage : null /* Ti.Blob, String */ ,
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getBadge : function() {
    return 0;
   },
   getCanDelete : function() {
    return false;
   },
   getImage : function() {
    return null /* Ti.Blob, String */ ;
   },
   getSelectedImage : function() {
    return null /* Ti.Blob, String */ ;
   },
   removeEventListener : function(name, callback) {},
   setBadge : function(badge) {},
   setCanDelete : function(canDelete) {},
   setImage : function(image) {},
   setSelectedImage : function(selectedImage) {}

  },
  DashboardView : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   data : [],
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   wobble : false,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getData : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getWobble : function() {
    return false;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setData : function(data) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setWobble : function(wobble) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   startEditing : function() {},
   stopEditing : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  EmailDialog : {
   CANCELLED : 0,
   FAILED : 0,
   SAVED : 0,
   SENT : 0,
   barColor : '',
   bccRecipients : [],
   ccRecipients : [],
   html : false,
   messageBody : '',
   subject : '',
   toRecipients : [],
   addAttachment : function(attachment) {},
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getBarColor : function() {
    return '';
   },
   getBccRecipients : function() {
    return [];
   },
   getCcRecipients : function() {
    return [];
   },
   getHtml : function() {
    return false;
   },
   getMessageBody : function() {
    return '';
   },
   getSubject : function() {
    return '';
   },
   getToRecipients : function() {
    return [];
   },
   isSupported : function() {},
   open : function(properties) {},
   removeEventListener : function(name, callback) {},
   setBarColor : function(barColor) {},
   setBccRecipients : function(bccRecipients) {},
   setCcRecipients : function(ccRecipients) {},
   setHtml : function(html) {},
   setMessageBody : function(messageBody) {},
   setSubject : function(subject) {},
   setToRecipients : function(toRecipients) {}

  },
  ImageView : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   animating : false,
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   defaultImage : '',
   duration : 0,
   height : null /* String, Number */ ,
   hires : false,
   image : null /* Ti.Blob, String, Ti.Filesystem.File */ ,
   images : [],
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   paused : false,
   preventDefaultImage : false,
   repeatCount : 0,
   reverse : false,
   right : null /* String, Number */ ,
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   url : '',
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getAnimating : function() {
    return false;
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getDefaultImage : function() {
    return '';
   },
   getDuration : function() {
    return 0;
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getHires : function() {
    return false;
   },
   getImage : function() {
    return null /* Ti.Blob, String */ ;
   },
   getImages : function() {
    return [];
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getPaused : function() {
    return false;
   },
   getPreventDefaultImage : function() {
    return false;
   },
   getRepeatCount : function() {
    return 0;
   },
   getReverse : function() {
    return false;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getUrl : function() {
    return '';
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   pause : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setDefaultImage : function(defaultImage) {},
   setDuration : function(duration) {},
   setHeight : function(height) {},
   setHires : function(hires) {},
   setImage : function(image) {},
   setImages : function(images) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setPreventDefaultImage : function(preventDefaultImage) {},
   setRepeatCount : function(repeatCount) {},
   setReverse : function(reverse) {},
   setRight : function(right) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setUrl : function(url) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   start : function() {},
   stop : function() {},
   toBlob : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  Label : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundPaddingBottom : 0,
   backgroundPaddingLeft : 0,
   backgroundPaddingRight : 0,
   backgroundPaddingTop : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   color : '',
   font : new Font(),
   height : null /* String, Number */ ,
   highlightedColor : '',
   layout : '',
   left : null /* String, Number */ ,
   minimumFontSize : 0,
   opacity : 0,
   right : null /* String, Number */ ,
   shadowColor : '',
   shadowOffset : {},
   size : {},
   text : '',
   textAlign : null /* Number, String */ ,
   textid : '',
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundPaddingBottom : function() {
    return 0;
   },
   getBackgroundPaddingLeft : function() {
    return 0;
   },
   getBackgroundPaddingRight : function() {
    return 0;
   },
   getBackgroundPaddingTop : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getColor : function() {
    return '';
   },
   getFont : function() {
    return new Font();
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getHighlightedColor : function() {
    return '';
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getMinimumFontSize : function() {
    return 0;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getShadowColor : function() {
    return '';
   },
   getShadowOffset : function() {
    return {};
   },
   getSize : function() {
    return {};
   },
   getText : function() {
    return '';
   },
   getTextAlign : function() {
    return null /* Number, String */ ;
   },
   getTextid : function() {
    return '';
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundPaddingBottom : function(backgroundPaddingBottom) {},
   setBackgroundPaddingLeft : function(backgroundPaddingLeft) {},
   setBackgroundPaddingRight : function(backgroundPaddingRight) {},
   setBackgroundPaddingTop : function(backgroundPaddingTop) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setColor : function(color) {},
   setFont : function(font) {},
   setHeight : function(height) {},
   setHighlightedColor : function(highlightedColor) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setMinimumFontSize : function(minimumFontSize) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setShadowColor : function(shadowColor) {},
   setShadowOffset : function(shadowOffset) {},
   setText : function(text) {},
   setTextAlign : function(textAlign) {},
   setTextid : function(textid) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  MaskedImage : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   height : null /* String, Number */ ,
   image : '',
   layout : '',
   left : null /* String, Number */ ,
   mask : '',
   mode : 0,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   tint : '',
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getImage : function() {
    return '';
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getMask : function() {
    return '';
   },
   getMode : function() {
    return 0;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getTint : function() {
    return '';
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setHeight : function(height) {},
   setImage : function(image) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setMask : function(mask) {},
   setMode : function(mode) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setTint : function(tint) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  OptionDialog : {
   cancel : 0,
   destructive : 0,
   options : [],
   title : '',
   titleid : '',
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getCancel : function() {
    return 0;
   },
   getDestructive : function() {
    return 0;
   },
   getOptions : function() {
    return [];
   },
   getTitle : function() {
    return '';
   },
   getTitleid : function() {
    return '';
   },
   removeEventListener : function(name, callback) {},
   setCancel : function(cancel) {},
   setDestructive : function(destructive) {},
   setOptions : function(options) {},
   setTitle : function(title) {},
   setTitleid : function(titleid) {},
   show : function(view) {}

  },
  Picker : {
   columns : [],
   countDownDuration : 0,
   maxDate : new Date(),
   minDate : new Date(),
   minuteInterval : 0,
   selectionIndicator : false,
   type : 0,
   value : new Date(),
   add : function(data) {},
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getColumns : function() {
    return [];
   },
   getCountDownDuration : function() {
    return 0;
   },
   getMaxDate : function() {
    return new Date();
   },
   getMinDate : function() {
    return new Date();
   },
   getMinuteInterval : function() {
    return 0;
   },
   getSelectedRow : function(index) {
    return new Ti.UI.PickerRow();
   },
   getSelectionIndicator : function() {
    return false;
   },
   getType : function() {
    return 0;
   },
   getValue : function() {
    return new Date();
   },
   reloadColumn : function(column) {},
   removeEventListener : function(name, callback) {},
   setColumns : function(columns) {},
   setCountDownDuration : function(countDownDuration) {},
   setMaxDate : function(maxDate) {},
   setMinDate : function(minDate) {},
   setMinuteInterval : function(minuteInterval) {},
   setSelectedRow : function(column, row, animated) {},
   setSelectionIndicator : function(selectionIndicator) {},
   setType : function(type) {},
   setValue : function(date, suppressEvent) {
    return new Ti.UI.PickerRow();
   }

  },
  PickerColumn : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   rowCount : 0,
   rows : [],
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   addRow : function(row) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getRowCount : function() {
    return 0;
   },
   getRows : function() {
    return [];
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   removeRow : function(row) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  PickerRow : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   fontSize : 0,
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   title : '',
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getFontSize : function() {
    return 0;
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getTitle : function() {
    return '';
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setFontSize : function(fontSize) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setTitle : function(title) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  ProgressBar : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   color : '',
   font : new Font(),
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   max : 0,
   message : '',
   min : 0,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   style : 0,
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   value : 0,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getColor : function() {
    return '';
   },
   getFont : function() {
    return new Font();
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getMax : function() {
    return 0;
   },
   getMessage : function() {
    return '';
   },
   getMin : function() {
    return 0;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getStyle : function() {
    return 0;
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getValue : function() {
    return 0;
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setColor : function(color) {},
   setFont : function(font) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setMax : function(max) {},
   setMessage : function(message) {},
   setMin : function(min) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setStyle : function(style) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setValue : function(value) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  ScrollView : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   canCancelEvents : false,
   center : new Point(),
   children : [],
   contentHeight : 0,
   contentOffset : {},
   contentWidth : 0,
   disableBounce : false,
   height : null /* String, Number */ ,
   horizontalBounce : false,
   layout : '',
   left : null /* String, Number */ ,
   maxZoomScale : 0,
   minZoomScale : 0,
   opacity : 0,
   right : null /* String, Number */ ,
   showHorizontalScrollIndicator : false,
   showVerticalScrollIndicator : false,
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   verticalBounce : false,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   zoomScale : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCanCancelEvents : function() {
    return false;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getContentHeight : function() {
    return 0;
   },
   getContentOffset : function() {
    return {};
   },
   getContentWidth : function() {
    return 0;
   },
   getDisableBounce : function() {
    return false;
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getHorizontalBounce : function() {
    return false;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getMaxZoomScale : function() {
    return 0;
   },
   getMinZoomScale : function() {
    return 0;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getShowHorizontalScrollIndicator : function() {
    return false;
   },
   getShowVerticalScrollIndicator : function() {
    return false;
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVerticalBounce : function() {
    return false;
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   getZoomScale : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   scrollTo : function(x, y) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCanCancelEvents : function(canCancelEvents) {},
   setCenter : function(center) {},
   setContentHeight : function(contentHeight) {},
   setContentOffset : function(contentOffset, animated) {},
   setContentWidth : function(contentWidth) {},
   setDisableBounce : function(disableBounce) {},
   setHeight : function(height) {},
   setHorizontalBounce : function(horizontalBounce) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setMaxZoomScale : function(maxZoomScale) {},
   setMinZoomScale : function(minZoomScale) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setShowHorizontalScrollIndicator : function(showHorizontalScrollIndicator) {},
   setShowVerticalScrollIndicator : function(showVerticalScrollIndicator) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVerticalBounce : function(verticalBounce) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   setZoomScale : function(zoomScale) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  ScrollableView : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   cacheSize : 0,
   center : new Point(),
   children : [],
   currentPage : 0,
   disableBounce : false,
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   pagingControlColor : '',
   pagingControlHeight : 0,
   right : null /* String, Number */ ,
   showPagingControl : false,
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   views : [],
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   addView : function(view) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCacheSize : function() {
    return 0;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getCurrentPage : function() {
    return 0;
   },
   getDisableBounce : function() {
    return false;
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getPagingControlColor : function() {
    return '';
   },
   getPagingControlHeight : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getShowPagingControl : function() {
    return false;
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getViews : function() {
    return [];
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   removeView : function(view) {},
   scrollToView : function(view) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCacheSize : function(cacheSize) {},
   setCenter : function(center) {},
   setCurrentPage : function(currentPage) {},
   setDisableBounce : function(disableBounce) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setPagingControlColor : function(pagingControlColor) {},
   setPagingControlHeight : function(pagingControlHeight) {},
   setRight : function(right) {},
   setShowPagingControl : function(showPagingControl) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setViews : function(views) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  SearchBar : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   autocapitalization : 0,
   autocorrect : false,
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   barColor : '',
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   height : null /* String, Number */ ,
   hintText : '',
   hinttextid : '',
   keyboardType : 0,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   prompt : '',
   promptid : '',
   right : null /* String, Number */ ,
   showCancel : false,
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   value : '',
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   blur : function() {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   focus : function() {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getAutocapitalization : function() {
    return 0;
   },
   getAutocorrect : function() {
    return false;
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBarColor : function() {
    return '';
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getHintText : function() {
    return '';
   },
   getHinttextid : function() {
    return '';
   },
   getKeyboardType : function() {
    return 0;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getPrompt : function() {
    return '';
   },
   getPromptid : function() {
    return '';
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getShowCancel : function() {
    return false;
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getValue : function() {
    return '';
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setAutocapitalization : function(autocapitalization) {},
   setAutocorrect : function(autocorrect) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBarColor : function(barColor) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setHeight : function(height) {},
   setHintText : function(hintText) {},
   setHinttextid : function(hinttextid) {},
   setKeyboardType : function(keyboardType) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setPrompt : function(prompt) {},
   setPromptid : function(promptid) {},
   setRight : function(right) {},
   setShowCancel : function(showCancel) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setValue : function(value) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  Slider : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   disabledLeftTrackImage : '',
   disabledRightTrackImage : '',
   disabledThumbImage : '',
   enabled : false,
   height : null /* String, Number */ ,
   highlightedLeftTrackImage : '',
   highlightedRightTrackImage : '',
   highlightedThumbImage : '',
   layout : '',
   left : null /* String, Number */ ,
   leftTrackImage : '',
   max : 0,
   min : 0,
   opacity : 0,
   right : null /* String, Number */ ,
   rightTrackImage : '',
   selectedLeftTrackImage : '',
   selectedRightTrackImage : '',
   selectedThumbImage : '',
   size : {},
   thumbImage : null /* Ti.Blob, String */ ,
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   value : '',
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getDisabledLeftTrackImage : function() {
    return '';
   },
   getDisabledRightTrackImage : function() {
    return '';
   },
   getDisabledThumbImage : function() {
    return '';
   },
   getEnabled : function() {
    return false;
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getHighlightedLeftTrackImage : function() {
    return '';
   },
   getHighlightedRightTrackImage : function() {
    return '';
   },
   getHighlightedThumbImage : function() {
    return '';
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getLeftTrackImage : function() {
    return '';
   },
   getMax : function() {
    return 0;
   },
   getMin : function() {
    return 0;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getRightTrackImage : function() {
    return '';
   },
   getSelectedLeftTrackImage : function() {
    return '';
   },
   getSelectedRightTrackImage : function() {
    return '';
   },
   getSelectedThumbImage : function() {
    return '';
   },
   getSize : function() {
    return {};
   },
   getThumbImage : function() {
    return null /* Ti.Blob, String */ ;
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getValue : function() {
    return '';
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setDisabledLeftTrackImage : function(disabledLeftTrackImage) {},
   setDisabledRightTrackImage : function(disabledRightTrackImage) {},
   setDisabledThumbImage : function(disabledThumbImage) {},
   setEnabled : function(enabled) {},
   setHeight : function(height) {},
   setHighlightedLeftTrackImage : function(highlightedLeftTrackImage) {},
   setHighlightedRightTrackImage : function(highlightedRightTrackImage) {},
   setHighlightedThumbImage : function(highlightedThumbImage) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setLeftTrackImage : function(leftTrackImage) {},
   setMax : function(max) {},
   setMin : function(min) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setRightTrackImage : function(rightTrackImage) {},
   setSelectedLeftTrackImage : function(selectedLeftTrackImage) {},
   setSelectedRightTrackImage : function(selectedRightTrackImage) {},
   setSelectedThumbImage : function(selectedThumbImage) {},
   setThumbImage : function(thumbImage) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setValue : function(value) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  Switch : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   enabled : false,
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   value : false,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getEnabled : function() {
    return false;
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getValue : function() {
    return false;
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setEnabled : function(enabled) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setValue : function(value) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  Tab : {
   active : false,
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   badge : '',
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   height : null /* String, Number */ ,
   icon : '',
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   title : '',
   titleid : '',
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   window : new Ti.UI.Window(),
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   close : function(options) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getActive : function() {
    return false;
   },
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBadge : function() {
    return '';
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getIcon : function() {
    return '';
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getTitle : function() {
    return '';
   },
   getTitleid : function() {
    return '';
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getWindow : function() {
    return new Ti.UI.Window();
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   open : function(window, options) {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setActive : function(active) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBadge : function(badge) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setHeight : function(height) {},
   setIcon : function(icon) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setTitle : function(title) {},
   setTitleid : function(titleid) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setWindow : function(window) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  TabGroup : {
   activeTab : new Ti.UI.Tab(),
   allowUserCustomization : false,
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   barColor : '',
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   editButtonTitle : '',
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   tabs : [],
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   addTab : function(tab) {},
   animate : function(obj, callback) {},
   close : function() {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getActiveTab : function() {
    return new Ti.UI.Tab();
   },
   getAllowUserCustomization : function() {
    return false;
   },
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBarColor : function() {
    return '';
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getEditButtonTitle : function() {
    return '';
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getTabs : function() {
    return [];
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   open : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   removeTab : function(tab) {},
   setActiveTab : function(indexOrObject) {},
   setAllowUserCustomization : function(allowUserCustomization) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBarColor : function(barColor) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setEditButtonTitle : function(editButtonTitle) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setTabs : function(tabs) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  TabbedBar : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   height : null /* String, Number */ ,
   index : 0,
   labels : [],
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   style : 0,
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getIndex : function() {
    return 0;
   },
   getLabels : function() {
    return [];
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getStyle : function() {
    return 0;
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setHeight : function(height) {},
   setIndex : function(index) {},
   setLabels : function(labels) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setStyle : function(style) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  TableView : {
   allowsSelection : false,
   allowsSelectionDuringEditing : false,
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   data : [],
   editable : false,
   editing : false,
   filterAttribute : '',
   filterCaseInsensitive : false,
   footerTitle : '',
   footerView : new Ti.UI.View(),
   headerTitle : '',
   headerView : new Ti.UI.View(),
   height : null /* String, Number */ ,
   index : [],
   layout : '',
   left : null /* String, Number */ ,
   maxRowHeight : 0,
   minRowHeight : 0,
   moving : false,
   opacity : 0,
   right : null /* String, Number */ ,
   rowHeight : 0,
   scrollable : false,
   search : new Ti.UI.SearchBar(),
   searchHidden : false,
   separatorColor : '',
   separatorStyle : 0,
   showVerticalScrollIndicator : false,
   size : {},
   style : 0,
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   appendRow : function(row, properties) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   deleteRow : function(row, properties) {},
   deselectRow : function(row) {},
   fireEvent : function(name, event) {},
   getAllowsSelection : function() {
    return false;
   },
   getAllowsSelectionDuringEditing : function() {
    return false;
   },
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getData : function() {
    return [];
   },
   getEditable : function() {
    return false;
   },
   getEditing : function() {
    return false;
   },
   getFilterAttribute : function() {
    return '';
   },
   getFilterCaseInsensitive : function() {
    return false;
   },
   getFooterTitle : function() {
    return '';
   },
   getFooterView : function() {
    return new Ti.UI.View();
   },
   getHeaderTitle : function() {
    return '';
   },
   getHeaderView : function() {
    return new Ti.UI.View();
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getIndex : function() {
    return [];
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getMaxRowHeight : function() {
    return 0;
   },
   getMinRowHeight : function() {
    return 0;
   },
   getMoving : function() {
    return false;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getRowHeight : function() {
    return 0;
   },
   getScrollable : function() {
    return false;
   },
   getSearch : function() {
    return new Ti.UI.SearchBar();
   },
   getSearchHidden : function() {
    return false;
   },
   getSeparatorColor : function() {
    return '';
   },
   getSeparatorStyle : function() {
    return 0;
   },
   getShowVerticalScrollIndicator : function() {
    return false;
   },
   getSize : function() {
    return {};
   },
   getStyle : function() {
    return 0;
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   insertRowAfter : function(index, row, properties) {},
   insertRowBefore : function(index, row, properties) {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   scrollToIndex : function(index, properties) {},
   scrollToTop : function(top, properties) {},
   selectRow : function(row) {},
   setAllowsSelection : function(allowsSelection) {},
   setAllowsSelectionDuringEditing : function(allowsSelectionDuringEditing) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setData : function(data, properties) {},
   setEditable : function(editable) {},
   setEditing : function(editing) {},
   setFilterAttribute : function(filterAttribute) {},
   setFilterCaseInsensitive : function(filterCaseInsensitive) {},
   setFooterTitle : function(footerTitle) {},
   setFooterView : function(footerView) {},
   setHeaderTitle : function(headerTitle) {},
   setHeaderView : function(headerView) {},
   setHeight : function(height) {},
   setIndex : function(index) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setMaxRowHeight : function(maxRowHeight) {},
   setMinRowHeight : function(minRowHeight) {},
   setMoving : function(moving) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setRowHeight : function(rowHeight) {},
   setScrollable : function(scrollable) {},
   setSearch : function(search) {},
   setSearchHidden : function(searchHidden) {},
   setSeparatorColor : function(separatorColor) {},
   setSeparatorStyle : function(separatorStyle) {},
   setShowVerticalScrollIndicator : function(showVerticalScrollIndicator) {},
   setStyle : function(style) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   },
   updateRow : function(index, row, properties) {}

  },
  TableViewRow : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   className : '',
   color : '',
   editable : false,
   hasCheck : false,
   hasChild : false,
   hasDetail : false,
   height : null /* String, Number */ ,
   indentionLevel : 0,
   layout : '',
   left : null /* String, Number */ ,
   leftImage : '',
   opacity : 0,
   right : null /* String, Number */ ,
   rightImage : '',
   selectedBackgroundColor : '',
   selectedBackgroundImage : '',
   selectedColor : '',
   selectionStyle : 0,
   size : {},
   title : '',
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getClassName : function() {
    return '';
   },
   getColor : function() {
    return '';
   },
   getEditable : function() {
    return false;
   },
   getHasCheck : function() {
    return false;
   },
   getHasChild : function() {
    return false;
   },
   getHasDetail : function() {
    return false;
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getIndentionLevel : function() {
    return 0;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getLeftImage : function() {
    return '';
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getRightImage : function() {
    return '';
   },
   getSelectedBackgroundColor : function() {
    return '';
   },
   getSelectedBackgroundImage : function() {
    return '';
   },
   getSelectedColor : function() {
    return '';
   },
   getSelectionStyle : function() {
    return 0;
   },
   getSize : function() {
    return {};
   },
   getTitle : function() {
    return '';
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setClassName : function(className) {},
   setColor : function(color) {},
   setEditable : function(editable) {},
   setHasCheck : function(hasCheck) {},
   setHasChild : function(hasChild) {},
   setHasDetail : function(hasDetail) {},
   setHeight : function(height) {},
   setIndentionLevel : function(indentionLevel) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setLeftImage : function(leftImage) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setRightImage : function(rightImage) {},
   setSelectedBackgroundColor : function(selectedBackgroundColor) {},
   setSelectedBackgroundImage : function(selectedBackgroundImage) {},
   setSelectedColor : function(selectedColor) {},
   setSelectionStyle : function(selectionStyle) {},
   setTitle : function(title) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  TableViewSection : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   footerTitle : '',
   footerView : {},
   headerTitle : '',
   headerView : {},
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   rowCount : 0,
   rows : [],
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getFooterTitle : function() {
    return '';
   },
   getFooterView : function() {
    return {};
   },
   getHeaderTitle : function() {
    return '';
   },
   getHeaderView : function() {
    return {};
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getRowCount : function() {
    return 0;
   },
   getRows : function() {
    return [];
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setFooterTitle : function(footerTitle) {},
   setFooterView : function(footerView) {},
   setHeaderTitle : function(headerTitle) {},
   setHeaderView : function(headerView) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  TextArea : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   appearance : 0,
   autoLink : 0,
   autocapitalization : 0,
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   editable : false,
   enabled : false,
   font : new Font(),
   height : null /* String, Number */ ,
   keyboardToolbar : [],
   keyboardToolbarColor : '',
   keyboardToolbarHeight : 0,
   keyboardType : 0,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   returnKeyType : 0,
   right : null /* String, Number */ ,
   scrollable : false,
   size : {},
   suppressReturn : false,
   textAlign : null /* Number, String */ ,
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   value : '',
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   blur : function() {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   focus : function() {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getAppearance : function() {
    return 0;
   },
   getAutoLink : function() {
    return 0;
   },
   getAutocapitalization : function() {
    return 0;
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getEditable : function() {
    return false;
   },
   getEnabled : function() {
    return false;
   },
   getFont : function() {
    return new Font();
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getKeyboardToolbar : function() {
    return [];
   },
   getKeyboardToolbarColor : function() {
    return '';
   },
   getKeyboardToolbarHeight : function() {
    return 0;
   },
   getKeyboardType : function() {
    return 0;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getReturnKeyType : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getScrollable : function() {
    return false;
   },
   getSize : function() {
    return {};
   },
   getSuppressReturn : function() {
    return false;
   },
   getTextAlign : function() {
    return null /* Number, String */ ;
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getValue : function() {
    return '';
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hasText : function() {},
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setAppearance : function(appearance) {},
   setAutoLink : function(autoLink) {},
   setAutocapitalization : function(autocapitalization) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setEditable : function(editable) {},
   setEnabled : function(enabled) {},
   setFont : function(font) {},
   setHeight : function(height) {},
   setKeyboardToolbar : function(keyboardToolbar) {},
   setKeyboardToolbarColor : function(keyboardToolbarColor) {},
   setKeyboardToolbarHeight : function(keyboardToolbarHeight) {},
   setKeyboardType : function(keyboardType) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setReturnKeyType : function(returnKeyType) {},
   setRight : function(right) {},
   setScrollable : function(scrollable) {},
   setSuppressReturn : function(suppressReturn) {},
   setTextAlign : function(textAlign) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setValue : function(value) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  TextField : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   appearance : 0,
   autocapitalization : 0,
   autocorrect : false,
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderStyle : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   clearButtonMode : 0,
   clearOnEdit : false,
   editable : false,
   enabled : false,
   font : new Font(),
   height : null /* String, Number */ ,
   hintText : '',
   keyboardToolbar : [],
   keyboardToolbarColor : '',
   keyboardToolbarHeight : 0,
   keyboardType : 0,
   layout : '',
   left : null /* String, Number */ ,
   leftButton : {},
   leftButtonMode : 0,
   leftButtonPadding : 0,
   maxLength : 0,
   minimumFontSize : 0,
   opacity : 0,
   paddingLeft : 0,
   paddingRight : 0,
   passwordMask : false,
   returnKeyType : 0,
   right : null /* String, Number */ ,
   rightButton : {},
   rightButtonMode : 0,
   rightButtonPadding : 0,
   size : {},
   suppressReturn : false,
   textAlign : null /* Number, String */ ,
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   value : '',
   verticalAlign : null /* String, Number */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   blur : function() {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   focus : function() {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getAppearance : function() {
    return 0;
   },
   getAutocapitalization : function() {
    return 0;
   },
   getAutocorrect : function() {
    return false;
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderStyle : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getClearButtonMode : function() {
    return 0;
   },
   getClearOnEdit : function() {
    return false;
   },
   getEditable : function() {
    return false;
   },
   getEnabled : function() {
    return false;
   },
   getFont : function() {
    return new Font();
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getHintText : function() {
    return '';
   },
   getKeyboardToolbar : function() {
    return [];
   },
   getKeyboardToolbarColor : function() {
    return '';
   },
   getKeyboardToolbarHeight : function() {
    return 0;
   },
   getKeyboardType : function() {
    return 0;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getLeftButton : function() {
    return {};
   },
   getLeftButtonMode : function() {
    return 0;
   },
   getLeftButtonPadding : function() {
    return 0;
   },
   getMaxLength : function() {
    return 0;
   },
   getMinimumFontSize : function() {
    return 0;
   },
   getOpacity : function() {
    return 0;
   },
   getPaddingLeft : function() {
    return 0;
   },
   getPaddingRight : function() {
    return 0;
   },
   getPasswordMask : function() {
    return false;
   },
   getReturnKeyType : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getRightButton : function() {
    return {};
   },
   getRightButtonMode : function() {
    return 0;
   },
   getRightButtonPadding : function() {
    return 0;
   },
   getSize : function() {
    return {};
   },
   getSuppressReturn : function() {
    return false;
   },
   getTextAlign : function() {
    return null /* Number, String */ ;
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getValue : function() {
    return '';
   },
   getVerticalAlign : function() {
    return null /* String, Number */ ;
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hasText : function() {},
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setAppearance : function(appearance) {},
   setAutocapitalization : function(autocapitalization) {},
   setAutocorrect : function(autocorrect) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderStyle : function(borderStyle) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setClearButtonMode : function(clearButtonMode) {},
   setClearOnEdit : function(clearOnEdit) {},
   setEditable : function(editable) {},
   setEnabled : function(enabled) {},
   setFont : function(font) {},
   setHeight : function(height) {},
   setHintText : function(hintText) {},
   setKeyboardToolbar : function(keyboardToolbar) {},
   setKeyboardToolbarColor : function(keyboardToolbarColor) {},
   setKeyboardToolbarHeight : function(keyboardToolbarHeight) {},
   setKeyboardType : function(keyboardType) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setLeftButton : function(leftButton) {},
   setLeftButtonMode : function(leftButtonMode) {},
   setLeftButtonPadding : function(leftButtonPadding) {},
   setMaxLength : function(maxLength) {},
   setMinimumFontSize : function(minimumFontSize) {},
   setOpacity : function(opacity) {},
   setPaddingLeft : function(paddingLeft) {},
   setPaddingRight : function(paddingRight) {},
   setPasswordMask : function(passwordMask) {},
   setReturnKeyType : function(returnKeyType) {},
   setRight : function(right) {},
   setRightButton : function(rightButton) {},
   setRightButtonMode : function(rightButtonMode) {},
   setRightButtonPadding : function(rightButtonPadding) {},
   setSuppressReturn : function(suppressReturn) {},
   setTextAlign : function(textAlign) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setValue : function(value) {},
   setVerticalAlign : function(verticalAlign) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  Toolbar : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  View : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   opacity : 0,
   right : null /* String, Number */ ,
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  WebView : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   data : {},
   height : null /* String, Number */ ,
   html : '',
   layout : '',
   left : null /* String, Number */ ,
   loading : false,
   opacity : 0,
   right : null /* String, Number */ ,
   scalesPageToFit : false,
   size : {},
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   url : '',
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   canGoBack : function() {
    return false;
   },
   canGoForward : function() {
    return false;
   },
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   evalJS : function(content) {
    return '';
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getData : function() {
    return {};
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getHtml : function() {
    return '';
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getLoading : function() {
    return false;
   },
   getOpacity : function() {
    return 0;
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getScalesPageToFit : function() {
    return false;
   },
   getSize : function() {
    return {};
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getUrl : function() {
    return '';
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   goBack : function() {},
   goForward : function() {},
   hide : function() {},
   reload : function() {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   repaint : function() {},
   setAnchorPoint : function(anchorPoint) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBasicAuthentication : function(username, password) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setData : function(data) {},
   setHeight : function(height) {},
   setHtml : function(html, baseURL, mimeType) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setLoading : function(loading) {},
   setOpacity : function(opacity) {},
   setRight : function(right) {},
   setScalesPageToFit : function(scalesPageToFit) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setUrl : function(url) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   stopLoading : function(hardStop) {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  Window : {
   anchorPoint : new Point(),
   animatedCenterPoint : new Point(),
   backButtonTitle : '',
   backButtonTitleImage : null /* Ti.Blob, String */ ,
   backgroundColor : '',
   backgroundGradient : new Gradient(),
   backgroundImage : '',
   backgroundLeftCap : 0,
   backgroundRepeat : false,
   backgroundTopCap : 0,
   barColor : '',
   barImage : '',
   borderColor : '',
   borderRadius : 0,
   borderWidth : 0,
   bottom : null /* String, Number */ ,
   center : new Point(),
   children : [],
   fullscreen : false,
   height : null /* String, Number */ ,
   layout : '',
   left : null /* String, Number */ ,
   leftNavButton : new Ti.UI.View(),
   modal : false,
   navBarHidden : false,
   opacity : 0,
   orientation : 0,
   orientationModes : [],
   right : null /* String, Number */ ,
   rightNavButton : new Ti.UI.View(),
   size : {},
   tabBarHidden : false,
   title : '',
   titleControl : new Ti.UI.View(),
   titleImage : '',
   titlePrompt : '',
   titleid : '',
   titlepromptid : '',
   toolbar : [],
   top : null /* String, Number */ ,
   touchEnabled : false,
   transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
   translucent : false,
   url : '',
   visible : false,
   width : null /* String, Number */ ,
   zIndex : 0,
   add : function(view) {},
   addEventListener : function(name, callback) {},
   animate : function(obj, callback) {},
   close : function(options) {},
   convertPointToView : function(point, destinationView) {
    return new Point();
   },
   fireEvent : function(name, event) {},
   getAnchorPoint : function() {
    return new Point();
   },
   getAnimatedCenterPoint : function() {
    return new Point();
   },
   getBackButtonTitle : function() {
    return '';
   },
   getBackButtonTitleImage : function() {
    return null /* Ti.Blob, String */ ;
   },
   getBackgroundColor : function() {
    return '';
   },
   getBackgroundGradient : function() {
    return new Gradient();
   },
   getBackgroundImage : function() {
    return '';
   },
   getBackgroundLeftCap : function() {
    return 0;
   },
   getBackgroundRepeat : function() {
    return false;
   },
   getBackgroundTopCap : function() {
    return 0;
   },
   getBarColor : function() {
    return '';
   },
   getBarImage : function() {
    return '';
   },
   getBorderColor : function() {
    return '';
   },
   getBorderRadius : function() {
    return 0;
   },
   getBorderWidth : function() {
    return 0;
   },
   getBottom : function() {
    return null /* String, Number */ ;
   },
   getCenter : function() {
    return new Point();
   },
   getChildren : function() {
    return [];
   },
   getFullscreen : function() {
    return false;
   },
   getHeight : function() {
    return null /* String, Number */ ;
   },
   getLayout : function() {
    return '';
   },
   getLeft : function() {
    return null /* String, Number */ ;
   },
   getLeftNavButton : function() {
    return new Ti.UI.View();
   },
   getModal : function() {
    return false;
   },
   getNavBarHidden : function() {
    return false;
   },
   getOpacity : function() {
    return 0;
   },
   getOrientation : function() {
    return 0;
   },
   getOrientationModes : function() {
    return [];
   },
   getRight : function() {
    return null /* String, Number */ ;
   },
   getRightNavButton : function() {
    return new Ti.UI.View();
   },
   getSize : function() {
    return {};
   },
   getTabBarHidden : function() {
    return false;
   },
   getTitle : function() {
    return '';
   },
   getTitleControl : function() {
    return new Ti.UI.View();
   },
   getTitleImage : function() {
    return '';
   },
   getTitlePrompt : function() {
    return '';
   },
   getTitleid : function() {
    return '';
   },
   getTitlepromptid : function() {
    return '';
   },
   getToolbar : function() {
    return [];
   },
   getTop : function() {
    return null /* String, Number */ ;
   },
   getTouchEnabled : function() {
    return false;
   },
   getTransform : function() {
    return new Ti.UI_();
   },
   getTranslucent : function() {
    return false;
   },
   getUrl : function() {
    return '';
   },
   getVisible : function() {
    return false;
   },
   getWidth : function() {
    return null /* String, Number */ ;
   },
   getZIndex : function() {
    return 0;
   },
   hide : function() {},
   hideTabBar : function() {},
   open : function(options) {},
   remove : function(view) {},
   removeEventListener : function(name, callback) {},
   setAnchorPoint : function(anchorPoint) {},
   setBackButtonTitle : function(backButtonTitle) {},
   setBackButtonTitleImage : function(backButtonTitleImage) {},
   setBackgroundColor : function(backgroundColor) {},
   setBackgroundGradient : function(backgroundGradient) {},
   setBackgroundImage : function(backgroundImage) {},
   setBackgroundLeftCap : function(backgroundLeftCap) {},
   setBackgroundRepeat : function(backgroundRepeat) {},
   setBackgroundTopCap : function(backgroundTopCap) {},
   setBarColor : function(barColor) {},
   setBarImage : function(barImage) {},
   setBorderColor : function(borderColor) {},
   setBorderRadius : function(borderRadius) {},
   setBorderWidth : function(borderWidth) {},
   setBottom : function(bottom) {},
   setCenter : function(center) {},
   setFullscreen : function(fullscreen) {},
   setHeight : function(height) {},
   setLayout : function(layout) {},
   setLeft : function(left) {},
   setLeftNavButton : function(leftNavButton) {},
   setModal : function(modal) {},
   setNavBarHidden : function(navBarHidden) {},
   setOpacity : function(opacity) {},
   setOrientation : function(orientation) {},
   setOrientationModes : function(orientationModes) {},
   setRight : function(right) {},
   setRightNavButton : function(rightNavButton) {},
   setTabBarHidden : function(tabBarHidden) {},
   setTitle : function(title) {},
   setTitleControl : function(titleControl) {},
   setTitleImage : function(titleImage) {},
   setTitlePrompt : function(titlePrompt) {},
   setTitleid : function(titleid) {},
   setTitlepromptid : function(titlepromptid) {},
   setToolbar : function(toolbar) {},
   setTop : function(top) {},
   setTouchEnabled : function(touchEnabled) {},
   setTransform : function(transform) {},
   setTranslucent : function(translucent) {},
   setVisible : function(visible) {},
   setWidth : function(width) {},
   setZIndex : function(zIndex) {},
   show : function() {},
   toImage : function(f) {
    return new Ti.Blob();
   }

  },
  iOS : {
   AdView : {
    adSize : '',
    anchorPoint : new Point(),
    animatedCenterPoint : new Point(),
    backgroundColor : '',
    backgroundGradient : new Gradient(),
    backgroundImage : '',
    backgroundLeftCap : 0,
    backgroundRepeat : false,
    backgroundTopCap : 0,
    borderColor : '',
    borderRadius : 0,
    borderWidth : 0,
    bottom : null /* String, Number */ ,
    center : new Point(),
    children : [],
    height : null /* String, Number */ ,
    layout : '',
    left : null /* String, Number */ ,
    opacity : 0,
    right : null /* String, Number */ ,
    size : {},
    top : null /* String, Number */ ,
    touchEnabled : false,
    transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
    visible : false,
    width : null /* String, Number */ ,
    zIndex : 0,
    add : function(view) {},
    addEventListener : function(name, callback) {},
    animate : function(obj, callback) {},
    cancelAction : function() {},
    convertPointToView : function(point, destinationView) {
     return new Point();
    },
    fireEvent : function(name, event) {},
    getAdSize : function() {
     return '';
    },
    getAnchorPoint : function() {
     return new Point();
    },
    getAnimatedCenterPoint : function() {
     return new Point();
    },
    getBackgroundColor : function() {
     return '';
    },
    getBackgroundGradient : function() {
     return new Gradient();
    },
    getBackgroundImage : function() {
     return '';
    },
    getBackgroundLeftCap : function() {
     return 0;
    },
    getBackgroundRepeat : function() {
     return false;
    },
    getBackgroundTopCap : function() {
     return 0;
    },
    getBorderColor : function() {
     return '';
    },
    getBorderRadius : function() {
     return 0;
    },
    getBorderWidth : function() {
     return 0;
    },
    getBottom : function() {
     return null /* String, Number */ ;
    },
    getCenter : function() {
     return new Point();
    },
    getChildren : function() {
     return [];
    },
    getHeight : function() {
     return null /* String, Number */ ;
    },
    getLayout : function() {
     return '';
    },
    getLeft : function() {
     return null /* String, Number */ ;
    },
    getOpacity : function() {
     return 0;
    },
    getRight : function() {
     return null /* String, Number */ ;
    },
    getSize : function() {
     return {};
    },
    getTop : function() {
     return null /* String, Number */ ;
    },
    getTouchEnabled : function() {
     return false;
    },
    getTransform : function() {
     return new Ti.UI_();
    },
    getVisible : function() {
     return false;
    },
    getWidth : function() {
     return null /* String, Number */ ;
    },
    getZIndex : function() {
     return 0;
    },
    hide : function() {},
    remove : function(view) {},
    removeEventListener : function(name, callback) {},
    setAdSize : function(adSize) {},
    setAnchorPoint : function(anchorPoint) {},
    setBackgroundColor : function(backgroundColor) {},
    setBackgroundGradient : function(backgroundGradient) {},
    setBackgroundImage : function(backgroundImage) {},
    setBackgroundLeftCap : function(backgroundLeftCap) {},
    setBackgroundRepeat : function(backgroundRepeat) {},
    setBackgroundTopCap : function(backgroundTopCap) {},
    setBorderColor : function(borderColor) {},
    setBorderRadius : function(borderRadius) {},
    setBorderWidth : function(borderWidth) {},
    setBottom : function(bottom) {},
    setCenter : function(center) {},
    setHeight : function(height) {},
    setLayout : function(layout) {},
    setLeft : function(left) {},
    setOpacity : function(opacity) {},
    setRight : function(right) {},
    setTop : function(top) {},
    setTouchEnabled : function(touchEnabled) {},
    setTransform : function(transform) {},
    setVisible : function(visible) {},
    setWidth : function(width) {},
    setZIndex : function(zIndex) {},
    show : function() {},
    toImage : function(f) {
     return new Ti.Blob();
    }

   },
   CoverFlowView : {
    anchorPoint : new Point(),
    animatedCenterPoint : new Point(),
    backgroundColor : '',
    backgroundGradient : new Gradient(),
    backgroundImage : '',
    backgroundLeftCap : 0,
    backgroundRepeat : false,
    backgroundTopCap : 0,
    borderColor : '',
    borderRadius : 0,
    borderWidth : 0,
    bottom : null /* String, Number */ ,
    center : new Point(),
    children : [],
    height : null /* String, Number */ ,
    images : [],
    layout : '',
    left : null /* String, Number */ ,
    opacity : 0,
    right : null /* String, Number */ ,
    selected : 0,
    size : {},
    top : null /* String, Number */ ,
    touchEnabled : false,
    transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
    visible : false,
    width : null /* String, Number */ ,
    zIndex : 0,
    add : function(view) {},
    addEventListener : function(name, callback) {},
    animate : function(obj, callback) {},
    convertPointToView : function(point, destinationView) {
     return new Point();
    },
    fireEvent : function(name, event) {},
    getAnchorPoint : function() {
     return new Point();
    },
    getAnimatedCenterPoint : function() {
     return new Point();
    },
    getBackgroundColor : function() {
     return '';
    },
    getBackgroundGradient : function() {
     return new Gradient();
    },
    getBackgroundImage : function() {
     return '';
    },
    getBackgroundLeftCap : function() {
     return 0;
    },
    getBackgroundRepeat : function() {
     return false;
    },
    getBackgroundTopCap : function() {
     return 0;
    },
    getBorderColor : function() {
     return '';
    },
    getBorderRadius : function() {
     return 0;
    },
    getBorderWidth : function() {
     return 0;
    },
    getBottom : function() {
     return null /* String, Number */ ;
    },
    getCenter : function() {
     return new Point();
    },
    getChildren : function() {
     return [];
    },
    getHeight : function() {
     return null /* String, Number */ ;
    },
    getImages : function() {
     return [];
    },
    getLayout : function() {
     return '';
    },
    getLeft : function() {
     return null /* String, Number */ ;
    },
    getOpacity : function() {
     return 0;
    },
    getRight : function() {
     return null /* String, Number */ ;
    },
    getSelected : function() {
     return 0;
    },
    getSize : function() {
     return {};
    },
    getTop : function() {
     return null /* String, Number */ ;
    },
    getTouchEnabled : function() {
     return false;
    },
    getTransform : function() {
     return new Ti.UI_();
    },
    getVisible : function() {
     return false;
    },
    getWidth : function() {
     return null /* String, Number */ ;
    },
    getZIndex : function() {
     return 0;
    },
    hide : function() {},
    remove : function(view) {},
    removeEventListener : function(name, callback) {},
    setAnchorPoint : function(anchorPoint) {},
    setBackgroundColor : function(backgroundColor) {},
    setBackgroundGradient : function(backgroundGradient) {},
    setBackgroundImage : function(backgroundImage) {},
    setBackgroundLeftCap : function(backgroundLeftCap) {},
    setBackgroundRepeat : function(backgroundRepeat) {},
    setBackgroundTopCap : function(backgroundTopCap) {},
    setBorderColor : function(borderColor) {},
    setBorderRadius : function(borderRadius) {},
    setBorderWidth : function(borderWidth) {},
    setBottom : function(bottom) {},
    setCenter : function(center) {},
    setHeight : function(height) {},
    setImage : function(index, image) {},
    setImages : function(images) {},
    setLayout : function(layout) {},
    setLeft : function(left) {},
    setOpacity : function(opacity) {},
    setRight : function(right) {},
    setSelected : function(selected) {},
    setTop : function(top) {},
    setTouchEnabled : function(touchEnabled) {},
    setTransform : function(transform) {},
    setVisible : function(visible) {},
    setWidth : function(width) {},
    setZIndex : function(zIndex) {},
    show : function() {},
    toImage : function(f) {
     return new Ti.Blob();
    }

   },
   TabbedBar : {
    anchorPoint : new Point(),
    animatedCenterPoint : new Point(),
    backgroundColor : '',
    backgroundGradient : new Gradient(),
    backgroundImage : '',
    backgroundLeftCap : 0,
    backgroundRepeat : false,
    backgroundTopCap : 0,
    borderColor : '',
    borderRadius : 0,
    borderWidth : 0,
    bottom : null /* String, Number */ ,
    center : new Point(),
    children : [],
    height : null /* String, Number */ ,
    index : 0,
    labels : [],
    layout : '',
    left : null /* String, Number */ ,
    opacity : 0,
    right : null /* String, Number */ ,
    size : {},
    style : 0,
    top : null /* String, Number */ ,
    touchEnabled : false,
    transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
    visible : false,
    width : null /* String, Number */ ,
    zIndex : 0,
    add : function(view) {},
    addEventListener : function(name, callback) {},
    animate : function(obj, callback) {},
    convertPointToView : function(point, destinationView) {
     return new Point();
    },
    fireEvent : function(name, event) {},
    getAnchorPoint : function() {
     return new Point();
    },
    getAnimatedCenterPoint : function() {
     return new Point();
    },
    getBackgroundColor : function() {
     return '';
    },
    getBackgroundGradient : function() {
     return new Gradient();
    },
    getBackgroundImage : function() {
     return '';
    },
    getBackgroundLeftCap : function() {
     return 0;
    },
    getBackgroundRepeat : function() {
     return false;
    },
    getBackgroundTopCap : function() {
     return 0;
    },
    getBorderColor : function() {
     return '';
    },
    getBorderRadius : function() {
     return 0;
    },
    getBorderWidth : function() {
     return 0;
    },
    getBottom : function() {
     return null /* String, Number */ ;
    },
    getCenter : function() {
     return new Point();
    },
    getChildren : function() {
     return [];
    },
    getHeight : function() {
     return null /* String, Number */ ;
    },
    getIndex : function() {
     return 0;
    },
    getLabels : function() {
     return [];
    },
    getLayout : function() {
     return '';
    },
    getLeft : function() {
     return null /* String, Number */ ;
    },
    getOpacity : function() {
     return 0;
    },
    getRight : function() {
     return null /* String, Number */ ;
    },
    getSize : function() {
     return {};
    },
    getStyle : function() {
     return 0;
    },
    getTop : function() {
     return null /* String, Number */ ;
    },
    getTouchEnabled : function() {
     return false;
    },
    getTransform : function() {
     return new Ti.UI_();
    },
    getVisible : function() {
     return false;
    },
    getWidth : function() {
     return null /* String, Number */ ;
    },
    getZIndex : function() {
     return 0;
    },
    hide : function() {},
    remove : function(view) {},
    removeEventListener : function(name, callback) {},
    setAnchorPoint : function(anchorPoint) {},
    setBackgroundColor : function(backgroundColor) {},
    setBackgroundGradient : function(backgroundGradient) {},
    setBackgroundImage : function(backgroundImage) {},
    setBackgroundLeftCap : function(backgroundLeftCap) {},
    setBackgroundRepeat : function(backgroundRepeat) {},
    setBackgroundTopCap : function(backgroundTopCap) {},
    setBorderColor : function(borderColor) {},
    setBorderRadius : function(borderRadius) {},
    setBorderWidth : function(borderWidth) {},
    setBottom : function(bottom) {},
    setCenter : function(center) {},
    setHeight : function(height) {},
    setIndex : function(index) {},
    setLabels : function(labels) {},
    setLayout : function(layout) {},
    setLeft : function(left) {},
    setOpacity : function(opacity) {},
    setRight : function(right) {},
    setStyle : function(style) {},
    setTop : function(top) {},
    setTouchEnabled : function(touchEnabled) {},
    setTransform : function(transform) {},
    setVisible : function(visible) {},
    setWidth : function(width) {},
    setZIndex : function(zIndex) {},
    show : function() {},
    toImage : function(f) {
     return new Ti.Blob();
    }

   },
   Toolbar : {
    anchorPoint : new Point(),
    animatedCenterPoint : new Point(),
    backgroundColor : '',
    backgroundGradient : new Gradient(),
    backgroundImage : '',
    backgroundLeftCap : 0,
    backgroundRepeat : false,
    backgroundTopCap : 0,
    barColor : '',
    borderBottom : false,
    borderColor : '',
    borderRadius : 0,
    borderTop : false,
    borderWidth : 0,
    bottom : null /* String, Number */ ,
    center : new Point(),
    children : [],
    height : null /* String, Number */ ,
    items : [],
    layout : '',
    left : null /* String, Number */ ,
    opacity : 0,
    right : null /* String, Number */ ,
    size : {},
    top : null /* String, Number */ ,
    touchEnabled : false,
    transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
    translucent : false,
    visible : false,
    width : null /* String, Number */ ,
    zIndex : 0,
    add : function(view) {},
    addEventListener : function(name, callback) {},
    animate : function(obj, callback) {},
    convertPointToView : function(point, destinationView) {
     return new Point();
    },
    fireEvent : function(name, event) {},
    getAnchorPoint : function() {
     return new Point();
    },
    getAnimatedCenterPoint : function() {
     return new Point();
    },
    getBackgroundColor : function() {
     return '';
    },
    getBackgroundGradient : function() {
     return new Gradient();
    },
    getBackgroundImage : function() {
     return '';
    },
    getBackgroundLeftCap : function() {
     return 0;
    },
    getBackgroundRepeat : function() {
     return false;
    },
    getBackgroundTopCap : function() {
     return 0;
    },
    getBarColor : function() {
     return '';
    },
    getBorderBottom : function() {
     return false;
    },
    getBorderColor : function() {
     return '';
    },
    getBorderRadius : function() {
     return 0;
    },
    getBorderTop : function() {
     return false;
    },
    getBorderWidth : function() {
     return 0;
    },
    getBottom : function() {
     return null /* String, Number */ ;
    },
    getCenter : function() {
     return new Point();
    },
    getChildren : function() {
     return [];
    },
    getHeight : function() {
     return null /* String, Number */ ;
    },
    getItems : function() {
     return [];
    },
    getLayout : function() {
     return '';
    },
    getLeft : function() {
     return null /* String, Number */ ;
    },
    getOpacity : function() {
     return 0;
    },
    getRight : function() {
     return null /* String, Number */ ;
    },
    getSize : function() {
     return {};
    },
    getTop : function() {
     return null /* String, Number */ ;
    },
    getTouchEnabled : function() {
     return false;
    },
    getTransform : function() {
     return new Ti.UI_();
    },
    getTranslucent : function() {
     return false;
    },
    getVisible : function() {
     return false;
    },
    getWidth : function() {
     return null /* String, Number */ ;
    },
    getZIndex : function() {
     return 0;
    },
    hide : function() {},
    remove : function(view) {},
    removeEventListener : function(name, callback) {},
    setAnchorPoint : function(anchorPoint) {},
    setBackgroundColor : function(backgroundColor) {},
    setBackgroundGradient : function(backgroundGradient) {},
    setBackgroundImage : function(backgroundImage) {},
    setBackgroundLeftCap : function(backgroundLeftCap) {},
    setBackgroundRepeat : function(backgroundRepeat) {},
    setBackgroundTopCap : function(backgroundTopCap) {},
    setBarColor : function(barColor) {},
    setBorderBottom : function(borderBottom) {},
    setBorderColor : function(borderColor) {},
    setBorderRadius : function(borderRadius) {},
    setBorderTop : function(borderTop) {},
    setBorderWidth : function(borderWidth) {},
    setBottom : function(bottom) {},
    setCenter : function(center) {},
    setHeight : function(height) {},
    setItems : function(items) {},
    setLayout : function(layout) {},
    setLeft : function(left) {},
    setOpacity : function(opacity) {},
    setRight : function(right) {},
    setTop : function(top) {},
    setTouchEnabled : function(touchEnabled) {},
    setTransform : function(transform) {},
    setTranslucent : function(translucent) {},
    setVisible : function(visible) {},
    setWidth : function(width) {},
    setZIndex : function(zIndex) {},
    show : function() {},
    toImage : function(f) {
     return new Ti.Blob();
    }

   },
   AD_SIZE_LANDSCAPE : '',
   AD_SIZE_PORTRAIT : '',
   ANIMATION_CURVE_EASE_IN : 0,
   ANIMATION_CURVE_EASE_IN_OUT : 0,
   ANIMATION_CURVE_EASE_OUT : 0,
   ANIMATION_CURVE_LINEAR : 0,
   AUTODETECT_ADDRESS : 0,
   AUTODETECT_ALL : 0,
   AUTODETECT_CALENDAR : 0,
   AUTODETECT_LINK : 0,
   AUTODETECT_NONE : 0,
   AUTODETECT_PHONE : 0,
   BLEND_MODE_CLEAR : 0,
   BLEND_MODE_COLOR : 0,
   BLEND_MODE_COLOR_BURN : 0,
   BLEND_MODE_COLOR_DODGE : 0,
   BLEND_MODE_COPY : 0,
   BLEND_MODE_DARKEN : 0,
   BLEND_MODE_DESTINATION_ATOP : 0,
   BLEND_MODE_DESTINATION_IN : 0,
   BLEND_MODE_DESTINATION_OUT : 0,
   BLEND_MODE_DESTINATION_OVER : 0,
   BLEND_MODE_DIFFERENCE : 0,
   BLEND_MODE_EXCLUSION : 0,
   BLEND_MODE_HARD_LIGHT : 0,
   BLEND_MODE_HUE : 0,
   BLEND_MODE_LIGHTEN : 0,
   BLEND_MODE_LUMINOSITY : 0,
   BLEND_MODE_MULTIPLY : 0,
   BLEND_MODE_NORMAL : 0,
   BLEND_MODE_OVERLAY : 0,
   BLEND_MODE_PLUS_DARKER : 0,
   BLEND_MODE_PLUS_LIGHTER : 0,
   BLEND_MODE_SATURATION : 0,
   BLEND_MODE_SCREEN : 0,
   BLEND_MODE_SOFT_LIGHT : 0,
   BLEND_MODE_SOURCE_ATOP : 0,
   BLEND_MODE_SOURCE_IN : 0,
   BLEND_MODE_SOURCE_OUT : 0,
   BLEND_MODE_XOR : 0,
   addEventListener : function(name, callback) {},
   create3DMatrix : function(parameters) {
    return new Ti.UI.iOS_();
   },
   createAdView : function(parameters) {
    return new Ti.UI.iOS.AdView();
   },
   createCoverFlowView : function(parameters) {
    return new Ti.UI.iOS.CoverFlowView();
   },
   createTabbedBar : function(parameters) {
    return new Ti.UI.iOS.TabbedBar();
   },
   createToolbar : function(parameters) {
    return new Ti.UI.iOS.Toolbar();
   },
   fireEvent : function(name, event) {},
   removeEventListener : function(name, callback) {}

  },
  iOS_ : {
   m11 : 0,
   m12 : 0,
   m13 : 0,
   m14 : 0,
   m21 : 0,
   m22 : 0,
   m23 : 0,
   m24 : 0,
   m31 : 0,
   m32 : 0,
   m33 : 0,
   m34 : 0,
   m41 : 0,
   m42 : 0,
   m43 : 0,
   m44 : 0,
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getM11 : function() {
    return 0;
   },
   getM12 : function() {
    return 0;
   },
   getM13 : function() {
    return 0;
   },
   getM14 : function() {
    return 0;
   },
   getM21 : function() {
    return 0;
   },
   getM22 : function() {
    return 0;
   },
   getM23 : function() {
    return 0;
   },
   getM24 : function() {
    return 0;
   },
   getM31 : function() {
    return 0;
   },
   getM32 : function() {
    return 0;
   },
   getM33 : function() {
    return 0;
   },
   getM34 : function() {
    return 0;
   },
   getM41 : function() {
    return 0;
   },
   getM42 : function() {
    return 0;
   },
   getM43 : function() {
    return 0;
   },
   getM44 : function() {
    return 0;
   },
   invert : function() {},
   multiply : function(t2) {
    return new Ti.UI.iOS_();
   },
   removeEventListener : function(name, callback) {},
   rotate : function(angle, x, y, z) {
    return new Ti.UI.iOS_();
   },
   scale : function(sx, sy, sz) {
    return new Ti.UI.iOS_();
   },
   setM11 : function(m11) {},
   setM12 : function(m12) {},
   setM13 : function(m13) {},
   setM14 : function(m14) {},
   setM21 : function(m21) {},
   setM22 : function(m22) {},
   setM23 : function(m23) {},
   setM24 : function(m24) {},
   setM31 : function(m31) {},
   setM32 : function(m32) {},
   setM33 : function(m33) {},
   setM34 : function(m34) {},
   setM41 : function(m41) {},
   setM42 : function(m42) {},
   setM43 : function(m43) {},
   setM44 : function(m44) {},
   translate : function(tx, ty, tz) {
    return new Ti.UI.iOS_();
   }

  },
  iPhone : {
   ActivityIndicatorStyle : {
    BIG : 0,
    DARK : 0,
    PLAIN : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   AnimationStyle : {
    CURL_DOWN : 0,
    CURL_UP : 0,
    FLIP_FROM_LEFT : 0,
    FLIP_FROM_RIGHT : 0,
    NONE : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   NavigationGroup : {
    anchorPoint : new Point(),
    animatedCenterPoint : new Point(),
    backgroundColor : '',
    backgroundGradient : new Gradient(),
    backgroundImage : '',
    backgroundLeftCap : 0,
    backgroundRepeat : false,
    backgroundTopCap : 0,
    borderColor : '',
    borderRadius : 0,
    borderWidth : 0,
    bottom : null /* String, Number */ ,
    center : new Point(),
    children : [],
    height : null /* String, Number */ ,
    layout : '',
    left : null /* String, Number */ ,
    opacity : 0,
    right : null /* String, Number */ ,
    size : {},
    top : null /* String, Number */ ,
    touchEnabled : false,
    transform : null /* Ti.UI.iOS_, Ti.UI_ */ ,
    visible : false,
    width : null /* String, Number */ ,
    zIndex : 0,
    add : function(view) {},
    addEventListener : function(name, callback) {},
    animate : function(obj, callback) {},
    close : function(window, properties) {},
    convertPointToView : function(point, destinationView) {
     return new Point();
    },
    fireEvent : function(name, event) {},
    getAnchorPoint : function() {
     return new Point();
    },
    getAnimatedCenterPoint : function() {
     return new Point();
    },
    getBackgroundColor : function() {
     return '';
    },
    getBackgroundGradient : function() {
     return new Gradient();
    },
    getBackgroundImage : function() {
     return '';
    },
    getBackgroundLeftCap : function() {
     return 0;
    },
    getBackgroundRepeat : function() {
     return false;
    },
    getBackgroundTopCap : function() {
     return 0;
    },
    getBorderColor : function() {
     return '';
    },
    getBorderRadius : function() {
     return 0;
    },
    getBorderWidth : function() {
     return 0;
    },
    getBottom : function() {
     return null /* String, Number */ ;
    },
    getCenter : function() {
     return new Point();
    },
    getChildren : function() {
     return [];
    },
    getHeight : function() {
     return null /* String, Number */ ;
    },
    getLayout : function() {
     return '';
    },
    getLeft : function() {
     return null /* String, Number */ ;
    },
    getOpacity : function() {
     return 0;
    },
    getRight : function() {
     return null /* String, Number */ ;
    },
    getSize : function() {
     return {};
    },
    getTop : function() {
     return null /* String, Number */ ;
    },
    getTouchEnabled : function() {
     return false;
    },
    getTransform : function() {
     return new Ti.UI_();
    },
    getVisible : function() {
     return false;
    },
    getWidth : function() {
     return null /* String, Number */ ;
    },
    getZIndex : function() {
     return 0;
    },
    hide : function() {},
    open : function(window, properties) {},
    remove : function(view) {},
    removeEventListener : function(name, callback) {},
    setAnchorPoint : function(anchorPoint) {},
    setBackgroundColor : function(backgroundColor) {},
    setBackgroundGradient : function(backgroundGradient) {},
    setBackgroundImage : function(backgroundImage) {},
    setBackgroundLeftCap : function(backgroundLeftCap) {},
    setBackgroundRepeat : function(backgroundRepeat) {},
    setBackgroundTopCap : function(backgroundTopCap) {},
    setBorderColor : function(borderColor) {},
    setBorderRadius : function(borderRadius) {},
    setBorderWidth : function(borderWidth) {},
    setBottom : function(bottom) {},
    setCenter : function(center) {},
    setHeight : function(height) {},
    setLayout : function(layout) {},
    setLeft : function(left) {},
    setOpacity : function(opacity) {},
    setRight : function(right) {},
    setTop : function(top) {},
    setTouchEnabled : function(touchEnabled) {},
    setTransform : function(transform) {},
    setVisible : function(visible) {},
    setWidth : function(width) {},
    setZIndex : function(zIndex) {},
    show : function() {},
    toImage : function(f) {
     return new Ti.Blob();
    }

   },
   ProgressBarStyle : {
    BAR : 0,
    DEFAULT : 0,
    PLAIN : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   RowAnimationStyle : {
    BOTTOM : 0,
    FADE : 0,
    LEFT : 0,
    NONE : 0,
    RIGHT : 0,
    TOP : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   ScrollIndicatorStyle : {
    BLACK : 0,
    DEFAULT : 0,
    WHITE : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   StatusBar : {
    DEFAULT : 0,
    GRAY : 0,
    OPAQUE_BLACK : 0,
    TRANSLUCENT_BLACK : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   SystemButton : {
    ACTION : 0,
    ACTIVITY : 0,
    ADD : 0,
    BOOKMARKS : 0,
    CAMERA : 0,
    CANCEL : 0,
    COMPOSE : 0,
    CONTACT_ADD : 0,
    DISCLOSURE : 0,
    DONE : 0,
    EDIT : 0,
    FAST_FORWARD : 0,
    FIXED_SPACE : 0,
    FLEXIBLE_SPACE : 0,
    INFO_DARK : 0,
    INFO_LIGHT : 0,
    ORGANIZE : 0,
    PAUSE : 0,
    PLAY : 0,
    REFRESH : 0,
    REPLY : 0,
    REWIND : 0,
    SAVE : 0,
    SPINNER : 0,
    STOP : 0,
    TRASH : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   SystemButtonStyle : {
    BAR : 0,
    BORDERED : 0,
    DONE : 0,
    PLAIN : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   SystemIcon : {
    BOOKMARKS : 0,
    CONTACTS : 0,
    DOWNLOADS : 0,
    FAVORITES : 0,
    FEATURED : 0,
    HISTORY : 0,
    MORE : 0,
    MOST_RECENT : 0,
    MOST_VIEWED : 0,
    RECENTS : 0,
    SEARCH : 0,
    TOP_RATED : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   TableViewCellSelectionStyle : {
    BLUE : 0,
    GRAY : 0,
    NONE : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   TableViewScrollPosition : {
    BOTTOM : 0,
    MIDDLE : 0,
    NONE : 0,
    TOP : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   TableViewSeparatorStyle : {
    NONE : 0,
    SINGLE_LINE : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   TableViewStyle : {
    GROUPED : 0,
    PLAIN : 0,
    addEventListener : function(name, callback) {},
    fireEvent : function(name, event) {},
    removeEventListener : function(name, callback) {}

   },
   MODAL_PRESENTATION_CURRENT_CONTEXT : 0,
   MODAL_PRESENTATION_FORMSHEET : 0,
   MODAL_PRESENTATION_FULLSCREEN : 0,
   MODAL_PRESENTATION_PAGESHEET : 0,
   MODAL_TRANSITION_STYLE_COVER_VERTICAL : 0,
   MODAL_TRANSITION_STYLE_CROSS_DISSOLVE : 0,
   MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL : 0,
   MODAL_TRANSITION_STYLE_PARTIAL_CURL : 0,
   appBadge : '',
   appSupportsShakeToEdit : false,
   statusBarHidden : false,
   statusBarStyle : 0,
   addEventListener : function(name, callback) {},
   createNavigationGroup : function(parameters) {
    return new Ti.UI.iPhone.NavigationGroup();
   },
   fireEvent : function(name, event) {},
   getAppBadge : function() {
    return '';
   },
   getAppSupportsShakeToEdit : function() {
    return false;
   },
   getStatusBarHidden : function() {
    return false;
   },
   getStatusBarStyle : function() {
    return 0;
   },
   hideStatusBar : function(animated, animationStyle) {},
   removeEventListener : function(name, callback) {},
   setAppBadge : function(appBadge) {},
   setAppSupportsShakeToEdit : function(appSupportsShakeToEdit) {},
   setStatusBarHidden : function(statusBarHidden) {},
   setStatusBarStyle : function(statusBarStyle) {},
   showStatusBar : function(animated, animationStyle) {}

  },
  ANIMATION_CURVE_EASE_IN : 0,
  ANIMATION_CURVE_EASE_IN_OUT : 0,
  ANIMATION_CURVE_EASE_OUT : 0,
  ANIMATION_CURVE_LINEAR : 0,
  AUTODETECT_ADDRESS : 0,
  AUTODETECT_ALL : 0,
  AUTODETECT_CALENDAR : 0,
  AUTODETECT_LINK : 0,
  AUTODETECT_NONE : 0,
  AUTODETECT_PHONE : 0,
  BLEND_MODE_CLEAR : 0,
  BLEND_MODE_COLOR : 0,
  BLEND_MODE_COLOR_BURN : 0,
  BLEND_MODE_COLOR_DODGE : 0,
  BLEND_MODE_COPY : 0,
  BLEND_MODE_DARKEN : 0,
  BLEND_MODE_DESTINATION_ATOP : 0,
  BLEND_MODE_DESTINATION_IN : 0,
  BLEND_MODE_DESTINATION_OUT : 0,
  BLEND_MODE_DESTINATION_OVER : 0,
  BLEND_MODE_DIFFERENCE : 0,
  BLEND_MODE_EXCLUSION : 0,
  BLEND_MODE_HARD_LIGHT : 0,
  BLEND_MODE_HUE : 0,
  BLEND_MODE_LIGHTEN : 0,
  BLEND_MODE_LUMINOSITY : 0,
  BLEND_MODE_MULTIPLY : 0,
  BLEND_MODE_NORMAL : 0,
  BLEND_MODE_OVERLAY : 0,
  BLEND_MODE_PLUS_DARKER : 0,
  BLEND_MODE_PLUS_LIGHTER : 0,
  BLEND_MODE_SATURATION : 0,
  BLEND_MODE_SCREEN : 0,
  BLEND_MODE_SOFT_LIGHT : 0,
  BLEND_MODE_SOURCE_ATOP : 0,
  BLEND_MODE_SOURCE_IN : 0,
  BLEND_MODE_SOURCE_OUT : 0,
  BLEND_MODE_XOR : 0,
  FACE_DOWN : 0,
  FACE_UP : 0,
  INPUT_BORDERSTYLE_BEZEL : 0,
  INPUT_BORDERSTYLE_LINE : 0,
  INPUT_BORDERSTYLE_NONE : 0,
  INPUT_BORDERSTYLE_ROUNDED : 0,
  INPUT_BUTTONMODE_ALWAYS : 0,
  INPUT_BUTTONMODE_NEVER : 0,
  INPUT_BUTTONMODE_ONBLUR : 0,
  INPUT_BUTTONMODE_ONFOCUS : 0,
  KEYBOARD_APPEARANCE_ALERT : 0,
  KEYBOARD_APPEARANCE_DEFAULT : 0,
  KEYBOARD_ASCII : 0,
  KEYBOARD_DEFAULT : 0,
  KEYBOARD_EMAIL : 0,
  KEYBOARD_NAMEPHONE_PAD : 0,
  KEYBOARD_NUMBERS_PUNCTUATION : 0,
  KEYBOARD_NUMBER_PAD : 0,
  KEYBOARD_PHONE_PAD : 0,
  KEYBOARD_URL : 0,
  LANDSCAPE_LEFT : 0,
  LANDSCAPE_RIGHT : 0,
  PICKER_TYPE_COUNT_DOWN_TIMER : 0,
  PICKER_TYPE_DATE : 0,
  PICKER_TYPE_DATE_AND_TIME : 0,
  PICKER_TYPE_PLAIN : 0,
  PICKER_TYPE_TIME : 0,
  PORTRAIT : 0,
  RETURNKEY_DEFAULT : 0,
  RETURNKEY_DONE : 0,
  RETURNKEY_EMERGENCY_CALL : 0,
  RETURNKEY_GO : 0,
  RETURNKEY_GOOGLE : 0,
  RETURNKEY_JOIN : 0,
  RETURNKEY_NEXT : 0,
  RETURNKEY_ROUTE : 0,
  RETURNKEY_SEARCH : 0,
  RETURNKEY_SEND : 0,
  RETURNKEY_YAHOO : 0,
  TEXT_ALIGNMENT_CENTER : 0,
  TEXT_ALIGNMENT_LEFT : 0,
  TEXT_ALIGNMENT_RIGHT : 0,
  TEXT_AUTOCAPITALIZATION_ALL : 0,
  TEXT_AUTOCAPITALIZATION_NONE : 0,
  TEXT_AUTOCAPITALIZATION_SENTENCES : 0,
  TEXT_AUTOCAPITALIZATION_WORDS : 0,
  TEXT_VERTICAL_ALIGNMENT_BOTTOM : 0,
  TEXT_VERTICAL_ALIGNMENT_CENTER : 0,
  TEXT_VERTICAL_ALIGNMENT_TOP : 0,
  UNKNOWN : 0,
  UPSIDE_PORTRAIT : 0,
  backgroundColor : '',
  backgroundImage : '',
  currentTab : new Ti.UI.Tab(),
  currentWindow : new Ti.UI.Window(),
  orientation : 0,
  addEventListener : function(name, callback) {},
  create2DMatrix : function(parameters) {
   return new Ti.UI_();
  },
  create3DMatrix : function(parameters) {
   return new Ti.UI_();
  },
  createActivityIndicator : function(parameters) {
   return new Ti.UI.ActivityIndicator();
  },
  createAlertDialog : function(parameters) {
   return new Ti.UI.AlertDialog();
  },
  createAnimation : function(parameters) {
   return new Ti.UI.Animation();
  },
  createButton : function(parameters) {
   return new Ti.UI.Button();
  },
  createButtonBar : function(parameters) {
   return new Ti.UI.ButtonBar();
  },
  createCoverFlowView : function(parameters) {
   return new Ti.UI.CoverFlowView();
  },
  createDashboardItem : function(parameters) {
   return new Ti.UI.DashboardItem();
  },
  createDashboardView : function(parameters) {
   return new Ti.UI.DashboardView();
  },
  createEmailDialog : function(parameters) {
   return new Ti.UI.EmailDialog();
  },
  createImageView : function(parameters) {
   return new Ti.UI.ImageView();
  },
  createLabel : function(parameters) {
   return new Ti.UI.Label();
  },
  createMaskedImage : function(parameters) {
   return new Ti.UI.MaskedImage();
  },
  createOptionDialog : function(parameters) {
   return new Ti.UI.OptionDialog();
  },
  createPicker : function(parameters) {
   return new Ti.UI.Picker();
  },
  createPickerColumn : function(parameters) {
   return new Ti.UI.PickerColumn();
  },
  createPickerRow : function(parameters) {
   return new Ti.UI.PickerRow();
  },
  createProgressBar : function(parameters) {
   return new Ti.UI.ProgressBar();
  },
  createScrollView : function(parameters) {
   return new Ti.UI.ScrollView();
  },
  createScrollableView : function(parameters) {
   return new Ti.UI.ScrollableView();
  },
  createSearchBar : function(parameters) {
   return new Ti.UI.SearchBar();
  },
  createSlider : function(parameters) {
   return new Ti.UI.Slider();
  },
  createSwitch : function(parameters) {
   return new Ti.UI.Switch();
  },
  createTab : function(parameters) {
   return new Ti.UI.Tab();
  },
  createTabGroup : function(parameters) {
   return new Ti.UI.TabGroup();
  },
  createTabbedBar : function(parameters) {
   return new Ti.UI.TabbedBar();
  },
  createTableView : function(parameters) {
   return new Ti.UI.TableView();
  },
  createTableViewRow : function(parameters) {
   return new Ti.UI.TableViewRow();
  },
  createTableViewSection : function(parameters) {
   return new Ti.UI.TableViewSection();
  },
  createTextArea : function(parameters) {
   return new Ti.UI.TextArea();
  },
  createTextField : function(parameters) {
   return new Ti.UI.TextField();
  },
  createToolbar : function(parameters) {
   return new Ti.UI.Toolbar();
  },
  createView : function(parameters) {
   return new Ti.UI.View();
  },
  createWebView : function(parameters) {
   return new Ti.UI.WebView();
  },
  createWindow : function(parameters) {
   return new Ti.UI.Window();
  },
  fireEvent : function(name, event) {},
  getBackgroundColor : function() {
   return '';
  },
  getBackgroundImage : function() {
   return '';
  },
  getCurrentTab : function() {
   return new Ti.UI.Tab();
  },
  getCurrentWindow : function() {
   return new Ti.UI.Window();
  },
  getOrientation : function() {
   return 0;
  },
  removeEventListener : function(name, callback) {},
  setBackgroundImage : function(backgroundImage) {},
  setCurrentTab : function(currentTab) {},
  setOrientation : function(orientation) {}

 },
 UI_ : {
  m11 : 0,
  m12 : 0,
  m13 : 0,
  m14 : 0,
  m21 : 0,
  m22 : 0,
  m23 : 0,
  m24 : 0,
  m31 : 0,
  m32 : 0,
  m33 : 0,
  m34 : 0,
  m41 : 0,
  m42 : 0,
  m43 : 0,
  m44 : 0,
  a : 0,
  b : 0,
  c : 0,
  d : 0,
  tx : 0,
  ty : 0,
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  getM11 : function() {
   return 0;
  },
  getM12 : function() {
   return 0;
  },
  getM13 : function() {
   return 0;
  },
  getM14 : function() {
   return 0;
  },
  getM21 : function() {
   return 0;
  },
  getM22 : function() {
   return 0;
  },
  getM23 : function() {
   return 0;
  },
  getM24 : function() {
   return 0;
  },
  getM31 : function() {
   return 0;
  },
  getM32 : function() {
   return 0;
  },
  getM33 : function() {
   return 0;
  },
  getM34 : function() {
   return 0;
  },
  getM41 : function() {
   return 0;
  },
  getM42 : function() {
   return 0;
  },
  getM43 : function() {
   return 0;
  },
  getM44 : function() {
   return 0;
  },
  invert : function() {},
  multiply : function(t2) {
   return new Ti.UI_();
  },
  removeEventListener : function(name, callback) {},
  rotate : function(angle, x, y, z) {
   return new Ti.UI_();
  },
  scale : function(sx, sy, sz) {
   return new Ti.UI_();
  },
  setM11 : function(m11) {},
  setM12 : function(m12) {},
  setM13 : function(m13) {},
  setM14 : function(m14) {},
  setM21 : function(m21) {},
  setM22 : function(m22) {},
  setM23 : function(m23) {},
  setM24 : function(m24) {},
  setM31 : function(m31) {},
  setM32 : function(m32) {},
  setM33 : function(m33) {},
  setM34 : function(m34) {},
  setM41 : function(m41) {},
  setM42 : function(m42) {},
  setM43 : function(m43) {},
  setM44 : function(m44) {},
  translate : function(tx, ty, tz) {
   return new Ti.UI_();
  },
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  getA : function() {
   return 0;
  },
  getB : function() {
   return 0;
  },
  getC : function() {
   return 0;
  },
  getD : function() {
   return 0;
  },
  getTx : function() {
   return 0;
  },
  getTy : function() {
   return 0;
  },
  invert : function() {
   return new Ti.UI_();
  },
  multiply : function(t2) {
   return new Ti.UI_();
  },
  removeEventListener : function(name, callback) {},
  rotate : function(angle) {
   return new Ti.UI_();
  },
  scale : function(sx, sy) {
   return new Ti.UI_();
  },
  setA : function(a) {},
  setB : function(b) {},
  setC : function(c) {},
  setD : function(d) {},
  setTx : function(tx) {},
  setTy : function(ty) {},
  translate : function(tx, ty) {
   return new Ti.UI_();
  }

 },
 Utils : {
  addEventListener : function(name, callback) {},
  base64decode : function(obj) {
   return new Ti.Blob();
  },
  base64encode : function(obj) {
   return new Ti.Blob();
  },
  fireEvent : function(name, event) {},
  md5HexDigest : function(obj) {
   return '';
  },
  removeEventListener : function(name, callback) {},
  sha1 : function(obj) {
   return '';
  },
  sha256 : function(obj) {
   return '';
  }

 },
 XML : {
  Attr : {
   ATTRIBUTE_NODE : 0,
   CDATA_SECTION_NODE : 0,
   COMMENT_NODE : 0,
   DOCUMENT_FRAGMENT_NODE : 0,
   DOCUMENT_NODE : 0,
   DOCUMENT_TYPE_NODE : 0,
   ELEMENT_NODE : 0,
   ENTITY_NODE : 0,
   ENTITY_REFERENCE_NODE : 0,
   NOTATION_NODE : 0,
   PROCESSING_INSTRUCTION_NODE : 0,
   TEXT_NODE : 0,
   attributes : new Ti.XML.NamedNodeMap(),
   childNodes : new Ti.XML.NodeList(),
   firstChild : new Ti.XML.Node(),
   lastChild : new Ti.XML.Node(),
   localName : '',
   name : '',
   namespaceURI : '',
   nextSibling : new Ti.XML.Node(),
   nodeName : '',
   nodeType : 0,
   nodeValue : '',
   ownerDocument : new Ti.XML.Document(),
   ownerElement : new Ti.XML.Element(),
   parentNode : new Ti.XML.Node(),
   prefix : '',
   previousSibling : new Ti.XML.Node(),
   specified : false,
   value : '',
   addEventListener : function(name, callback) {},
   appendChild : function(newChild) {
    return new Ti.XML.Node();
   },
   cloneNode : function(deep) {
    return new Ti.XML.Node();
   },
   fireEvent : function(name, event) {},
   getAttributes : function() {
    return new Ti.XML.NamedNodeMap();
   },
   getChildNodes : function() {
    return new Ti.XML.NodeList();
   },
   getFirstChild : function() {
    return new Ti.XML.Node();
   },
   getLastChild : function() {
    return new Ti.XML.Node();
   },
   getLocalName : function() {
    return '';
   },
   getName : function() {
    return '';
   },
   getNamespaceURI : function() {
    return '';
   },
   getNextSibling : function() {
    return new Ti.XML.Node();
   },
   getNodeName : function() {
    return '';
   },
   getNodeType : function() {
    return 0;
   },
   getNodeValue : function() {
    return '';
   },
   getOwnerDocument : function() {
    return new Ti.XML.Document();
   },
   getOwnerElement : function() {
    return new Ti.XML.Element();
   },
   getParentNode : function() {
    return new Ti.XML.Node();
   },
   getPrefix : function() {
    return '';
   },
   getPreviousSibling : function() {
    return new Ti.XML.Node();
   },
   getSpecified : function() {
    return false;
   },
   getValue : function() {
    return '';
   },
   hasAttributes : function() {
    return false;
   },
   hasChildNodes : function() {
    return false;
   },
   insertBefore : function(newChild, refChild) {
    return new Ti.XML.Node();
   },
   isSupported : function(feature, version) {
    return false;
   },
   normalize : function() {},
   removeChild : function(oldChild) {
    return new Ti.XML.Node();
   },
   removeEventListener : function(name, callback) {},
   replaceChild : function(newChild, oldChild) {},
   setLocalName : function(localName) {},
   setValue : function(value) {}

  },
  CharacterData : {
   ATTRIBUTE_NODE : 0,
   CDATA_SECTION_NODE : 0,
   COMMENT_NODE : 0,
   DOCUMENT_FRAGMENT_NODE : 0,
   DOCUMENT_NODE : 0,
   DOCUMENT_TYPE_NODE : 0,
   ELEMENT_NODE : 0,
   ENTITY_NODE : 0,
   ENTITY_REFERENCE_NODE : 0,
   NOTATION_NODE : 0,
   PROCESSING_INSTRUCTION_NODE : 0,
   TEXT_NODE : 0,
   attributes : new Ti.XML.NamedNodeMap(),
   childNodes : new Ti.XML.NodeList(),
   data : '',
   firstChild : new Ti.XML.Node(),
   lastChild : new Ti.XML.Node(),
   length : 0,
   localName : '',
   namespaceURI : '',
   nextSibling : new Ti.XML.Node(),
   nodeName : '',
   nodeType : 0,
   nodeValue : '',
   ownerDocument : new Ti.XML.Document(),
   parentNode : new Ti.XML.Node(),
   prefix : '',
   previousSibling : new Ti.XML.Node(),
   addEventListener : function(name, callback) {},
   appendChild : function(newChild) {
    return new Ti.XML.Node();
   },
   appendData : function(arg) {},
   cloneNode : function(deep) {
    return new Ti.XML.Node();
   },
   deleteData : function(offset, count) {},
   fireEvent : function(name, event) {},
   getAttributes : function() {
    return new Ti.XML.NamedNodeMap();
   },
   getChildNodes : function() {
    return new Ti.XML.NodeList();
   },
   getData : function() {
    return '';
   },
   getFirstChild : function() {
    return new Ti.XML.Node();
   },
   getLastChild : function() {
    return new Ti.XML.Node();
   },
   getLength : function() {
    return 0;
   },
   getLocalName : function() {
    return '';
   },
   getNamespaceURI : function() {
    return '';
   },
   getNextSibling : function() {
    return new Ti.XML.Node();
   },
   getNodeName : function() {
    return '';
   },
   getNodeType : function() {
    return 0;
   },
   getNodeValue : function() {
    return '';
   },
   getOwnerDocument : function() {
    return new Ti.XML.Document();
   },
   getParentNode : function() {
    return new Ti.XML.Node();
   },
   getPrefix : function() {
    return '';
   },
   getPreviousSibling : function() {
    return new Ti.XML.Node();
   },
   hasAttributes : function() {
    return false;
   },
   hasChildNodes : function() {
    return false;
   },
   insertBefore : function(newChild, refChild) {
    return new Ti.XML.Node();
   },
   insertData : function(offset, arg) {},
   isSupported : function(feature, version) {
    return false;
   },
   normalize : function() {},
   removeChild : function(oldChild) {
    return new Ti.XML.Node();
   },
   removeEventListener : function(name, callback) {},
   replaceChild : function(newChild, oldChild) {},
   replaceData : function(offset, count, arg) {},
   setData : function(data) {},
   setLocalName : function(localName) {},
   substringData : function(offset, count) {
    return '';
   }

  },
  DOMImplementation : {
   addEventListener : function(name, callback) {},
   createDocument : function(namespaceURI, qualifiedName, doctype) {
    return new Ti.XML.Document();
   },
   createDocumentType : function(qualifiedName, publicId, systemId) {
    return new Ti.XML.DocumentType();
   },
   fireEvent : function(name, event) {},
   hasFeature : function(feature, version) {
    return false;
   },
   removeEventListener : function(name, callback) {}

  },
  Document : {
   ATTRIBUTE_NODE : 0,
   CDATA_SECTION_NODE : 0,
   COMMENT_NODE : 0,
   DOCUMENT_FRAGMENT_NODE : 0,
   DOCUMENT_NODE : 0,
   DOCUMENT_TYPE_NODE : 0,
   ELEMENT_NODE : 0,
   ENTITY_NODE : 0,
   ENTITY_REFERENCE_NODE : 0,
   NOTATION_NODE : 0,
   PROCESSING_INSTRUCTION_NODE : 0,
   TEXT_NODE : 0,
   attributes : new Ti.XML.NamedNodeMap(),
   childNodes : new Ti.XML.NodeList(),
   doctype : new Ti.XML.DocumentType(),
   documentElement : new Ti.XML.Element(),
   firstChild : new Ti.XML.Node(),
   implementation : new Ti.XML.DOMImplementation(),
   lastChild : new Ti.XML.Node(),
   localName : '',
   namespaceURI : '',
   nextSibling : new Ti.XML.Node(),
   nodeName : '',
   nodeType : 0,
   nodeValue : '',
   ownerDocument : new Ti.XML.Document(),
   parentNode : new Ti.XML.Node(),
   prefix : '',
   previousSibling : new Ti.XML.Node(),
   addEventListener : function(name, callback) {},
   appendChild : function(newChild) {
    return new Ti.XML.Node();
   },
   cloneNode : function(deep) {
    return new Ti.XML.Node();
   },
   createAttribute : function(name) {
    return new Ti.XML.Attr();
   },
   createAttributeNS : function(namespaceURI, name) {},
   createCDATASection : function(data) {
    return new Ti.XML.CDATASection();
   },
   createComment : function(data) {
    return new Ti.XML.Comment();
   },
   createDocumentFragment : function() {
    return new Ti.XML.DocumentFragment();
   },
   createElement : function(tagName) {
    return new Ti.XML.Element();
   },
   createElementNS : function(namespaceURI, name) {
    return new Ti.XML.Element();
   },
   createEntityReference : function(name) {
    return new Ti.XML.EntityReference();
   },
   createProcessingInstruction : function(target, data) {
    return new Ti.XML.ProcessingInstruction();
   },
   createTextNode : function(data) {
    return new Ti.XML.Text();
   },
   fireEvent : function(name, event) {},
   getAttributes : function() {
    return new Ti.XML.NamedNodeMap();
   },
   getChildNodes : function() {
    return new Ti.XML.NodeList();
   },
   getDoctype : function() {
    return new Ti.XML.DocumentType();
   },
   getDocumentElement : function() {
    return new Ti.XML.Element();
   },
   getElementById : function(elementId) {
    return new Ti.XML.Element();
   },
   getElementsByTagName : function(tagname) {
    return new Ti.XML.NodeList();
   },
   getElementsByTagNameNS : function(namespaceURI, localname) {
    return new Ti.XML.NodeList();
   },
   getFirstChild : function() {
    return new Ti.XML.Node();
   },
   getImplementation : function() {
    return new Ti.XML.DOMImplementation();
   },
   getLastChild : function() {
    return new Ti.XML.Node();
   },
   getLocalName : function() {
    return '';
   },
   getNamespaceURI : function() {
    return '';
   },
   getNextSibling : function() {
    return new Ti.XML.Node();
   },
   getNodeName : function() {
    return '';
   },
   getNodeType : function() {
    return 0;
   },
   getNodeValue : function() {
    return '';
   },
   getOwnerDocument : function() {
    return new Ti.XML.Document();
   },
   getParentNode : function() {
    return new Ti.XML.Node();
   },
   getPrefix : function() {
    return '';
   },
   getPreviousSibling : function() {
    return new Ti.XML.Node();
   },
   hasAttributes : function() {
    return false;
   },
   hasChildNodes : function() {
    return false;
   },
   importNode : function(importedNode, deep) {
    return new Ti.XML.Node();
   },
   insertBefore : function(newChild, refChild) {
    return new Ti.XML.Node();
   },
   isSupported : function(feature, version) {
    return false;
   },
   normalize : function() {},
   removeChild : function(oldChild) {
    return new Ti.XML.Node();
   },
   removeEventListener : function(name, callback) {},
   replaceChild : function(newChild, oldChild) {},
   setLocalName : function(localName) {}

  },
  DocumentType : {
   ATTRIBUTE_NODE : 0,
   CDATA_SECTION_NODE : 0,
   COMMENT_NODE : 0,
   DOCUMENT_FRAGMENT_NODE : 0,
   DOCUMENT_NODE : 0,
   DOCUMENT_TYPE_NODE : 0,
   ELEMENT_NODE : 0,
   ENTITY_NODE : 0,
   ENTITY_REFERENCE_NODE : 0,
   NOTATION_NODE : 0,
   PROCESSING_INSTRUCTION_NODE : 0,
   TEXT_NODE : 0,
   attributes : new Ti.XML.NamedNodeMap(),
   childNodes : new Ti.XML.NodeList(),
   entities : new Ti.XML.NamedNodeMap(),
   firstChild : new Ti.XML.Node(),
   internalSubset : '',
   lastChild : new Ti.XML.Node(),
   localName : '',
   name : '',
   namespaceURI : '',
   nextSibling : new Ti.XML.Node(),
   nodeName : '',
   nodeType : 0,
   nodeValue : '',
   notations : new Ti.XML.NamedNodeMap(),
   ownerDocument : new Ti.XML.Document(),
   parentNode : new Ti.XML.Node(),
   prefix : '',
   previousSibling : new Ti.XML.Node(),
   publicId : '',
   systemId : '',
   addEventListener : function(name, callback) {},
   appendChild : function(newChild) {
    return new Ti.XML.Node();
   },
   cloneNode : function(deep) {
    return new Ti.XML.Node();
   },
   fireEvent : function(name, event) {},
   getAttributes : function() {
    return new Ti.XML.NamedNodeMap();
   },
   getChildNodes : function() {
    return new Ti.XML.NodeList();
   },
   getEntities : function() {
    return new Ti.XML.NamedNodeMap();
   },
   getFirstChild : function() {
    return new Ti.XML.Node();
   },
   getInternalSubset : function() {
    return '';
   },
   getLastChild : function() {
    return new Ti.XML.Node();
   },
   getLocalName : function() {
    return '';
   },
   getName : function() {
    return '';
   },
   getNamespaceURI : function() {
    return '';
   },
   getNextSibling : function() {
    return new Ti.XML.Node();
   },
   getNodeName : function() {
    return '';
   },
   getNodeType : function() {
    return 0;
   },
   getNodeValue : function() {
    return '';
   },
   getNotations : function() {
    return new Ti.XML.NamedNodeMap();
   },
   getOwnerDocument : function() {
    return new Ti.XML.Document();
   },
   getParentNode : function() {
    return new Ti.XML.Node();
   },
   getPrefix : function() {
    return '';
   },
   getPreviousSibling : function() {
    return new Ti.XML.Node();
   },
   getPublicId : function() {
    return '';
   },
   getSystemId : function() {
    return '';
   },
   hasAttributes : function() {
    return false;
   },
   hasChildNodes : function() {
    return false;
   },
   insertBefore : function(newChild, refChild) {
    return new Ti.XML.Node();
   },
   isSupported : function(feature, version) {
    return false;
   },
   normalize : function() {},
   removeChild : function(oldChild) {
    return new Ti.XML.Node();
   },
   removeEventListener : function(name, callback) {},
   replaceChild : function(newChild, oldChild) {},
   setLocalName : function(localName) {}

  },
  Element : {
   ATTRIBUTE_NODE : 0,
   CDATA_SECTION_NODE : 0,
   COMMENT_NODE : 0,
   DOCUMENT_FRAGMENT_NODE : 0,
   DOCUMENT_NODE : 0,
   DOCUMENT_TYPE_NODE : 0,
   ELEMENT_NODE : 0,
   ENTITY_NODE : 0,
   ENTITY_REFERENCE_NODE : 0,
   NOTATION_NODE : 0,
   PROCESSING_INSTRUCTION_NODE : 0,
   TEXT_NODE : 0,
   attributes : new Ti.XML.NamedNodeMap(),
   childNodes : new Ti.XML.NodeList(),
   firstChild : new Ti.XML.Node(),
   lastChild : new Ti.XML.Node(),
   localName : '',
   namespaceURI : '',
   nextSibling : new Ti.XML.Node(),
   nodeName : '',
   nodeType : 0,
   nodeValue : '',
   ownerDocument : new Ti.XML.Document(),
   parentNode : new Ti.XML.Node(),
   prefix : '',
   previousSibling : new Ti.XML.Node(),
   tagName : '',
   text : '',
   addEventListener : function(name, callback) {},
   appendChild : function(newChild) {
    return new Ti.XML.Node();
   },
   cloneNode : function(deep) {
    return new Ti.XML.Node();
   },
   fireEvent : function(name, event) {},
   getAttribute : function(name) {
    return '';
   },
   getAttributeNS : function(namespaceURI, localName) {
    return '';
   },
   getAttributeNode : function(name) {
    return new Ti.XML.Attr();
   },
   getAttributeNodeNS : function(namespaceURI, localName) {
    return new Ti.XML.Attr();
   },
   getAttributes : function() {
    return new Ti.XML.NamedNodeMap();
   },
   getChildNodes : function() {
    return new Ti.XML.NodeList();
   },
   getElementsByTagName : function(name) {
    return new Ti.XML.NodeList();
   },
   getElementsByTagNameNS : function(namespaceURI, localName) {
    return new Ti.XML.NodeList();
   },
   getFirstChild : function() {
    return new Ti.XML.Node();
   },
   getLastChild : function() {
    return new Ti.XML.Node();
   },
   getLocalName : function() {
    return '';
   },
   getNamespaceURI : function() {
    return '';
   },
   getNextSibling : function() {
    return new Ti.XML.Node();
   },
   getNodeName : function() {
    return '';
   },
   getNodeType : function() {
    return 0;
   },
   getNodeValue : function() {
    return '';
   },
   getOwnerDocument : function() {
    return new Ti.XML.Document();
   },
   getParentNode : function() {
    return new Ti.XML.Node();
   },
   getPrefix : function() {
    return '';
   },
   getPreviousSibling : function() {
    return new Ti.XML.Node();
   },
   getTagName : function() {
    return '';
   },
   getText : function() {
    return '';
   },
   hasAttribute : function(name) {
    return false;
   },
   hasAttributeNS : function(namespaceURI, localName) {
    return false;
   },
   hasAttributes : function() {
    return false;
   },
   hasChildNodes : function() {
    return false;
   },
   insertBefore : function(newChild, refChild) {
    return new Ti.XML.Node();
   },
   isSupported : function(feature, version) {
    return false;
   },
   normalize : function() {},
   removeAttribute : function(name) {},
   removeAttributeNS : function(namespaceURI, localName) {},
   removeAttributeNode : function(oldAttr) {},
   removeChild : function(oldChild) {
    return new Ti.XML.Node();
   },
   removeEventListener : function(name, callback) {},
   replaceChild : function(newChild, oldChild) {},
   setAttribute : function(name, value) {},
   setAttributeNS : function(namespaceURI, qualifiedName, value) {},
   setAttributeNode : function(newAttr) {
    return new Ti.XML.Attr();
   },
   setAttributeNodeNS : function(newAttr) {
    return new Ti.XML.Attr();
   },
   setLocalName : function(localName) {}

  },
  Entity : {
   ATTRIBUTE_NODE : 0,
   CDATA_SECTION_NODE : 0,
   COMMENT_NODE : 0,
   DOCUMENT_FRAGMENT_NODE : 0,
   DOCUMENT_NODE : 0,
   DOCUMENT_TYPE_NODE : 0,
   ELEMENT_NODE : 0,
   ENTITY_NODE : 0,
   ENTITY_REFERENCE_NODE : 0,
   NOTATION_NODE : 0,
   PROCESSING_INSTRUCTION_NODE : 0,
   TEXT_NODE : 0,
   attributes : new Ti.XML.NamedNodeMap(),
   childNodes : new Ti.XML.NodeList(),
   firstChild : new Ti.XML.Node(),
   lastChild : new Ti.XML.Node(),
   localName : '',
   namespaceURI : '',
   nextSibling : new Ti.XML.Node(),
   nodeName : '',
   nodeType : 0,
   nodeValue : '',
   notationName : '',
   ownerDocument : new Ti.XML.Document(),
   parentNode : new Ti.XML.Node(),
   prefix : '',
   previousSibling : new Ti.XML.Node(),
   publicId : '',
   systemId : '',
   addEventListener : function(name, callback) {},
   appendChild : function(newChild) {
    return new Ti.XML.Node();
   },
   cloneNode : function(deep) {
    return new Ti.XML.Node();
   },
   fireEvent : function(name, event) {},
   getAttributes : function() {
    return new Ti.XML.NamedNodeMap();
   },
   getChildNodes : function() {
    return new Ti.XML.NodeList();
   },
   getFirstChild : function() {
    return new Ti.XML.Node();
   },
   getLastChild : function() {
    return new Ti.XML.Node();
   },
   getLocalName : function() {
    return '';
   },
   getNamespaceURI : function() {
    return '';
   },
   getNextSibling : function() {
    return new Ti.XML.Node();
   },
   getNodeName : function() {
    return '';
   },
   getNodeType : function() {
    return 0;
   },
   getNodeValue : function() {
    return '';
   },
   getNotationName : function() {
    return '';
   },
   getOwnerDocument : function() {
    return new Ti.XML.Document();
   },
   getParentNode : function() {
    return new Ti.XML.Node();
   },
   getPrefix : function() {
    return '';
   },
   getPreviousSibling : function() {
    return new Ti.XML.Node();
   },
   getPublicId : function() {
    return '';
   },
   getSystemId : function() {
    return '';
   },
   hasAttributes : function() {
    return false;
   },
   hasChildNodes : function() {
    return false;
   },
   insertBefore : function(newChild, refChild) {
    return new Ti.XML.Node();
   },
   isSupported : function(feature, version) {
    return false;
   },
   normalize : function() {},
   removeChild : function(oldChild) {
    return new Ti.XML.Node();
   },
   removeEventListener : function(name, callback) {},
   replaceChild : function(newChild, oldChild) {},
   setLocalName : function(localName) {}

  },
  NamedNodeMap : {
   length : 0,
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getLength : function() {
    return 0;
   },
   getNamedItem : function(name) {
    return new Ti.XML.Node();
   },
   getNamedItemNS : function(namespaceURI, localName) {
    return new Ti.XML.Node();
   },
   item : function(index) {
    return new Ti.XML.Node();
   },
   removeEventListener : function(name, callback) {},
   removeNamedItem : function(name) {
    return new Ti.XML.Node();
   },
   removeNamedItemNS : function(namespaceURI, localName) {
    return new Ti.XML.Node();
   },
   setNamedItem : function(node) {
    return new Ti.XML.Node();
   },
   setNamedItemNS : function(node) {
    return new Ti.XML.Node();
   }

  },
  Node : {
   ATTRIBUTE_NODE : 0,
   CDATA_SECTION_NODE : 0,
   COMMENT_NODE : 0,
   DOCUMENT_FRAGMENT_NODE : 0,
   DOCUMENT_NODE : 0,
   DOCUMENT_TYPE_NODE : 0,
   ELEMENT_NODE : 0,
   ENTITY_NODE : 0,
   ENTITY_REFERENCE_NODE : 0,
   NOTATION_NODE : 0,
   PROCESSING_INSTRUCTION_NODE : 0,
   TEXT_NODE : 0,
   attributes : new Ti.XML.NamedNodeMap(),
   childNodes : new Ti.XML.NodeList(),
   firstChild : new Ti.XML.Node(),
   lastChild : new Ti.XML.Node(),
   localName : '',
   namespaceURI : '',
   nextSibling : new Ti.XML.Node(),
   nodeName : '',
   nodeType : 0,
   nodeValue : '',
   ownerDocument : new Ti.XML.Document(),
   parentNode : new Ti.XML.Node(),
   prefix : '',
   previousSibling : new Ti.XML.Node(),
   addEventListener : function(name, callback) {},
   appendChild : function(newChild) {
    return new Ti.XML.Node();
   },
   cloneNode : function(deep) {
    return new Ti.XML.Node();
   },
   fireEvent : function(name, event) {},
   getAttributes : function() {
    return new Ti.XML.NamedNodeMap();
   },
   getChildNodes : function() {
    return new Ti.XML.NodeList();
   },
   getFirstChild : function() {
    return new Ti.XML.Node();
   },
   getLastChild : function() {
    return new Ti.XML.Node();
   },
   getLocalName : function() {
    return '';
   },
   getNamespaceURI : function() {
    return '';
   },
   getNextSibling : function() {
    return new Ti.XML.Node();
   },
   getNodeName : function() {
    return '';
   },
   getNodeType : function() {
    return 0;
   },
   getNodeValue : function() {
    return '';
   },
   getOwnerDocument : function() {
    return new Ti.XML.Document();
   },
   getParentNode : function() {
    return new Ti.XML.Node();
   },
   getPrefix : function() {
    return '';
   },
   getPreviousSibling : function() {
    return new Ti.XML.Node();
   },
   hasAttributes : function() {
    return false;
   },
   hasChildNodes : function() {
    return false;
   },
   insertBefore : function(newChild, refChild) {
    return new Ti.XML.Node();
   },
   isSupported : function(feature, version) {
    return false;
   },
   normalize : function() {},
   removeChild : function(oldChild) {
    return new Ti.XML.Node();
   },
   removeEventListener : function(name, callback) {},
   replaceChild : function(newChild, oldChild) {},
   setLocalName : function(localName) {}

  },
  NodeList : {
   length : 0,
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getLength : function() {
    return 0;
   },
   item : function(index) {
    return new Ti.XML.Node();
   },
   removeEventListener : function(name, callback) {}

  },
  Notation : {
   publicId : '',
   systemId : '',
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getPublicId : function() {
    return '';
   },
   getSystemId : function() {
    return '';
   },
   removeEventListener : function(name, callback) {}

  },
  ProcessingInstruction : {
   data : '',
   target : '',
   addEventListener : function(name, callback) {},
   fireEvent : function(name, event) {},
   getData : function() {
    return '';
   },
   getTarget : function() {
    return '';
   },
   removeEventListener : function(name, callback) {},
   setData : function(data) {}

  },
  Text : {
   ATTRIBUTE_NODE : 0,
   CDATA_SECTION_NODE : 0,
   COMMENT_NODE : 0,
   DOCUMENT_FRAGMENT_NODE : 0,
   DOCUMENT_NODE : 0,
   DOCUMENT_TYPE_NODE : 0,
   ELEMENT_NODE : 0,
   ENTITY_NODE : 0,
   ENTITY_REFERENCE_NODE : 0,
   NOTATION_NODE : 0,
   PROCESSING_INSTRUCTION_NODE : 0,
   TEXT_NODE : 0,
   attributes : new Ti.XML.NamedNodeMap(),
   childNodes : new Ti.XML.NodeList(),
   data : '',
   firstChild : new Ti.XML.Node(),
   lastChild : new Ti.XML.Node(),
   length : 0,
   localName : '',
   namespaceURI : '',
   nextSibling : new Ti.XML.Node(),
   nodeName : '',
   nodeType : 0,
   nodeValue : '',
   ownerDocument : new Ti.XML.Document(),
   parentNode : new Ti.XML.Node(),
   prefix : '',
   previousSibling : new Ti.XML.Node(),
   addEventListener : function(name, callback) {},
   appendChild : function(newChild) {
    return new Ti.XML.Node();
   },
   appendData : function(arg) {},
   cloneNode : function(deep) {
    return new Ti.XML.Node();
   },
   deleteData : function(offset, count) {},
   fireEvent : function(name, event) {},
   getAttributes : function() {
    return new Ti.XML.NamedNodeMap();
   },
   getChildNodes : function() {
    return new Ti.XML.NodeList();
   },
   getData : function() {
    return '';
   },
   getFirstChild : function() {
    return new Ti.XML.Node();
   },
   getLastChild : function() {
    return new Ti.XML.Node();
   },
   getLength : function() {
    return 0;
   },
   getLocalName : function() {
    return '';
   },
   getNamespaceURI : function() {
    return '';
   },
   getNextSibling : function() {
    return new Ti.XML.Node();
   },
   getNodeName : function() {
    return '';
   },
   getNodeType : function() {
    return 0;
   },
   getNodeValue : function() {
    return '';
   },
   getOwnerDocument : function() {
    return new Ti.XML.Document();
   },
   getParentNode : function() {
    return new Ti.XML.Node();
   },
   getPrefix : function() {
    return '';
   },
   getPreviousSibling : function() {
    return new Ti.XML.Node();
   },
   hasAttributes : function() {
    return false;
   },
   hasChildNodes : function() {
    return false;
   },
   insertBefore : function(newChild, refChild) {
    return new Ti.XML.Node();
   },
   insertData : function(offset, arg) {},
   isSupported : function(feature, version) {
    return false;
   },
   normalize : function() {},
   removeChild : function(oldChild) {
    return new Ti.XML.Node();
   },
   removeEventListener : function(name, callback) {},
   replaceChild : function(newChild, oldChild) {},
   replaceData : function(offset, count, arg) {},
   setData : function(data) {},
   setLocalName : function(localName) {},
   splitText : function(offset) {
    return new Ti.XML.Text();
   },
   substringData : function(offset, count) {
    return '';
   }

  },
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  parseString : function(xml) {
   return new Ti.XML.Document();
  },
  removeEventListener : function(name, callback) {},
  serializeToString : function(node) {
   return '';
  }

 },
 Yahoo : {
  addEventListener : function(name, callback) {},
  fireEvent : function(name, event) {},
  removeEventListener : function(name, callback) {},
  yql : function(yql, callback) {}

 },
 buildDate : '',
 buildHash : '',
 userAgent : '',
 version : 0,
 addEventListener : function(name, callback) {},
 createBuffer : function(params) {
  return new Ti.Buffer();
 },
 fireEvent : function(name, event) {},
 getBuildDate : function() {
  return '';
 },
 getBuildHash : function() {
  return '';
 },
 getUserAgent : function() {
  return '';
 },
 getVersion : function() {
  return 0;
 },
 include : function(name) {},
 removeEventListener : function(name, callback) {},
 setUserAgent : function(userAgent) {}

};
WriteCallbackArgs = {
 bytesProcessed : 0,
 errorDescription : '',
 errorState : '',
 source : new Ti.IOStream()

};
WriteStreamCallbackArgs = {
 bytesProcessed : 0,
 errorDescription : '',
 errorState : '',
 fromStream : new Ti.IOStream(),
 toStream : new Ti.IOStream()

};
contentOffsetOption = {
 animated : false

};
