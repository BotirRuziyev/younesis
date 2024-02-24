import { createRouter, createWebHistory } from 'vue-router';

import LogIn from "@/auth/LogIn.vue";
import Register from "@/auth/Register.vue";
import HomeView from '@/components/HomeView.vue';
import Home from "@/views/Home.vue";
import CoursesLayout from '@/views/courses/CoursesLayout.vue';
import Courses from "@/views/courses/Courses.vue";
import Lesson from '@/views/courses/_id.vue';
import Won from '@/views/courses/Won.vue';
import Marketplace from '@/views/courses/Marketplace.vue';
import Test from '@/views/courses/Test.vue';
import Settings from '@/views/Settings.vue';
import Support from '@/views/Support.vue';
import ProfileView from '@/components/ProfileView.vue';
import Profile from '@/views/profile/Profile.vue';
import EditProfileView from '@/components/EditProfileView.vue'
import EditProfile from '@/views/profile/EditProfile.vue';
import EditRoles from '@/views/profile/EditRoles.vue';
import EditNiches from '@/views/profile/EditNiches.vue';
import EditLinksToProjects from '@/views/profile/EditLinksToProjects.vue';
import EditContacts from '@/views/profile/EditContacts.vue';

import EditPersonalData from '@/views/profile/EditPersonalData.vue';
import EditDescription from '@/views/profile/EditDescription.vue';
import AddMogu from '@/views/profile/MoguAdd.vue';
import AddNeed from '@/views/profile/NeedAdd.vue';
import Achievements from '@/views/profile/Achievements.vue';
import EditEducation from '@/views/profile/EditEducation.vue';
import EditProducts from '@/views/profile/EditProducts.vue';
import Platform from '@/views/profile/Platform.vue';
import Hyde from '@/views/profile/Hyde.vue';

// new version
import NewHomeLayout from '@/newVersion/layouts/HomeLayout.vue'
import NewHome from '@/newVersion/Home.vue';
import News from '@/newVersion/news/News.vue'
import NewsId from '@/newVersion/news/_id.vue';
import Development from '@/newVersion/Development.vue';
import Study from '@/newVersion/Study.vue';
import Fair from '@/newVersion/Fair.vue'
import Tinder from '@/newVersion/Tinder.vue'
import CardHolder from '@/newVersion/CardHolder.vue'
import NewProfile from '@/newVersion/profile/Profile.vue'
import newProfileEdit from '@/newVersion/profile/Edit.vue'
import Partner from '@/newVersion/Partner.vue'
import Filter from '@/newVersion/Filter.vue'
import PartnerSearch from '@/newVersion/PartnerSearch.vue'
import CoinsProfile from '@/newVersion/profile/CoinsProfile.vue'
import SomeoneProfile from '@/newVersion/profile/SomeoneProfile.vue'
// new version end

// chats start 
import ChatsHomeLayout from '@/views/chats/layouts/HomeLayout.vue'
import ChatsHome from '@/views/chats/Home.vue'
import ChatResponseSearch from '@/views/chats/ChatResponseSearch.vue'
// chats end

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    children: [
      { path: '/', name: 'Home', component: Home },
      {
        path: 'courses',
        name: 'CoursesLayout',
        component: CoursesLayout,
        children: [
          { path: '', name: "Courses", component: Courses },
          { path: ':id', name: 'Lesson', component: Lesson, props: true },
          { path: 'won', name: "Won", component: Won },
          { path: 'marketplace', name: 'Marketplace', component: Marketplace },
          { path: 'test', name: 'Test', component: Test },
        ]
      },
      { path: 'settings', name: 'Settings', component: Settings },
      { path: 'support', name: 'Support', component: Support },
      {
        path: 'profile',
        name: 'ProfileDefault',
        component: ProfileView,
        children: [
          { path: '', name: "Profile", component: Profile },
          {
            path: 'edit',
            name: 'EditProfileView',
            component: EditProfileView,
            children: [
              { path: '', name: 'EditProfile', component: EditProfile },
              { path: 'personal-data', name: 'EditPersonalData', component: EditPersonalData },
              { path: 'profile-description', name: 'EditDescription', component: EditDescription },
              { path: 'mogu', name: 'AddMogu', component: AddMogu },
              { path: 'need', name: 'AddNeed', component: AddNeed },
              { path: 'achievements', name: 'Achievements', component: Achievements },
              { path: 'education', name: 'EditEducation', component: EditEducation },
              { path: 'products', name: 'EditProducts', component: EditProducts },
              { path: 'platform', name: 'Platform', component: Platform },
              { path: 'hyde', name: 'Hyde', component: Hyde },
              { path: 'roles', name: 'EditRoles', component: EditRoles },
              { path: 'niches', name: 'EditNiches', component: EditNiches },
              { path: 'links-to-projects', name: 'EditLinksToProjects', component: EditLinksToProjects },
              { path: 'contacts', name: 'EditContacts', component: EditContacts },
            ]
          },
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  // New version
  {
    path: '/new-version',
    name: 'NewHomeLayout',
    component: NewHomeLayout,
    children: [
      { path: '', name: 'NewHome', component: NewHome },
      { path: "news", name: 'News', component: News },
      { path: 'news/:id', name: 'NewsId', component: NewsId },
      { path: 'development', name: 'Development', component: Development },
      { path: 'study', name: 'Study', component: Study },
      { path: 'fair', name: 'Fair', component: Fair },
      { path: 'tinder', name: 'Tinder', component: Tinder },
      { path: 'card-holder', name: 'CardHolder', component: CardHolder },
      { path: 'profile', name: 'NewProfile', component: NewProfile },
      { path: 'profile/edit', name: 'newProfileEdit', component: newProfileEdit },
      { path: 'partner', name: 'Partner', component: Partner },
      { path: 'filter', name: 'Filter', component: Filter },
      { path: 'partner-search', name: 'PartnerSearch', component: PartnerSearch },
      { path: 'coins-profile', name: 'CoinsProfile', component: CoinsProfile },
      { path: 'someone-profile', name: 'SomeoneProfile', component: SomeoneProfile },
    ]
  },
  // New version end

  // chats start
  {
    path: '/chats',
    name: 'ChatsHomeLayout',
    component: ChatsHomeLayout,
    children: [
      { path: "", name: 'ChatsHome', component: ChatsHome },
      { path: "chat-response-search", name: 'ChatResponseSearch', component: ChatResponseSearch },
    ]
  }
  // chats end
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
