import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Notifications from './components/Notifications/Notifications';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import BodySection from './components/BodySection/BodySection';
import { getLatestNotification } from './utils/utils';

import {
  fetchNotificationsSuccess,
  markNotificationAsRead,
  showNotificationDrawer,
  hideNotificationDrawer
} from './redux/notifications/notificationsSlice';
import { fetchCoursesSuccess } from './redux/courses/coursesSlice';
import { login, logout } from './redux/auth/authSlice';

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const notifications = useSelector((state) => state.notifications.items);
  const displayDrawer = useSelector((state) => state.notifications.displayDrawer);
  const courses = useSelector((state) => state.courses.items);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:5173/notifications.json');
        const latestNotif = {
          id: 3,
          type: 'urgent',
          html: { __html: getLatestNotification() },
        };
        const currentNotifications = response.data.notifications;
        const indexToReplace = currentNotifications.findIndex((n) => n.id === 3);
        const updated = [...currentNotifications];
        if (indexToReplace !== -1) {
          updated[indexToReplace] = latestNotif;
        } else {
          updated.push(latestNotif);
        }
        dispatch(fetchNotificationsSuccess(updated));
      } catch (err) {
        console.error('Failed to fetch notifications', err);
      }
    };

    fetchNotifications();
  }, [dispatch]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5173/courses.json');
        dispatch(fetchCoursesSuccess(response.data.courses));
      } catch (err) {
        console.error('Failed to fetch courses', err);
      }
    };

    if (isLoggedIn) {
      fetchCourses();
    }
  }, [isLoggedIn, dispatch]);

  return (
    <>
      <Notifications />
      <Header />
      {!isLoggedIn ? (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList />
        </BodySectionWithMarginBottom>
      )}
      <BodySection title="News from the School">
        <p>Holberton School news goes here</p>
      </BodySection>
      <Footer />
    </>
  );
}
