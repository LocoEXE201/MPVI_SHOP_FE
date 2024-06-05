import React, { useEffect, useState } from "react";
import { Button, Modal, ConfigProvider } from "antd";
import "./customer.scss";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

interface Province {
  province_id: number;
  province_name: string;
  province_type: string;
}

interface District {
  district_id: number;
  district_name: string;
}

interface Ward {
  ward_id: number;
  ward_name: string;
}

const CusInfoOfOrderModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadUserInformation = () => {
    const user = localStorage.getItem("USER_INFO");
    return user ? JSON.parse(user) : {};
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="default"
        onClick={showModal}
        className="font-baloo-2 text-base text-chocolate font-semibold border-[2px] border-solid border-chocolate px-2 py-0.5 rounded"
      >
        <div className="">Nhập thông tin</div>
      </Button>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              titleFontSize: 22,
            },
          },
        }}
      >
        <Modal
          title="Nhập thông tin khách hàng"
          open={isModalOpen}
          onOk={handleOk}
          okText="Gửi"
          onCancel={handleCancel}
          cancelText="Hủy"
          className="flex flex-col gap-5"
        >
          <div className="w-full flex flex-col gap-3">
            {/* <div>
                <FormControl style={{ width: "250px", fontSize: "20px" }}>
                  <InputLabel id="demo-simple-select-label">
                    Province
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={provinceId}
                    label="Province"
                    onChange={handleProvinceChange}
                  >
                    <MenuItem value={0} disabled>
                      Select Province
                    </MenuItem>
                    {provinces.map((province: any) => {
                      return (
                        <MenuItem value={province.province_id}>
                          {province.province_name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl style={{ width: "250px", fontSize: "20px" }}>
                  <InputLabel id="demo-simple-select-label">
                    District
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={districtId}
                    label="District"
                    onChange={handleDistrictChange}
                  >
                    <MenuItem value={0} disabled>
                      Select District
                    </MenuItem>
                    {districts.map((district: any) => {
                      return (
                        <MenuItem value={district?.district_id}>
                          {district?.district_name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl style={{ width: "250px", fontSize: "20px" }}>
                  <InputLabel id="demo-simple-select-label">Ward</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={wardId}
                    label="Ward"
                    onChange={handleWardChange}
                  >
                    <MenuItem value={0} disabled>
                      Select Ward
                    </MenuItem>
                    {wards.map((ward: any) => {
                      return (
                        <MenuItem value={ward.ward_id}>
                          {ward.ward_name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Number Address"
                  variant="outlined"
                  size="small"
                  style={{ width: "250px", fontSize: "20px" }}
                  name="numberAddress"
                  onChange={handleNumberAddressChange}
                />
              </div> */}
            <div className="flex flex-row w-full flex flex-row justify-evenly">
              <div className="w-5/12">
                <div className="font-baloo-2 text-lg text-neutral-700">
                  Tên người nhận
                </div>
                <input
                  type="text"
                  className="border-[2px] border-solid border-zinc-400 w-full rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
                  name="name"
                />
              </div>
              <div className="w-5/12">
                <div className="font-baloo-2 text-lg text-neutral-700">
                  Số điện thoại
                </div>
                <input
                  type="text"
                  className="border-[2px] border-solid border-zinc-400 w-full rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
                  name="phone"
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center content-center box-border px-3">
              <div className="w-11/12 text-left font-baloo-2 text-lg text-neutral-700 ">
                Địa chỉ
              </div>
              <input
                type="text"
                className="border-[2px] border-solid border-zinc-400 w-11/12 rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
              />
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default CusInfoOfOrderModal;
