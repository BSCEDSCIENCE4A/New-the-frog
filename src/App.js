import { ThemeProvider, createTheme } from '@mui/material'
import theme from './utils/theme'
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

//MAIN ROUTES
import LandPage from './pages/LandingPage'
import Register from './pages/Signup'
import Assesment from './pages/Assesment'
import PostTest from './pages/PostTest'
import PreTest from './pages/PreTest'
import Login from './pages/Login'
import Main from './pages/Main'
import Explore from './pages/Explore'

//Explores
import LIFECYCLE_OF_A_FROG from './component/explores/LIFECYCLE_OF_A_FROG'
import FROG_EXTERNAL_ANATOMY from './component/explores/FROG_EXTERNAL_ANATOMY'
import FROG_INTERNAL_ANATOMY from './component/explores/FROG_INTERNAL_ANATOMY'
import DETERMINE_SEX from './component/explores/DETERMINE_SEX'
import SIMILARITIES_ANATOMY from './component/explores/SIMILARITIES_ANATOMY'
import ANATOMICAL_TERMS from './component/explores/ANATOMICAL_TERMS'
import EXTERNAL_FEATURES from './component/explores/EXTERNAL_FEATURES'
import INTERNAL_FEATURES from './component/explores/INTERNAL_FEATURES'
import CIRCULATORY_SYSTEM from './component/explores/CIRCULATORY_SYSTEM'
import RESPIRATORY_SYSTEM from './component/explores/RESPIRATORY_SYSTEM'
import UROGENITAL_SYSTEM from './component/explores/UROGENITAL_SYSTEM'
import NERVOUS_SYSTEM from './component/explores/NERVOUS_SYSTEM'
import REFERENCES from './component/explores/REFERENCES'
import MUSCLE_AND_SKELETON_SYSTEM from './component/explores/MUSCLE_AND_SKELETON_SYSTEM'
import './style/style.scss';
import Anatomy from './anatomy';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from './utils/firebase'

export default function App() {
  const auth = getAuth(app);
  onAuthStateChanged(auth, user => {
    if (user != null) {
      console.log('logged in');
    } else {
      console.log('NO user');
    }
  });
  const THEME = createTheme(theme());

  return (
    <ThemeProvider theme={THEME}>
      <Routes>
        <Route path="/" element={<Navigate to="/landingPage/*" />} />
        <Route path="/landingPage/*" element={<LandPage />} />
        <Route path="/signIn/*" element={<Login />} />
        <Route path="/signUp/*" element={<Register />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/main/explore/*" element={<Explore />} />
        <Route path="/main/assesment/*" element={<Assesment />} />
        <Route path="/main/model/*" element={<Anatomy />} />
        <Route path="/main/assesment/pre-test/*" element={<PreTest />} />
        <Route path="/main/assesment/post-test/*" element={<PostTest />} />

        {/* explores */}
        <Route path="/lifecycle_of_frog/" element={<LIFECYCLE_OF_A_FROG />} />
        <Route path="/frog_external_anatomy/" element={<FROG_EXTERNAL_ANATOMY />} />
        <Route path="/frog_internal_anatomy/" element={<FROG_INTERNAL_ANATOMY />} />
        <Route path="/determine_the_sex_of_the_frog/" element={<DETERMINE_SEX />} />
        <Route path="/similarities_and_distinction_of_human_and_frog/" element={<SIMILARITIES_ANATOMY />} />
        <Route path="/anatomical_terms/" element={<ANATOMICAL_TERMS />} />
        <Route path="/frog_external_features_and_mouth_cavity/" element={<EXTERNAL_FEATURES />} />
        <Route path="/the_frogs_internal_structure_and_digestive_system/" element={<INTERNAL_FEATURES />} />
        <Route path="/the_frogs_circulatory_system/" element={<CIRCULATORY_SYSTEM />} />
        <Route path="/the_frogs_respiratory_system/" element={<RESPIRATORY_SYSTEM />} />
        <Route path="/the_frogs_urogenital_system/" element={<UROGENITAL_SYSTEM />} />
        <Route path="/the_frogs_muscle_and_skeleton/" element={<MUSCLE_AND_SKELETON_SYSTEM />} />
        <Route path="/the_frogs_nervous_system/" element={<NERVOUS_SYSTEM />} />
        <Route path="/references/" element={<REFERENCES />} />

      </Routes>
    </ThemeProvider>
  )
} serviceWorker.unregister();
