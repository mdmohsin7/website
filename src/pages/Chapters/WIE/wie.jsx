import React, { useState, useEffect } from 'react'
import WIEgrp from "../../../assets/img/GroupPhotos/WIE-Group.JPG"
import WieLogo from "../../../assets/img/logos/WIE-logo.png"
import { wieOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersCustomCom/memberShipofferCard/MemberShipofferCard';
import Team from '../../../components/chaptersCustomCom/team';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase/firebase'
import MessageCom from '../../../components/chaptersCustomCom/advisorsMessageComponent/messageCom';

const WIE = () => {
    const [userData, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const docRef = doc(db, "positionsInfo", "wie");
            const CsPositions = await (await getDoc(docRef)).data().positions;
            setData(CsPositions)
        }
        getData();
    }, [])

    const desc = (
        <div>
            <h5 className="mt-30 font-italic italic-h5">IEEE Women in Engineering affinity group</h5>
            <h5 className="grey-color mt-20" style={{
                fontSize: "1.6rem",
                lineHeight: "2.3rem"
          }}>is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.</h5>
            <p className="mt-50"><a className="btn btn-lg animation-move-top-sm btnColor" href="https://wie.ieee.org/" style={{
                color:"#ffffff"
            }}>Read More</a> </p>
        </div>
    )
    return (
        <div className='wrapper' >

            <LandingScreen chaptersGroupPhoto={WIEgrp} chapterName={"IEEE Women and Engineering Society"} chapterLogo={WieLogo} Description={desc} themeColor="#712e87" />
            <MemberShipOfferCard data={wieOffers} society={"WIE"} style={"feature-box text-left mb-50 feature-box-square-cs center-feature"} />

            {/* <!--== Our Team Start ==--> */}
            <section className="white-bg" style={{
                marginTop: "-100px",
            }}>
                <div className="container">
                    <div>
                        <div>
                            <div className="col-md-12 col-sm-8 section-heading">
                                <h5 className="play-font font-italic italic-h5" style={{
                                    color: "#000000",
                                    fontSize: "30px",
                                }}>Our Team</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {userData.map((item, index) => (
                            <Team item={item} key={index}  />
                        ))}
                    </div>
                </div>
            </section>
            <MessageCom
                Name={"Ms. Farha"}
                userImage={"https://www.logolynx.com/images/logolynx/03/039b004617d1ef43cf1769aae45d6ea2.png"}
                Message={"Joining IEEE is due to the fact that,you can have the smartest people in the world around you,but without collaboration the technology is not going to evolve. As a member of WIE, I find the membership invaluable source of information and conduit for growth. I believe for lasting contribution to a discipline, you really need to have an organization like IEEE behind you."}
                Designation={"Wie Advisor"}
            />
        </div>
    )
}

export default WIE