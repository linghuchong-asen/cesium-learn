const viewer = new Cesium.Viewer("cesiumContainer", { infoBox: false });

const entity = viewer.entities.add({
  rectangle: {
    show: true,
    // height: 0,
    coordinates: Cesium.Rectangle.fromDegrees(-92.0, 20.0, -66.0, 57.0), //  从经纬度创建矩形
    material: Cesium.Color.ANTIQUEWHITE,
    outline: true, // 是否有轮廓线
    outLineColor: Cesium.Color.AQUA,
    outLineWidth: 400,
    stRotation: Cesium.Math.toRadians(0), // 旋转角度
  },
});

/* 在viewer和scene下都有一个默认的camera,相机默认位置
x: 2484351.455538317
y: -18870522.785859894
z: 13380728.04747582 */
console.log(viewer.scene.camera);
console.log(viewer.camera);

/* 问题：已知某一矩形范围 [110.2,35.6,112.3,36.7] ，要求相机倾斜25度，实现矩形位置飞行定位。 */

/*  相机倾斜25度，实现矩形位置飞行定位。*/
const heading = Cesium.Math.toRadians(0.0);
const pitch = Cesium.Math.toRadians(-25.0);
const roll = Cesium.Math.toRadians(0.0);

/* 方法一：利用viewer的flyTo方法 */
viewer.flyTo(entity, {
  offset: new Cesium.HeadingPitchRange(heading, pitch, roll),
});

/* 方法二：利用camera的flyTo方法;初始化会看不到矩形，当滚动鼠标滚轮缩小视图时，会发现地球出现在屏幕下方；这是因为destination指定一个矩形区域时，是从上向下看，所以矩形就没有出现在屏幕中央 */
/* const rect = Cesium.Rectangle.fromDegrees(-92.0, 20.0, -66.0, 57.0);
viewer.camera.flyTo({
  destination: rect,
  orientation: new Cesium.HeadingPitchRange(heading, pitch, roll),
}); */
