/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.96
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

define(['./PrimitivePipeline-4b950e21', './createTaskProcessorWorker', './Transforms-f7ca48a8', './Matrix2-46dc0d7f', './RuntimeError-cef79f54', './defaultValue-4607806f', './ComponentDatatype-1ef49b14', './WebGLConstants-f100e3dd', './_commonjsHelpers-a32ac251', './combine-fc59ba59', './GeometryAttribute-11edf1c4', './GeometryAttributes-acac33d2', './GeometryPipeline-f5a788b2', './AttributeCompression-e3844002', './EncodedCartesian3-67ce8bc4', './IndexDatatype-790b4297', './IntersectionTests-7955a476', './Plane-e8eab25b', './WebMercatorProjection-60cca281'], (function (PrimitivePipeline, createTaskProcessorWorker, Transforms, Matrix2, RuntimeError, defaultValue, ComponentDatatype, WebGLConstants, _commonjsHelpers, combine, GeometryAttribute, GeometryAttributes, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, WebMercatorProjection) { 'use strict';

  function combineGeometry(packedParameters, transferableObjects) {
    const parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(
      packedParameters
    );
    const results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
    return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(
      results,
      transferableObjects
    );
  }
  var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

  return combineGeometry$1;

}));
//# sourceMappingURL=combineGeometry.js.map
