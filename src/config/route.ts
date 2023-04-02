import ClassCourt from '../pages/ClassCourt.vue'
import LawyerIntroduction from '../pages/LawyerIntroduction.vue'
import LawyerTeam from '../pages/LawyerTeam.vue'
import Login from '../pages/Login.vue'
import Main from '../pages/Main.vue'
import SubmitQuickSuit from '../pages/SubmitQuickSuit.vue'
import SuitAnalysis from '../pages/SuitAnalysis.vue'
import SuitCourt from '../pages/SuitCourt.vue'
import SuitMaterials from '../pages/SuitMaterials.vue'
import UserCenter from '../pages/UserCenter.vue'
import Welcome from '../pages/Welcome.vue'
import LawShop from '../pages/LawShop.vue'
import Im from '../pages/Im.vue'
import Message from '../pages/Message.vue'
import tmp from '../pages/tmp.vue'


const routes = [
  { path: '/ClassCourt', title: 'ClassCourt', name: 'ClassCourt', component: ClassCourt },
  { path: '/LawyerIntroduction', title: 'LawyerIntroduction', name: 'LawyerIntroduction', component: LawyerIntroduction },
  { path: '/LawyerTeam', title: 'LawyerTeam', name: 'LawyerTeam', component: LawyerTeam },
  { path: '/Login', title: 'Login', name: 'Login', component: Login },
  { path: '/Main', title: 's', name: 'Main', component: Main },
  { path: '/SubmitQuickSuit',title: 'SubmitQuickSuit',name: 'SubmitQuickSuit',component: SubmitQuickSuit},
  { path: '/SuitAnalysis', title: 'SuitAnalysis', name: 'SuitAnalysis', component: SuitAnalysis },
  { path: '/SuitCourt', title: 'SuitCourt', name: 'SuitCourt', component: SuitCourt },
  { path: '/SuitMaterials', title: 'SuitMaterials', name: 'SuitMaterials', component: SuitMaterials },
  { path: '/UserCenter', title: 'UserCenter.vue', name: 'UserCenter.vue', component: UserCenter },
  { path: '/Welcome', title: 'Welcome', name: 'Welcome', component: Welcome },
  { path: '/LawShop', title: 'LawShop', name: 'LawShop', component: LawShop },
  { path: '/im', name: 'Im', component: Im},
  { path: '/Message', name: 'Message', component: Message},
  { path: '/tmp', name: 'tmp', component: tmp}
]

export default routes
