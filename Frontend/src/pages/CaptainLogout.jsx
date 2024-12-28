import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CaptainLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/captain/login");
        }
      });
  }, [navigate, token]);

  return;
};

export default CaptainLogout;
