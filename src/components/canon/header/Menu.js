import React,{ Component} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../../../Style/Style_menu.css";
import { Carousel } from "antd";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "50px",
  textAlign: "center",     
};

export class Menu extends Component {
  
  render() {
    console.log('home',this.props);
    var aa = this.props.cc;
    console.log(aa);
    return (
      <div className="Header">
        
        <div className="Menu">
          <div className="logo">
            <img src="http://reactplus.vn/assets/icon/logomenu.svg" />
          </div>
          <div className="navbar">
            <Box sx={{ width: "100%", }}>
              <Tabs value={this.value} onChange={this.handleChange} centered>
                <Tab  label="Trang Chu" />
                <Tab label="Gioi Thieu" />
                <Tab label="Van Hoa" />
                <Tab label="Tuyen Dung" />
                <Tab label="Dao Tao & Su Kien" />
                <Tab label="Vi Cong Dong" />
                <Tab label="Tin tuc" />
              </Tabs>
            </Box>
          </div>
        </div>  
        <div className="Banner">
          <Carousel autoplay>
            <div>
              
              <h3 className="img1" style={contentStyle}>
              {
                  aa.map((vl)=>(
                    
                    <h1> <marquee>{vl.valua1}</marquee></h1>
                  ))
                }
              </h3>
            </div>
            <div>
              <h3 className="img2" style={contentStyle}>
              {
                  aa.map((vl)=>(
                    
                    <h1> <marquee>{vl.valua2}</marquee></h1>
                  ))
                }
              </h3>
            </div>
            <div>
              <h3 className="img3" style={contentStyle}>
              {
                  aa.map((vl)=>(
                    
                    <h1> <marquee>{vl.valua3}</marquee></h1>
                  ))
                }
              </h3>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Menu;
