/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// Since the API of the Mini Program and the Watchface overlap, the configuration is extracted and configured through the targets array
// 0 - Mini Program
// 1 - Watchface
// For example, targets: [0] indicates that the file appears only in the Mini Program's file
const deviceAPIList = [
  {
    path: '/global',
    targets: [0]
  },
  {
    type: 'category',
    label: 'hmUI Components Module',
    items: [
      {
        type: 'category',
        label: 'Widget',
        items: [
          '/hmUI/widget/IMG',
          { path: '/hmUI/widget/TEXT', targets: [0] },
          { path: '/hmUI/widget/ARC', targets: [0] },
          { path: '/hmUI/widget/FILL_RECT', targets: [0] },
          { path: '/hmUI/widget/STROKE_RECT', targets: [0] },
          { path: '/hmUI/widget/TEXT_IMG', targets: [1] },
          { path: '/hmUI/widget/ARC_PROGRESS', targets: [1] },
          { path: '/hmUI/widget/IMG_PROGRESS', targets: [1] },
          { path: '/hmUI/widget/IMG_LEVEL', targets: [1] },
          '/hmUI/widget/IMG_ANIM',
          { path: '/hmUI/widget/CIRCLE', targets: [0] },
          { path: '/hmUI/widget/IMG_POINTER', targets: [1] },
          { path: '/hmUI/widget/BUTTON', targets: [0] },
          { path: '/hmUI/widget/RADIO_GROUP', targets: [0] },
          { path: '/hmUI/widget/CHECKBOX_GROUP', targets: [0] },
          { path: '/hmUI/widget/SLIDE_SWITCH', targets: [0] },
          { path: '/hmUI/widget/DIALOG', targets: [0] },
          { path: '/hmUI/widget/SCROLL_LIST', targets: [0] },
          { path: '/hmUI/widget/CYCLE_LIST', targets: [0] },
          { path: '/hmUI/widget/CYCLE_IMAGE_TEXT_LIST', targets: [0] },
          { path: '/hmUI/widget/HISTOGRAM', targets: [0] },
          { path: '/hmUI/widget/GROUP', targets: [0] },
          { path: '/hmUI/widget/IMG_STATUS', targets: [1] },
          { path: '/hmUI/widget/IMG_TIME', targets: [1] },
          { path: '/hmUI/widget/TIME_POINTER', targets: [1] },
          { path: '/hmUI/widget/IMG_DATE', targets: [1] },
          { path: '/hmUI/widget/IMG_WEEK', targets: [1] },
          { path: '/hmUI/widget/DATE_POINTER', targets: [1] },
          { path: '/hmUI/widget/data_type', targets: [1] },
          { path: '/hmUI/widget/IMG_CLICK', targets: [1] },
          { path: '/hmUI/widget/GRADKIENT_POLYLINE', targets: [1] },
          { path: '/hmUI/widget/edit_watchface', targets: [1] },
          { path: '/hmUI/widget/PICK_DATE', targets: [0] },
          { path: '/hmUI/widget/QRCODE', targets: [0] }
        ]
      },
      '/hmUI/createWidget',
      { path: '/hmUI/addEventListener', targets: [0] },
      { path: '/hmUI/removeEventListener', targets: [0] },
      '/hmUI/setProperty',
      '/hmUI/getProperty',
      // 没有用上，暂时先下掉
      // { path: '/hmUI/getId', targets: [0] },
      { path: '/hmUI/getType', targets: [0] },
      '/hmUI/deleteWidget',
      { path: '/hmUI/createDialog', targets: [0] },
      { path: '/hmUI/setScrollView', targets: [0] },
      { path: '/hmUI/getScrollCurrentPage', targets: [0] },
      { path: '/hmUI/scrollToPage', targets: [0] },
      { path: '/hmUI/showToast', targets: [0] },
      { path: '/hmUI/setLayerScrolling', targets: [0] },
      { path: '/hmUI/getTextLayout', targets: [0] },
      { path: '/hmUI/setStatusBarVisible', targets: [0] },
      { path: '/hmUI/updateStatusBarTitle', targets: [0] }
    ]
  },
  {
    type: 'category',
    label: 'hmApp Device Module',
    targets: [0],
    items: [
      '/hmApp/startApp',
      '/hmApp/gotoPage',
      '/hmApp/reloadPage',
      '/hmApp/setLayerY',
      '/hmApp/getLayerY',
      '/hmApp/gotoHome',
      '/hmApp/exit',
      '/hmApp/goBack',
      '/hmApp/setScreenKeep',
      '/hmApp/packageInfo',
      {
        type: 'category',
        label: 'gestureEvent',
        items: [
          '/hmApp/gestureEvent/registerGestureEvent',
          '/hmApp/gestureEvent/unregisterGestureEvent'
        ]
      },
      {
        type: 'category',
        label: 'alarm',
        items: ['/hmApp/alarm/alarmNew', '/hmApp/alarm/alarmCancel']
      },
      {
        type: 'category',
        label: 'keyEvent',
        items: ['/hmApp/keyEvent/registerKeyEvent', '/hmApp/keyEvent/unregisterKeyEvent']
      },
      {
        type: 'category',
        label: 'spinEvent',
        items: ['/hmApp/spinEvent/registerSpinEvent', '/hmApp/spinEvent/unregisterSpinEvent']
      }
    ]
  },
  {
    type: 'category',
    label: 'hmSetting OS Module',
    items: [
      '/hmSetting/setScreenAutoBright',
      '/hmSetting/getScreenAutoBright',
      '/hmSetting/setBrightness',
      '/hmSetting/getBrightness',
      '/hmSetting/setBrightScreen',
      '/hmSetting/setBrightScreenCancel',
      '/hmSetting/setScreenOff',
      '/hmSetting/getUserData',
      '/hmSetting/getMileageUnit',
      '/hmSetting/getLanguage',
      '/hmSetting/getDateFormat',
      '/hmSetting/getTimeFormat',
      '/hmSetting/getDiskInfo',
      '/hmSetting/getDeviceInfo',
      '/hmSetting/getWeightTarget',
      '/hmSetting/getSleepTarget',
      '/hmSetting/getWeightUnit',
      '/hmSetting/getScreenType'
    ]
  },
  {
    type: 'category',
    label: 'hmSensor Sensor Module',
    items: [
      {
        type: 'category',
        label: 'Sensor',
        items: [
          '/hmSensor/sensorId/TIME',
          '/hmSensor/sensorId/BATTERY',
          '/hmSensor/sensorId/STEP',
          '/hmSensor/sensorId/CALORIE',
          '/hmSensor/sensorId/HEART',
          '/hmSensor/sensorId/PAI',
          '/hmSensor/sensorId/DISTANCE',
          '/hmSensor/sensorId/STAND',
          '/hmSensor/sensorId/WEATHER',
          '/hmSensor/sensorId/FAT_BURRING',
          '/hmSensor/sensorId/SPO2',
          '/hmSensor/sensorId/BODY_TEMP',
          '/hmSensor/sensorId/STRESS',
          '/hmSensor/sensorId/VIBRATE',
          '/hmSensor/sensorId/WEAR',
          '/hmSensor/sensorId/WORLD_CLOCK',
          '/hmSensor/sensorId/SLEEP',
          '/hmSensor/sensorId/MUSIC'
        ]
      },
      '/hmSensor/createSensor',
      '/hmSensor/addEventListener'
    ]
  },
  {
    path: '/hmBle',
    targets: [0]
  },
  {
    type: 'category',
    label: 'hmFS File System Module',
    items: [
      '/hmFS/stat_asset',
      '/hmFS/stat',
      '/hmFS/open_asset',
      '/hmFS/open',
      '/hmFS/close',
      '/hmFS/seek',
      '/hmFS/read',
      '/hmFS/write',
      '/hmFS/remove',
      '/hmFS/rename',
      '/hmFS/SysProSetBool',
      '/hmFS/SysProGetBool',
      '/hmFS/SysProSetInt',
      '/hmFS/SysProGetInt',
      '/hmFS/SysProSetInt64',
      '/hmFS/SysProGetInt64',
      '/hmFS/SysProSetDouble',
      '/hmFS/SysProGetDouble',
      '/hmFS/SysProSetChars',
      '/hmFS/SysProGetChars'
    ]
  },
  {
    type: 'category',
    label: 'Timer Module',
    items: ['/timer/createTimer', '/timer/stopTimer']
  }
]

