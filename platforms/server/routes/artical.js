import Router from 'koa-router'
import ArticalCtrl from '../controllers/articalCtrl'
const router = new Router()
router.prefix('/artical')

router.get('/:articalId', ArticalCtrl)

export default router
