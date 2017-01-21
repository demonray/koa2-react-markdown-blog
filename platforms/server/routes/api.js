import Router from 'koa-router'
import ArticalListCtrl from '../controllers/articalListCtrl'
const router = new Router()
router.prefix('/api')

router.get('/getArticalList', ArticalListCtrl)

export default router
