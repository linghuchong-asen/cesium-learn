const viewer = new Cesium.Viewer("cesiumContainer", { infoBox: false });

// GeometryInstance是geometry的一个容器
const instance = new Cesium.GeometryInstance({
  geometry: new Cesium.RectangleGeometry({
    rectangle: Cesium.Rectangle.fromDegrees(-100.0, 20.0, -90.0, 30.0),
    vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT, // 所有EllipsoidSurfaceAppearance都兼容的顶点格式，只需要position和st属性
  }),
});

// 使用抽象的Primitive而不是RectanglePrimitive
const rectangle = viewer.scene.primitives.add(
  new Cesium.Primitive({
    geometryInstances: instance,
    // 使用该外观，可以使矩形覆盖在地球表面，或者悬浮一定的高度
    appearance: new Cesium.EllipsoidSurfaceAppearance({
      material: Cesium.Material.fromType("Dot"),
    }),
  })
);
