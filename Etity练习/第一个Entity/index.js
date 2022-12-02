const viewer = new Cesium.Viewer("cesiumContainer", { infoBox: false });

const entities = viewer.entities;
entities.add({
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
