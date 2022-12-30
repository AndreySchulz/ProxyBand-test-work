import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUsers } from 'redux/usersOperations';
import { Suspense } from 'react';

import UserInfo from './UserInfo/UserInfo';
import UserPost from './UserPost/UserPost';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const MainLayout = () => {
    return (
      <>
        <Suspense fallback={<p>Loading</p>}>
          <UserInfo />
        </Suspense>
      </>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/posts/:userId" element={<UserPost />}></Route>
        <Route path="*" element={<MainLayout />}></Route>
      </Routes>
    </>
  );
}
