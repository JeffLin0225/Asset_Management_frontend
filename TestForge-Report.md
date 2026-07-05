# 🔧 TestForge 測試報告

![Tests](https://img.shields.io/badge/Tests-43_Passed,_56_Failed-red)
![Coverage](https://img.shields.io/badge/Coverage-0%25-red)
![Threshold](https://img.shields.io/badge/Threshold-80%25-red)

> 📅 報告產生時間：2026/7/5 下午11:04:53
> 🔧 由 [TestForge](https://github.com/JeffLin0225/testforge) 自動產生

---

## 📋 測試總覽

| 指標 | 數值 |
| --- | --- |
| 測試檔案數 | 19 |
| 總測試數 | 99 |
| ✅ 通過 | 43 |
| ❌ 失敗 | 56 |
| 通過率 | 43.4% |

## 📄 測試檔案結果

| 檔案名稱 | 狀態 | 通過 | 失敗 | 總數 |
| --- | --- | --- | --- | --- |
| `App.vue.test.ts` | ❌ | 0 | 4 | 4 |
| `analyzeApi.test.ts` | ✅ | 3 | 0 | 3 |
| `assetApi.test.ts` | ✅ | 6 | 0 | 6 |
| `loginApi.test.ts` | ✅ | 3 | 0 | 3 |
| `AssetDashboard.vue.test.ts` | ❌ | 0 | 8 | 8 |
| `AssetDraggable.vue.test.ts` | ✅ | 5 | 0 | 5 |
| `Home.vue.test.ts` | ❌ | 0 | 3 | 3 |
| `Login.vue.test.ts` | ✅ | 3 | 0 | 3 |
| `Sidebar.vue.test.ts` | ❌ | 0 | 6 | 6 |
| `AssetOverview.vue.test.ts` | ❌ | 0 | 3 | 3 |
| `CategoryDetailPie.vue.test.ts` | ❌ | 0 | 3 | 3 |
| `CategoryPie.vue.test.ts` | ❌ | 0 | 3 | 3 |
| `CategoryTrendChart.vue.test.ts` | ❌ | 0 | 3 | 3 |
| `NetWorthTrendChart.vue.test.ts` | ❌ | 0 | 3 | 3 |
| `CardItem.vue.test.ts` | ❌ | 0 | 13 | 13 |
| `Column.vue.test.ts` | ✅ | 12 | 0 | 12 |
| `SubCategory.vue.test.ts` | ❌ | 8 | 2 | 10 |
| `Loading.vue.test.ts` | ❌ | 0 | 4 | 4 |
| `Carousel.vue.test.ts` | ❌ | 3 | 1 | 4 |

## ❌ 失敗的測試

### `App.vue.test.ts`

- **App.vue 應該能正常掛載**
  ```
  TypeError: Cannot read properties of undefined (reading 'path')
      at ComputedRefImpl.fn (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/App.vue:19:42)
      at refreshComputed (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:395:28)
      at ComputedRefImpl.get value [as value] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:1648:5)
      at unref (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:1493:29)
  ```
- **App.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot read properties of …' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/App.vue.test.ts:28:40
  ```
- **App.vue 條件渲染 (isLoginPage) 不同值不應崩潰**
  ```
  TypeError: Cannot read properties of undefined (reading 'path')
      at ComputedRefImpl.fn (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/App.vue:19:42)
      at refreshComputed (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:395:28)
      at ComputedRefImpl.get value [as value] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:1648:5)
      at unref (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:1493:29)
  ```
- **App.vue 渲染結果應與快照一致**
  ```
  TypeError: Cannot read properties of undefined (reading 'path')
      at ComputedRefImpl.fn (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/App.vue:19:42)
      at refreshComputed (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:395:28)
      at ComputedRefImpl.get value [as value] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:1648:5)
      at unref (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:1493:29)
  ```

### `AssetDashboard.vue.test.ts`

- **AssetDashboard.vue 應該能正常掛載**
  ```
  TypeError: Cannot set properties of null (setting 'dpr')
      at Layer.initContext (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Layer.js:80:22)
      at CanvasPainter.getLayer (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:343:19)
      at CanvasPainter._updateLayerStatus (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:467:30)
      at CanvasPainter._paintList (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:173:14)
  ```
- **AssetDashboard.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot set properties of n…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/view/AssetDashboard.vue.test.ts:28:40
  ```
- **AssetDashboard.vue 條件渲染 (latest) 不同值不應崩潰**
  ```
  TypeError: Cannot set properties of null (setting 'dpr')
      at Layer.initContext (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Layer.js:80:22)
      at CanvasPainter.getLayer (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:343:19)
      at CanvasPainter._updateLayerStatus (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:467:30)
      at CanvasPainter._paintList (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:173:14)
  ```
- **AssetDashboard.vue 條件渲染 (drillCategory && selectedSnapshot) 不同值不應崩潰**
  ```
  TypeError: Cannot set properties of null (setting 'dpr')
      at Layer.initContext (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Layer.js:80:22)
      at CanvasPainter.getLayer (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:343:19)
      at CanvasPainter._updateLayerStatus (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:467:30)
      at CanvasPainter._paintList (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:173:14)
  ```
- **AssetDashboard.vue 條件渲染 (selectedSnapshot) 不同值不應崩潰**
  ```
  TypeError: Cannot set properties of null (setting 'dpr')
      at Layer.initContext (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Layer.js:80:22)
      at CanvasPainter.getLayer (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:343:19)
      at CanvasPainter._updateLayerStatus (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:467:30)
      at CanvasPainter._paintList (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:173:14)
  ```
- **AssetDashboard.vue 條件渲染 (selectedSnapshot) 不同值不應崩潰**
  ```
  TypeError: Cannot set properties of null (setting 'dpr')
      at Layer.initContext (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Layer.js:80:22)
      at CanvasPainter.getLayer (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:343:19)
      at CanvasPainter._updateLayerStatus (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:467:30)
      at CanvasPainter._paintList (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:173:14)
  ```
- **AssetDashboard.vue 條件渲染 (selectedSnapshot) 不同值不應崩潰**
  ```
  TypeError: Cannot set properties of null (setting 'dpr')
      at Layer.initContext (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Layer.js:80:22)
      at CanvasPainter.getLayer (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:343:19)
      at CanvasPainter._updateLayerStatus (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:467:30)
      at CanvasPainter._paintList (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:173:14)
  ```
- **AssetDashboard.vue 渲染結果應與快照一致**
  ```
  TypeError: Cannot set properties of null (setting 'dpr')
      at Layer.initContext (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Layer.js:80:22)
      at CanvasPainter.getLayer (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:343:19)
      at CanvasPainter._updateLayerStatus (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:467:30)
      at CanvasPainter._paintList (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:173:14)
  ```

### `Home.vue.test.ts`

- **Home.vue 應該能正常掛載**
  ```
  TypeError: Cannot read properties of undefined (reading 'query')
      at setup (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/view/Home.vue:24:23)
      at callWithErrorHandling (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:7936:25)
      at setupComponent (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:7897:36)
  ```
- **Home.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot read properties of …' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/view/Home.vue.test.ts:28:40
  ```
- **Home.vue 渲染結果應與快照一致**
  ```
  TypeError: Cannot read properties of undefined (reading 'query')
      at setup (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/view/Home.vue:24:23)
      at callWithErrorHandling (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:7936:25)
      at setupComponent (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:7897:36)
  ```

### `Sidebar.vue.test.ts`

- **Sidebar.vue 應該能正常掛載**
  ```
  TypeError: Cannot read properties of undefined (reading 'path')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/view/Sidebar.vue:9:34)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **Sidebar.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot read properties of …' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/view/Sidebar.vue.test.ts:28:40
  ```
- **Sidebar.vue 條件渲染 (userName) 不同值不應崩潰**
  ```
  TypeError: Cannot read properties of undefined (reading 'path')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/view/Sidebar.vue:9:34)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **Sidebar.vue 條件渲染 (showMenu) 不同值不應崩潰**
  ```
  TypeError: Cannot read properties of undefined (reading 'path')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/view/Sidebar.vue:9:34)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **Sidebar.vue 條件渲染 (!userName) 不同值不應崩潰**
  ```
  TypeError: Cannot read properties of undefined (reading 'path')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/view/Sidebar.vue:9:34)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **Sidebar.vue 渲染結果應與快照一致**
  ```
  TypeError: Cannot read properties of undefined (reading 'path')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/view/Sidebar.vue:9:34)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```

