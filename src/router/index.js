import Vue from 'vue'
import Router from 'vue-router'
const Test = () => import('@/pages/Test')

// project
const Home = () => import('@/pages/home/Home')
const HomeHeader = () => import('@/pages/home/components/Header')
const One = () => import('@/pages/links/One')
const Two = () => import('@/pages/links/Two')
const TwoA = () => import('@/pages/links/TwoA')
const TwoB = () => import('@/pages/links/TwoB')
const Three = () => import('@/pages/links/Three')
const Four = () => import('@/pages/links/Four')



// ！ demo
//mixins
const mixinsDemo = () => import('@/pages/demo/mixinsDemo/mixinsDemo')
//父-->子
const fatherDemo = () => import('@/pages/demo/father/father')
//子-->父
const childDemo = () => import('@/pages/demo/child/father')

const splitDemo = () => import('@/pages/demo/splitOrjoin/split')
// 手风琴
const accordionDemo = () => import('@/pages/demo/accordion/demo')
// tabs
const tabsDemo = () => import('@/pages/demo/tabs/demo')
// bus 传值
const busDemo = () => import('@/pages/demo/bus/a')
//bus 子传子
const busDemoChildren =() => import('@/pages/demo/bus/item')
//sticky
const stickyDemo = () => import('@/pages/demo/sticky/demo')
//scroller
const scrollerDemo = () => import('@/pages/demo/scroller/demo')
//testDemo
const testDemo = () => import('@/pages/demo/testDemo/test')
//vuexDemo
const vuexDemo = () => import('@/pages/demo/vuexDemo/vuexText')
//vuexDataDemo
const vuexDataDemo = () => import('@/pages/demo/vuexDemo/vuexData')
Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'navListActive',
  routes: [
    {
      path: '/pages/Test',
      name: 'Test',
      component: Test
    },
    {
      path:'*' ,
      redirect:(to)=>{
        if(to.path === '/hello/hello'){
          return {
            path: '/',
            query: to.query
          }
        }else{
          return '/pages/Test'
        }
      }
    },
    {
      path: '/',
      name: 'Home',
      //redirect:'/pages/Test', //重定向 指定默认路由
      component: Home,
      meta: {
        title: "衣二三"
      }
    },
    {
      path: '/pages/home/components/Header',
      name: 'HomeHeader',
      component: HomeHeader
    },
    {
      path: '/pages/links/One',
      name: 'one',
      component: One,
      meta: {
        title: '111'
      }
    },
    {
      path: '/pages/links/Two',
      name: 'two',
      component: Two,
      redirect: "/pages/links/Two/TwoB",

      children: [{
                  path: 'TwoA',
                  name: 'twoA',
                  component: TwoA,
                  meta: {
                    title: "衣二三1"
                  },
                },
                {
                  path: 'TwoB',
                  name: 'twoB',
                  component: TwoB,
                  meta: {
                    title: "衣二三2"
                  },
                }]
    },
    {
      path: '/pages/links/Three',
      name: 'three',
      component: Three,
      meta: {
        title: '3333'
      }
    },
    {
      path: '/pages/links/Four',
      name: 'four',
      component: Four,
      meta: {
        title: '444'
      }
    },

    // demo

    {
      path: '/pages/demo/mixinsDemo/mixinsDemo',
      name: 'mixins',
      component: mixinsDemo,
    },
    {
      path: '/pages/demo/child/father',
      name: '子',
      component: childDemo,
    },
    {
      path: '/pages/demo/father/father',
      name: '父',
      component: fatherDemo,
    },
    {
      path: '/pages/demo/bus/a',
      name: 'bus',
      component: busDemo,
    },
    {
      path: '/pages/demo/bus/item',
      name: 'busChildren',
      component: busDemoChildren,
    },
    {
      path: '/pages/demo/splitOrjoin/split',
      name: 'splitOrjoin',
      component: splitDemo,
    },
    {
      path: '/pages/demo/accordion/demo',
      name: 'accordion',
      component: accordionDemo,
    },
    {
      path: '/pages/demo/tabs/demo',
      name: 'tabs',
      component: tabsDemo,
    },
    {
      path: '/pages/demo/sticky/demo',
      name: 'sticky',
      component: stickyDemo,
    },
    {
      path: '/pages/demo/scroller/demo',
      name: 'scroller',
      component: scrollerDemo
    },
    {
      path:'/pages/demo/testDemo/test',
      name:'testDemo',
      component: testDemo,
      meta: {
        title: '衣二三'
      }
    },
    {
      path:'/pages/demo/vuexDemo/vuexText',
      name:'vuexDemo',
      component: vuexDemo,
      meta: {
        title: '衣二三'
      }
    },
    {
      path:'/pages/demo/vuexDemo/vuexData',
      name:'vuexDataDemo',
      component: vuexDataDemo,
      meta: {
        title: '衣二三'
      }
    }
  ]
})
