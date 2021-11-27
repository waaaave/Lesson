import React, { lazy, Suspense } from 'react';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from '../layouts/HomeLayout';
import { Redirect } from 'react-router-dom';
// function(component) {
//   return function(props) {
//   }
// }
// SuspenseComponent()() 的时候调用props
const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}
const AlbumComponent = lazy(() => import('../application/Album/'))
const RecommendComponent = lazy(() => import('../application/Recommend/'))
const SearchComponent = lazy(() => import('../application/Search/'))
// 路由配置
export default [{
  component: BlankLayout,
  routes: [
    {
      path: "/",
      component: HomeLayout,
      routes: [
        {
          path: "/",
          exact: true,
          component: ()=> <Redirect to={"/recommend"}/>
        },
        {
          path: "/recommend",
          component: SuspenseComponent(RecommendComponent),
          routes: [
            {
              path: "/recommend/:id",
              component: SuspenseComponent(AlbumComponent)
            }
          ]
        },
        {
          path: "/search",
          component:SuspenseComponent(SearchComponent)
        }
      ]
    },
    
  ]
}]
