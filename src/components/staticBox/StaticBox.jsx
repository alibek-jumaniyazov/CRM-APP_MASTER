import "./staticbox.css";
import students from "./../../Assets/Icon.png";
import coins from "./../../Assets/Coins.png";
import user from './../../Assets/icons/User.png'
import Users from './../../Assets/icons/Users.png'
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Item from "antd/es/list/Item";

const StaticBox = () => {
  const [loadingActive, setLoadingActive] = useState(false)
  const [combined, setCombined] = useState([])
  const storedToken = localStorage.getItem('token');

  const getCombined = async () => {
    setLoadingActive(true)
    try {
      const { data } = await axios.get("https://api.quickhub.uz/api/home/combined_counts/", {
        headers: {
          'Authorization': `Token ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setCombined(data);
      console.log(data, "Home");
      setLoadingActive(false)
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getCombined();
  }, []);

  return (
    <div className="StaticBox">
      <Link to={'/leads'}>
        <div className="StaticBox_container">
          <div className="imgIcon">
            <div className="imgIcon">
              <button>
                <img src={user} alt="" />
              </button>
            </div>
          </div>
          <div className="TextPodschet">
            <p className="Number">{combined.lead_count ? combined.lead_count : "loading..."}</p>
            <p>New leads</p>
          </div>
        </div>
      </Link>
      <Link to={'/clients'}>
        <div className="StaticBox_container">
          <div className="imgIcon">
            <button>
              <img src={students} alt="" />
            </button>
          </div>
          <div className="TextPodschet">
            <p className="Number">{combined.client_count ? combined.client_count : "loading..."}</p>
            <p>All students</p>
          </div>
        </div>
      </Link>
      <Link to={'/groups'}>
        <div className="StaticBox_container">
          <div className="imgIcon">
            <div className="imgIcon">
              <button>
                <img src={Users} alt="" />
              </button>
            </div>
          </div>
          <div className="TextPodschet">
            <p className="Number">{combined.group_count ? combined.group_count : "loading..."}</p>
            <p>Groups</p>
          </div>
        </div>
      </Link>
      <div className="StaticBox_container">
        <div className="imgIcon">
          <button>
            <img src={coins} alt="" />
          </button>
        </div>
        <div className="TextPodschet">
          <p className="Number">{combined.deptors_count ? combined.deptors_count : "loading..."}</p>
          <p>Debtors</p>
        </div>
      </div>
    </div>
  );
};

export default StaticBox;
