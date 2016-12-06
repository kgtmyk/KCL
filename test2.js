// センサタグ
var sensorTag;
 
// モジュールの読み込み
var SensorTag = require('sensortag').CC2650;
 
// 接続解除時
function disconnectCallback(){
 console.log('disconnected!');
 process.exit(0);
}
 
// 接続成功時
function connectAndSetUpCallback() {
 console.log("connectAndSetUp!");
  
 // 加速度センサを有効化
 sensorTag.enableAccelerometer(function(){
  // 有効化成功したら、通知ON
  sensorTag.notifyAccelerometer(function(){
   // 通知ON成功したら、何もしない
  });
 });
  
}
 
// 加速度変化通知を受け取ったら
function accelerometerChangeCallback(x, y, z){
 console.log('\tx = %d G, \ty = %d G, \tz = %d G', x.toFixed(3), y.toFixed(3), z.toFixed(3));
 console.log('\ty = %d G', y.toFixed(3));
 console.log('\tz = %d G', z.toFixed(3));
}
 
// デバイス発見したとき
function onDiscover(st) {
 
 console.log("discovered!");
 
 sensorTag = st;
  
 // 接続解除処理の割り当て
 sensorTag.on('disconnect', disconnectCallback);
  
 // 加速度変化時処理の割り当て
 sensorTag.on('accelerometerChange', accelerometerChangeCallback);
  
 // 接続する
 sensorTag.connectAndSetUp(connectAndSetUpCallback);
 
}
 
// メインの処理
console.log("start!");
SensorTag.discover(onDiscover);
