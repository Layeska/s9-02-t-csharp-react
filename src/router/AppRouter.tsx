import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import React from "react";
import TokenExpired from "../features/auth/token.Expiration";
import NavHome from "../components/NavSesion/NavHome";
import Loading from "../components/Loading";
// import { useAppSelector } from "../hooks/store";

const Login: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/Login")
)

const Home: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/Home")
);
const UserDataPage: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/contratar/userDataPage")
);

const Profile: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/Profile")
)

const SignIn: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/SignIn/SignIn")
);

const SignIn2: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/SignIn2/SignIn2")
);

const About: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/About")
)

const History: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/Historial")
)

const Contact: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/Contact")
)

const SignOff: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/Close")
)

const Error404: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/Error404")
)
const Services: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/Services")
)

const Revision: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/contratar/Revision")
)

const Contrata: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/contratar/Contratar")
)

const Comprobante: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/contratar/Comprobante")
)

const Favorite: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../pages/Favorite")
)

export function AppRouter(): JSX.Element {
  // const token = useAppSelector((state) => state.auth.token);
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
      <NavHome />
      <TokenExpired />
        <Routes>
          {/* {!token && (
            <> */}
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path="*" element={ <Error404 /> } />
              {/*<Route path="/login" element={<Login />} />*/}
              <Route path="/signin2" element={<SignIn2 />} />
            {/* </>
          )} */}
          {/* {token && (
            <> */}
            
            {/* </>
          )} */}
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={ <Login />}/>
            <Route path="/userData" element={<UserDataPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin2" element={<SignIn2 />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={ <About />}/>
            <Route path="/history" element={ <History /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/signoff" element={ <SignOff /> } />
            <Route path="/favorite" element={ <Favorite /> } />
            <Route path="/services" element={<Services />} />
            <Route path="/revisar" element={ <Revision /> } />
            <Route path="/contrata" element={ <Contrata /> } />
            <Route path="/comprobar" element={ <Comprobante /> } />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
