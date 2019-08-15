import Vue from 'vue'
import Router from 'vue-router'
import EmpList from '@/components/EmpList'
import EmpAdd from '@/components/EmpAdd'
import UpdateEmp from '@/components/UpdateEmp'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/EmpList',
      name: 'EmpList',
      component: EmpList
    },
    {
      path: '/EmpAdd',
      name: 'EmpAdd',
      component: EmpAdd
    },
    {
      path: '/UpdateEmp',
      name: 'UpdateEmp',
      component: UpdateEmp
    }
  ]
})
