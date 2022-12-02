const viewer = new Cesium.Viewer("cesiumContainer", { infoBox: false });

const instance = new Cesium.GeometryInstance({
  geometry: new Cesium.RectangleGeometry({
    rectangle: Cesium.Rectangle.fromDegrees(-100.0, 20.0, -90.0, 30.0),
    vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT, // 所有EllipsoidSurfaceAppearance都兼容的顶点格式，只需要position和st属性
  }),
});

const rectangle = viewer.scene.primitives.add(
  new Cesium.Primitive({
    geometryInstances: instance,
    appearance: new Cesium.EllipsoidSurfaceAppearance({
      material: Cesium.Material.fromType("Dot"),
    }),
  })
);

console.log(viewer.scene.light); // cesium默认灯光是SunLight,但是好像没有position的概念