const newAPIPathMap = [
  {
    path: 'global',
    label: 'Frame Interface'
  },
  {
    path: 'sensor',
    label: 'Sensor'
  },
  {
    path: 'app',
    label: 'Mini Program related'
  },
  {
    path: 'page',
    label: 'Page related'
  },
  {
    path: 'router',
    label: 'Router'
  },
  {
    path: 'interaction',
    label: 'Interaction'
  },
  {
    path: 'settings',
    label: 'System Settings'
  },
  {
    path: 'display',
    label: 'Display'
  },
  {
    path: 'device',
    label: 'Device'
  },
  {
    path: 'user',
    label: 'User'
  },
  {
    path: 'fs',
    label: 'File System'
  },
  {
    path: 'storage',
    label: 'Storage'
  },
  {
    path: 'i18n',
    label: 'I18n'
  },
  {
    path: 'utils',
    label: 'Utils'
  },
  {
    path: 'alarm',
    label: 'Alarm'
  },
  {
    path: 'app-service',
    label: 'App Service'
  },
  {
    path: 'notification',
    label: 'Notification'
  },
  {
    path: 'ble',
    label: 'BLE'
  },
  {
    path: 'transfer-file',
    label: 'Transfer File'
  }
]

// 首先拼接 prefix
// 并且筛选出没有的部分
function processDeviceAPI(deviceAPIList, options) {
  const { prefix, filterFunc = () => true } = options

  function processObj(obj) {
    if (obj.items) {
      const result = {
        ...obj,
        items: recursiveFilter(obj.items)
      }

      delete result.targets

      return result
    } else {
      return `${prefix}${obj.path}`
    }
  }

  // 一个递归处理
  function recursiveFilter(arr) {
    const result = []

    arr.forEach((i) => {
      if (typeof i === 'string') {
        result.push(`${prefix}${i}`)
      } else if (filterFunc(i)) {
        result.push(processObj(i))
      }
    })

    return result
  }

  return recursiveFilter(deviceAPIList)
}

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  // intro: [
  //   {
  //     type: 'doc',
  //     id: 'intro',
  //     label: 'Introduction',
  //   },
  // ],
  guides: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'intro'
      },
      items: [
        'intro',
        {
          type: 'category',
          label: 'Version Intro',
          link: {
            type: 'doc',
            id: 'intro/version'
          },
          items: [
            'guides/version-info/new-features-30',
            {
              type: 'category',
              label: 'Zepp OS v2',
              items: [
                'guides/version-info/new-features-21',
                'guides/version-info/new-features',
                'guides/version-info/new-api',
                'guides/version-info/migration-guide',
                'guides/version-info/version-choose'
              ]
            }
          ]
        },
        'intro/using'
      ]
    },
    {
      type: 'category',
      label: 'Quick Start',
      link: {
        type: 'doc',
        id: 'guides/quick-start'
      },
      items: [
        'guides/quick-start/environment',
        'guides/quick-start/create',
        'guides/quick-start/simulator-dev',
        'guides/quick-start/development',
        'guides/quick-start/preview'
      ]
    },
    // {
    //   type: 'category',
    //   label: 'Mini Program Architecture',
    //   items: []
    // },
    {
      type: 'category',
      label: 'Framework Introduction',
      items: [
        'guides/architecture/arc',
        'guides/architecture/folder-structure',
        {
          type: 'category',
          label: 'Device App',
          items: [
            'guides/framework/device/intro',
            'guides/framework/device/js-support',
            'guides/framework/device/app',
            'guides/framework/device/page',
            'guides/framework/device/secondary-widget',
            'guides/framework/device/life-cycle',
            'guides/framework/device/router',
            'guides/framework/device/compatibility',
            'guides/framework/device/permission',
            'guides/framework/device/fs',
            'guides/framework/device/screen-adaption',
            'guides/framework/device/app-service',
            'guides/framework/device/system-event',
            'guides/framework/device/system-notification',
            'guides/framework/device/ble-central'
          ]
        },
        {
          type: 'category',
          label: 'Settings App',
          items: [
            'guides/framework/app-settings/intro',
            'guides/framework/app-settings/js-support',
            'guides/framework/app-settings/register',
            'guides/framework/app-settings/ui-intro'
          ]
        },
        {
          type: 'category',
          label: 'Side Service',
          items: ['guides/framework/side-service/intro', 'guides/framework/side-service/register']
        }
      ]
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        {
          type: 'category',
          label: 'Zeus CLI',
          items: ['guides/tools/cli/index', 'guides/tools/cli/release-note']
        },
        {
          type: 'category',
          label: 'Simulator',
          items: [
            'guides/tools/simulator/index',
            'guides/tools/simulator/setup',
            'guides/tools/simulator/download',
            'guides/tools/simulator/release-note'
          ]
        },
        'guides/tools/npm/index',
        'guides/tools/zepp-app',
        {
          type: 'category',
          label: 'Watchface Maker',
          items: [
            {
              id: 'guides/tools/watchface/index',
              type: 'doc',
              label: 'Overview'
            },
            {
              type: 'category',
              label: 'Getting Started',
              items: [
                {
                  id: 'guides/tools/watchface/guides/create',
                  type: 'doc',
                  label: 'Create a Watchface'
                },
                {
                  id: 'guides/tools/watchface/guides/scanCode',
                  type: 'doc',
                  label: 'Install through scanning QR code'
                },
                {
                  id: 'guides/tools/watchface/guides/simulator',
                  type: 'doc',
                  label: 'Preview through simulator'
                },
                {
                  id: 'guides/tools/watchface/guides/test',
                  type: 'doc',
                  label: 'Watchface Test'
                },
                {
                  id: 'guides/tools/watchface/guides/background',
                  type: 'doc',
                  label: 'Background'
                },
                {
                  id: 'guides/tools/watchface/guides/time',
                  type: 'doc',
                  label: 'Time'
                },
                {
                  id: 'guides/tools/watchface/guides/text',
                  type: 'doc',
                  label: 'Text'
                },
                {
                  id: 'guides/tools/watchface/guides/date',
                  type: 'doc',
                  label: 'Date'
                }
              ]
            },
            {
              id: 'guides/tools/watchface/release-note',
              type: 'doc',
              label: 'Release Notes'
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Best practice',
      items: [
        'guides/best-practice/debug',
        'guides/best-practice/multi-screen-adaption',
        'guides/best-practice/code-adaptations-for-new-devices',
        'guides/best-practice/code-organization',
        'guides/best-practice/cross-page-communications',
        'guides/best-practice/bluetooth-communication',
        'guides/best-practice/widget-group',
        'guides/best-practice/persistence-storage',
        'guides/best-practice/error-catch'
      ]
    },
    {
      type: 'category',
      label: 'Related Resources',
      items: [
        'reference/related-resources/device-list',
        'reference/related-resources/language-list'
      ]
    },
    {
      type: 'category',
      label: 'FAQ',
      link: {
        type: 'doc',
        id: 'guides/faq/index'
      },
      items: [
        'guides/faq/watchface-maker',
        'guides/faq/simulator-4-4k',
        'guides/faq/developer-bridge-mode',
        'guides/faq/apple-silicon',
        'guides/faq/windows-cli-qrcode-error',
      ]
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'guides/community',
        'guides/community/construction',
        'guides/community/document-construction'
      ]
    },
    'reference/revision-history'
  ],
  reference: [
    'reference/app-json',
    {
      type: 'category',
      label: 'Device App API',
      items: [
        {
          type: 'category',
          label: 'UI',
          items: [
            {
              type: 'category',
              label: 'WIDGETS',
              items: [
                {
                  type: 'category',
                  label: 'Basic Widgets',
                  items: [
                    'reference/device-app-api/newAPI/ui/widget/TEXT',
                    'reference/device-app-api/newAPI/ui/widget/IMG',
                    'reference/device-app-api/newAPI/ui/widget/BUTTON',
                    'reference/device-app-api/newAPI/ui/widget/FILL_RECT',
                    'reference/device-app-api/newAPI/ui/widget/STROKE_RECT',
                    'reference/device-app-api/newAPI/ui/widget/CIRCLE',
                    'reference/device-app-api/newAPI/ui/widget/ARC',
                    'reference/device-app-api/newAPI/ui/widget/IMG_ANIM',
                    'reference/device-app-api/newAPI/ui/widget/QRCODE',
                    'reference/device-app-api/newAPI/ui/widget/DIALOG',
                    'reference/device-app-api/newAPI/ui/widget/HISTOGRAM',
                    'reference/device-app-api/newAPI/ui/widget/GRADIENT_POLYLINE',
                    'reference/device-app-api/newAPI/ui/widget/CANVAS',
                    'reference/device-app-api/newAPI/ui/widget/PAGE_INDICATOR',
                    'reference/device-app-api/newAPI/ui/widget/PAGE_SCROLLBAR'
                  ]
                },
                {
                  type: 'category',
                  label: 'Form Widgets',
                  items: [
                    'reference/device-app-api/newAPI/ui/widget/RADIO_GROUP',
                    'reference/device-app-api/newAPI/ui/widget/CHECKBOX_GROUP',
                    'reference/device-app-api/newAPI/ui/widget/SLIDE_SWITCH',
                    'reference/device-app-api/newAPI/ui/widget/PICK_DATE',
                    'reference/device-app-api/newAPI/ui/widget/KEYBOARD',
                    'reference/device-app-api/newAPI/ui/widget/PICKER'
                    // 'reference/device-app-api/newAPI/ui/widget/WIDGET_PICKER',
                  ]
                },
                {
                  type: 'category',
                  label: 'Layout Widgets',
                  items: [
                    'reference/device-app-api/newAPI/ui/widget/GROUP',
                    'reference/device-app-api/newAPI/ui/widget/SCROLL_LIST',
                    'reference/device-app-api/newAPI/ui/widget/VIEW_CONTAINER',
                    'reference/device-app-api/newAPI/ui/widget/CYCLE_LIST',
                    'reference/device-app-api/newAPI/ui/widget/CYCLE_IMAGE_TEXT_LIST'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Widget General Methods',
              items: [
                'reference/device-app-api/newAPI/ui/addEventListener',
                'reference/device-app-api/newAPI/ui/removeEventListener',
                'reference/device-app-api/newAPI/ui/setProperty',
                'reference/device-app-api/newAPI/ui/getProperty',
                'reference/device-app-api/newAPI/ui/getType',
                'reference/device-app-api/newAPI/ui/getId',
                'reference/device-app-api/newAPI/ui/setAlpha',
              ]
            },
            'reference/device-app-api/newAPI/ui/widgetAnimations',
            'reference/device-app-api/newAPI/ui/createWidget',
            'reference/device-app-api/newAPI/ui/deleteWidget',
            'reference/device-app-api/newAPI/ui/setStatusBarVisible',
            'reference/device-app-api/newAPI/ui/updateStatusBarTitle',
            'reference/device-app-api/newAPI/ui/getTextLayout',
            'reference/device-app-api/newAPI/ui/getImageInfo',
            'reference/device-app-api/newAPI/ui/redraw',
            'reference/device-app-api/newAPI/ui/setEnable',
            'reference/device-app-api/newAPI/ui/setAppWidgetSize',
            'reference/device-app-api/newAPI/ui/getAppWidgetSize'
          ]
        },
        ...newAPIPathMap.map((i) => {
          const { path, label } = i

          return {
            type: 'category',
            label,
            items: [
              {
                type: 'autogenerated',
                dirName: `reference/device-app-api/newAPI/${path}`
              }
            ]
          }
        }),
        'reference/device-app-api/newAPI/media'
      ]
    },
    {
      type: 'category',
      label: 'Side App API',
      items: [
        {
          type: 'category',
          label: 'Settings App API',
          items: [
            'reference/app-settings-api/global',
            {
              type: 'category',
              label: 'UI Components',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'reference/app-settings-api/ui' // Generate sidebar slice from docs/tutorials/easy
                }
              ]
            },
            'reference/app-settings-api/settings-storage'
          ]
        },
        {
          type: 'category',
          label: 'Side Service API',
          items: [
            'reference/side-service-api/global',
            'reference/side-service-api/messaging',
            'reference/side-service-api/fetch',
            'reference/side-service-api/settings-storage',
            'reference/side-service-api/transfer-file',
            'reference/side-service-api/download-file',
            'reference/side-service-api/image-convert'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Sample App',
      items: [
        'samples/app/calories',
        'samples/app/toDoList',
        'samples/app/fetchAPI',
        'samples/app/showcase'
      ]
    },
    'distribute/index'
  ],
  watchface: [
    'watchface/watchface-quick-start',
    'watchface/app-json',
    {
      type: 'category',
      label: 'Watchface API',
      items: processDeviceAPI(deviceAPIList, {
        prefix: 'watchface/api',
        filterFunc: (item) => {
          if (item.targets && !item.targets.includes(1)) {
            return false
          }
          return true
        }
      })
    },
    'watchface/specification',
    'watchface/design-resources',
    {
      type: 'category',
      label: 'Sample Watchface',
      items: [
        'samples/watchface/colorWorld',
        'samples/watchface/basketball',
        'samples/watchface/timer'
      ]
    },
    'distribute/watchface'
  ],
  designs: [
    'designs/index',
    {
      type: 'category',
      label: 'Design Concept',
      items: [
        'designs/concept/overview',
        'designs/concept/keywords',
        'designs/concept/values',
        'designs/concept/principles'
      ]
    },
    {
      type: 'category',
      label: 'Structure',
      items: [
        'designs/structure/page-types',
        'designs/structure/usage-specifications',
        'designs/structure/switching-pages',
        'designs/structure/interface-framework'
      ]
    },
    {
      type: 'category',
      label: 'Interaction',
      items: [
        'designs/interaction/screen-touch-control',
        'designs/interaction/physical-buttons',
        'designs/interaction/definition',
        'designs/interaction/digital-crown'
      ]
    },
    {
      type: 'category',
      label: 'Visual',
      items: [
        'designs/visual/color',
        'designs/visual/font',
        'designs/visual/icons',
        'designs/visual/illustrations',
        'designs/visual/animations'
      ]
    },
    {
      type: 'category',
      label: 'Templates',
      items: [
        'designs/template/list',
        'designs/template/pop-up-windows',
        'designs/template/cards',
        'designs/template/empty-pages',
        'designs/template/content-layout',
      ]
    },
    {
      type: 'category',
      label: 'Elements',
      items: [
        'designs/elements/text',
        'designs/elements/progress',
        'designs/elements/loading',
        'designs/elements/charts',
        'designs/elements/title-bar',
        'designs/elements/status-bars',
        'designs/elements/page-indicators'
      ]
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'designs/operations/buttons',
        'designs/operations/switches',
        'designs/operations/selection-and-status-indicators',
        'designs/operations/sliders'
      ]
    },
    {
      type: 'category',
      label: 'Input',
      items: ['designs/input/selectors', 'designs/input/digit-input']
    },
    {
      type: 'category',
      label: 'Customization',
      items: [
        'designs/customization/watchface',
        'designs/customization/screen-off-mode',
        'designs/customization/widget'
      ]
    },
    {
      type: 'category',
      label: 'Internationalization',
      items: [
        'designs/internationalization/index',
        'designs/internationalization/languages',
        'designs/internationalization/interface-layouts',
        'designs/internationalization/visual-graphics',
        'designs/internationalization/regional-standards'
      ]
    },
    {
      type: 'category',
      label: 'Accessibility Design',
      items: [
        'designs/accessibility/index',
        'designs/accessibility/color',
        'designs/accessibility/contrast-ratio'
      ]
    },
    'designs/self-checklist',
    'designs/download'
  ]
}
