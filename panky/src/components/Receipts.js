import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom'
import JsonData from '../MOCK_DATA.json';

import Footer from './Footer'

import $ from 'jquery'
$(document).ready(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 100) {
            // $(".user").css("border","1px solid red");
            $(".user").addClass('useranimation');
        } else $(".user").removeClass('useranimation');
    });
});

const Title = () => {
    return (
        <div className="titleabout">
            <h5>Learn & Apply</h5>
            <div className="titlepages">
                <span></span>
                <h1> Receipts </h1>
                <span></span>
            </div>
        </div>
    )
}

const Receipt = () => {
    const [users] = useState(JsonData.slice(0, 30));
    const [pageNumber, setPageNumber] = useState(0);

    const userPerPage = 6
    const pagesVisited = pageNumber * userPerPage


    const displayUsers = users
        .slice(pagesVisited, pagesVisited + userPerPage)
        .map(user => {
            return (
                <NavLink exact to="/Receipt" className="user">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <img src={user.photo} alt={user.title} />
                        </div>

                        <div className="col-sm-12 col-md-7">
                            <h4>{user.title}</h4>
                            <div className="circle"></div>
                            <h6><span>By</span> {user.nameby}</h6>
                            <p>{user.paragraf}</p>
                        </div>
                    </div>




                </NavLink>

            )
        })



    const pageCount = Math.ceil(users.length / userPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className="App2 pages">
            <Title />
            <div className="users">
                {displayUsers}
            </div>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
            <Footer />
        </div>
    )


}

export default Receipt
