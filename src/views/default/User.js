import "../../sass/user.css"
import React, { useEffect, useState } from 'react'
import menuList from 'menuList'
import { NavLink,useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';
import axios from "axios";
import logo from "../../assets/logo/logo-blue-light.svg"

function User() {

  // useEffect(()=>{
  //   axios.get("http://localhost:4000/api/user/role")
  // })

  return (
    <div className="role-page">
      <div className="left-section">
          <h1 className="left-heading">
            <span>Multiple Niches</span>
            <span>Ready for Your Project</span>
          </h1>
          <p className="left-para">
            Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before process-centric communities.
          </p>
          <div>
            <button type="submit" className="left-btn">Learn More</button>
          </div>
      </div>
      <div className="right-section">
        <img className="right-logo" src={logo} alt="" />
        <h1 className="right-heading">Welcome, Assign a role!</h1>
        <p className="right-para">
          <span>Please assign a role to get started.</span>
          <span>Go ahead if you already assigned.</span>
        </p>
        <form className="form-cont">
          <div className="role-cont">
            <CsLineIcons icon="user" />
            <input name="roleName" type="text" className="role-name" placeholder="First Name" />
          </div>
          <div className="role-cont">
            <CsLineIcons icon="user" />
            <input name="roleName" type="text" className="role-name" placeholder="Last Name" />
          </div>
          <div className="role-cont">
            <CsLineIcons icon="email" />
            <input name="roleName" type="email" className="role-name" placeholder="Email Address" />
          </div>
          <div className="role-cont">
            <CsLineIcons icon="mobile" />
            <input name="roleName" type="number" className="role-name" placeholder="Mobile No " />
          </div>
          <select name="roles-sel-cont" className="roles-sel-cont">
            <option className="options" value="admin">Admin</option>
            <option className="options" value="user">User</option>
          </select>
          <div className="btn-cont">
            <button type="submit" className="add-btn">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default User