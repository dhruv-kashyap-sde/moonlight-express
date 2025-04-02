import { useContext, useEffect, useState } from "react";
import "./Inquiry.css";
import DetailedPopup from "../../utils/popups/DetailedPopup";
import axios from "axios";
import Loaders from "../../utils/Loader/Loaders";

const Inquiry = () => {
  const URL = import.meta.env.VITE_API_URL;
  const [inquiries, setInquiries] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [sortOrder, setSortOrder] = useState('new'); // 'new' or 'old'

  const fetchInquiries = async () => {
    try {
      const response = await axios.get(`${URL}/inquiries`);
      setInquiries(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching inquiries", error);
    }
  };
  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleSort = () => {
    setSortOrder(prevOrder => prevOrder === 'new' ? 'old' : 'new');
    setInquiries(prevInquiries => {
      const sorted = [...prevInquiries].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'new' ? dateA - dateB : dateB - dateA;
      });
      return sorted;
    });
  };

  const open = (inquiry) => {
    setSelectedInquiry(inquiry);
    setVisible(true);
  };

  const close = () => {setVisible(false);
    fetchInquiries(); // Refresh inquiries after closing the popup
  }

  return (
    <>
      <div className="dashboard-body">
        <div className="sort-container">
          <h1 className="color">Inquiries</h1>
          <button 
            className={`sort-button`}
            onClick={handleSort}
          >
            <i className="ri-sort-desc"></i> {sortOrder === 'new' ? <>New First</> : 'Oldest First'}
          </button>
        </div>
        <hr />
        <div className="table-container">
          <table className="responsive-table ">
            <thead>
              <tr>
                <th style={{width:"50px"}}>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Message</th>
                <th>Product</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length !== 0 &&
                inquiries.map((item) => (
                  <tr onClick={() => open(item)} key={item._id}>
                    <td className="italic-text">{item.date}</td>
                    <td className="italic-text">{item.name}</td>
                    <td className="italic-text">{item.email}</td>
                    <td className="italic-text">{item.phone}</td>
                    <td className="italic-text">{item.message}</td>
                    <td className="italic-text">
                      {item.product?.name ?? "[Deleted Product]"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {inquiries.length === 0 && <Loaders />}
        </div>
      </div>
      {visible && <DetailedPopup inquiry={selectedInquiry} close={close} />}
    </>
  );
};

export default Inquiry;
