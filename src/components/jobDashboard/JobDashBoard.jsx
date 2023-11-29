import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const JobDashBoard = () => {
  // const BASE_URL = "https://dev123.gigin.ai/abc/index.php/";
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const employee_id = process.env.REACT_APP_EMPLOYEE_ID;
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async (e) => {
    const employeeData = {
      employee_id,
    };

    try {
      const res = await axios.post(
        `${BASE_URL}v4/gigs/postings/list?limit=10&offset=0&is_precal_done=1&scope=recomm`,
        employeeData
      );
      console.log(res.data.data);
      setJobData(res.data.data);
    } catch (error) {}
  };

  return (
    <div>
      <h2>Recommended Job</h2>
      <ol>
        {jobData.length > 0
          ? jobData.map((ele) => {
              return <li key={ele.em.id}>{ele.em.name ? ele.em.name : "not available"}</li>;
            })
          : null}
      </ol>
    </div>
  );
};

export default JobDashBoard;
