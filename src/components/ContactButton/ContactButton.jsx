import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";
import Whatsapp from '../../assets/img/wa.png'
import Call from '../../assets/img/call.png'
const ContactButton = () => {
  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/923403568231";
  };
  const handleCallClick = () => {
    window.location.href = "tel:+923403568231";
  };

  return (
    <div className="fixed bottom-4 right-4 space-x-3 z-50 flex">
      <Button
        sx={{
          color: "green",
          fontSize: {
            xl: "5rem",
            lg: "5rem",
            md: "4rem",
            sm: "4rem",
            xs: "4rem"
          },
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(10px)",
          padding: "1px",
          borderRadius: "50%",
          width: {
            xl: "92px",
            lg: "92px",
            md: "82px",
            sm: "62px",
            xs: "52px"
          }, 
          height: {
            xl: "92px",
            lg: "92px",
            md: "82px",
            sm: "62px",
            xs: "52px"
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleWhatsAppClick}
      >
        <img src={Whatsapp} alt="" className="text-inherit" />
      </Button>
      <Button
        sx={{
          color: "blue",
          fontSize: {
            xl: "5rem",
            lg: "5rem",
            md: "4rem",
            sm: "4rem",
            xs: "4rem"
          },
          backgroundColor: "white",
          backdropFilter: "blur(10px)",
          padding: "10px",
          borderRadius: "50%",
          marginBlockStart:{
            xl: "8px",
            lg: "8px",
            md: "0",
            sm: "0",
            xs: "0"
          },
          width: {
            xl: "82px",
            lg: "82px",
            md: "82px",
            sm: "62px",
            xs: "52px"
          }, 
          height: {
            xl: "82px",
            lg: "82px",
            md: "82px",
            sm: "65px",
            xs: "60px"
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleCallClick}
      >
      <img src={Call} alt="" className="text-inherit" />
      </Button>
    </div>
  );
};

export default ContactButton;
