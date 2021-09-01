import React from 'react'
import { ImgLogo, ICSearch, ICDownload, ICClock, ICNetwork, ICUser, ICUpload } from '../../../assets'

const Header = () => {
    return (
        <div className="header">
            <img src={ImgLogo} className="header-img" />
            <p className="header-menu header-menu-active">Untukmu</p>
            <p className="header-menu">Semua</p>
            <div className="header-search">
                <input className="header-search-input" />
                <img src={ICSearch} className="header-search-img" />
            </div>
            <div className="header-download">
                <img src={ICDownload} className="header-download-img" />
                <div className="header-download-desc">
                    <p className="header-download-desc-text">Unduh Aplikasi</p>
                </div>
            </div>
            <img src={ICClock} className="header-icon" />
            <img src={ICUpload} className="header-icon" />
            <img src={ICNetwork} className="header-icon-lang" />
            <select value="1" defaultValue="1" className="header-input-lang">
                <option value="1">Bahasa Indonesia</option>
                <option value="2">English</option>
                <option value="3">Espanyol</option>
                <option value="4">Portuges</option>
            </select>
            <div className="header-user">
                <img src={ICUser} className="header-user-img" />
            </div>
        </div>
    )
}

export default Header
