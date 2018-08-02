import Vue from 'vue'
import Router from 'vue-router'
const Test = () => import('@/pages/Test')

//test project
const Home = () => import('@/pages/home/Home')
const HomeHeader = () => import('@/pages/home/components/Header')

const One = () => import('@/pages/links/One')
const Two = () => import('@/pages/links/Two')
const TwoA = () => import('@/pages/links/TwoA')
const TwoB = () => import('@/pages/links/TwoB')
const Three = () => import('@/pages/links/Three')
const Four = () => import('@/pages/links/Four')





// demo
const JS = () => import('@/pages/demo/js/js')
// 手风琴
const Accordion = () => import('@/pages/demo/accordion/demo')
// tabs
const tabsDemo = () => import('@/pages/demo/tabs/demo')
// bus 传值
const Aa = () => import('@/pages/demo/bus/a')
const Sticky = () => import('@/pages/demo/sticky/demo')

// emit props
const emitpropsDemo = () => import('@/pages/demo/emitprops/demo')

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
      path: '/',
      name: 'Home',
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
      component: One
    },
    {
      path: '/pages/links/Two',
      name: 'two',
      component: Two,
      redirect: "/pages/links/Two/TwoB",
      meta: {
        title: "哈哈"
      },
      children: [{
                  path: 'TwoA',
                  name: 'twoA',
                  component: TwoA,
                  meta: {
                    title: "衣二三"
                  },
                },
                {
                  path: 'TwoB',
                  name: 'twoB',
                  component: TwoB
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
      component: Four
    },

    // demo
    {
      path: '/pages/demo/bus/a',
      name: 'a',
      component: Aa
    },
    {
      path: '/pages/demo/js/js',
      name: 'js',
      component: JS
    },
    {
      path: '/pages/demo/accordion/demo',
      name: 'accordion',
      component: Accordion,
    },
    {
      path: '/pages/demo/tabs/demo',
      name: 'tabs',
      component: tabsDemo,
    },
    {
      path: '/pages/demo/sticky/demo',
      name: 'sticky',
      component: Sticky,
    },
    {
      path: '/pages/demo/emitprops/demo',
      name: 'emitprops',
      component: emitpropsDemo
    }
  ]
})
