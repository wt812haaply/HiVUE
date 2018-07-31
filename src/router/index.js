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
const SNE = () => import('@/pages/sticky/Sne')
const Aa = () => import('@/pages/bus/a')
const Xiding = () => import('@/pages/xiding/xiding')
const AA = () => import('@/pages/xiding/AA')
const Tab = () => import('@/pages/tab/tab')

// demo
const JS = () => import('@/pages/demo/js/js')

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

    {
      path: '/pages/sticky/Sne',
      name: 'sne',
      component: SNE
    },
    {
      path: '/pages/bus/a',
      name: 'a',
      component: Aa
    },
    {
      path: '/pages/xiding/xiding',
      name: 'xiding',
      component: Xiding
    },
    {
      path: '/pages/xiding/AA',
      name: 'AA',
      component: AA
    },
    {
      path: '/pages/demo/js/js',
      name: 'js',
      component: JS
    },
    {
      path: '/pages/tab/tab',
      name: 'tab',
      component: Tab,
    }
  ]
})
