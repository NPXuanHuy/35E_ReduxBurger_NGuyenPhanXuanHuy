import React, { Component } from "react";
import { connect } from "react-redux";
import "./Burger.css";
import {TangGiamSoLuong} from '../Reducers/action/TangGiamSoLuong'

class BaiTapBurger extends Component {
  renderBreadMid = () => {
    let { burger } = this.props;
    return Object.entries(burger).map(([propBurger, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={propBurger}></div>);
      }

      return breadMid;
    });
  };

  renderMenu = () => {
    let { menu, burger } = this.props;

    return Object.entries(menu).map(([propMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propMenu}</td>
          <td>{price}</td>
          <td>
            <button className="btn btn-success mx-2" onClick={() => {
              const action = TangGiamSoLuong (propMenu, 1);
              this.props.dispatch(action)
            }}>+</button>
            
            <button className="btn btn-danger" onClick={() => {
              const action = TangGiamSoLuong (propMenu, - 1);
              this.props.dispatch(action)
            }}>-</button>
            
          </td>
          <td>{burger[propMenu]}</td>
          <td>{burger[propMenu] * price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-success text-center">Burger</h1>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center">Bánh Burger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center text-primary">Chọn nguyên liệu</h3>
            <table className="table text-center">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th>Đơn giá</th>
                  <th></th>
                  <th>Số Lượng</th>
                  <th>Thành Tiền</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <td className="text-danger">Tổng tiền</td>
                <td colSpan={3}></td>
                <td className="text-danger">{this.props.total}</td>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.BurgerReducer.burger,
  menu: state.BurgerReducer.menu,
  total: state.BurgerReducer.total,
});

export default connect(mapStateToProps)(BaiTapBurger);
