import { useContext, useEffect, useState } from "react";
import "./Inquiry.css";
import DetailedPopup from "../../utils/popups/DetailedPopup";
import axios from "axios";

const Inquiry = () => {
  const URL = import.meta.env.VITE_API_URL;
  const [inquiries, setInquiries] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get(`${URL}/inquiries`);
        setInquiries(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error("Error fetching inquiries", error);
      }
    };
    fetchInquiries();
  }, []);

  const open = (inquiry) => {
    setSelectedInquiry(inquiry);
    setVisible(true);
  };

  const close = () => setVisible(false);

  return (
    <>
      <div className="dashboard-body">
        <h1 className="color">Inquiries</h1>
        <hr />
        <div className="table-container">
          <table className="responsive-table ">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Message</th>
                <th>Product</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length !== 0 
                && inquiries.map((item) => (
                <tr onClick={() => open(item)} key={item._id}>
                  <td className="italic-text">{item.date}</td>
                  <td className="italic-text">{item.name}</td>
                  <td className="italic-text">{item.email}</td>
                  <td className="italic-text">{item.phone}</td>
                  <td className="italic-text">{item.message}</td>
                  <td className="italic-text">{item.product?.name ?? "[Deleted Product]"}</td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {inquiries.length === 0 && <div className="no-response-text secondary-text">No Inquiries yet</div>}
      {visible && <DetailedPopup inquiry={selectedInquiry} close={close} />}
    </>
  );
};

export default Inquiry;