### `AssetOverview.vue.test.ts`

- **AssetOverview.vue 應該能正常掛載**
  ```
  TypeError: Cannot read properties of undefined (reading 'assets')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDashboard/AssetOverview.vue:6:40)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **AssetOverview.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot read properties of …' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/components/AssetDashboard/AssetOverview.vue.test.ts:28:40
  ```
- **AssetOverview.vue 渲染結果應與快照一致**
  ```
  TypeError: Cannot read properties of undefined (reading 'assets')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDashboard/AssetOverview.vue:6:40)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```

### `CategoryDetailPie.vue.test.ts`

- **CategoryDetailPie.vue 應該能正常掛載**
  ```
  TypeError: Cannot set properties of null (setting 'dpr')
      at Layer.initContext (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Layer.js:80:22)
      at CanvasPainter.getLayer (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:343:19)
      at CanvasPainter._updateLayerStatus (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:467:30)
      at CanvasPainter._paintList (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:173:14)
  ```
- **CategoryDetailPie.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot set properties of n…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/components/AssetDashboard/CategoryDetailPie.vue.test.ts:34:40
  ```
- **CategoryDetailPie.vue 渲染結果應與快照一致**
  ```
  TypeError: Cannot set properties of null (setting 'dpr')
      at Layer.initContext (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Layer.js:80:22)
      at CanvasPainter.getLayer (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:343:19)
      at CanvasPainter._updateLayerStatus (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:467:30)
      at CanvasPainter._paintList (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:173:14)
  ```

### `CategoryPie.vue.test.ts`

- **CategoryPie.vue 應該能正常掛載**
  ```
  TypeError: Cannot set properties of null (setting 'dpr')
      at Layer.initContext (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Layer.js:80:22)
      at CanvasPainter.getLayer (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:343:19)
      at CanvasPainter._updateLayerStatus (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:467:30)
      at CanvasPainter._paintList (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:173:14)
  ```
- **CategoryPie.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot set properties of n…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/components/AssetDashboard/CategoryPie.vue.test.ts:39:40
  ```
