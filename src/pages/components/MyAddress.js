import React, { useEffect, useState } from 'react';

import './styles/LeaseHistory.scss';
import AddAddress from '../../components/modals/AddAddress';
import useModal from '../../hooks/useModal';
import { PencilIcon, TrashIcon } from '../../components/Svg';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';
import ConfirmDeleteAddress from '../../components/modals/ConfirmDeleteAddress';

const MyAddress = () => {
  const [visibleAddAddressModal] = useModal(<AddAddress />);
  const [visibleEditAddressModal] = useModal(<AddAddress modalType="edit" />);
  const [visibleConfirmDeleteAddressModal] = useModal(<ConfirmDeleteAddress />);
  const { user } = useUserContext();
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get('/show_address', {
          params: {
            customer_id: user?.id || localStorage.getItem('USER_ID'),
          },
        });
        setAddresses(data || []);
      } catch (error) {}
    })();
  }, [user?.id]);

  return (
    <div className="MyAddress">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-6 col-sm-12">
            <h3>Địa chỉ đã lưu</h3>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="button-add">
              <button
                type="submit"
                id="submitButton"
                onClick={visibleAddAddressModal}
                className="submitButton"
              >
                Thêm địa chỉ mới
              </button>
            </div>
          </div>
        </div>
      </div>

      {addresses.length > 0 && (
        <div
          className="overflow-row"
          style={{
            maxHeight: 300,
          }}
        >
          {addresses.map((address) => (
            <div
              key={address.address_id}
              className="grap_ic_left1 d-flex align-items-center justify-content-between mt-3"
            >
              <div className="ms-3">{address.address_name}</div>
              <div className="mx-3">
                <TrashIcon
                  className="clickable"
                  style={{
                    marginRight: 8,
                  }}
                  onClick={() =>
                    visibleConfirmDeleteAddressModal({
                      current: address.address_name,
                      address_id: address.address_id,
                    })
                  }
                />
                <PencilIcon
                  className="clickable"
                  onClick={() =>
                    visibleEditAddressModal({
                      current: address.address_name,
                      address_id: address.address_id,
                    })
                  }
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {addresses.length === 0 && (
        <div className="col-lg-12 col-md-6 col-sm-12 text-center">
          <img
            className
            alt="140x140"
            style={{ height: 400, borderRadius: 10 }}
            src="https://localhost:44307/Image/Home/Untitled.png"
            data-holder-rendered="true"
          />
        </div>
      )}
    </div>
  );
};

export default MyAddress;
