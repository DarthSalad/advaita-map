import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { db } from "./firebase.config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import {
  PushpinFilled,
  ProfileFilled,
  StarFilled,
} from '@ant-design/icons';
import "./styles.css"
import { Layout, Menu, theme } from 'antd';
import Ongoing from './components/Ongoing';
import Events from './components/Events';
import Pronites from './components/Pronites';

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [current, setCurrent] = useState();
  const [tech, setTech] = useState(null);
  const [cult, setCult] = useState(null);
  const [art, setArt] = useState(null);
  const [fats, setFats] = useState(null);
  const [food, setFood] = useState(null);
  const [lit, setLit] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [sports, setSports] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const q = query(collection(db, "tech"), orderBy('startDate', 'asc'));
        onSnapshot(q, (snapshot) => {
          setTech(snapshot.docs.map((doc) => doc.data()));
        });
      } catch (error) {
        console.log(error);
      }
    }
    const fetchCult = async () => {
      try {
        const q = query(collection(db, "cult"), orderBy('startDate', 'asc'));
        onSnapshot(q, (snapshot) => {
          setCult(snapshot.docs.map((doc) => doc.data()));
        });
      } catch (error) {
        console.log(error);
      }
    }
    const fetchArt = async () => {
      try {
        const q = query(collection(db, "art"), orderBy('startDate', 'asc'));
        onSnapshot(q, (snapshot) => {
          setArt(snapshot.docs.map((doc) => doc.data()));
        });
      } catch (error) {
        console.log(error);
      }
    }

    const fetchFats = async () => {
      try {
        const q = query(collection(db, "fats"), orderBy('startDate', 'asc'));
        onSnapshot(q, (snapshot) => {
          setFats(snapshot.docs.map((doc) => doc.data()));
        });
      } catch (error) {
        console.log(error);
      }
    }

    const fetchFood = async () => {
      try {
        const q = query(collection(db, "food"), orderBy('startDate', 'asc'));
        onSnapshot(q, (snapshot) => {
          setFood(snapshot.docs.map((doc) => doc.data()));
        });
      } catch (error) {
        console.log(error);
      }
    }

    const fetchLit = async () => {
      try {
        const q = query(collection(db, "literature"), orderBy('startDate', 'asc'));
        onSnapshot(q, (snapshot) => {
          setLit(snapshot.docs.map((doc) => doc.data()));
        });
      } catch (error) {
        console.log(error);
      }
    }

    const fetchPhoto = async () => {
      try {
        const q = query(collection(db, "photography"), orderBy('startDate', 'asc'));
        onSnapshot(q, (snapshot) => {
          setPhoto(snapshot.docs.map((doc) => doc.data()));
        });
      } catch (error) {
        console.log(error);
      }
    }

    const fetchSports = async () => {
      try {
        const q = query(collection(db, "sports"), orderBy('startDate', 'asc'));
        onSnapshot(q, (snapshot) => {
          setSports(snapshot.docs.map((doc) => doc.data()));
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchArt() && fetchFats() && fetchFood() && fetchLit() && fetchPhoto() && fetchSports() &&
    fetchTech() && fetchCult() && setLoading(false);
  }, [tech, cult, loading]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: 1,
      icon: <PushpinFilled />,
      label: 'Ongoing Events',
      link: "/events"
    },
    {
      key: 2,
      icon: <ProfileFilled />,
      label: 'All Events',
      link: "/events/all"
    },
    {
      key: 3,
      icon: <StarFilled />,
      label: 'Pro-Nights',
      link: "/events/pronights"
    }
  ]

  return (
    <BrowserRouter>
      <Layout style={{ margin: "0px" }} hasSider>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="logo">
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[current]}
          >
            {menuItems.map((item) => {
              return (
                <Menu.Item key={item.key} onClick={() => { setCurrent(item.key); console.log(current) }}>
                  {item.icon}
                  <NavLink
                    to={item.link}
                    style={{ textDecoration: "none" }}
                  >
                    <span style={{ paddingLeft: "10px" }}>{item.label}</span>
                  </NavLink>
                </Menu.Item>
              )
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header style={{ padding: 0, background: colorBgContainer }} >
            <h1 style={{ color: "red", fontSize: "1.5rem", paddingLeft: "30px" }}>Advaita Events</h1>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: colorBgContainer }}>
              <Routes>
                <Route exact path="/" element={<Navigate to="/events" replace={true} />} />
                <Route exact path="/events" element={<Ongoing tech={tech} cult={cult} photo={photo} lit={lit} sports={sports} art={art} fats={fats} food={food} loading={loading}/>} />
                <Route exact path="/events/all" element={<Events tech={tech} cult={cult} photo={photo} lit={lit} sports={sports} art={art} fats={fats} food={food} loading={loading} />} />
                <Route exact path="/events/pronights" element={<Pronites />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Tech Team - Advaita 2023</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