- **CategoryPie.vue 渲染結果應與快照一致**
  ```
  TypeError: Cannot set properties of null (setting 'dpr')
      at Layer.initContext (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Layer.js:80:22)
      at CanvasPainter.getLayer (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:343:19)
      at CanvasPainter._updateLayerStatus (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:467:30)
      at CanvasPainter._paintList (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/zrender/lib/canvas/Painter.js:173:14)
  ```

### `CategoryTrendChart.vue.test.ts`

- **CategoryTrendChart.vue 應該能正常掛載**
  ```
  TypeError: props.snapshots.map is not a function
      at updateChart (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDashboard/CategoryTrendChart.vue:28:33)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDashboard/CategoryTrendChart.vue:107:3
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:2861:40
      at callWithErrorHandling (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
  ```
- **CategoryTrendChart.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: props.snapshots.map is not…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/components/AssetDashboard/CategoryTrendChart.vue.test.ts:37:40
  ```
- **CategoryTrendChart.vue 渲染結果應與快照一致**
  ```
  TypeError: props.snapshots.map is not a function
      at updateChart (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDashboard/CategoryTrendChart.vue:28:33)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDashboard/CategoryTrendChart.vue:107:3
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:2861:40
      at callWithErrorHandling (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
  ```

### `NetWorthTrendChart.vue.test.ts`

- **NetWorthTrendChart.vue 應該能正常掛載**
  ```
  TypeError: props.snapshots.map is not a function
      at updateChart (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDashboard/NetWorthTrendChart.vue:22:33)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDashboard/NetWorthTrendChart.vue:75:3
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:2861:40
      at callWithErrorHandling (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
  ```
- **NetWorthTrendChart.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: props.snapshots.map is not…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/components/AssetDashboard/NetWorthTrendChart.vue.test.ts:35:40
  ```
- **NetWorthTrendChart.vue 渲染結果應與快照一致**
  ```
  TypeError: props.snapshots.map is not a function
      at updateChart (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDashboard/NetWorthTrendChart.vue:22:33)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDashboard/NetWorthTrendChart.vue:75:3
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:2861:40
      at callWithErrorHandling (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
  ```

### `CardItem.vue.test.ts`

- **CardItem.vue 應該能正常掛載**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **CardItem.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot read properties of …' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/components/AssetDraggable/CardItem.vue.test.ts:28:40
  ```
- **CardItem.vue 按鈕「{{ showNote ? "收起備註" : "展開備註" }}」應該存在**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **CardItem.vue 點擊「{{ showNote ? "收起備註" : "展開備註" }}」不應崩潰**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **CardItem.vue 按鈕「✕」應該存在**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **CardItem.vue 點擊「✕」應觸發 remove 事件**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **CardItem.vue input 元素應該存在**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **CardItem.vue input 應支援輸入（v-model: item.name）**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **CardItem.vue input 元素應該存在**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **CardItem.vue textarea 元素應該存在**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **CardItem.vue textarea 應支援輸入（v-model: item.note）**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **CardItem.vue 條件渲染 (showNote) 不同值不應崩潰**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```
- **CardItem.vue 渲染結果應與快照一致**
  ```
  TypeError: Cannot read properties of undefined (reading 'name')
      at Proxy._sfc_render (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/AssetDraggable/CardItem.vue:5:28)
      at renderComponentRoot (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6532:16)
      at ReactiveEffect.componentUpdateFn [as fn] (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:5332:46)
      at ReactiveEffect.run (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/reactivity/dist/reactivity.cjs.js:241:19)
  ```

### `SubCategory.vue.test.ts`

- **SubCategory.vue input 元素應該存在**
  ```
  AssertionError: expected false to be true // Object.is equality
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/components/AssetDraggable/SubCategory.vue.test.ts:39:44
      at file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
      at file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/runner/dist/chunk-artifact.js:2326:20
  ```
- **SubCategory.vue input 應支援輸入（v-model: sub.title）**
  ```
  Error: Cannot call setValue on an empty DOMWrapper.
      at Object.get (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js:1482:27)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/components/AssetDraggable/SubCategory.vue.test.ts:45:14
      at file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```

### `Loading.vue.test.ts`

- **Loading.vue 應該能正常掛載**
  ```
  Error: [🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
  See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
  This will fail in production.
      at useStore (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/pinia/dist/pinia.mjs:1700:19)
      at setup (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/Common/Loading.vue:14:17)
  ```
- **Loading.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'Error: [🍍]: "getActivePinia()" was c…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/components/Common/Loading.vue.test.ts:28:40
  ```
- **Loading.vue 條件渲染 (loading.active) 不同值不應崩潰**
  ```
  Error: [🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
  See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
  This will fail in production.
      at useStore (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/pinia/dist/pinia.mjs:1700:19)
      at setup (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/Common/Loading.vue:14:17)
  ```
- **Loading.vue 渲染結果應與快照一致**
  ```
  Error: [🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
  See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
  This will fail in production.
      at useStore (file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/pinia/dist/pinia.mjs:1700:19)
      at setup (/home/runner/work/Asset_Management_frontend/Asset_Management_frontend/src/components/Common/Loading.vue:14:17)
  ```

### `Carousel.vue.test.ts`

- **Carousel.vue 應該渲染 prop: title**
  ```
  AssertionError: expected '' to contain 'Test Value'
      at /home/runner/work/Asset_Management_frontend/Asset_Management_frontend/__generated_tests__/components/Home/Carousel.vue.test.ts:39:28
      at file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
      at file:///home/runner/work/Asset_Management_frontend/Asset_Management_frontend/node_modules/@vitest/runner/dist/chunk-artifact.js:2326:20
  ```

---

> 💡 如果想看詳細的互動式覆蓋率報告，請查看 `coverage/index.html`。
>
> 🔧 此報告由 [TestForge](https://github.com/JeffLin0225/testforge) 自動產生。
