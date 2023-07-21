import "../../sass/roles.css"
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
import { instance } from "views/axios/Instance";
import logo from "../../assets/logo/logo-blue-light.svg"

const Roles = () => {
  const history = useHistory()
  const [menuArray, setMenuArray] = useState([])
  const [selectedOption, setSelectedOption] = useState(["default"])
  const [roleName, setRoleName] = useState()
  const [userId, setUserId] = useState()

    useEffect(()=>{
      menuList.forEach((list,i)=>{
        if(list.children===true){
          list.sub.forEach((list2)=>{
            if(list2.children===true){
              list2.sub.forEach((list3)=>{
                if(list3.children===true){
                  list3.sub.forEach((list4)=>{
                    setMenuArray((prevValue)=>[...prevValue,list4.identifier])
                  })
                }
                setMenuArray((prevValue)=>[...prevValue,list3.identifier])
              })
            }
            setMenuArray((prevValue)=>[...prevValue,list2.identifier])
          })
        }
        return null
      })
    },[])

  const handleClick = (item)=>{
    setSelectedOption((prevValue)=>[...prevValue,item])
  }
  const handleCancel = (item)=>{
    setSelectedOption(selectedOption.filter(value=>value!==item))
  } 

  useEffect(()=>{
    instance.get('/user/data')
      .then(res => {
        setUserId(res.data.id)
    })
  },[roleName])

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    console.log("roleName: ", roleName);
    console.log("selectOption: ", selectedOption);
    console.log("userId: ", userId)
    instance.post("http://localhost:4000/api/user/role",{
      roleName,
      permissions: selectedOption,
      user: userId
    })
      .then(res=>{
        // console.log(res.data);
        history.push("/")
      })
    }
  
  // setMenuArray(menuArray.filter((item,index) => menuArray.indexOf(item) === index))

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
          <form onSubmit={handleSubmit}>
            <div className="role-cont">
              <CsLineIcons icon="user" />
              <input onChange={(e)=>setRoleName(e.target.value)} value={roleName} name="roleName" type="text" className="role-name" placeholder="Role Name" />
            </div>
            <div className="sel-cont">
              {
                selectedOption.map((item, i)=>{
                  return <div className="selected-option" key={i}>{item} <span onClick={()=>{handleCancel(item)}}>x</span></div>
                })
              }
            </div>
            <div className="menu-list">
              {
                menuArray.map((item, i)=>{
                  return <div onClick={()=>{handleClick(item)}} className="menu-name" key={i}>{item}</div>
                })
              }
            </div>
              <button type="submit" className="add-btn">Add</button>
          </form>
      </div>
    </div>
  )
}

export default Roles